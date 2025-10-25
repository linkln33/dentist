import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'

export async function POST(request: NextRequest) {
  try {
    const eventData = await request.json()
    
    console.log('Creating calendar event:', eventData)
    
    // Check if we have Google API credentials
    if (!process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
      console.log('Google API credentials not found, using simulation')
      // Fallback to simulation if credentials not set
      await new Promise(resolve => setTimeout(resolve, 1000))
      return NextResponse.json({ 
        success: true, 
        eventId: 'simulated-event-' + Date.now(),
        eventLink: 'https://calendar.google.com/calendar/event?eid=simulated',
        message: 'Simulation mode - add Google API credentials for real calendar integration'
      })
    }
    
    // Real Google Calendar API integration
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/calendar']
    })
    
    const calendar = google.calendar({ version: 'v3', auth })
    
    // Convert our event data to Google Calendar format
    console.log('Processing event data:', eventData)
    
    // Parse date and time properly
    const dateStr = eventData.date // Format: YYYY-MM-DD
    const timeStr = eventData.time // Format: HH:MM AM/PM
    
    console.log('Raw time string:', timeStr)
    
    // Convert 12-hour format to 24-hour format
    let time24 = timeStr
    if (timeStr.includes('AM') || timeStr.includes('PM')) {
      const parts = timeStr.split(' ')
      const time = parts[0]
      const period = parts[1]
      const [hours, minutes] = time.split(':')
      let hour24 = parseInt(hours)
      
      if (period === 'PM' && hour24 !== 12) {
        hour24 += 12
      } else if (period === 'AM' && hour24 === 12) {
        hour24 = 0
      }
      
      time24 = `${hour24.toString().padStart(2, '0')}:${minutes}`
    }
    
    console.log('Converted time:', time24)
    
    const startDateTime = new Date(`${dateStr}T${time24}:00`)
    const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000) // 1 hour later
    
    console.log('Parsed dates:', { startDateTime, endDateTime })
    
    const googleEvent = {
      summary: eventData.summary,
      description: eventData.description,
      location: eventData.location,
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: 'America/New_York'
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: 'America/New_York'
      },
      // Note: Service accounts can't send invitations without domain-wide delegation
      // The event will be created in the clinic's calendar
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 }, // 24 hours before
          { method: 'popup', minutes: 60 } // 1 hour before
        ]
      }
    }
    
    const event = await calendar.events.insert({
      calendarId: process.env.GOOGLE_CALENDAR_ID || 'primary',
      resource: googleEvent
    })
    
    console.log('✅ Calendar event created successfully:', event.data.id)
    
    return NextResponse.json({ 
      success: true, 
      eventId: event.data.id,
      eventLink: event.data.htmlLink,
      message: 'Appointment successfully added to Google Calendar'
    })
    
  } catch (error) {
    console.error('Error creating calendar event:', error)
    return NextResponse.json(
      { 
        error: 'Failed to create calendar event',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
