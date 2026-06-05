export const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '2867757610236500'

export const trackLead = (params?: Record<string, string>) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Lead', {
      content_name: 'WhatsApp CTA',
      content_category: 'Phone Repair Enquiry',
      ...params,
    })
  }
}

export const trackViewContent = (contentName: string) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'ViewContent', {
      content_name: contentName,
    })
  }
}
