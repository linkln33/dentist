# 📚 API Documentation - EyeCare Clinic Website

## Overview

This document provides comprehensive API documentation for the EyeCare Clinic website's notification and booking systems.

## 🔧 Service Architecture

### **Email Service** (`lib/email-service.ts`)

#### **sendAppointmentNotification(appointment: AppointmentData)**
Sends confirmation emails to both customer and clinic.

**Parameters:**
```typescript
interface AppointmentData {
  name: string        // Customer's full name
  email: string      // Customer's email address
  phone: string      // Customer's phone number
  reason: string     // Reason for visit
  date: string       // Appointment date (YYYY-MM-DD)
  time: string       // Appointment time (HH:MM AM/PM)
}
```

**Returns:**
```typescript
{
  success: boolean
  messageId: string
}
```

**Email Template Features:**
- Professional HTML design
- Healthcare branding
- Appointment details
- Clinic information
- Reminder instructions
- Contact information

#### **sendReminderNotification(appointment: AppointmentData, hoursBefore: number)**
Sends reminder emails at specified intervals.

**Parameters:**
- `appointment`: Appointment data
- `hoursBefore`: Hours before appointment (24, 2, etc.)

### **Notification Service** (`lib/notification-service.ts`)

#### **scheduleAppointmentReminders(appointment: AppointmentData)**
Schedules automated reminders for appointments.

**Returns:**
```typescript
{
  success: boolean
  reminders: Array<{
    type: 'email' | 'sms'
    scheduled: Date
    message: string
  }>
}
```

#### **sendSMSReminder(phone: string, message: string)**
Sends SMS reminders to customers.

**Parameters:**
- `phone`: Customer's phone number (E.164 format)
- `message`: Reminder message content

**Returns:**
```typescript
{
  success: boolean
  messageId: string
}
```

#### **createCalendarEvent(appointment: AppointmentData)**
Creates calendar events for both customer and clinic.

**Returns:**
```typescript
{
  success: boolean
  eventId: string
}
```

**Calendar Event Features:**
- Dual attendees (customer + clinic)
- Multiple reminders (24h, 2h, 30min)
- Location details
- Appointment description
- Time zone support

## 📧 Email Integration

### **SendGrid Integration**

```typescript
import sgMail from '@sendgrid/mail'

// Configuration
sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

// Send email
const msg = {
  to: [appointment.email, 'info@eyecareclinic.com'],
  from: 'noreply@eyecareclinic.com',
  subject: `Appointment Confirmation - ${appointment.date}`,
  html: emailTemplate
}

await sgMail.send(msg)
```

### **AWS SES Integration**

```typescript
import AWS from 'aws-sdk'

const ses = new AWS.SES({
  region: 'us-east-1',
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

await ses.sendEmail({
  Source: 'noreply@eyecareclinic.com',
  Destination: {
    ToAddresses: [appointment.email, 'info@eyecareclinic.com']
  },
  Message: {
    Subject: { Data: 'Appointment Confirmation' },
    Body: { Html: { Data: emailTemplate } }
  }
}).promise()
```

## 📱 SMS Integration

### **Twilio Integration**

```typescript
import twilio from 'twilio'

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
)

await client.messages.create({
  body: message,
  from: process.env.TWILIO_PHONE_NUMBER,
  to: phone
})
```

### **AWS SNS Integration**

```typescript
import AWS from 'aws-sdk'

const sns = new AWS.SNS({
  region: 'us-east-1',
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

await sns.publish({
  Message: message,
  PhoneNumber: phone
}).promise()
```

## 📅 Calendar Integration

### **Google Calendar API**

```typescript
import { google } from 'googleapis'

const auth = new google.auth.GoogleAuth({
  keyFile: 'path/to/credentials.json',
  scopes: ['https://www.googleapis.com/auth/calendar']
})

const calendar = google.calendar({ version: 'v3', auth })

// Create event
const event = {
  summary: `${appointment.reason} - ${appointment.name}`,
  start: {
    dateTime: new Date(`${appointment.date}T${appointment.time}`).toISOString(),
    timeZone: 'America/New_York'
  },
  end: {
    dateTime: new Date(new Date(`${appointment.date}T${appointment.time}`).getTime() + 60 * 60 * 1000).toISOString(),
    timeZone: 'America/New_York'
  },
  attendees: [
    { email: appointment.email, displayName: appointment.name },
    { email: 'info@eyecareclinic.com', displayName: 'EyeCare Clinic' }
  ],
  reminders: {
    useDefault: false,
    overrides: [
      { method: 'email', minutes: 24 * 60 }, // 24 hours
      { method: 'popup', minutes: 2 * 60 },  // 2 hours
      { method: 'email', minutes: 30 }       // 30 minutes
    ]
  },
  location: '123 Medical Plaza, Suite 200, Healthcare City, HC 12345'
}

await calendar.events.insert({
  calendarId: 'primary',
  resource: event
})
```

## 🔄 Booking Flow

### **Complete Booking Process**

```typescript
const handleSubmit = async (appointmentData: AppointmentData) => {
  try {
    // 1. Send confirmation emails
    await sendAppointmentNotification(appointmentData)
    
    // 2. Schedule reminders
    await scheduleAppointmentReminders(appointmentData)
    
    // 3. Create calendar event
    await createCalendarEvent(appointmentData)
    
    // 4. Create Google Calendar link (backup)
    const googleCalendarUrl = createGoogleCalendarUrl(appointmentData)
    window.open(googleCalendarUrl, '_blank')
    
    return { success: true }
  } catch (error) {
    console.error('Booking failed:', error)
    return { success: false, error: error.message }
  }
}
```

### **Google Calendar URL Generation**

```typescript
function createGoogleCalendarUrl(appointment: AppointmentData): string {
  const startDate = new Date(`${appointment.date}T${appointment.time}`)
  const endDate = new Date(startDate.getTime() + 60 * 60 * 1000)
  
  const title = encodeURIComponent(`${appointment.reason} - ${appointment.name}`)
  const details = encodeURIComponent(`
Patient: ${appointment.name}
Email: ${appointment.email}
Phone: ${appointment.phone}
Reason: ${appointment.reason}
  `.trim())
  
  const location = encodeURIComponent('123 Medical Plaza, Suite 200, Healthcare City, HC 12345')
  const startDateStr = startDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
  const endDateStr = endDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
  
  const attendees = `${appointment.email},info@eyecareclinic.com`
  
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDateStr}/${endDateStr}&details=${details}&location=${location}&add=${attendees}`
}
```

## 📊 Database Schema (Optional)

### **Appointments Table**

```sql
CREATE TABLE appointments (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  reason VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  time VARCHAR(10) NOT NULL,
  status ENUM('pending', 'confirmed', 'cancelled') DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### **Notifications Table**

```sql
CREATE TABLE notifications (
  id VARCHAR(255) PRIMARY KEY,
  appointment_id VARCHAR(255) NOT NULL,
  type ENUM('email', 'sms') NOT NULL,
  status ENUM('pending', 'sent', 'failed') DEFAULT 'pending',
  scheduled_for TIMESTAMP NOT NULL,
  sent_at TIMESTAMP NULL,
  error_message TEXT NULL,
  FOREIGN KEY (appointment_id) REFERENCES appointments(id)
);
```

## 🔧 Environment Variables

### **Required Variables**

```env
# Email Service
SENDGRID_API_KEY=your_sendgrid_api_key
FROM_EMAIL=noreply@eyecareclinic.com

# SMS Service
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
TWILIO_PHONE_NUMBER=your_twilio_number

# Calendar Integration
GOOGLE_CALENDAR_CREDENTIALS=path/to/credentials.json
CLINIC_CALENDAR_ID=your_calendar_id

# Database (Optional)
DATABASE_URL=your_database_url
```

### **Optional Variables**

```env
# Analytics
GOOGLE_ANALYTICS_ID=your_ga_id
GOOGLE_TAG_MANAGER_ID=your_gtm_id

# Monitoring
SENTRY_DSN=your_sentry_dsn
LOG_LEVEL=info

# Rate Limiting
RATE_LIMIT_MAX=100
RATE_LIMIT_WINDOW=3600000
```

## 🚀 Deployment Configuration

### **Vercel Configuration**

```json
{
  "functions": {
    "app/api/**/*.ts": {
      "maxDuration": 30
    }
  },
  "env": {
    "SENDGRID_API_KEY": "@sendgrid_api_key",
    "TWILIO_ACCOUNT_SID": "@twilio_sid",
    "TWILIO_AUTH_TOKEN": "@twilio_token"
  }
}
```

### **Netlify Configuration**

```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[functions]
  directory = "netlify/functions"
```

## 📈 Monitoring & Logging

### **Error Handling**

```typescript
try {
  await sendNotification()
} catch (error) {
  console.error('Notification failed:', error)
  
  // Log to monitoring service
  if (process.env.SENTRY_DSN) {
    Sentry.captureException(error)
  }
  
  // Send to admin email
  await sendAdminAlert(error)
}
```

### **Performance Monitoring**

```typescript
const startTime = Date.now()

try {
  await sendNotification()
} finally {
  const duration = Date.now() - startTime
  console.log(`Notification sent in ${duration}ms`)
}
```

## 🔒 Security Considerations

### **Input Validation**

```typescript
function validateAppointmentData(data: any): AppointmentData {
  if (!data.name || typeof data.name !== 'string') {
    throw new Error('Invalid name')
  }
  
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    throw new Error('Invalid email')
  }
  
  if (!data.phone || !/^\+?[\d\s\-\(\)]+$/.test(data.phone)) {
    throw new Error('Invalid phone number')
  }
  
  return data as AppointmentData
}
```

### **Rate Limiting**

```typescript
const rateLimit = new Map()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const windowMs = 60 * 1000 // 1 minute
  const maxRequests = 10
  
  if (!rateLimit.has(ip)) {
    rateLimit.set(ip, [])
  }
  
  const requests = rateLimit.get(ip)
  const validRequests = requests.filter((time: number) => now - time < windowMs)
  
  if (validRequests.length >= maxRequests) {
    return false
  }
  
  validRequests.push(now)
  rateLimit.set(ip, validRequests)
  return true
}
```

## 📞 Support & Troubleshooting

### **Common Issues**

1. **Email Not Sending**
   - Check SendGrid API key
   - Verify sender email domain
   - Check spam folder

2. **SMS Not Delivering**
   - Verify Twilio credentials
   - Check phone number format
   - Check account balance

3. **Calendar Events Not Creating**
   - Verify Google Calendar API credentials
   - Check calendar permissions
   - Ensure service account access

### **Debug Mode**

```typescript
const DEBUG = process.env.NODE_ENV === 'development'

if (DEBUG) {
  console.log('Appointment data:', appointmentData)
  console.log('Email template:', emailTemplate)
  console.log('SMS message:', smsMessage)
}
```

---

**This API documentation provides comprehensive information for integrating and customizing the EyeCare Clinic website's notification and booking systems.**
