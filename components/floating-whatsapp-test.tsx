"use client"

import { useState } from "react"
import { MessageCircle, X, Phone, Mail, Calendar } from "lucide-react"

export function FloatingWhatsAppTest() {
  const [isOpen, setIsOpen] = useState(false)

  const handleWhatsAppClick = () => {
    const message = "Hi, I'd like to schedule a dental appointment. Could you please provide available times?"
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/15551234567?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  const handlePhoneClick = () => {
    window.open('tel:+15551234567', '_self')
  }

  const handleEmailClick = () => {
    window.open('mailto:info@smilecaredental.com', '_self')
  }

  const handleBookingClick = () => {
    // Open booking modal by triggering the booking modal component
    const bookingButton = document.querySelector('[data-booking-trigger]') as HTMLButtonElement
    if (bookingButton) {
      bookingButton.click()
    } else {
      // Fallback: scroll to contact section
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsOpen(false)
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 99999
    }}>
      {/* Contact Panel */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          bottom: '70px',
          right: '0',
          width: '300px',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
          border: '1px solid #e5e7eb',
          padding: '16px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#111827',
              margin: 0
            }}>Contact Us</h3>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                color: '#9ca3af',
                cursor: 'pointer',
                padding: '4px'
              }}
            >
              <X size={20} />
            </button>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button 
              onClick={handleWhatsAppClick}
              style={{
                width: '100%',
                backgroundColor: '#16a34a',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                padding: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <MessageCircle size={16} />
              WhatsApp Chat
            </button>
            
            <button 
              onClick={handlePhoneClick}
              style={{
                width: '100%',
                backgroundColor: 'white',
                color: '#374151',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                padding: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <Phone size={16} />
              Call (555) 123-4567
            </button>
            
            <button 
              onClick={handleEmailClick}
              style={{
                width: '100%',
                backgroundColor: 'white',
                color: '#374151',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                padding: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <Mail size={16} />
              Send Email
            </button>
            
            <button 
              onClick={handleBookingClick}
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #1e40af, #3b82f6)',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                padding: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <Calendar size={16} />
              Book Appointment
            </button>
          </div>
          
          <div style={{
            marginTop: '16px',
            paddingTop: '16px',
            borderTop: '1px solid #e5e7eb'
          }}>
            <p style={{
              fontSize: '12px',
              color: '#6b7280',
              textAlign: 'center',
              margin: 0
            }}>
              We typically respond within 1 hour during business hours
            </p>
          </div>
        </div>
      )}

      {/* Main Button */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          console.log('WhatsApp button clicked!')
          setIsOpen(!isOpen)
        }}
        onMouseDown={(e) => {
          e.preventDefault()
          e.stopPropagation()
        }}
        style={{
          width: '56px',
          height: '56px',
          backgroundColor: '#2563eb',
          color: 'white',
          border: '2px solid white',
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          transition: 'all 0.3s ease',
          position: 'relative',
          zIndex: 100000
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#1d4ed8'
          e.currentTarget.style.transform = 'scale(1.05)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#2563eb'
          e.currentTarget.style.transform = 'scale(1)'
        }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Pulse animation */}
      {!isOpen && (
        <div 
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            borderRadius: '50%',
            backgroundColor: '#2563eb',
            opacity: '0.2',
            animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite'
          }}
        />
      )}
    </div>
  )
}