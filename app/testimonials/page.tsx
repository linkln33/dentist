import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Star, 
  Quote, 
  Calendar, 
  Phone,
  Eye,
  Heart,
  Shield,
  CheckCircle
} from "lucide-react"

export const metadata = {
  title: 'Patient Testimonials - EyeCare Clinic Reviews',
  description: 'Read real patient testimonials and reviews about our eye care services, LASIK surgery, cataract treatment, and overall patient experience.',
}

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    treatment: "LASIK Surgery",
    rating: 5,
    text: "Dr. Smith performed my LASIK surgery and the results exceeded my expectations. I can see clearly without glasses for the first time in 20 years! The entire process was smooth and the staff was incredibly supportive.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Michael Chen",
    treatment: "Cataract Surgery",
    rating: 5,
    text: "The staff is incredibly professional and caring. They made my cataract surgery comfortable and stress-free. The recovery was much faster than I expected, and my vision is now crystal clear. Highly recommend!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Lisa Rodriguez",
    treatment: "Pediatric Care",
    rating: 5,
    text: "My daughter was nervous about her first eye exam, but the pediatric team made it fun and easy. Dr. Chen was so patient and kind. Thank you for your expertise and making our visit comfortable!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "David Thompson",
    treatment: "Glaucoma Treatment",
    rating: 5,
    text: "I've been coming here for my glaucoma treatment for 3 years. Dr. Johnson's expertise and the latest technology have kept my condition stable. The team is knowledgeable and always takes time to explain everything.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    date: "1 week ago"
  },
  {
    id: 5,
    name: "Maria Garcia",
    treatment: "Comprehensive Exam",
    rating: 5,
    text: "The comprehensive eye exam was thorough and the equipment is state-of-the-art. I felt confident in the diagnosis and treatment plan. The office is clean, modern, and the staff is friendly and professional.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    date: "2 weeks ago"
  },
  {
    id: 6,
    name: "Robert Wilson",
    treatment: "Retinal Treatment",
    rating: 5,
    text: "When I was diagnosed with diabetic retinopathy, I was scared. Dr. Johnson explained everything clearly and the treatment was successful. The follow-up care has been excellent. I'm grateful for the expert care.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    date: "1 month ago"
  }
]

const beforeAfterCases = [
  {
    id: 1,
    title: "LASIK Surgery - 20/20 Vision Achieved",
    beforeImage: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    afterImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Patient achieved 20/20 vision after LASIK surgery, eliminating the need for glasses and contacts.",
    results: ["20/20 vision achieved", "No more glasses needed", "Quick recovery", "Enhanced quality of life"]
  },
  {
    id: 2,
    title: "Cataract Surgery - Clear Vision Restored",
    beforeImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    afterImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Advanced cataract surgery with premium lens implantation restored clear, sharp vision.",
    results: ["Crystal clear vision", "Reduced glare", "Better night vision", "Improved color perception"]
  },
  {
    id: 3,
    title: "Pediatric Strabismus Correction",
    beforeImage: "https://images.unsplash.com/photo-1576091160550-2173dba0ef41?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    afterImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Successful correction of childhood strabismus with improved eye alignment and vision development.",
    results: ["Proper eye alignment", "Improved depth perception", "Better academic performance", "Enhanced confidence"]
  }
]

const stats = [
  { number: "5,000+", label: "Happy Patients", icon: Heart },
  { number: "98%", label: "Patient Satisfaction", icon: Star },
  { number: "15+", label: "Years Experience", icon: Shield },
  { number: "99%", label: "Success Rate", icon: CheckCircle }
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Patient Testimonials & Results
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Hear from our patients about their experiences and see the life-changing results 
              of our eye care treatments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="healthcare-gradient text-white text-lg px-8 py-4">
                <Calendar className="h-5 w-5 mr-2" />
                Book Your Appointment
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                <Phone className="h-5 w-5 mr-2" />
                Call (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real patients who have experienced the difference of expert eye care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center space-x-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">{testimonial.date}</span>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-primary">{testimonial.treatment}</p>
                    </div>
                  </div>

                  <Quote className="h-6 w-6 text-primary mb-3" />
                  <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Before & After Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the remarkable transformations achieved through our advanced eye care treatments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {beforeAfterCases.map((caseStudy) => (
              <Card key={caseStudy.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="grid grid-cols-2 gap-2 p-4">
                  <div className="text-center">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Before</h4>
                    <div className="relative h-32 rounded-lg overflow-hidden">
                      <Image
                        src={caseStudy.beforeImage}
                        alt="Before treatment"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">After</h4>
                    <div className="relative h-32 rounded-lg overflow-hidden">
                      <Image
                        src={caseStudy.afterImage}
                        alt="After treatment"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{caseStudy.title}</h3>
                  <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Results:</h4>
                    <ul className="space-y-1">
                      {caseStudy.results.map((result, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="text-sm text-gray-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Video Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch our patients share their experiences and see the impact of our care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((video) => (
              <Card key={video} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 bg-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Eye className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600">Video Testimonial</p>
                      <p className="text-sm text-gray-500">Patient Success Story</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Patient Success Story #{video}</h3>
                  <p className="text-sm text-gray-600">
                    Watch how our treatment transformed this patient's vision and quality of life.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 healthcare-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied patients who have trusted us with their vision care. 
            Schedule your consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              <Calendar className="h-5 w-5 mr-2" />
              Book Consultation
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
              <Phone className="h-5 w-5 mr-2" />
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
