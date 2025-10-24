// Notification service for appointment reminders
export interface AppointmentData {
  name: string
  email: string
  phone: string
  reason: string
  date: string
  time: string
}

export async function scheduleAppointmentReminders(appointment: AppointmentData) {
  const appointmentDate = new Date(`${appointment.date}T${appointment.time}`)
  
  // Schedule 24-hour reminder
  const reminder24h = new Date(appointmentDate.getTime() - 24 * 60 * 60 * 1000)
  const reminder2h = new Date(appointmentDate.getTime() - 2 * 60 * 60 * 1000)
  
  // In a real implementation, you would use:
  // - AWS SNS for SMS
  // - Twilio for SMS
  // - SendGrid for email
  // - Google Calendar API for calendar events
  
  console.log('Scheduling reminders:', {
    appointment: appointmentDate,
    reminder24h: reminder24h,
    reminder2h: reminder2h
  })
  
  return {
    success: true,
    reminders: [
      { type: 'email', scheduled: reminder24h, message: '24-hour reminder' },
      { type: 'sms', scheduled: reminder2h, message: '2-hour reminder' }
    ]
  }
}

export async function sendSMSReminder(phone: string, message: string) {
  // This would integrate with SMS service like:
  // - Twilio
  // - AWS SNS
  // - MessageBird
  
  const smsData = {
    to: phone,
    message: message,
    from: 'EyeCare Clinic'
  }
  
  console.log('SMS would be sent:', smsData)
  return { success: true, messageId: 'sms-' + Date.now() }
}

export async function createCalendarEvent(appointment: AppointmentData) {
  // This would use Google Calendar API to create events
  // that appear on both customer and clinic calendars
  
  const eventData = {
    summary: `${appointment.reason} - ${appointment.name}`,
    description: `
Patient: ${appointment.name}
Email: ${appointment.email}
Phone: ${appointment.phone}
Reason: ${appointment.reason}
    `.trim(),
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
  
  console.log('Calendar event would be created:', eventData)
  return { success: true, eventId: 'event-' + Date.now() }
}
