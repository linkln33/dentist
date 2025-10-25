import Script from 'next/script'

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "EyeCare Clinic",
    "description": "Professional eye care services including LASIK surgery, cataract treatment, and comprehensive eye exams",
    "url": "https://krisi-eyes.netlify.app",
    "logo": "https://krisi-eyes.netlify.app/logo.png",
    "image": "https://krisi-eyes.netlify.app/og-image.jpg",
    "telephone": "+1-555-123-4567",
    "email": "info@eyecareclinic.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Medical Plaza, Suite 200",
      "addressLocality": "Healthcare City",
      "addressRegion": "NY",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "openingHours": "Mo-Fr 08:00-18:00,Sa 09:00-16:00",
    "medicalSpecialty": "Ophthalmology",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Eye Care Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "LASIK Surgery",
            "description": "Laser vision correction surgery"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Cataract Surgery",
            "description": "Cataract removal and lens replacement"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Comprehensive Eye Exam",
            "description": "Complete eye health assessment"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/eyecareclinic",
      "https://www.instagram.com/eyecareclinic",
      "https://www.linkedin.com/company/eyecareclinic",
      "https://twitter.com/eyecareclinic"
    ]
  }

  const doctorSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dr. Sarah Johnson",
    "jobTitle": "Board-Certified Ophthalmologist",
    "worksFor": {
      "@type": "MedicalOrganization",
      "name": "EyeCare Clinic"
    },
    "medicalSpecialty": "Ophthalmology",
    "alumniOf": "Johns Hopkins University School of Medicine",
    "award": "Top Ophthalmologist 2023",
    "description": "Dr. Sarah Johnson is a board-certified ophthalmologist with over 15 years of experience in comprehensive eye care.",
    "image": "https://krisi-eyes.netlify.app/dr-sarah-johnson.jpg",
    "url": "https://krisi-eyes.netlify.app/about"
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "LASIK Surgery",
    "description": "Laser vision correction surgery to reduce or eliminate the need for glasses and contact lenses",
    "provider": {
      "@type": "MedicalOrganization",
      "name": "EyeCare Clinic"
    },
    "areaServed": {
      "@type": "City",
      "name": "New York City"
    },
    "offers": {
      "@type": "Offer",
      "price": "2000-4000",
      "priceCurrency": "USD",
      "description": "LASIK surgery pricing varies based on individual needs"
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How often should I have an eye exam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Adults should have a comprehensive eye exam every 1-2 years, or more frequently if you have certain risk factors or existing eye conditions."
        }
      },
      {
        "@type": "Question",
        "name": "What is the recovery time for LASIK surgery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most patients can return to normal activities within 24-48 hours after LASIK surgery, with full visual recovery typically occurring within 1-3 months."
        }
      },
      {
        "@type": "Question",
        "name": "At what age should children have their first eye exam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Children should have their first comprehensive eye exam at 6 months of age, then at age 3, and again before starting school."
        }
      }
    ]
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="doctor-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(doctorSchema),
        }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  )
}
