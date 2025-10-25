import { render, screen, fireEvent } from '@testing-library/react'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'

// Mock window.location
delete (window as any).location
window.location = {
  href: '',
  assign: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
} as any

describe('FloatingWhatsApp Component', () => {
  beforeEach(() => {
    window.location.href = ''
    jest.clearAllMocks()
  })

  it('renders the floating button', () => {
    render(<FloatingWhatsApp />)
    
    const button = screen.getByRole('button', { name: /open contact options/i })
    expect(button).toBeInTheDocument()
  })

  it('opens contact panel when clicked', () => {
    render(<FloatingWhatsApp />)
    
    const button = screen.getByRole('button', { name: /open contact options/i })
    fireEvent.click(button)
    
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
    expect(screen.getByText('WhatsApp Chat')).toBeInTheDocument()
    expect(screen.getByText('Call (555) 123-4567')).toBeInTheDocument()
  })

  it('closes contact panel when clicked again', () => {
    render(<FloatingWhatsApp />)
    
    const button = screen.getByRole('button', { name: /open contact options/i })
    
    // Open panel
    fireEvent.click(button)
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
    
    // Close panel
    fireEvent.click(button)
    expect(screen.queryByText('Contact Us')).not.toBeInTheDocument()
  })

  it('opens WhatsApp when WhatsApp button is clicked', () => {
    render(<FloatingWhatsApp />)
    
    const button = screen.getByRole('button', { name: /open contact options/i })
    fireEvent.click(button)
    
    const whatsappButton = screen.getByText('WhatsApp Chat')
    fireEvent.click(whatsappButton)
    
    expect(window.location.href).toContain('wa.me')
    expect(window.location.href).toContain('15551234567')
  })

  it('opens phone dialer when phone button is clicked', () => {
    render(<FloatingWhatsApp />)
    
    const button = screen.getByRole('button', { name: /open contact options/i })
    fireEvent.click(button)
    
    const phoneButton = screen.getByText('Call (555) 123-4567')
    fireEvent.click(phoneButton)
    
    expect(window.location.href).toBe('tel:+15551234567')
  })

  it('opens email client when email button is clicked', () => {
    render(<FloatingWhatsApp />)
    
    const button = screen.getByRole('button', { name: /open contact options/i })
    fireEvent.click(button)
    
    const emailButton = screen.getByText('Send Email')
    fireEvent.click(emailButton)
    
    expect(window.location.href).toBe('mailto:info@eyecareclinic.com')
  })

  it('closes panel when close button is clicked', () => {
    render(<FloatingWhatsApp />)
    
    const button = screen.getByRole('button', { name: /open contact options/i })
    fireEvent.click(button)
    
    const closeButton = screen.getByRole('button', { name: '' })
    fireEvent.click(closeButton)
    
    expect(screen.queryByText('Contact Us')).not.toBeInTheDocument()
  })
})
