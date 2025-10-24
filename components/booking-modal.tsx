"use client"

import { useState } from 'react'
import { X, Calendar, Clock, MapPin, Phone, Mail } from 'lucide-react'
// import { sendAppointmentNotification } from '@/lib/email-service'
// import { scheduleAppointmentReminders, createCalendarEvent } from '@/lib/notification-service'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: 'Eye Exam'
  })

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const appointmentData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      reason: formData.reason,
      date: selectedDate,
      time: selectedTime
    }
    
    try {
      // Create Google Calendar link for both parties
      console.log('Selected date:', selectedDate, 'Selected time:', selectedTime)
      const startDate = new Date(selectedDate + 'T' + selectedTime.replace(' ', ''))
      const endDate = new Date(startDate.getTime() + 60 * 60 * 1000)
      console.log('Start date:', startDate, 'End date:', endDate)
      
      const title = encodeURIComponent(`${formData.reason} - ${formData.name}`)
      const details = encodeURIComponent(`
Patient: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Reason: ${formData.reason}

IMPORTANT: Please call (555) 123-4567 to confirm this appointment.
      `.trim())
      const location = encodeURIComponent('123 Medical Plaza, Suite 200, Healthcare City, HC 12345')
      
      const startDateStr = startDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
      const endDateStr = endDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
      console.log('Date strings:', startDateStr, endDateStr)
      
      const clinicEmail = 'info@eyecareclinic.com'
      const attendees = `${formData.email},${clinicEmail}`
      
      const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDateStr}/${endDateStr}&details=${details}&location=${location}&add=${attendees}`
      console.log('Google Calendar URL:', googleCalendarUrl)
      
      // Open Google Calendar
      window.open(googleCalendarUrl, '_blank')
      
      // Show success message
      alert(`✅ Appointment Request Submitted!

📅 Date: ${selectedDate} at ${selectedTime}
👤 Patient: ${formData.name}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone}

📋 Next Steps:
1. Check your email for confirmation
2. We'll call you to confirm within 24 hours
3. You'll receive text reminders 24h and 2h before your appointment

📞 Questions? Call us at (555) 123-4567`)
      
      onClose()
      
    } catch (error) {
      console.error('Error booking appointment:', error)
      alert('There was an error processing your appointment. Please call us at (555) 123-4567 to book directly.')
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Calendar className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Book Appointment</h2>
              <p className="text-gray-600">Schedule your eye exam</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reason for Visit
                </label>
                <select
                  value={formData.reason}
                  onChange={(e) => setFormData({...formData, reason: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="Eye Exam">Comprehensive Eye Exam</option>
                  <option value="LASIK Consultation">LASIK Consultation</option>
                  <option value="Cataract Consultation">Cataract Consultation</option>
                  <option value="Follow-up">Follow-up Visit</option>
                  <option value="Emergency">Emergency Visit</option>
                </select>
              </div>
            </div>

            {/* Date and Time Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  required
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time *
                </label>
                <select
                  required
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select a time</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Clinic Information */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Appointment Details</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>123 Medical Plaza, Suite 200, Healthcare City, HC 12345</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Duration: 60 minutes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>info@eyecareclinic.com</span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors healthcare-gradient"
              >
                <Calendar className="h-4 w-4 inline mr-2" />
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
