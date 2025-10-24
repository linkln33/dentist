"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Eye, 
  Shield, 
  Clock, 
  Star, 
  Phone, 
  Mail, 
  MapPin,
  CheckCircle,
  Users,
  Award,
  Heart
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 hero-pattern">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 text-shadow">
                  Expert Eye Care for
                  <span className="text-primary block">Clear Vision</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Professional eye care services with advanced technology and compassionate care. 
                  Trust our experienced team to protect and enhance your vision health.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="healthcare-gradient text-white text-lg px-8 py-4">
                    Book Your Appointment
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                    Learn More
                  </Button>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-gray-600">Board Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-gray-600">Latest Technology</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-gray-600">15+ Years Experience</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Modern eye clinic with professional optometry equipment"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Eye Care Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From routine eye exams to advanced surgical procedures, we provide complete eye care solutions 
              for patients of all ages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Comprehensive Eye Exam</CardTitle>
                <CardDescription>
                  Complete eye health assessment using the latest diagnostic technology
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Visual acuity testing</li>
                  <li>• Glaucoma screening</li>
                  <li>• Retinal examination</li>
                  <li>• Prescription updates</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle>LASIK Surgery</CardTitle>
                <CardDescription>
                  Advanced laser vision correction for freedom from glasses and contacts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Custom wavefront technology</li>
                  <li>• Quick recovery time</li>
                  <li>• 99% success rate</li>
                  <li>• Lifetime follow-up care</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Pediatric Eye Care</CardTitle>
                <CardDescription>
                  Specialized eye care for children with a gentle, child-friendly approach
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Child-friendly environment</li>
                  <li>• Early vision screening</li>
                  <li>• Amblyopia treatment</li>
                  <li>• Strabismus correction</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" className="healthcare-gradient text-white">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose EyeCare Clinic?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine advanced technology with compassionate care to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Board Certified</h3>
              <p className="text-gray-600">
                Our ophthalmologists are board-certified with extensive training and experience.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Latest Technology</h3>
              <p className="text-gray-600">
                State-of-the-art equipment for accurate diagnosis and effective treatment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">
                Convenient appointment times including evenings and weekends.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Patient-Centered Care</h3>
              <p className="text-gray-600">
                Personalized treatment plans tailored to your unique needs and lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Dr. Smith performed my LASIK surgery and the results exceeded my expectations. 
                I can see clearly without glasses for the first time in 20 years!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Johnson</p>
                  <p className="text-sm text-gray-600">LASIK Patient</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The staff is incredibly professional and caring. They made my cataract surgery 
                comfortable and stress-free. Highly recommend!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-gray-900">Michael Chen</p>
                  <p className="text-sm text-gray-600">Cataract Patient</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "My daughter was nervous about her first eye exam, but the pediatric team 
                made it fun and easy. Thank you for your patience and expertise!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-gray-900">Lisa Rodriguez</p>
                  <p className="text-sm text-gray-600">Parent</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/testimonials">
              <Button variant="outline" size="lg">
                Read More Testimonials
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 healthcare-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Improve Your Vision?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Schedule your comprehensive eye exam today and take the first step towards better vision health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Book Appointment
              </Button>
            </Link>
            <a href="tel:+15551234567">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary"
              >
                Call (555) 123-4567
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
