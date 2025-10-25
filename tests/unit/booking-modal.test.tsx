import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BookingModal } from '@/components/booking-modal'

// Mock the API call
jest.mock('@/app/api/calendar/create/route', () => ({
  POST: jest.fn(),
}))

describe('BookingModal Component', () => {
  const mockOnClose = jest.fn()

  beforeEach(() => {
    mockOnClose.mockClear()
  })

  it('renders when open', () => {
    render(<BookingModal isOpen={true} onClose={mockOnClose} />)
    expect(screen.getByText('Book Your Appointment')).toBeInTheDocument()
  })

  it('does not render when closed', () => {
    render(<BookingModal isOpen={false} onClose={mockOnClose} />)
    expect(screen.queryByText('Book Your Appointment')).not.toBeInTheDocument()
  })

  it('has all required form fields', () => {
    render(<BookingModal isOpen={true} onClose={mockOnClose} />)
    
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/reason for visit/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/select date/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/select time/i)).toBeInTheDocument()
  })

  it('shows time slots when date is selected', async () => {
    const user = userEvent.setup()
    render(<BookingModal isOpen={true} onClose={mockOnClose} />)
    
    const dateInput = screen.getByLabelText(/select date/i)
    await user.type(dateInput, '2024-12-25')
    
    await waitFor(() => {
      expect(screen.getByText('9:00 AM')).toBeInTheDocument()
      expect(screen.getByText('9:30 AM')).toBeInTheDocument()
    })
  })

  it('validates required fields', async () => {
    const user = userEvent.setup()
    render(<BookingModal isOpen={true} onClose={mockOnClose} />)
    
    const submitButton = screen.getByRole('button', { name: /book appointment/i })
    await user.click(submitButton)
    
    // Should show validation errors
    expect(screen.getByText(/please fill in all required fields/i)).toBeInTheDocument()
  })

  it('submits form with valid data', async () => {
    const user = userEvent.setup()
    render(<BookingModal isOpen={true} onClose={mockOnClose} />)
    
    // Fill in form
    await user.type(screen.getByLabelText(/full name/i), 'John Doe')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/phone/i), '555-123-4567')
    
    const dateInput = screen.getByLabelText(/select date/i)
    await user.type(dateInput, '2024-12-25')
    
    await waitFor(() => {
      expect(screen.getByText('9:00 AM')).toBeInTheDocument()
    })
    
    await user.click(screen.getByText('9:00 AM'))
    
    const submitButton = screen.getByRole('button', { name: /book appointment/i })
    await user.click(submitButton)
    
    // Should show success message
    await waitFor(() => {
      expect(screen.getByText(/appointment successfully booked/i)).toBeInTheDocument()
    })
  })

  it('closes modal when close button is clicked', async () => {
    const user = userEvent.setup()
    render(<BookingModal isOpen={true} onClose={mockOnClose} />)
    
    const closeButton = screen.getByRole('button', { name: /close/i })
    await user.click(closeButton)
    
    expect(mockOnClose).toHaveBeenCalled()
  })

  it('has correct default reason for visit', () => {
    render(<BookingModal isOpen={true} onClose={mockOnClose} />)
    
    const reasonSelect = screen.getByLabelText(/reason for visit/i)
    expect(reasonSelect).toHaveValue('Eye Exam')
  })
})
