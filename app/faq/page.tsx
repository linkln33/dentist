"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  HelpCircle, 
  Calendar, 
  Phone, 
  Mail,
  Eye,
  Shield,
  Heart,
  Clock
} from "lucide-react"

export default function FAQPage() {
  const faqCategories = [
    {
      title: "General Eye Care",
      icon: Eye,
      questions: [
        {
          question: "How often should I have an eye exam?",
          answer: "Adults should have a comprehensive eye exam every 1-2 years, or more frequently if you have existing eye conditions, diabetes, or a family history of eye disease. Children should have their first eye exam at 6 months, then at 3 years, and before starting school."
        },
        {
          question: "What should I expect during a comprehensive eye exam?",
          answer: "A comprehensive eye exam typically takes 60-90 minutes and includes visual acuity testing, eye pressure measurement, retinal examination, and assessment of your eye health. We use advanced diagnostic equipment to ensure accurate results."
        },
        {
          question: "Do I need a referral to see an ophthalmologist?",
          answer: "No referral is needed for most eye care services. However, some insurance plans may require a referral from your primary care physician. We recommend checking with your insurance provider or calling our office for assistance."
        },
        {
          question: "What insurance plans do you accept?",
          answer: "We accept most major insurance plans including Medicare, Medicaid, and private insurance. Our staff will verify your coverage and explain any out-of-pocket costs before your visit."
        }
      ]
    },
    {
      title: "LASIK Surgery",
      icon: Shield,
      questions: [
        {
          question: "Am I a good candidate for LASIK?",
          answer: "Good LASIK candidates are typically over 18, have stable vision for at least one year, have healthy eyes, and have realistic expectations. We perform a thorough evaluation to determine if LASIK is right for you."
        },
        {
          question: "How long does LASIK surgery take?",
          answer: "The actual LASIK procedure takes about 15 minutes per eye. However, you should plan to spend 2-3 hours at our facility for pre-operative preparation and post-operative monitoring."
        },
        {
          question: "What is the recovery time for LASIK?",
          answer: "Most patients can return to normal activities within 24-48 hours. You may experience some dryness and light sensitivity initially, but vision typically improves significantly within the first week."
        },
        {
          question: "Is LASIK painful?",
          answer: "LASIK is generally not painful. We use numbing eye drops, and most patients report feeling only slight pressure during the procedure. Some patients may experience mild discomfort for a few hours after surgery."
        }
      ]
    },
    {
      title: "Cataract Surgery",
      icon: Heart,
      questions: [
        {
          question: "When should I consider cataract surgery?",
          answer: "Cataract surgery is typically recommended when cataracts significantly affect your daily activities, such as driving, reading, or watching TV. We'll help you determine the right timing based on your symptoms and lifestyle needs."
        },
        {
          question: "What types of intraocular lenses are available?",
          answer: "We offer several lens options including monofocal, multifocal, and toric lenses. Each has different benefits for distance vision, reading, and astigmatism correction. We'll help you choose the best option for your needs."
        },
        {
          question: "How long does cataract surgery take?",
          answer: "Cataract surgery typically takes 30-45 minutes per eye. The procedure is performed on an outpatient basis, and you can go home the same day with someone to drive you."
        },
        {
          question: "What is the recovery time for cataract surgery?",
          answer: "Most patients can resume normal activities within a few days. Complete healing typically takes 4-6 weeks. We'll provide detailed post-operative instructions and schedule follow-up appointments to monitor your progress."
        }
      ]
    },
    {
      title: "Pediatric Eye Care",
      icon: Heart,
      questions: [
        {
          question: "At what age should children have their first eye exam?",
          answer: "The American Academy of Ophthalmology recommends that children have their first comprehensive eye exam at 6 months of age, then at 3 years, and before starting school. Earlier screening may be needed if there are concerns about vision development."
        },
        {
          question: "What are signs that my child may have vision problems?",
          answer: "Signs include frequent eye rubbing, squinting, tilting the head, sitting too close to the TV, difficulty reading, or complaints of headaches. If you notice any of these signs, schedule an eye exam promptly."
        },
        {
          question: "What is amblyopia (lazy eye)?",
          answer: "Amblyopia occurs when one eye doesn't develop normal vision, often due to strabismus or significant differences in prescription between the eyes. Early detection and treatment are crucial for the best outcomes."
        },
        {
          question: "How do you make eye exams comfortable for children?",
          answer: "We use child-friendly techniques, games, and equipment to make the exam fun and stress-free. Our pediatric team is specially trained to work with children and help them feel comfortable throughout the process."
        }
      ]
    }
  ]

  const quickFacts = [
    {
      icon: Eye,
      title: "80% of Learning",
      description: "Visual information accounts for 80% of what children learn in school"
    },
    {
      icon: Shield,
      title: "99% Success Rate",
      description: "LASIK surgery has a 99% success rate for achieving 20/20 vision"
    },
    {
      icon: Heart,
      title: "50+ Million",
      description: "Over 50 million Americans have cataracts by age 80"
    },
    {
      icon: Clock,
      title: "15 Minutes",
      description: "LASIK surgery typically takes only 15 minutes per eye"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Find answers to common questions about our eye care services, procedures, 
              and what to expect during your visit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="healthcare-gradient text-white text-lg px-8 py-4">
                <Calendar className="h-5 w-5 mr-2" />
                Book Appointment
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                <Phone className="h-5 w-5 mr-2" />
                Call (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Eye Care Facts</h2>
            <p className="text-xl text-gray-600">Important information about eye health and vision care</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickFacts.map((fact, index) => {
              const IconComponent = fact.icon
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{fact.title}</h3>
                  <p className="text-gray-600">{fact.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {faqCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon
              return (
                <div key={categoryIndex}>
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
                  </div>
                  
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem 
                        key={faqIndex} 
                        value={`${categoryIndex}-${faqIndex}`}
                        className="bg-white rounded-lg border border-gray-200"
                      >
                        <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                          <span className="font-semibold text-gray-900">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our educational content and resources to learn more about eye health and vision care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Eye Health Tips</CardTitle>
                <CardDescription>
                  Learn how to protect your vision and maintain healthy eyes throughout your life.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Proper nutrition for eye health</li>
                  <li>• Digital eye strain prevention</li>
                  <li>• UV protection guidelines</li>
                  <li>• Regular exercise benefits</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Procedure Guides</CardTitle>
                <CardDescription>
                  Detailed information about what to expect before, during, and after eye procedures.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• LASIK preparation guide</li>
                  <li>• Cataract surgery timeline</li>
                  <li>• Recovery instructions</li>
                  <li>• Follow-up care plans</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Patient Education</CardTitle>
                <CardDescription>
                  Comprehensive resources to help you understand your eye condition and treatment options.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Condition explanations</li>
                  <li>• Treatment comparisons</li>
                  <li>• Risk assessments</li>
                  <li>• Success stories</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 healthcare-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Our team is here to help. Contact us for personalized answers to your specific questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              <Phone className="h-5 w-5 mr-2" />
              Call (555) 123-4567
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
              <Mail className="h-5 w-5 mr-2" />
              Send Email
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
