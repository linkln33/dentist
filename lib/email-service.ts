// Email service for appointment notifications
export interface AppointmentData {
  name: string
  email: string
  phone: string
  reason: string
  date: string
  time: string
}

export async function sendAppointmentNotification(appointment: AppointmentData) {
  // This would integrate with an email service like:
  // - SendGrid
  // - Mailgun
  // - AWS SES
  // - Nodemailer with SMTP
  
  const emailData = {
    to: [
      appointment.email, // Customer
      'info@eyecareclinic.com' // Clinic
    ],
    subject: `Appointment Confirmation - ${appointment.date} at ${appointment.time}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">EyeCare Clinic</h1>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">Appointment Confirmation</p>
        </div>
        
        <div style="padding: 30px; background: #f8f9fa;">
          <h2 style="color: #333; margin-top: 0;">Hello ${appointment.name}!</h2>
          
          <p>Your appointment has been scheduled:</p>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h3 style="color: #667eea; margin-top: 0;">📅 Appointment Details</h3>
            <p><strong>Date:</strong> ${appointment.date}</p>
            <p><strong>Time:</strong> ${appointment.time}</p>
            <p><strong>Reason:</strong> ${appointment.reason}</p>
            <p><strong>Duration:</strong> 60 minutes</p>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h3 style="color: #667eea; margin-top: 0;">📍 Location</h3>
            <p><strong>EyeCare Clinic</strong><br>
            123 Medical Plaza, Suite 200<br>
            Healthcare City, HC 12345</p>
            <p><strong>Phone:</strong> (555) 123-4567</p>
          </div>
          
          <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h4 style="color: #1976d2; margin-top: 0;">📋 Important Reminders</h4>
            <ul style="margin: 10px 0; padding-left: 20px;">
              <li>Please arrive 15 minutes early</li>
              <li>Bring your insurance card and ID</li>
              <li>Bring a list of current medications</li>
              <li>If you wear contacts, bring your glasses</li>
            </ul>
          </div>
          
          <div style="background: #fff3e0; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h4 style="color: #f57c00; margin-top: 0;">⚠️ Cancellation Policy</h4>
            <p style="margin: 5px 0;">Please call at least 24 hours in advance to reschedule or cancel.</p>
          </div>
          
          <p>We look forward to seeing you!</p>
          <p>Best regards,<br><strong>EyeCare Clinic Team</strong></p>
        </div>
        
        <div style="background: #333; color: white; padding: 20px; text-align: center; font-size: 14px;">
          <p style="margin: 0;">EyeCare Clinic | (555) 123-4567 | info@eyecareclinic.com</p>
        </div>
      </div>
    `
  }
  
  // In a real implementation, you would send this email here
  console.log('Email would be sent:', emailData)
  
  return {
    success: true,
    messageId: 'email-' + Date.now()
  }
}

export async function sendReminderNotification(appointment: AppointmentData, hoursBefore: number) {
  const reminderData = {
    to: appointment.email,
    subject: `Reminder: Your eye exam is in ${hoursBefore} hours`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #4caf50; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">🔔 Appointment Reminder</h1>
        </div>
        
        <div style="padding: 30px; background: #f8f9fa;">
          <h2>Hello ${appointment.name}!</h2>
          <p>This is a friendly reminder about your upcoming appointment:</p>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>📅 Your Appointment</h3>
            <p><strong>Date:</strong> ${appointment.date}</p>
            <p><strong>Time:</strong> ${appointment.time}</p>
            <p><strong>Location:</strong> EyeCare Clinic, 123 Medical Plaza, Suite 200</p>
          </div>
          
          <p>Please arrive 15 minutes early. If you need to reschedule, call us at (555) 123-4567.</p>
          
          <p>See you soon!</p>
          <p><strong>EyeCare Clinic Team</strong></p>
        </div>
      </div>
    `
  }
  
  console.log('Reminder email would be sent:', reminderData)
  return { success: true }
}
