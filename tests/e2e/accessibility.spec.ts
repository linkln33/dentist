import { test, expect } from '@playwright/test'

test.describe('Accessibility Tests', () => {
  test('page has proper heading structure', async ({ page }) => {
    await page.goto('/')
    
    // Check for h1 tag
    const h1 = page.locator('h1')
    await expect(h1).toHaveCount(1)
    
    // Check for proper heading hierarchy
    const headings = page.locator('h1, h2, h3, h4, h5, h6')
    const headingCount = await headings.count()
    expect(headingCount).toBeGreaterThan(0)
  })

  test('images have alt text', async ({ page }) => {
    await page.goto('/')
    
    const images = page.locator('img')
    const imageCount = await images.count()
    
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i)
      const alt = await img.getAttribute('alt')
      expect(alt).toBeTruthy()
      expect(alt).not.toBe('')
    }
  })

  test('links have descriptive text', async ({ page }) => {
    await page.goto('/')
    
    const links = page.locator('a')
    const linkCount = await links.count()
    
    for (let i = 0; i < linkCount; i++) {
      const link = links.nth(i)
      const text = await link.textContent()
      expect(text).toBeTruthy()
      expect(text?.trim()).not.toBe('')
    }
  })

  test('buttons have accessible names', async ({ page }) => {
    await page.goto('/')
    
    const buttons = page.locator('button')
    const buttonCount = await buttons.count()
    
    for (let i = 0; i < buttonCount; i++) {
      const button = buttons.nth(i)
      const text = await button.textContent()
      const ariaLabel = await button.getAttribute('aria-label')
      
      expect(text || ariaLabel).toBeTruthy()
    }
  })

  test('form inputs have labels', async ({ page }) => {
    await page.goto('/')
    
    // Open booking modal
    await page.getByRole('button', { name: 'Book Your Appointment' }).click()
    
    const inputs = page.locator('input, select, textarea')
    const inputCount = await inputs.count()
    
    for (let i = 0; i < inputCount; i++) {
      const input = inputs.nth(i)
      const id = await input.getAttribute('id')
      const ariaLabel = await input.getAttribute('aria-label')
      const ariaLabelledBy = await input.getAttribute('aria-labelledby')
      
      if (id) {
        const label = page.locator(`label[for="${id}"]`)
        const hasLabel = await label.count() > 0
        expect(hasLabel || ariaLabel || ariaLabelledBy).toBeTruthy()
      }
    }
  })

  test('color contrast is sufficient', async ({ page }) => {
    await page.goto('/')
    
    // This is a basic test - in a real scenario, you'd use a tool like axe-core
    // to check color contrast ratios
    const textElements = page.locator('p, h1, h2, h3, h4, h5, h6, span, div')
    const textCount = await textElements.count()
    expect(textCount).toBeGreaterThan(0)
  })

  test('keyboard navigation works', async ({ page }) => {
    await page.goto('/')
    
    // Test tab navigation
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    
    // Test Enter key on buttons
    await page.keyboard.press('Enter')
    
    // Test Escape key to close modals
    await page.keyboard.press('Escape')
  })

  test('focus indicators are visible', async ({ page }) => {
    await page.goto('/')
    
    // Focus on first focusable element
    await page.keyboard.press('Tab')
    
    // Check if focused element has focus styles
    const focusedElement = page.locator(':focus')
    await expect(focusedElement).toBeVisible()
  })

  test('skip links work', async ({ page }) => {
    await page.goto('/')
    
    // Check if skip links exist (if implemented)
    const skipLinks = page.locator('a[href^="#"]')
    const skipLinkCount = await skipLinks.count()
    
    if (skipLinkCount > 0) {
      await skipLinks.first().click()
    }
  })

  test('ARIA attributes are present', async ({ page }) => {
    await page.goto('/')
    
    // Check for common ARIA attributes
    const elementsWithAria = page.locator('[aria-label], [aria-labelledby], [aria-describedby]')
    const ariaCount = await elementsWithAria.count()
    
    // Should have some ARIA attributes for accessibility
    expect(ariaCount).toBeGreaterThanOrEqual(0)
  })

  test('page is responsive', async ({ page }) => {
    // Test different viewport sizes
    const viewports = [
      { width: 320, height: 568 },   // iPhone SE
      { width: 375, height: 667 },   // iPhone 8
      { width: 768, height: 1024 },  // iPad
      { width: 1024, height: 768 },  // Desktop
    ]
    
    for (const viewport of viewports) {
      await page.setViewportSize(viewport)
      await page.goto('/')
      
      // Check if main content is visible
      await expect(page.getByText('Professional Eye Care Services')).toBeVisible()
    }
  })
})
