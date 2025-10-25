# 📅 Calendar Setup Guide - See Events in Your Calendar

## 🔧 **The Issue:**
Events are being created successfully, but you don't see them in your calendar because they're being created in the service account's calendar, not yours.

## ✅ **Solution: Share Your Calendar**

### **Step 1: Create a Dedicated Calendar**
1. Go to https://calendar.google.com/
2. Click the "+" next to "Other calendars"
3. Click "Create new calendar"
4. **Name**: "Eye Care Clinic Appointments"
5. **Description**: "Appointments booked through the website"
6. Click "Create calendar"

### **Step 2: Get Your Calendar ID**
1. Click on your new calendar → "Settings and sharing"
2. Scroll down to "Calendar ID"
3. **Copy the Calendar ID** (looks like: `your-email@gmail.com` or `abc123@group.calendar.google.com`)

### **Step 3: Share with Service Account**
1. In the same "Settings and sharing" page
2. Under "Share with specific people":
   - **Add person**: `calendar-booking-service@eyes-doctor-476206.iam.gserviceaccount.com`
   - **Permission**: "Make changes to events"
   - **Click "Send"**

### **Step 4: Update Environment Variables**
1. Open your `.env.local` file
2. Replace this line:
   ```
   GOOGLE_CALENDAR_ID=primary
   ```
   With your actual calendar ID:
   ```
   GOOGLE_CALENDAR_ID=your-calendar-id@group.calendar.google.com
   ```

### **Step 5: Restart Your Server**
```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

## 🧪 **Test the Setup**

1. **Open**: http://localhost:3000
2. **Click "Book Appointment"** → Fill out the form
3. **Click "Book Appointment"** → Should create event
4. **Check your Google Calendar** → Event should appear in your "Eye Care Clinic Appointments" calendar

## 🔍 **Troubleshooting**

### **If you still don't see events:**

1. **Check the correct calendar**: Make sure you're looking at your "Eye Care Clinic Appointments" calendar, not your main calendar
2. **Verify sharing**: Go to calendar settings and confirm the service account is listed with "Make changes to events" permission
3. **Check the logs**: Look at your terminal for "✅ Calendar event created successfully" messages
4. **Try a different date**: Use a date in the future (like next week)

### **Common Calendar ID Formats:**
- Personal calendar: `your-email@gmail.com`
- Shared calendar: `abc123@group.calendar.google.com`
- Team calendar: `team-name@group.calendar.google.com`

## 📱 **What You'll See:**

Once set up correctly:
- ✅ **Events appear in your calendar**
- ✅ **All appointment details included**
- ✅ **Reminders set up automatically**
- ✅ **Professional booking system working**

The key is sharing your calendar with the service account and using the correct calendar ID!
