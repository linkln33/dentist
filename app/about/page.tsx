import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Award, 
  GraduationCap, 
  Users, 
  Heart, 
  Eye, 
  Shield,
  CheckCircle,
  Calendar,
  Phone,
  Star
} from "lucide-react"

export const metadata = {
  title: 'About Dr. Sarah Johnson - Board Certified Ophthalmologist',
  description: 'Meet Dr. Sarah Johnson, a board-certified ophthalmologist with over 15 years of experience in comprehensive eye care and advanced surgical procedures.',
}

const credentials = [
  {
    title: "Board Certification",
    description: "American Board of Ophthalmology",
    icon: Award
  },
  {
    title: "Medical Degree",
    description: "Harvard Medical School, MD",
    icon: GraduationCap
  },
  {
    title: "Residency",
    description: "Johns Hopkins Hospital",
    icon: Users
  },
  {
    title: "Fellowship",
    description: "Retinal Surgery, Mayo Clinic",
    icon: Eye
  }
]

const achievements = [
  "15+ years of clinical experience",
  "5,000+ successful surgeries performed",
  "Published 25+ research papers",
  "Speaker at international conferences",
  "Mentor to 50+ medical students",
  "Patient satisfaction rate: 98%"
]

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    title: "Chief Ophthalmologist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    specialties: ["LASIK Surgery", "Cataract Surgery", "Retinal Care"],
    experience: "15+ years"
  },
  {
    name: "Dr. Michael Chen",
    title: "Pediatric Ophthalmologist",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    specialties: ["Pediatric Care", "Strabismus", "Amblyopia"],
    experience: "12+ years"
  },
  {
    name: "Dr. Emily Rodriguez",
    title: "Glaucoma Specialist",
    image: "https://images.unsplash.com/photo-1594824388852-8b5a4a0a5b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    specialties: ["Glaucoma Treatment", "Laser Surgery", "Medical Management"],
    experience: "10+ years"
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Meet Dr. Sarah Johnson
              </h1>
              <p className="text-xl text-gray-600">
                Board-certified ophthalmologist with over 15 years of experience in comprehensive eye care, 
                advanced surgical procedures, and patient-centered treatment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="healthcare-gradient text-white text-lg px-8 py-4">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Consultation
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  <Phone className="h-5 w-5 mr-2" />
                  Call (555) 123-4567
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Dr. Sarah Johnson"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating credentials */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Board Certified</p>
                    <p className="text-xs text-gray-600">15+ Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Education & Credentials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dr. Johnson's extensive education and training ensure you receive the highest quality eye care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {credentials.map((credential, index) => {
              const IconComponent = credential.icon
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{credential.title}</h3>
                  <p className="text-gray-600">{credential.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                A Passion for Vision Care
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Dr. Sarah Johnson's journey in ophthalmology began with a simple belief: everyone deserves 
                  the gift of clear vision. After completing her medical degree at Harvard Medical School 
                  and residency at Johns Hopkins Hospital, she pursued advanced fellowship training in retinal 
                  surgery at Mayo Clinic.
                </p>
                <p>
                  With over 15 years of clinical experience, Dr. Johnson has performed thousands of successful 
                  eye surgeries and helped countless patients achieve better vision. Her commitment to staying 
                  current with the latest technologies and techniques ensures her patients receive the most 
                  advanced care available.
                </p>
                <p>
                  Beyond her clinical work, Dr. Johnson is passionate about medical education and has mentored 
                  dozens of medical students and residents. She has also published numerous research papers 
                  and frequently speaks at international ophthalmology conferences.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Dr. Johnson in surgery"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Professional Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dr. Johnson's dedication to excellence has resulted in numerous professional achievements 
              and recognition from her peers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team of experienced ophthalmologists and support staff work together to provide 
              comprehensive, compassionate eye care for every patient.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-lg font-medium">{member.title}</CardDescription>
                  <p className="text-sm text-primary font-semibold">{member.experience}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, specialtyIndex) => (
                        <span 
                          key={specialtyIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 healthcare-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            "To provide exceptional eye care that enhances our patients' quality of life through 
            advanced technology, compassionate care, and personalized treatment plans. We are committed 
            to maintaining the highest standards of medical excellence while treating each patient 
            with the respect and attention they deserve."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              <Calendar className="h-5 w-5 mr-2" />
              Schedule Your Visit
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
