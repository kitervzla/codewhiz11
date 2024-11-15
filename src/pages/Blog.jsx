import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaCalendar, FaUser, FaTag, FaClock } from 'react-icons/fa'
import ScrollRevealSection from '../components/ScrollRevealSection'

export default function Blog() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3"
            alt="Blog"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-black/80"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-4">Our Blog</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Insights, tutorials, and updates from our team
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <ScrollRevealSection>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-64 md:h-auto">
                  <img 
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <span className="text-sm text-indigo-600 font-medium">Featured Post</span>
                  <h2 className="text-2xl font-bold mt-2 mb-4">{featuredPost.title}</h2>
                  <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <FaCalendar className="mr-2" />
                    <span className="mr-4">{featuredPost.date}</span>
                    <FaUser className="mr-2" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <Link 
                    to={`/blog/${featuredPost.slug}`}
                    className="btn btn-primary inline-block"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </ScrollRevealSection>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <ScrollRevealSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="relative h-48">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-indigo-600 text-white text-sm px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <FaCalendar className="mr-2" />
                      <span className="mr-4">{post.date}</span>
                      <FaClock className="mr-2" />
                      <span>{post.readTime} min read</span>
                    </div>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="text-indigo-600 font-medium hover:text-indigo-700"
                    >
                      Read More →
                    </Link>
                  </div>
                </motion.div>
              </ScrollRevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section bg-gray-50">
        <div className="container">
          <ScrollRevealSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Categories</h2>
              <p className="text-xl text-gray-600">
                Explore our content by topic
              </p>
            </div>
          </ScrollRevealSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <ScrollRevealSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-xl shadow-lg text-center"
                >
                  <div className="text-3xl text-indigo-600 mb-3">{category.icon}</div>
                  <h3 className="font-semibold mb-2">{category.name}</h3>
                  <span className="text-gray-600">{category.count} posts</span>
                </motion.div>
              </ScrollRevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section bg-indigo-600 text-white">
        <div className="container">
          <ScrollRevealSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
              <p className="text-xl mb-8">
                Subscribe to our newsletter for the latest insights and updates
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900"
                  required
                />
                <button type="submit" className="btn bg-white text-indigo-600 hover:bg-indigo-50">
                  Subscribe
                </button>
              </form>
            </div>
          </ScrollRevealSection>
        </div>
      </section>
    </div>
  )
}

const featuredPost = {
  title: "The Future of Web Development: Trends to Watch in 2024",
  excerpt: "Explore the latest trends shaping the future of web development, from AI integration to advanced frameworks and tools.",
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3",
  date: "January 15, 2024",
  author: "John Smith",
  slug: "future-web-development-trends-2024"
}

const blogPosts = [
  {
    title: "Building Scalable E-commerce Solutions",
    excerpt: "Learn how to create robust e-commerce platforms that can handle growth and high traffic.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3",
    date: "January 10, 2024",
    category: "E-commerce",
    readTime: 8,
    slug: "building-scalable-ecommerce-solutions"
  },
  {
    title: "Mobile App Development Best Practices",
    excerpt: "Essential tips and practices for building successful mobile applications.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3",
    date: "January 5, 2024",
    category: "Mobile",
    readTime: 10,
    slug: "mobile-app-development-best-practices"
  },
  {
    title: "Optimizing Website Performance",
    excerpt: "Techniques and tools for improving your website's speed and performance.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3",
    date: "December 28, 2023",
    category: "Performance",
    readTime: 6,
    slug: "optimizing-website-performance"
  },
  {
    title: "UI/UX Design Principles",
    excerpt: "Key principles for creating user-friendly and engaging digital experiences.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3",
    date: "December 20, 2023",
    category: "Design",
    readTime: 7,
    slug: "ui-ux-design-principles"
  },
  {
    title: "Cloud Computing Solutions",
    excerpt: "Understanding cloud services and choosing the right solution for your project.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3",
    date: "December 15, 2023",
    category: "Cloud",
    readTime: 9,
    slug: "cloud-computing-solutions"
  },
  {
    title: "Digital Marketing Strategies",
    excerpt: "Effective digital marketing strategies for growing your online presence.",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3",
    date: "December 10, 2023",
    category: "Marketing",
    readTime: 5,
    slug: "digital-marketing-strategies"
  }
]

const categories = [
  {
    icon: <FaCode />,
    name: "Development",
    count: 25
  },
  {
    icon: <FaMobile />,
    name: "Mobile",
    count: 18
  },
  {
    icon: <FaShoppingCart />,
    name: "E-commerce",
    count: 15
  },
  {
    icon: <FaRocket />,
    name: "Technology",
    count: 22
  }
]
