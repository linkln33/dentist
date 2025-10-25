# Google Calendar API Setup Guide

## 🆓 Free Google Calendar Integration

### Step 1: Google Cloud Console Setup

1. **Go to Google Cloud Console:**
   - Visit: https://console.cloud.google.com/
   - Sign in with your Google account

2. **Create a New Project:**
   - Click "Select a project" → "New Project"
   - Name: `Eye Care Clinic Calendar`
   - Click "Create"

3. **Enable Google Calendar API:**
   - Go to "APIs & Services" → "Library"
   - Search for "Google Calendar API"
   - Click on it → "Enable"

### Step 2: Create Service Account

1. **Go to Credentials:**
   - "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "Service Account"

2. **Fill Service Account Details:**
   - Name: `calendar-service-account`
   - Description: `Service account for appointment booking`
   - Click "Create and Continue"

3. **Grant Access (Optional):**
   - Skip for now (click "Continue")
   - Click "Done"

### Step 3: Generate API Key

1. **Click on your Service Account:**
   - Go to "Credentials" → Click your service account

2. **Go to Keys Tab:**
   - Click "Keys" tab
   - Click "Add Key" → "Create new key"
   - Choose "JSON"
   - Click "Create"

3. **Download the JSON file:**
   - Save it as `google-credentials.json`
   - **Keep this file secure!**

### Step 4: Share Calendar (Important!)

1. **Go to Google Calendar:**
   - Visit: https://calendar.google.com/
   - Create a new calendar: "Eye Care Clinic Appointments"

2. **Share with Service Account:**
   - Click on your calendar → "Settings and sharing"
   - Under "Share with specific people"
   - Add the service account email (from JSON file)
   - Give "Make changes to events" permission

### Step 5: Environment Variables

Create a `.env.local` file in your project root:

```bash
# Google Calendar API Credentials
GOOGLE_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n"

# Optional: Specific Calendar ID (leave as 'primary' to use default)
GOOGLE_CALENDAR_ID=primary
```

### Step 6: Test the Integration

1. **Start your development server:**
   ```bash
   npm run dev
   ```

2. **Test the booking modal:**
   - Go to http://localhost:3000
   - Click "Book Appointment"
   - Fill out the form
   - Click "Book Appointment"

3. **Check your Google Calendar:**
   - The appointment should appear in your calendar
   - Both patient and clinic should receive email notifications

## 🔧 Troubleshooting

### Common Issues:

1. **"Calendar not found" error:**
   - Make sure you shared the calendar with the service account
   - Check the calendar ID in your environment variables

2. **"Authentication failed" error:**
   - Verify your service account credentials
   - Make sure the private key includes `\n` characters

3. **"Insufficient permissions" error:**
   - Ensure the service account has "Make changes to events" permission
   - Check that the Calendar API is enabled

### Testing Without Real Credentials:

The system will work in "simulation mode" if no credentials are provided. You'll see:
- Success message in the booking modal
- Console logs showing "Simulation mode"
- No actual calendar events created

## 📱 Features

Once set up, your booking system will:

✅ **Create real Google Calendar events**
✅ **Send email notifications to both patient and clinic**
✅ **Set up automatic reminders (24h and 1h before)**
✅ **Include all appointment details**
✅ **Work completely free (Google Calendar API is free)**

## 🚀 Next Steps

After setting up Google Calendar, you can add:
- Email notifications (SendGrid - $15/month)
- SMS reminders (Twilio - $0.01 per message)
- Database storage (optional)

The Google Calendar integration is completely free and provides the core functionality!
