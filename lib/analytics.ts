// Analytics tracking utilities
interface AnalyticsEvent {
  action: string
  category: string
  label?: string
  value?: number
}

interface PageViewEvent {
  page: string
  title: string
  url: string
}

// Google Analytics 4 implementation
export const trackEvent = (event: AnalyticsEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
    })
  }
}

export const trackPageView = (event: PageViewEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID!, {
      page_title: event.title,
      page_location: event.url,
    })
  }
}

// Custom analytics events for healthcare website
export const trackAppointmentBooking = (method: 'modal' | 'whatsapp' | 'phone') => {
  trackEvent({
    action: 'appointment_booking_initiated',
    category: 'appointment',
    label: method,
  })
}

export const trackAppointmentCompleted = (formData: any) => {
  trackEvent({
    action: 'appointment_booking_completed',
    category: 'appointment',
    label: formData.reason,
    value: 1,
  })
}

export const trackContactMethod = (method: 'whatsapp' | 'phone' | 'email') => {
  trackEvent({
    action: 'contact_method_used',
    category: 'contact',
    label: method,
  })
}

export const trackServiceInterest = (service: string) => {
  trackEvent({
    action: 'service_viewed',
    category: 'services',
    label: service,
  })
}

export const trackTestimonialInteraction = (action: 'view' | 'pause' | 'play') => {
  trackEvent({
    action: `testimonial_${action}`,
    category: 'testimonials',
    label: action,
  })
}

export const trackScrollDepth = (depth: number) => {
  trackEvent({
    action: 'scroll_depth',
    category: 'engagement',
    label: `${depth}%`,
    value: depth,
  })
}

// Performance tracking
export const trackPageLoad = (loadTime: number) => {
  trackEvent({
    action: 'page_load_time',
    category: 'performance',
    label: 'load_time',
    value: Math.round(loadTime),
  })
}

export const trackImageLoad = (imageUrl: string, loadTime: number) => {
  trackEvent({
    action: 'image_load_time',
    category: 'performance',
    label: imageUrl,
    value: Math.round(loadTime),
  })
}

// Error tracking
export const trackError = (error: Error, context: string) => {
  trackEvent({
    action: 'error_occurred',
    category: 'error',
    label: `${context}: ${error.message}`,
  })
}

// User engagement tracking
export const trackTimeOnPage = (timeInSeconds: number) => {
  trackEvent({
    action: 'time_on_page',
    category: 'engagement',
    label: 'seconds',
    value: timeInSeconds,
  })
}

export const trackFormSubmission = (formName: string, success: boolean) => {
  trackEvent({
    action: 'form_submission',
    category: 'forms',
    label: `${formName}_${success ? 'success' : 'error'}`,
    value: success ? 1 : 0,
  })
}

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}
