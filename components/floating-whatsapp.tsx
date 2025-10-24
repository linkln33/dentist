"use client"

import { useState } from "react"
import { MessageCircle, X, Phone, Mail, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false)

  const whatsappMessage = "Hi, I'd like to schedule an eye exam appointment. Could you please provide available times?"

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/15551234567?text=${encodedMessage}`
    console.log('WhatsApp URL:', whatsappUrl) // Debug log
    window.open(whatsappUrl, '_blank')
  }

  const handlePhoneClick = () => {
    window.open('tel:+15551234567', '_blank')
  }

  const handleEmailClick = () => {
    window.open('mailto:info@eyecareclinic.com', '_blank')
  }

  const handleBookingClick = () => {
    // Scroll to contact section on the same page
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false) // Close the panel
  }

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
        <div className="relative">
          {/* Chat Options Panel */}
          {isOpen && (
            <div className="absolute bottom-16 right-0 mb-2 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Contact Us</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="space-y-3">
                <Button 
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp Chat
                </Button>
                
                <Button 
                  onClick={handlePhoneClick}
                  variant="outline" 
                  className="w-full"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call (555) 123-4567
                </Button>
                
                <Button 
                  onClick={handleEmailClick}
                  variant="outline" 
                  className="w-full"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </Button>
                
                <Button 
                  onClick={handleBookingClick}
                  className="w-full healthcare-gradient text-white"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Appointment
                </Button>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center">
                  We typically respond within 1 hour during business hours
                </p>
              </div>
            </div>
          )}

          {/* Main Floating Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-12 h-12 md:w-14 md:h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
            aria-label="Open contact options"
          >
            {isOpen ? (
              <X className="h-5 w-5 md:h-6 md:w-6" />
            ) : (
              <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
            )}
          </button>

          {/* Pulse animation for closed state */}
          {!isOpen && (
            <div className="absolute inset-0 rounded-full bg-green-600 animate-ping opacity-20"></div>
          )}
        </div>
      </div>

    </>
  )
}
