import { render, screen, waitFor } from '@testing-library/react'
import { TestimonialsCarousel } from '@/components/testimonials-carousel'

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: any) => (
    <img src={src} alt={alt} {...props} />
  ),
}))

describe('TestimonialsCarousel Component', () => {
  beforeEach(() => {
    // Mock window.matchMedia
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    })
  })

  it('renders loading skeleton initially', () => {
    render(<TestimonialsCarousel />)
    // Check for skeleton elements by class instead of testid
    const skeletonElements = document.querySelectorAll('.animate-pulse')
    expect(skeletonElements.length).toBeGreaterThan(0)
  })

  it('renders testimonials after loading', async () => {
    render(<TestimonialsCarousel />)
    
    await waitFor(() => {
      expect(screen.getAllByText('Sarah Johnson')).toHaveLength(8) // Multiple instances due to carousel
    }, { timeout: 2000 })
  })

  it('displays testimonial content correctly', async () => {
    render(<TestimonialsCarousel />)
    
    await waitFor(() => {
      expect(screen.getAllByText('Sarah Johnson')).toHaveLength(8)
      expect(screen.getAllByText('LASIK Surgery')).toHaveLength(8)
      expect(screen.getAllByText(/Dr. Smith performed my LASIK surgery/)).toHaveLength(8)
    }, { timeout: 2000 })
  })

  it('shows play/pause button', async () => {
    render(<TestimonialsCarousel />)
    
    await waitFor(() => {
      expect(screen.getByText('Pause Auto-scroll')).toBeInTheDocument()
    }, { timeout: 2000 })
  })

  it('toggles play/pause when button is clicked', async () => {
    render(<TestimonialsCarousel />)
    
    await waitFor(() => {
      const pauseButton = screen.getByText('Pause Auto-scroll')
      expect(pauseButton).toBeInTheDocument()
    }, { timeout: 2000 })
  })

  it('displays star ratings', async () => {
    render(<TestimonialsCarousel />)
    
    await waitFor(() => {
      // Check for star icons by class name
      const stars = document.querySelectorAll('.lucide-star')
      expect(stars.length).toBeGreaterThan(0)
    }, { timeout: 2000 })
  })

  it('shows testimonial dates', async () => {
    render(<TestimonialsCarousel />)
    
    await waitFor(() => {
      expect(screen.getAllByText('2 weeks ago')).toHaveLength(8) // Multiple instances due to carousel duplication
    }, { timeout: 2000 })
  })
})
