// Error logging and monitoring utilities
interface ErrorLog {
  message: string
  stack?: string
  context: string
  timestamp: Date
  userAgent: string
  url: string
  userId?: string
  sessionId?: string
}

interface PerformanceLog {
  metric: string
  value: number
  timestamp: Date
  url: string
  userAgent: string
}

class ErrorLogger {
  private logs: ErrorLog[] = []
  private performanceLogs: PerformanceLog[] = []

  // Log error with context
  logError(error: Error, context: string, additionalData?: any) {
    const errorLog: ErrorLog = {
      message: error.message,
      stack: error.stack,
      context,
      timestamp: new Date(),
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'Server',
      url: typeof window !== 'undefined' ? window.location.href : 'Server',
      userId: this.getUserId(),
      sessionId: this.getSessionId(),
    }

    // Add to local logs
    this.logs.push(errorLog)

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error logged:', errorLog)
    }

    // Send to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.sendToExternalService(errorLog, additionalData)
    }
  }

  // Log performance metrics
  logPerformance(metric: string, value: number) {
    const performanceLog: PerformanceLog = {
      metric,
      value,
      timestamp: new Date(),
      url: typeof window !== 'undefined' ? window.location.href : 'Server',
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'Server',
    }

    this.performanceLogs.push(performanceLog)

    // Send to analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'performance_metric', {
        metric_name: metric,
        metric_value: value,
      })
    }
  }

  // Get user ID from localStorage or generate one
  private getUserId(): string {
    if (typeof window === 'undefined') return 'server'
    
    let userId = localStorage.getItem('userId')
    if (!userId) {
      userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      localStorage.setItem('userId', userId)
    }
    return userId
  }

  // Get session ID from sessionStorage or generate one
  private getSessionId(): string {
    if (typeof window === 'undefined') return 'server'
    
    let sessionId = sessionStorage.getItem('sessionId')
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      sessionStorage.setItem('sessionId', sessionId)
    }
    return sessionId
  }

  // Send error to external monitoring service
  private async sendToExternalService(errorLog: ErrorLog, additionalData?: any) {
    try {
      // Example: Send to Sentry, LogRocket, or custom endpoint
      const payload = {
        ...errorLog,
        additionalData,
        environment: process.env.NODE_ENV,
        version: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
      }

      // Uncomment and configure your preferred error monitoring service
      
      // Sentry example:
      // Sentry.captureException(new Error(errorLog.message), {
      //   extra: payload
      // })

      // Custom endpoint example:
      // await fetch('/api/errors', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(payload)
      // })

      console.log('Error sent to monitoring service:', payload)
    } catch (sendError) {
      console.error('Failed to send error to monitoring service:', sendError)
    }
  }

  // Get all error logs (for debugging)
  getErrorLogs(): ErrorLog[] {
    return [...this.logs]
  }

  // Get all performance logs (for debugging)
  getPerformanceLogs(): PerformanceLog[] {
    return [...this.performanceLogs]
  }

  // Clear logs (for testing)
  clearLogs() {
    this.logs = []
    this.performanceLogs = []
  }
}

// Create singleton instance
export const errorLogger = new ErrorLogger()

// Convenience functions
export const logError = (error: Error, context: string, additionalData?: any) => {
  errorLogger.logError(error, context, additionalData)
}

export const logPerformance = (metric: string, value: number) => {
  errorLogger.logPerformance(metric, value)
}

// React Error Boundary integration
export const logReactError = (error: Error, errorInfo: React.ErrorInfo) => {
  errorLogger.logError(error, 'React Error Boundary', {
    componentStack: errorInfo.componentStack,
  })
}

// API Error logging
export const logApiError = (error: Error, endpoint: string, requestData?: any) => {
  errorLogger.logError(error, `API Error: ${endpoint}`, {
    endpoint,
    requestData,
  })
}

// Performance monitoring
export const monitorPageLoad = () => {
  if (typeof window === 'undefined') return

  window.addEventListener('load', () => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    if (navigation) {
      logPerformance('page_load_time', navigation.loadEventEnd - navigation.loadEventStart)
      logPerformance('dom_content_loaded', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart)
      logPerformance('first_paint', navigation.responseEnd - navigation.requestStart)
    }
  })
}

// Monitor Core Web Vitals
export const monitorCoreWebVitals = () => {
  if (typeof window === 'undefined') return

  // Largest Contentful Paint
  new PerformanceObserver((list) => {
    const entries = list.getEntries()
    const lastEntry = entries[entries.length - 1]
    logPerformance('largest_contentful_paint', lastEntry.startTime)
  }).observe({ entryTypes: ['largest-contentful-paint'] })

  // First Input Delay
  new PerformanceObserver((list) => {
    const entries = list.getEntries()
    entries.forEach((entry: any) => {
      logPerformance('first_input_delay', entry.processingStart - entry.startTime)
    })
  }).observe({ entryTypes: ['first-input'] })

  // Cumulative Layout Shift
  let clsValue = 0
  new PerformanceObserver((list) => {
    const entries = list.getEntries()
    entries.forEach((entry: any) => {
      if (!entry.hadRecentInput) {
        clsValue += entry.value
      }
    })
    logPerformance('cumulative_layout_shift', clsValue)
  }).observe({ entryTypes: ['layout-shift'] })
}

// Initialize monitoring
export const initializeErrorLogging = () => {
  if (typeof window !== 'undefined') {
    monitorPageLoad()
    monitorCoreWebVitals()
  }
}
