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
    const googleEvent = {
      summary: eventData.summary,
      description: eventData.description,
      location: eventData.location,
      start: {
        dateTime: new Date(eventData.date + 'T' + eventData.time.replace(' ', '')).toISOString(),
        timeZone: 'America/New_York'
      },
      end: {
        dateTime: new Date(new Date(eventData.date + 'T' + eventData.time.replace(' ', '')).getTime() + 60 * 60 * 1000).toISOString(),
        timeZone: 'America/New_York'
      },
      attendees: eventData.attendees,
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 }, // 24 hours before
          { method: 'popup', minutes: 60 } // 1 hour before
        ]
      }
    }
    
    const event = await calendar.events.insert({
      calendarId: 'primary', // Use your shared calendar ID here
      resource: googleEvent,
      sendUpdates: 'all' // Sends emails to attendees
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
