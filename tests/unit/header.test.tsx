import { render, screen, fireEvent } from '@testing-library/react'
import { Header } from '@/components/header'

// Mock the Logo component
jest.mock('@/components/logo', () => ({
  Logo: ({ className }: { className?: string }) => (
    <div data-testid="logo" className={className}>
      EyeCare Clinic
    </div>
  ),
}))

describe('Header Component', () => {
  beforeEach(() => {
    // Mock window.scrollTo
    window.scrollTo = jest.fn()
  })

  it('renders the header with logo', () => {
    render(<Header />)
    expect(screen.getByTestId('logo')).toBeInTheDocument()
    expect(screen.getByText('EyeCare Clinic')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Header />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(screen.getByText('FAQ')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders book appointment button', () => {
    render(<Header />)
    expect(screen.getByText('Book Appointment')).toBeInTheDocument()
  })

  it('shows mobile menu button on small screens', () => {
    render(<Header />)
    const menuButton = screen.getByRole('button', { name: /menu/i })
    expect(menuButton).toBeInTheDocument()
  })

  it('toggles mobile menu when menu button is clicked', () => {
    render(<Header />)
    const menuButton = screen.getByRole('button', { name: /menu/i })
    
    // Menu should be closed initially
    expect(screen.queryByText('Home')).toBeInTheDocument() // Desktop nav visible
    
    // Click menu button
    fireEvent.click(menuButton)
    
    // Menu should be open (mobile nav visible)
    expect(screen.getByText('Home')).toBeInTheDocument()
  })

  it('calls scrollToSection when navigation links are clicked', () => {
    render(<Header />)
    const homeLink = screen.getByText('Home')
    
    fireEvent.click(homeLink)
    
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: expect.any(Number),
      behavior: 'smooth'
    })
  })

  it('displays contact information in top bar', () => {
    render(<Header />)
    expect(screen.getByText('(555) 123-4567')).toBeInTheDocument()
    expect(screen.getByText('info@eyecareclinic.com')).toBeInTheDocument()
  })
})
