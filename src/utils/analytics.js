/**
 * Helper to report Google Ads Lead Form conversion
 */
export const triggerConversion = (url) => {
  if (typeof window !== 'undefined') {
    if (typeof window.gtag_report_conversion === 'function') {
      window.gtag_report_conversion(url);
    } else if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-18443400112/b00HCI_q4pAdELDnv9pE'
      });
      if (typeof url !== 'undefined' && url) {
        window.location = url;
      }
    }
  }
};
