"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookingModal } from "@/components/booking-modal"
import { 
  Eye, 
  Shield, 
  Heart, 
  Zap, 
  Users, 
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  Calendar
} from "lucide-react"

const services = [
  {
    id: "comprehensive-exam",
    title: "Comprehensive Eye Examination",
    description: "Complete eye health assessment using the latest diagnostic technology",
    icon: Eye,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Visual acuity testing",
      "Glaucoma screening",
      "Retinal examination",
      "Prescription updates",
      "Color vision testing",
      "Peripheral vision assessment"
    ],
    duration: "60-90 minutes",
    price: "Starting at $150"
  },
  {
    id: "lasik",
    title: "LASIK Surgery",
    description: "Advanced laser vision correction for freedom from glasses and contacts",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Custom wavefront technology",
      "Quick recovery time",
      "99% success rate",
      "Lifetime follow-up care",
      "Both eyes same day",
      "Minimal discomfort"
    ],
    duration: "15 minutes per eye",
    price: "Starting at $2,500"
  },
  {
    id: "cataract",
    title: "Cataract Surgery",
    description: "Advanced cataract removal with premium intraocular lens options",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Phacoemulsification technique",
      "Premium lens options",
      "Same-day surgery",
      "Minimal downtime",
      "Improved vision quality",
      "Reduced dependence on glasses"
    ],
    duration: "30-45 minutes per eye",
    price: "Starting at $3,500"
  },
  {
    id: "glaucoma",
    title: "Glaucoma Treatment",
    description: "Comprehensive glaucoma management and surgical treatment options",
    icon: Eye,
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Advanced pressure monitoring",
      "Laser treatment options",
      "Minimally invasive surgery",
      "Ongoing monitoring",
      "Medication management",
      "Family screening"
    ],
    duration: "Varies by treatment",
    price: "Consultation required"
  },
  {
    id: "pediatric",
    title: "Pediatric Eye Care",
    description: "Specialized eye care for children with a gentle, child-friendly approach",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba0ef41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Child-friendly environment",
      "Early vision screening",
      "Amblyopia treatment",
      "Strabismus correction",
      "Learning-related vision problems",
      "Developmental assessments"
    ],
    duration: "30-60 minutes",
    price: "Starting at $120"
  },
  {
    id: "retinal",
    title: "Retinal Services",
    description: "Specialized care for retinal conditions including diabetic retinopathy and macular degeneration",
    icon: Eye,
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Diabetic retinopathy screening",
      "Macular degeneration treatment",
      "Retinal detachment repair",
      "Intravitreal injections",
      "Laser photocoagulation",
      "Advanced imaging"
    ],
    duration: "Varies by condition",
    price: "Consultation required"
  }
]

export default function ServicesPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  const handleBookAppointment = () => {
    setIsBookingModalOpen(true)
  }

  const handleCallNow = () => {
    window.location.href = 'tel:+15551234567'
  }

  return (
    <div className="min-h-screen">
      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Eye Care Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              From routine eye exams to advanced surgical procedures, we provide complete eye care solutions 
              for patients of all ages using the latest technology and techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="healthcare-gradient text-white text-lg px-8 py-4"
                onClick={handleBookAppointment}
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book Appointment
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4"
                onClick={handleCallNow}
              >
                <Phone className="h-5 w-5 mr-2" />
                Call (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={service.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-64">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-lg">{service.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-gray-600">{service.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-primary">{service.price}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-3">
                      <Button className="healthcare-gradient text-white flex-1">
                        Learn More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex-1"
                        onClick={handleBookAppointment}
                      >
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Advanced Technology & Equipment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We invest in the latest diagnostic and treatment technology to provide you with the most accurate 
              results and best possible outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">OCT Imaging</h3>
              <p className="text-gray-600">
                Optical Coherence Tomography for detailed retinal imaging and early disease detection.
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Femtosecond Laser</h3>
              <p className="text-gray-600">
                Precise laser technology for LASIK and cataract surgery with enhanced safety and accuracy.
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Retinal Photography</h3>
              <p className="text-gray-600">
                High-resolution imaging for comprehensive retinal health monitoring and documentation.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 healthcare-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Schedule Your Eye Care?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Don't wait to take care of your vision. Schedule your appointment today and experience 
            the difference of expert eye care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-4"
              onClick={handleBookAppointment}
            >
              <Calendar className="h-5 w-5 mr-2" />
              Book Online
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary"
              onClick={handleCallNow}
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
