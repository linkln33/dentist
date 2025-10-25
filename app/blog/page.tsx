import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, User, Eye, Shield, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Eye Care Blog - Latest News & Tips | EyeCare Clinic',
  description: 'Stay informed with the latest eye care news, treatment options, and expert tips from our board-certified ophthalmologists. Learn about LASIK, cataract surgery, and more.',
  keywords: 'eye care blog, eye health tips, LASIK news, cataract surgery, eye exam tips, vision health, ophthalmology blog',
}

const blogPosts = [
  {
    id: 1,
    title: 'Understanding LASIK Surgery: What to Expect Before, During, and After',
    excerpt: 'Learn about the LASIK procedure, recovery process, and what results you can expect from this life-changing vision correction surgery.',
    author: 'Dr. Sarah Johnson',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'LASIK',
    image: '/blog/lasik-surgery.jpg',
    slug: 'understanding-lasik-surgery',
    featured: true,
  },
  {
    id: 2,
    title: 'Digital Eye Strain: How to Protect Your Eyes in the Digital Age',
    excerpt: 'Discover practical tips to reduce digital eye strain and protect your vision while working on computers and mobile devices.',
    author: 'Dr. Michael Chen',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Eye Health',
    image: '/blog/digital-eye-strain.jpg',
    slug: 'digital-eye-strain-protection',
    featured: true,
  },
  {
    id: 3,
    title: 'Cataract Surgery: Modern Techniques and Recovery',
    excerpt: 'Explore the latest cataract surgery techniques, including laser-assisted procedures and premium lens options.',
    author: 'Dr. Sarah Johnson',
    date: '2024-01-05',
    readTime: '7 min read',
    category: 'Cataract',
    image: '/blog/cataract-surgery.jpg',
    slug: 'cataract-surgery-modern-techniques',
    featured: false,
  },
  {
    id: 4,
    title: 'Pediatric Eye Care: When Should Children Have Their First Eye Exam?',
    excerpt: 'Learn about the importance of early eye exams for children and signs that may indicate vision problems.',
    author: 'Dr. Emily Rodriguez',
    date: '2024-01-01',
    readTime: '5 min read',
    category: 'Pediatric',
    image: '/blog/pediatric-eye-care.jpg',
    slug: 'pediatric-eye-care-first-exam',
    featured: false,
  },
  {
    id: 5,
    title: 'Glaucoma: The Silent Thief of Sight',
    excerpt: 'Understanding glaucoma, its risk factors, and the importance of regular eye exams for early detection.',
    author: 'Dr. Michael Chen',
    date: '2023-12-28',
    readTime: '6 min read',
    category: 'Glaucoma',
    image: '/blog/glaucoma-awareness.jpg',
    slug: 'glaucoma-silent-thief-sight',
    featured: false,
  },
  {
    id: 6,
    title: 'Nutrition for Eye Health: Foods That Support Vision',
    excerpt: 'Discover the best foods and nutrients that can help maintain healthy vision and prevent age-related eye diseases.',
    author: 'Dr. Sarah Johnson',
    date: '2023-12-25',
    readTime: '4 min read',
    category: 'Nutrition',
    image: '/blog/nutrition-eye-health.jpg',
    slug: 'nutrition-eye-health-foods',
    featured: false,
  },
]

const categories = [
  { name: 'All', count: 6 },
  { name: 'LASIK', count: 1 },
  { name: 'Eye Health', count: 1 },
  { name: 'Cataract', count: 1 },
  { name: 'Pediatric', count: 1 },
  { name: 'Glaucoma', count: 1 },
  { name: 'Nutrition', count: 1 },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Eye Care <span className="text-green-400">Blog</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Stay informed with the latest eye care news, treatment options, and expert tips from our board-certified ophthalmologists.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
                <Eye className="h-5 w-5" />
                <span>Expert Insights</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
                <Shield className="h-5 w-5" />
                <span>Latest Treatments</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
                <Heart className="h-5 w-5" />
                <span>Patient Care</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {blogPosts.filter(post => post.featured).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center">
                  <Eye className="h-16 w-16 text-primary" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{post.author}</p>
                        <p className="text-gray-500 text-xs">{post.date}</p>
                      </div>
                    </div>
                    <Button asChild>
                      <Link href={`/blog/${post.slug}`}>Read More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      className="flex items-center justify-between w-full text-left p-2 rounded hover:bg-gray-50 transition-colors"
                    >
                      <span>{category.name}</span>
                      <span className="text-gray-500 text-sm">{category.count}</span>
                    </button>
                  ))}
                </div>
              </Card>
            </div>

            {/* Posts Grid */}
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center">
                      <Eye className="h-12 w-12 text-primary" />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-xs">{post.readTime}</span>
                      </div>
                      <h3 className="font-bold mb-2 hover:text-primary transition-colors">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{post.author}</span>
                        <span>{post.date}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-200 mb-8">
            Subscribe to our newsletter for the latest eye care tips and news.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-primary hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
