"use client"

import { useState } from "react"
import { MessageCircle, X, Phone, Mail, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingWhatsAppSimple() {
  const [isOpen, setIsOpen] = useState(false)
  
  console.log('FloatingWhatsAppSimple component rendered, isOpen:', isOpen)

  const whatsappMessage = "Hi, I'd like to schedule an eye exam appointment. Could you please provide available times?"

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/15551234567?text=${encodedMessage}`
    window.location.href = whatsappUrl
  }

  const handlePhoneClick = () => {
    window.location.href = 'tel:+15551234567'
  }

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@eyecareclinic.com'
  }

  const handleBookingClick = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <div 
      style={{
        position: 'fixed !important',
        bottom: '20px !important',
        right: '20px !important',
        zIndex: '99999 !important',
        pointerEvents: 'auto !important',
        backgroundColor: 'red !important',
        width: '100px !important',
        height: '100px !important',
        border: '5px solid blue !important',
        display: 'block !important',
        visibility: 'visible !important'
      }}
    >
      <div style={{ position: 'relative' }}>
        {/* DEBUG: Component is rendering */}
        <div style={{ 
          position: 'absolute', 
          top: '-50px', 
          left: '0', 
          backgroundColor: 'yellow !important', 
          color: 'black !important', 
          padding: '10px !important',
          fontSize: '16px !important',
          zIndex: '100000 !important',
          border: '3px solid black !important',
          fontWeight: 'bold !important'
        }}>
          🔥 WHATSAPP BUTTON IS HERE! 🔥
        </div>
        
        {/* Another debug element */}
        <div 
          onClick={() => {
            console.log('🔥 DEBUG ELEMENT CLICKED! 🔥')
            alert('DEBUG: Click is working!')
          }}
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'lime !important',
            color: 'black !important',
            display: 'flex !important',
            alignItems: 'center !important',
            justifyContent: 'center !important',
            fontSize: '12px !important',
            fontWeight: 'bold !important',
            zIndex: '100001 !important',
            cursor: 'pointer !important'
          }}
        >
          CLICK ME!
        </div>
        
        {/* Chat Options Panel */}
        {isOpen && (
          <div 
            style={{
              position: 'absolute',
              bottom: '70px',
              right: '0',
              width: '320px',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
              border: '1px solid #e5e7eb',
              padding: '16px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', margin: 0 }}>Contact Us</h3>
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
                  background: 'linear-gradient(135deg, #10b981, #3b82f6)',
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
            
            <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #e5e7eb' }}>
              <p style={{ fontSize: '12px', color: '#6b7280', textAlign: 'center', margin: 0 }}>
                We typically respond within 1 hour during business hours
              </p>
            </div>
          </div>
        )}

        {/* Main Floating Button */}
        <button
          onClick={() => {
            console.log('WhatsApp button clicked, current state:', isOpen)
            setIsOpen(!isOpen)
          }}
          style={{
            width: '56px',
            height: '56px',
            backgroundColor: '#16a34a',
            color: 'white',
            border: '2px solid white',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#15803d'
            e.currentTarget.style.transform = 'scale(1.05)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#16a34a'
            e.currentTarget.style.transform = 'scale(1)'
          }}
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </button>

        {/* Pulse animation for closed state */}
        {!isOpen && (
          <div 
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              borderRadius: '50%',
              backgroundColor: '#16a34a',
              opacity: '0.2',
              animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite'
            }}
          />
        )}
      </div>
    </div>
  )
}
