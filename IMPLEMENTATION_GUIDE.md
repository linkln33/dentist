# Appointment Notification Implementation Guide

## Overview
This guide shows how to implement real email and SMS notifications for your eye doctor website.

## 1. Email Service Setup

### Option A: SendGrid (Recommended)
```bash
npm install @sendgrid/mail
```

Create `.env.local`:
```
SENDGRID_API_KEY=your_sendgrid_api_key
```

Update `lib/email-service.ts`:
```typescript
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function sendAppointmentNotification(appointment: AppointmentData) {
  const msg = {
    to: [appointment.email, 'info@eyecareclinic.com'],
    from: 'noreply@eyecareclinic.com',
    subject: `Appointment Confirmation - ${appointment.date}`,
    html: `<!-- Your HTML email template -->`
  }
  
  await sgMail.send(msg)
  return { success: true }
}
```

### Option B: AWS SES
```bash
npm install aws-sdk
```

### Option C: Nodemailer (SMTP)
```bash
npm install nodemailer
```

## 2. SMS Service Setup

### Option A: Twilio (Recommended)
```bash
npm install twilio
```

Create `.env.local`:
```
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
TWILIO_PHONE_NUMBER=your_twilio_number
```

Update `lib/notification-service.ts`:
```typescript
import twilio from 'twilio'

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
)

export async function sendSMSReminder(phone: string, message: string) {
  await client.messages.create({
    body: message,
    from: process.env.TWILIO_PHONE_NUMBER,
    to: phone
  })
  return { success: true }
}
```

### Option B: AWS SNS
```bash
npm install aws-sdk
```

## 3. Calendar Integration

### Google Calendar API
```bash
npm install googleapis
```

Create service account and download credentials:
1. Go to Google Cloud Console
2. Enable Calendar API
3. Create service account
4. Download JSON credentials
5. Share calendar with service account email

Update `lib/notification-service.ts`:
```typescript
import { google } from 'googleapis'

const auth = new google.auth.GoogleAuth({
  keyFile: 'path/to/credentials.json',
  scopes: ['https://www.googleapis.com/auth/calendar']
})

const calendar = google.calendar({ version: 'v3', auth })

export async function createCalendarEvent(appointment: AppointmentData) {
  const event = {
    summary: `${appointment.reason} - ${appointment.name}`,
    start: { dateTime: appointment.date + 'T' + appointment.time },
    end: { dateTime: /* 1 hour later */ },
    attendees: [
      { email: appointment.email },
      { email: 'info@eyecareclinic.com' }
    ]
  }
  
  await calendar.events.insert({
    calendarId: 'primary',
    resource: event
  })
}
```

## 4. Database Setup (Optional)

### Store appointments in database
```bash
npm install prisma @prisma/client
```

Create `prisma/schema.prisma`:
```prisma
model Appointment {
  id        String   @id @default(cuid())
  name      String
  email     String
  phone     String
  reason    String
  date      DateTime
  time      String
  createdAt DateTime @default(now())
  status    String   @default("pending")
}
```

## 5. Environment Variables

Create `.env.local`:
```
# Email
SENDGRID_API_KEY=your_sendgrid_key
FROM_EMAIL=noreply@eyecareclinic.com

# SMS
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
TWILIO_PHONE_NUMBER=your_twilio_number

# Calendar
GOOGLE_CALENDAR_CREDENTIALS=path/to/credentials.json
CLINIC_CALENDAR_ID=your_calendar_id

# Database (optional)
DATABASE_URL=your_database_url
```

## 6. Deployment Considerations

### Vercel (Recommended)
- Add environment variables in Vercel dashboard
- Functions have 10-second timeout limit
- Use Vercel Cron Jobs for scheduled reminders

### Netlify
- Use Netlify Functions
- Add environment variables in Netlify dashboard
- Use external cron service for reminders

## 7. Cost Estimates

### SendGrid
- Free: 100 emails/day
- Paid: $15/month for 40,000 emails

### Twilio
- SMS: ~$0.0075 per message
- Phone calls: ~$0.013 per minute

### Google Calendar API
- Free for most use cases
- 1,000,000 requests/day limit

## 8. Testing

### Test Email
```typescript
// Test in development
await sendAppointmentNotification({
  name: 'Test Patient',
  email: 'test@example.com',
  phone: '+1234567890',
  reason: 'Eye Exam',
  date: '2024-12-25',
  time: '10:00 AM'
})
```

### Test SMS
```typescript
await sendSMSReminder('+1234567890', 'Test reminder message')
```

## 9. Production Checklist

- [ ] Set up email service (SendGrid/AWS SES)
- [ ] Set up SMS service (Twilio/AWS SNS)
- [ ] Configure Google Calendar API
- [ ] Add environment variables
- [ ] Test all notifications
- [ ] Set up monitoring/logging
- [ ] Configure backup systems
- [ ] Set up error handling

## 10. Monitoring

### Log all notifications
```typescript
console.log('Email sent:', { to: email, subject: subject })
console.log('SMS sent:', { to: phone, message: message })
```

### Error handling
```typescript
try {
  await sendNotification()
} catch (error) {
  console.error('Notification failed:', error)
  // Fallback: send to admin email
}
```

This implementation ensures both you and your customers receive notifications and reminders for all appointments!
