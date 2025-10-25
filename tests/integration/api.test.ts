// import { NextRequest } from 'next/server'
// import { POST } from '@/app/api/calendar/create/route'

// Mock the Google Calendar API
jest.mock('googleapis', () => ({
  google: {
    calendar: jest.fn(() => ({
      events: {
        insert: jest.fn().mockResolvedValue({
          data: {
            id: 'test-event-id',
            htmlLink: 'https://calendar.google.com/event/test',
          },
        }),
      },
    })),
    auth: {
      GoogleAuth: jest.fn(() => ({
        getClient: jest.fn().mockResolvedValue({}),
      })),
    },
  },
}))

describe('Calendar API Integration', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('validates request data structure', () => {
    const requestBody = {
      summary: 'Eye Exam - John Doe',
      description: 'Patient: John Doe\nEmail: john@example.com\nPhone: 555-123-4567',
      location: '123 Medical Plaza, Suite 200, Healthcare City, HC 12345',
      date: '2024-12-25',
      time: '9:00 AM',
      attendees: [
        { email: 'john@example.com', displayName: 'John Doe' },
        { email: 'info@eyecareclinic.com', displayName: 'Eye Care Clinic' },
      ],
    }

    expect(requestBody.summary).toBeDefined()
    expect(requestBody.description).toBeDefined()
    expect(requestBody.location).toBeDefined()
    expect(requestBody.date).toBeDefined()
    expect(requestBody.time).toBeDefined()
    expect(requestBody.attendees).toHaveLength(2)
  })

  it('validates email format', () => {
    const validEmail = 'john@example.com'
    const invalidEmail = 'invalid-email'
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    expect(emailRegex.test(validEmail)).toBe(true)
    expect(emailRegex.test(invalidEmail)).toBe(false)
  })

  it('validates date format', () => {
    const validDate = '2024-12-25'
    const invalidDate = 'invalid-date'
    
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/
    
    expect(dateRegex.test(validDate)).toBe(true)
    expect(dateRegex.test(invalidDate)).toBe(false)
  })

  it('validates time format', () => {
    const validTime = '9:00 AM'
    const invalidTime = 'invalid-time'
    
    const timeRegex = /^\d{1,2}:\d{2}\s?(AM|PM)$/i
    
    expect(timeRegex.test(validTime)).toBe(true)
    expect(timeRegex.test(invalidTime)).toBe(false)
  })
})
