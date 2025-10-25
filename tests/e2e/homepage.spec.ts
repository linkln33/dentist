import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('loads homepage successfully', async ({ page }) => {
    await page.goto('/')
    
    // Check if the page loads
    await expect(page).toHaveTitle(/EyeCare Clinic/)
    
    // Check for main sections
    await expect(page.getByText('Professional Eye Care Services')).toBeVisible()
    await expect(page.getByText('Book Your Appointment')).toBeVisible()
  })

  test('navigation works correctly', async ({ page }) => {
    await page.goto('/')
    
    // Test navigation links
    await page.getByRole('button', { name: 'Services' }).click()
    await expect(page.getByText('Our Services')).toBeVisible()
    
    await page.getByRole('button', { name: 'About' }).click()
    await expect(page.getByText('About Our Practice')).toBeVisible()
    
    await page.getByRole('button', { name: 'Testimonials' }).click()
    await expect(page.getByText('What Our Patients Say')).toBeVisible()
    
    await page.getByRole('button', { name: 'Contact' }).click()
    await expect(page.getByText('Get In Touch')).toBeVisible()
  })

  test('booking modal opens and functions', async ({ page }) => {
    await page.goto('/')
    
    // Click book appointment button
    await page.getByRole('button', { name: 'Book Your Appointment' }).click()
    
    // Check if modal opens
    await expect(page.getByText('Book Your Appointment')).toBeVisible()
    
    // Fill out form
    await page.getByLabel('Full Name').fill('John Doe')
    await page.getByLabel('Email').fill('john@example.com')
    await page.getByLabel('Phone').fill('555-123-4567')
    
    // Select date
    await page.getByLabel('Select Date').fill('2024-12-25')
    
    // Wait for time slots to appear and select one
    await page.waitForSelector('text=9:00 AM')
    await page.getByText('9:00 AM').click()
    
    // Submit form
    await page.getByRole('button', { name: 'Book Appointment' }).click()
    
    // Check for success message
    await expect(page.getByText(/Appointment Successfully Booked/)).toBeVisible()
  })

  test('testimonials carousel works', async ({ page }) => {
    await page.goto('/')
    
    // Scroll to testimonials section
    await page.getByRole('button', { name: 'Testimonials' }).click()
    
    // Check if testimonials are visible
    await expect(page.getByText('Sarah Johnson')).toBeVisible()
    await expect(page.getByText('Michael Chen')).toBeVisible()
    
    // Test play/pause button
    const playPauseButton = page.getByRole('button', { name: /Auto-scroll/ })
    await expect(playPauseButton).toBeVisible()
    
    await playPauseButton.click()
    await expect(playPauseButton).toHaveText(/Play/)
    
    await playPauseButton.click()
    await expect(playPauseButton).toHaveText(/Pause/)
  })

  test('WhatsApp integration works', async ({ page }) => {
    await page.goto('/')
    
    // Click WhatsApp button
    await page.getByRole('button', { name: /WhatsApp/i }).click()
    
    // Check if contact options panel opens
    await expect(page.getByText('Contact Us')).toBeVisible()
    await expect(page.getByText('WhatsApp Chat')).toBeVisible()
    await expect(page.getByText('Call (555) 123-4567')).toBeVisible()
  })

  test('mobile navigation works', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
    
    // Open mobile menu
    await page.getByRole('button', { name: /menu/i }).click()
    
    // Check if mobile menu items are visible
    await expect(page.getByText('Home')).toBeVisible()
    await expect(page.getByText('Services')).toBeVisible()
    await expect(page.getByText('About')).toBeVisible()
  })

  test('contact form works', async ({ page }) => {
    await page.goto('/')
    
    // Scroll to contact section
    await page.getByRole('button', { name: 'Contact' }).click()
    
    // Fill contact form
    await page.getByLabel('Name').fill('Jane Doe')
    await page.getByLabel('Email').fill('jane@example.com')
    await page.getByLabel('Subject').fill('Test Inquiry')
    await page.getByLabel('Message').fill('This is a test message')
    
    // Submit form
    await page.getByRole('button', { name: 'Send Message' }).click()
    
    // Check for success message
    await expect(page.getByText(/Message sent successfully/)).toBeVisible()
  })

  test('FAQ section works', async ({ page }) => {
    await page.goto('/')
    
    // Navigate to FAQ
    await page.getByRole('button', { name: 'FAQ' }).click()
    
    // Check if FAQ items are visible
    await expect(page.getByText('Frequently Asked Questions')).toBeVisible()
    
    // Test accordion functionality
    const firstQuestion = page.getByText('What should I expect during my first visit?')
    await firstQuestion.click()
    
    // Check if answer is visible
    await expect(page.getByText(/During your first visit/)).toBeVisible()
  })
})
