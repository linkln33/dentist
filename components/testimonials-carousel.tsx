"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { TestimonialSkeleton } from "@/components/loading-skeleton"

interface Testimonial {
  id: number
  name: string
  treatment: string
  rating: number
  text: string
  image: string
  date: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    treatment: "Dental Cleaning",
    rating: 5,
    text: "Dr. Chen and his team made my dental cleaning comfortable and thorough. My teeth have never felt cleaner! The office is modern and the staff is incredibly friendly.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    treatment: "Dental Fillings",
    rating: 5,
    text: "I was nervous about getting fillings, but Dr. Chen made the process painless and quick. The results look natural and I'm very happy with the outcome!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Lisa Chen",
    treatment: "Pediatric Dentistry",
    rating: 5,
    text: "My son was terrified of the dentist, but Dr. Chen and his pediatric team made his visit fun and comfortable. Now he actually looks forward to his checkups!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "David Thompson",
    treatment: "Crown Restoration",
    rating: 5,
    text: "I needed a crown and was worried about the process. Dr. Chen made it comfortable and the final result looks completely natural. Excellent work!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    date: "1 week ago"
  },
  {
    id: 5,
    name: "Maria Garcia",
    treatment: "Emergency Dental Care",
    rating: 5,
    text: "I had a dental emergency on a weekend and Dr. Chen was able to see me quickly. The pain relief was immediate and the follow-up care was excellent.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    date: "2 weeks ago"
  },
  {
    id: 6,
    name: "Robert Wilson",
    treatment: "Dental Implants",
    rating: 5,
    text: "After years of dental problems, Dr. Chen recommended implants. The process was smooth and the results are amazing. I can eat and smile with confidence again!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    date: "1 month ago"
  }
]

export function TestimonialsCarousel() {
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  // Create infinite testimonials for continuous scrolling
  const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials]

  // Simulate loading delay for skeleton
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="relative overflow-hidden bg-gradient-to-r from-green-50/30 to-blue-50/30 backdrop-blur-sm rounded-2xl p-6">
        <div className="flex gap-6">
          {[...Array(3)].map((_, index) => (
            <TestimonialSkeleton key={index} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-green-50/30 to-blue-50/30 backdrop-blur-sm rounded-2xl p-6">
      {/* Continuous scrolling container */}
      <div 
        className={`flex gap-6 ${isAutoPlaying ? 'animate-scroll' : ''}`}
        style={{ 
          width: 'max-content',
          animation: isAutoPlaying ? 'scroll 120s linear infinite' : 'none',
          willChange: 'transform'
        }}
      >
        {infiniteTestimonials.map((testimonial, index) => (
          <Card 
            key={`${testimonial.id}-${index}`} 
            className="flex-shrink-0 w-96 p-4 bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/90"
          >
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">{testimonial.date}</span>
              </div>
              
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-primary">{testimonial.treatment}</p>
                </div>
              </div>

              <Quote className="h-4 w-4 text-primary mb-2" />
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                "{testimonial.text}"
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Play/Pause button */}
      <div className="flex justify-center mt-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="text-sm"
        >
          {isAutoPlaying ? 'Pause' : 'Play'} Auto-scroll
        </Button>
      </div>
    </div>
  )
}