// ============================================
// Google Sheets API Integration
// ============================================

const GOOGLE_SHEET_URL = import.meta.env.VITE_GOOGLE_SHEET_URL

/**
 * Submit contact form data to Google Sheets
 */
export const submitContact = async (data) => {
  if (!GOOGLE_SHEET_URL) {
    throw new Error('Google Sheet URL not configured. Add VITE_GOOGLE_SHEET_URL to .env file.')
  }

  try {
    const payload = {
      action: 'contact',
      name: data.name?.trim(),
      email: data.email?.trim().toLowerCase(),
      company: data.company?.trim() || '',
      projectType: data.projectType,
      budget: data.budget,
      message: data.message?.trim(),
    }

    const response = await fetch(GOOGLE_SHEET_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    // Google Apps Script with no-cors returns opaque response
    // So we can't read the response body
    // We assume success if no error was thrown
    return {
      success: true,
      message: "Your message has been received! We'll get back to you within 24 hours.",
    }

  } catch (error) {
    console.error('Contact form submission error:', error)
    throw new Error('Failed to submit your message. Please try again or email us directly.')
  }
}

/**
 * Submit newsletter subscription to Google Sheets
 */
export const subscribeNewsletter = async (email) => {
  if (!GOOGLE_SHEET_URL) {
    throw new Error('Google Sheet URL not configured.')
  }

  try {
    const payload = {
      action: 'newsletter',
      email: email.trim().toLowerCase(),
    }

    await fetch(GOOGLE_SHEET_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    return {
      success: true,
      message: "Welcome to the Colony! You've been subscribed. 🐝",
    }

  } catch (error) {
    console.error('Newsletter subscription error:', error)
    throw new Error('Failed to subscribe. Please try again.')
  }
}

/**
 * Health check for Google Sheet API
 */
export const checkHealth = async () => {
  try {
    const response = await fetch(GOOGLE_SHEET_URL)
    const data = await response.json()
    return data
  } catch (error) {
    return { status: 'error', message: error.message }
  }
}