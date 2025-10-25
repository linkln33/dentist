"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  // Handle hash navigation when page loads
  useEffect(() => {
    if (pathname === '/' && window.location.hash) {
      const hash = window.location.hash.substring(1) // Remove the # symbol
      const element = document.getElementById(hash)
      
      if (element) {
        // Small delay to ensure page is fully loaded
        setTimeout(() => {
          const headerHeight = 120
          const elementPosition = element.offsetTop - headerHeight
          
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          })
        }, 100)
      }
    }
  }, [pathname])

  const handleNavigation = (sectionId: string) => {
    // If we're on the homepage, scroll to section
    if (pathname === '/') {
      const element = document.getElementById(sectionId)
      
      if (element) {
        const headerHeight = 120 // Approximate height of sticky header
        const elementPosition = element.offsetTop - headerHeight
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
        setIsMenuOpen(false) // Close mobile menu after clicking
      }
    } else {
      // If we're on another page, navigate to homepage with hash
      window.location.href = `/#${sectionId}`
    }
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@eyecareclinic.com</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-lg">🇺🇸</span>
              <span>Mon-Fri: 8AM-6PM | Sat: 9AM-4PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => handleNavigation('home')} 
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('services')} 
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => handleNavigation('about')} 
              className="text-gray-700 hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => handleNavigation('testimonials')} 
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Testimonials
            </button>
            <button 
              onClick={() => handleNavigation('faq')} 
              className="text-gray-700 hover:text-primary transition-colors"
            >
              FAQ
            </button>
            <button 
              onClick={() => handleNavigation('contact')} 
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Contact
            </button>
            <Button 
              onClick={() => handleNavigation('contact')}
              className="dental-gradient text-white"
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex items-center justify-center mb-4">
              <span className="text-lg">🇺🇸</span>
              <span className="ml-2 text-sm text-gray-600">Mon-Fri: 8AM-6PM | Sat: 9AM-4PM</span>
            </div>
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => handleNavigation('home')} 
                className="text-gray-700 hover:text-primary transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigation('services')} 
                className="text-gray-700 hover:text-primary transition-colors text-left"
              >
                Services
              </button>
              <button 
                onClick={() => handleNavigation('about')} 
                className="text-gray-700 hover:text-primary transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => handleNavigation('testimonials')} 
                className="text-gray-700 hover:text-primary transition-colors text-left"
              >
                Testimonials
              </button>
              <button 
                onClick={() => handleNavigation('faq')} 
                className="text-gray-700 hover:text-primary transition-colors text-left"
              >
                FAQ
              </button>
              <button 
                onClick={() => handleNavigation('contact')} 
                className="text-gray-700 hover:text-primary transition-colors text-left"
              >
                Contact
              </button>
              <Button 
                onClick={() => handleNavigation('contact')}
                className="dental-gradient text-white w-full"
              >
                Book Appointment
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
