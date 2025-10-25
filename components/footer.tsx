import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo className="text-white" />
            <p className="text-gray-400 text-sm">
              Providing comprehensive eye care services with the latest technology and personalized treatment plans.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-400 hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/services" className="block text-gray-400 hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/testimonials" className="block text-gray-400 hover:text-primary transition-colors">
                Testimonials
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <div className="space-y-2">
              <Link href="/services#comprehensive-exam" className="block text-gray-400 hover:text-primary transition-colors">
                Comprehensive Eye Exam
              </Link>
              <Link href="/services#lasik" className="block text-gray-400 hover:text-primary transition-colors">
                LASIK Surgery
              </Link>
              <Link href="/services#cataract" className="block text-gray-400 hover:text-primary transition-colors">
                Cataract Surgery
              </Link>
              <Link href="/services#glaucoma" className="block text-gray-400 hover:text-primary transition-colors">
                Glaucoma Treatment
              </Link>
              <Link href="/services#pediatric" className="block text-gray-400 hover:text-primary transition-colors">
                Pediatric Care
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">
                    123 Medical Plaza<br />
                    Suite 200<br />
                    Healthcare City, HC 12345
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-gray-400">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-400">info@smilecaredental.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div className="text-gray-400 text-sm">
                  <p>Mon-Fri: 8AM-6PM</p>
                  <p>Sat: 9AM-4PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 SmileCare Dental. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
