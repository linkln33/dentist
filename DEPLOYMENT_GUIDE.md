# 🚀 Deployment Guide - EyeCare Clinic Website

## Overview

This guide provides step-by-step instructions for deploying the EyeCare Clinic website to various platforms with full notification system integration.

## 📋 Pre-Deployment Checklist

### **Code Preparation**
- [ ] All code committed to Git
- [ ] Environment variables documented
- [ ] Dependencies updated
- [ ] Build process tested locally
- [ ] Performance optimized

### **Service Setup**
- [ ] Email service configured (SendGrid/AWS SES)
- [ ] SMS service configured (Twilio/AWS SNS)
- [ ] Google Calendar API configured
- [ ] Domain name ready
- [ ] SSL certificate available

## 🌐 Platform Options

### **1. Vercel (Recommended)**

#### **Why Vercel?**
- ✅ Built for Next.js
- ✅ Automatic deployments
- ✅ Edge functions
- ✅ Built-in analytics
- ✅ Easy environment management

#### **Deployment Steps**

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy Project**
   ```bash
   vercel --prod
   ```

4. **Configure Environment Variables**
   ```bash
   vercel env add SENDGRID_API_KEY
   vercel env add TWILIO_ACCOUNT_SID
   vercel env add TWILIO_AUTH_TOKEN
   vercel env add TWILIO_PHONE_NUMBER
   ```

5. **Custom Domain Setup**
   - Go to Vercel Dashboard
   - Navigate to Project Settings
   - Add custom domain
   - Configure DNS records

#### **Vercel Configuration**

Create `vercel.json`:
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
    "TWILIO_AUTH_TOKEN": "@twilio_token",
    "TWILIO_PHONE_NUMBER": "@twilio_phone"
  },
  "build": {
    "env": {
      "NEXT_PUBLIC_SITE_URL": "https://your-domain.com"
    }
  }
}
```

### **2. Netlify**

#### **Deployment Steps**

1. **Build Project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `.next`
   - Configure environment variables

3. **Netlify Configuration**

Create `netlify.toml`:
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

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### **3. AWS Amplify**

#### **Deployment Steps**

1. **Connect Repository**
   - Go to AWS Amplify Console
   - Connect GitHub repository
   - Select branch (main)

2. **Build Settings**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

3. **Environment Variables**
   - Add in Amplify Console
   - SENDGRID_API_KEY
   - TWILIO_ACCOUNT_SID
   - TWILIO_AUTH_TOKEN
   - TWILIO_PHONE_NUMBER

## 🔧 Service Configuration

### **Email Service Setup**

#### **SendGrid Configuration**

1. **Create SendGrid Account**
   - Sign up at sendgrid.com
   - Verify sender identity
   - Generate API key

2. **Configure Environment**
   ```env
   SENDGRID_API_KEY=SG.your_api_key_here
   FROM_EMAIL=noreply@yourdomain.com
   ```

3. **Update Email Service**
   ```typescript
   import sgMail from '@sendgrid/mail'
   
   sgMail.setApiKey(process.env.SENDGRID_API_KEY!)
   
   export async function sendAppointmentNotification(appointment: AppointmentData) {
     const msg = {
       to: [appointment.email, 'info@eyecareclinic.com'],
       from: process.env.FROM_EMAIL,
       subject: `Appointment Confirmation - ${appointment.date}`,
       html: emailTemplate
     }
     
     await sgMail.send(msg)
   }
   ```

#### **AWS SES Configuration**

1. **Set up AWS SES**
   - Create AWS account
   - Verify email addresses
   - Configure sending limits

2. **Install AWS SDK**
   ```bash
   npm install aws-sdk
   ```

3. **Configure Service**
   ```typescript
   import AWS from 'aws-sdk'
   
   const ses = new AWS.SES({
     region: 'us-east-1',
     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
   })
   ```

### **SMS Service Setup**

#### **Twilio Configuration**

1. **Create Twilio Account**
   - Sign up at twilio.com
   - Purchase phone number
   - Get account credentials

2. **Configure Environment**
   ```env
   TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   TWILIO_AUTH_TOKEN=your_auth_token_here
   TWILIO_PHONE_NUMBER=+1234567890
   ```

3. **Update SMS Service**
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
   }
   ```

### **Calendar Integration Setup**

#### **Google Calendar API**

1. **Create Google Cloud Project**
   - Go to Google Cloud Console
   - Create new project
   - Enable Calendar API

2. **Create Service Account**
   - Go to IAM & Admin > Service Accounts
   - Create service account
   - Download JSON credentials

3. **Share Calendar**
   - Open Google Calendar
   - Share calendar with service account email
   - Grant "Make changes to events" permission

4. **Configure Environment**
   ```env
   GOOGLE_CALENDAR_CREDENTIALS=path/to/credentials.json
   CLINIC_CALENDAR_ID=your_calendar_id@gmail.com
   ```

## 🔒 Security Configuration

### **Environment Variables**

#### **Production Environment**
```env
# Email Service
SENDGRID_API_KEY=SG.production_key_here
FROM_EMAIL=noreply@yourdomain.com

# SMS Service
TWILIO_ACCOUNT_SID=AC.production_sid_here
TWILIO_AUTH_TOKEN=production_token_here
TWILIO_PHONE_NUMBER=+1234567890

# Calendar Integration
GOOGLE_CALENDAR_CREDENTIALS=production_credentials.json
CLINIC_CALENDAR_ID=clinic@yourdomain.com

# Security
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=https://yourdomain.com

# Monitoring
SENTRY_DSN=your_sentry_dsn
```

### **Security Headers**

Create `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
```

## 📊 Monitoring & Analytics

### **Error Monitoring**

#### **Sentry Integration**

1. **Install Sentry**
   ```bash
   npm install @sentry/nextjs
   ```

2. **Configure Sentry**
   ```javascript
   // sentry.client.config.js
   import { init } from '@sentry/nextjs'
   
   init({
     dsn: process.env.SENTRY_DSN,
     tracesSampleRate: 1.0,
   })
   ```

3. **Add to App**
   ```javascript
   // app/layout.tsx
   import './sentry.client.config'
   ```

### **Performance Monitoring**

#### **Vercel Analytics**
- Built-in with Vercel
- Automatic performance tracking
- Core Web Vitals monitoring

#### **Google Analytics**
```javascript
// app/layout.tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

## 🧪 Testing

### **Pre-Deployment Testing**

1. **Local Testing**
   ```bash
   npm run dev
   # Test all functionality locally
   ```

2. **Build Testing**
   ```bash
   npm run build
   npm start
   # Test production build
   ```

3. **Service Testing**
   ```bash
   # Test email service
   curl -X POST http://localhost:3000/api/test-email
   
   # Test SMS service
   curl -X POST http://localhost:3000/api/test-sms
   ```

### **Production Testing**

1. **Smoke Tests**
   - Test homepage loads
   - Test booking modal opens
   - Test form submission
   - Test email delivery
   - Test SMS delivery

2. **Performance Tests**
   - Page load speed
   - Mobile responsiveness
   - Form submission speed
   - Email delivery time

## 📈 Post-Deployment

### **Monitoring Setup**

1. **Uptime Monitoring**
   - Set up UptimeRobot
   - Monitor homepage availability
   - Set up alerts for downtime

2. **Error Monitoring**
   - Configure Sentry alerts
   - Set up email notifications
   - Monitor error rates

3. **Performance Monitoring**
   - Track Core Web Vitals
   - Monitor page load times
   - Set up performance budgets

### **Backup Strategy**

1. **Code Backup**
   - GitHub repository
   - Regular commits
   - Branch protection

2. **Data Backup**
   - Database backups (if applicable)
   - Email service backups
   - Configuration backups

3. **Service Backup**
   - Multiple email providers
   - Multiple SMS providers
   - Fallback notification methods

## 🔄 Maintenance

### **Regular Updates**

1. **Dependencies**
   ```bash
   npm update
   npm audit fix
   ```

2. **Security Updates**
   - Monitor security advisories
   - Update dependencies regularly
   - Review access permissions

3. **Performance Optimization**
   - Monitor Core Web Vitals
   - Optimize images
   - Update caching strategies

### **Monitoring Checklist**

- [ ] Website uptime monitoring
- [ ] Email delivery monitoring
- [ ] SMS delivery monitoring
- [ ] Calendar integration monitoring
- [ ] Performance monitoring
- [ ] Error rate monitoring
- [ ] Security monitoring

## 🆘 Troubleshooting

### **Common Issues**

1. **Build Failures**
   - Check Node.js version
   - Clear npm cache
   - Update dependencies

2. **Email Not Sending**
   - Verify SendGrid API key
   - Check sender verification
   - Review email templates

3. **SMS Not Delivering**
   - Verify Twilio credentials
   - Check phone number format
   - Review account balance

4. **Calendar Events Not Creating**
   - Verify Google Calendar API
   - Check service account permissions
   - Review calendar sharing

### **Support Resources**

- **Vercel**: Vercel documentation and support
- **Netlify**: Netlify documentation and support
- **SendGrid**: SendGrid support center
- **Twilio**: Twilio support center
- **Google Cloud**: Google Cloud support

---

**This deployment guide ensures a smooth, secure, and monitored deployment of your EyeCare Clinic website with full notification system integration.**
