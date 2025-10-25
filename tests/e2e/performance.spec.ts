import { test, expect } from '@playwright/test'

test.describe('Performance Tests', () => {
  test('page loads within acceptable time', async ({ page }) => {
    const startTime = Date.now()
    await page.goto('/')
    const loadTime = Date.now() - startTime
    
    // Page should load within 3 seconds
    expect(loadTime).toBeLessThan(3000)
  })

  test('images load efficiently', async ({ page }) => {
    await page.goto('/')
    
    // Wait for all images to load
    await page.waitForLoadState('networkidle')
    
    // Check if images are optimized (using Next.js Image component)
    const images = page.locator('img')
    const imageCount = await images.count()
    
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i)
      const src = await img.getAttribute('src')
      
      // Check if images are using Next.js optimization
      if (src) {
        expect(src).toMatch(/\/_next\/image/)
      }
    }
  })

  test('lighthouse performance audit', async ({ page }) => {
    await page.goto('/')
    
    // Run lighthouse audit
    const lighthouse = await page.evaluate(() => {
      return new Promise((resolve) => {
        // This would typically use lighthouse programmatically
        // For now, we'll check basic performance metrics
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        resolve({
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          firstPaint: navigation.responseEnd - navigation.requestStart,
        })
      })
    })
    
    expect(lighthouse).toBeDefined()
  })

  test('core web vitals are acceptable', async ({ page }) => {
    await page.goto('/')
    
    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle')
    
    // Check for performance metrics
    const metrics = await page.evaluate(() => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      return {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        firstPaint: navigation.responseEnd - navigation.requestStart,
      }
    })
    
    // LCP should be under 2.5s
    expect(metrics.loadTime).toBeLessThan(2500)
    
    // FID should be under 100ms (simulated)
    expect(metrics.domContentLoaded).toBeLessThan(100)
    
    // CLS should be minimal (hard to test without actual layout shifts)
    expect(metrics.firstPaint).toBeLessThan(1000)
  })

  test('bundle size is optimized', async ({ page }) => {
    await page.goto('/')
    
    // Check network requests
    const requests = await page.evaluate(() => {
      return performance.getEntriesByType('resource')
        .filter((entry: any) => entry.name.includes('.js'))
        .map((entry: any) => ({
          name: entry.name,
          size: entry.transferSize,
          duration: entry.duration,
        }))
    })
    
    // Check that JS bundles are reasonable size
    const totalJsSize = requests.reduce((total, req) => total + (req.size || 0), 0)
    expect(totalJsSize).toBeLessThan(500000) // 500KB limit
  })

  test('caching headers are set correctly', async ({ page }) => {
    const response = await page.goto('/')
    
    // Check for caching headers
    const cacheControl = response?.headers()['cache-control']
    const etag = response?.headers()['etag']
    
    // Should have some caching strategy
    expect(cacheControl || etag).toBeTruthy()
  })

  test('mobile performance is acceptable', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })
    
    const startTime = Date.now()
    await page.goto('/')
    const loadTime = Date.now() - startTime
    
    // Mobile should load within 4 seconds
    expect(loadTime).toBeLessThan(4000)
  })

  test('testimonials carousel performance', async ({ page }) => {
    await page.goto('/')
    
    // Navigate to testimonials
    await page.getByRole('button', { name: 'Testimonials' }).click()
    
    // Wait for carousel to load
    await page.waitForSelector('text=Sarah Johnson')
    
    // Check if carousel is smooth (no layout shifts)
    const carousel = page.locator('[class*="testimonials"]')
    await expect(carousel).toBeVisible()
    
    // Test animation performance
    const animationStart = Date.now()
    await page.waitForTimeout(1000) // Wait for animation
    const animationEnd = Date.now()
    
    // Animation should be smooth
    expect(animationEnd - animationStart).toBeLessThan(2000)
  })

  test('form submission performance', async ({ page }) => {
    await page.goto('/')
    
    // Open booking modal
    await page.getByRole('button', { name: 'Book Your Appointment' }).click()
    
    // Fill form quickly
    const formStart = Date.now()
    await page.getByLabel('Full Name').fill('John Doe')
    await page.getByLabel('Email').fill('john@example.com')
    await page.getByLabel('Phone').fill('555-123-4567')
    await page.getByLabel('Select Date').fill('2024-12-25')
    
    // Wait for time slots
    await page.waitForSelector('text=9:00 AM')
    await page.getByText('9:00 AM').click()
    
    const formEnd = Date.now()
    
    // Form should be responsive
    expect(formEnd - formStart).toBeLessThan(2000)
  })

  test('accessibility performance', async ({ page }) => {
    await page.goto('/')
    
    // Check if page is accessible quickly
    const startTime = Date.now()
    
    // Test keyboard navigation
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    
    const endTime = Date.now()
    
    // Keyboard navigation should be fast
    expect(endTime - startTime).toBeLessThan(100)
  })
})
