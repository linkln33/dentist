"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

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
    treatment: "LASIK Surgery",
    rating: 5,
    text: "Dr. Smith performed my LASIK surgery and the results exceeded my expectations. I can see clearly without glasses for the first time in 20 years!",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Michael Chen",
    treatment: "Cataract Surgery",
    rating: 5,
    text: "The staff is incredibly professional and caring. They made my cataract surgery comfortable and stress-free. Highly recommend!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Lisa Rodriguez",
    treatment: "Pediatric Care",
    rating: 5,
    text: "My daughter was nervous about her first eye exam, but the pediatric team made it fun and easy. Thank you for your expertise!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "David Thompson",
    treatment: "Glaucoma Treatment",
    rating: 5,
    text: "I've been coming here for my glaucoma treatment for 3 years. Dr. Johnson's expertise and the latest technology have kept my condition stable.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    date: "1 week ago"
  },
  {
    id: 5,
    name: "Maria Garcia",
    treatment: "Comprehensive Exam",
    rating: 5,
    text: "The comprehensive eye exam was thorough and the equipment is state-of-the-art. I felt confident in the diagnosis and treatment plan.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    date: "2 weeks ago"
  },
  {
    id: 6,
    name: "Robert Wilson",
    treatment: "Retinal Treatment",
    rating: 5,
    text: "When I was diagnosed with diabetic retinopathy, I was scared. Dr. Johnson explained everything clearly and the treatment was successful.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    date: "1 month ago"
  }
]

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Auto-scroll carousel
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1
        return nextIndex >= testimonials.length ? 0 : nextIndex
      })
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Scroll to current testimonial
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const cardWidth = container.offsetWidth / 2 // 2 cards visible
      const scrollPosition = currentIndex * cardWidth
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      })
    }
  }, [currentIndex])


  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <div className="relative">
      {/* Horizontal scrolling container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-hidden gap-6 w-full"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {testimonials.map((testimonial, index) => (
          <Card 
            key={testimonial.id} 
            className="flex-shrink-0 w-1/2 min-w-[400px] p-6 hover:shadow-lg transition-shadow duration-300"
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
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full mr-3 flex-shrink-0"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-primary">{testimonial.treatment}</p>
                </div>
              </div>

              <Quote className="h-5 w-5 text-primary mb-3" />
              <p className="text-gray-600 text-sm leading-relaxed">
                "{testimonial.text}"
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center space-x-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex 
                ? 'bg-primary' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
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
