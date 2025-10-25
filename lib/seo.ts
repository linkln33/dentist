// SEO and Content Strategy for EyeCare Clinic

export const seoKeywords = {
  primary: [
    'eye doctor',
    'ophthalmologist',
    'eye exam',
    'LASIK surgery',
    'cataract surgery',
    'eye clinic',
    'vision correction',
    'eye care',
    'optometrist',
    'eye specialist'
  ],
  secondary: [
    'glaucoma treatment',
    'pediatric eye care',
    'retinal specialist',
    'cornea specialist',
    'eye surgery',
    'vision therapy',
    'contact lenses',
    'eye glasses',
    'diabetic eye care',
    'macular degeneration'
  ],
  local: [
    'eye doctor near me',
    'ophthalmologist near me',
    'LASIK surgery near me',
    'eye exam near me',
    'best eye doctor',
    'top ophthalmologist',
    'eye clinic near me',
    'vision center near me'
  ],
  longTail: [
    'best LASIK surgeon near me',
    'cataract surgery recovery time',
    'pediatric eye exam when to start',
    'glaucoma symptoms and treatment',
    'diabetic retinopathy specialist',
    'dry eye treatment options',
    'eye floaters when to worry',
    'vision problems in children'
  ]
}

export const contentPillars = {
  services: [
    'Comprehensive Eye Exams',
    'LASIK Surgery',
    'Cataract Surgery',
    'Glaucoma Treatment',
    'Pediatric Eye Care',
    'Diabetic Eye Care',
    'Dry Eye Treatment',
    'Retinal Disorders'
  ],
  conditions: [
    'Myopia (Nearsightedness)',
    'Hyperopia (Farsightedness)',
    'Astigmatism',
    'Presbyopia',
    'Glaucoma',
    'Cataracts',
    'Macular Degeneration',
    'Diabetic Retinopathy',
    'Dry Eye Syndrome',
    'Conjunctivitis'
  ],
  procedures: [
    'LASIK Surgery',
    'PRK Surgery',
    'Cataract Surgery',
    'Glaucoma Surgery',
    'Retinal Surgery',
    'Corneal Transplant',
    'Vitrectomy',
    'YAG Laser Capsulotomy'
  ]
}

export const blogTopics = [
  {
    category: 'LASIK & Vision Correction',
    topics: [
      'Is LASIK Right for You? Complete Guide',
      'LASIK vs PRK: Which is Better?',
      'LASIK Recovery Timeline and Tips',
      'LASIK Cost and Financing Options',
      'What to Expect During LASIK Surgery',
      'LASIK Success Rates and Statistics'
    ]
  },
  {
    category: 'Eye Health & Prevention',
    topics: [
      'Digital Eye Strain: Prevention and Treatment',
      'Nutrition for Healthy Eyes',
      'UV Protection for Your Eyes',
      'Exercise and Eye Health',
      'Sleep and Vision Quality',
      'Eye Safety at Work and Home'
    ]
  },
  {
    category: 'Pediatric Eye Care',
    topics: [
      'When Should Children Have Their First Eye Exam?',
      'Signs of Vision Problems in Children',
      'Amblyopia (Lazy Eye) Treatment',
      'Strabismus in Children',
      'School Vision Screenings vs Comprehensive Exams',
      'Sports and Eye Safety for Kids'
    ]
  },
  {
    category: 'Age-Related Eye Conditions',
    topics: [
      'Understanding Cataracts',
      'Macular Degeneration: Types and Treatment',
      'Glaucoma: The Silent Thief of Sight',
      'Presbyopia: Reading Glasses and Beyond',
      'Floaters and Flashes: When to Worry',
      'Age-Related Vision Changes'
    ]
  },
  {
    category: 'Technology & Innovation',
    topics: [
      'Latest LASIK Technology',
      'Premium IOLs for Cataract Surgery',
      'Digital Eye Exams vs Traditional',
      'AI in Eye Care',
      'Telemedicine for Eye Care',
      'Future of Vision Correction'
    ]
  }
]

export const localSeoContent = {
  serviceAreas: [
    'New York City',
    'Manhattan',
    'Brooklyn',
    'Queens',
    'Bronx',
    'Staten Island',
    'Long Island',
    'Westchester County',
    'Nassau County',
    'Suffolk County'
  ],
  localKeywords: [
    'eye doctor NYC',
    'ophthalmologist Manhattan',
    'LASIK surgery Brooklyn',
    'eye exam Queens',
    'cataract surgery Bronx',
    'glaucoma treatment Staten Island',
    'pediatric eye care Long Island',
    'retinal specialist Westchester'
  ]
}

export const schemaMarkup = {
  organization: {
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
        }
      ]
    }
  },
  doctor: {
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
    "description": "Dr. Sarah Johnson is a board-certified ophthalmologist with over 15 years of experience in comprehensive eye care."
  }
}

export const googleAdsKeywords = {
  highIntent: [
    'LASIK surgery near me',
    'cataract surgery cost',
    'eye exam appointment',
    'glaucoma treatment',
    'pediatric eye doctor',
    'vision correction surgery',
    'eye specialist near me',
    'retinal specialist'
  ],
  mediumIntent: [
    'eye doctor',
    'ophthalmologist',
    'eye clinic',
    'vision center',
    'eye care services',
    'comprehensive eye exam',
    'eye surgery',
    'vision problems'
  ],
  longTail: [
    'best LASIK surgeon in NYC',
    'cataract surgery recovery time',
    'pediatric eye exam when to start',
    'glaucoma symptoms treatment',
    'diabetic retinopathy specialist',
    'dry eye treatment options',
    'eye floaters when to worry',
    'vision problems children'
  ]
}

export const contentCalendar = {
  weekly: [
    'Monday: Educational content about eye conditions',
    'Tuesday: Treatment options and procedures',
    'Wednesday: Patient testimonials and success stories',
    'Thursday: Technology and innovation in eye care',
    'Friday: Eye health tips and prevention'
  ],
  monthly: [
    'Week 1: LASIK and vision correction focus',
    'Week 2: Pediatric eye care and children\'s vision',
    'Week 3: Age-related eye conditions',
    'Week 4: Technology and innovation in ophthalmology'
  ],
  seasonal: [
    'Spring: Allergy eye care and UV protection',
    'Summer: Eye safety during outdoor activities',
    'Fall: Back-to-school eye exams for children',
    'Winter: Dry eye treatment and indoor air quality'
  ]
}
