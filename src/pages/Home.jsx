import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaCode, FaShoppingCart, FaMobile, FaRocket, FaCheck, FaCog, FaUsers, FaAward } from 'react-icons/fa'
import AnimatedCounter from '../components/AnimatedCounter'
import InteractiveCard from '../components/InteractiveCard'
import ParallaxSection from '../components/ParallaxSection'
import TestimonialCarousel from '../components/TestimonialCarousel'
import TechnologyGrid from '../components/TechnologyGrid'
import ScrollRevealSection from '../components/ScrollRevealSection'

export default function Home() {
  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Crafting Digital <span className="text-indigo-400">Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              We transform businesses through innovative web solutions and cutting-edge technology
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn btn-primary">
                Start Your Project
              </Link>
              <Link to="/portfolio" className="btn btn-secondary">
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter end={200} label="Projects Delivered" />
            <AnimatedCounter end={50} label="Happy Clients" />
            <AnimatedCounter end={10} label="Years Experience" />
            <AnimatedCounter end={15} label="Team Experts" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <ScrollRevealSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer comprehensive digital solutions to help your business thrive in the modern world
              </p>
            </div>
          </ScrollRevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollRevealSection key={index} delay={index * 0.1}>
                <InteractiveCard {...service} />
              </ScrollRevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <ParallaxSection bgImage="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3">
        <div className="section bg-gradient-to-r from-indigo-900/95 to-black/95 text-white">
          <div className="container">
            <ScrollRevealSection>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Why Choose CodeWhiz?</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We combine technical expertise with creative innovation to deliver exceptional results
                </p>
              </div>
            </ScrollRevealSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <ScrollRevealSection key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="text-center p-6"
                  >
                    <div className="text-4xl text-indigo-400 mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </motion.div>
                </ScrollRevealSection>
              ))}
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Technologies */}
      <section className="section">
        <div className="container">
          <ScrollRevealSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Technologies We Master</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We use cutting-edge technologies to build scalable and efficient solutions
              </p>
            </div>
          </ScrollRevealSection>

          <ScrollRevealSection>
            <TechnologyGrid technologies={technologies} />
          </ScrollRevealSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-gray-50">
        <div className="container">
          <ScrollRevealSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don't just take our word for it - hear what our clients have to say
              </p>
            </div>
          </ScrollRevealSection>

          <ScrollRevealSection>
            <div className="max-w-4xl mx-auto">
              <TestimonialCarousel testimonials={testimonials} />
            </div>
          </ScrollRevealSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-indigo-600 text-white">
        <div className="container">
          <ScrollRevealSection>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl mb-8 text-indigo-100">
                Let's create something amazing together. Get in touch for a free consultation.
              </p>
              <Link to="/contact" className="btn bg-white text-indigo-600 hover:bg-indigo-50">
                Start Your Project
              </Link>
            </div>
          </ScrollRevealSection>
        </div>
      </section>
    </>
  )
}

const services = [
  {
    icon: FaCode,
    title: "Web Development",
    description: "Custom websites that drive results and engage users",
    features: [
      "Responsive Design",
      "Performance Optimization",
      "SEO Best Practices",
      "Custom CMS Integration",
      "API Development"
    ]
  },
  {
    icon: FaShoppingCart,
    title: "E-commerce Solutions",
    description: "Powerful online stores that drive sales",
    features: [
      "Custom Shopping Cart",
      "Payment Gateway Integration",
      "Inventory Management",
      "Order Tracking",
      "Analytics Dashboard"
    ]
  },
  {
    icon: FaMobile,
    title: "App Development",
    description: "Native and cross-platform mobile applications",
    features: [
      "iOS Development",
      "Android Development",
      "Cross-platform Solutions",
      "App Store Optimization",
      "Push Notifications"
    ]
  },
  {
    icon: FaRocket,
    title: "Digital Marketing",
    description: "Strategic marketing solutions for growth",
    features: [
      "SEO Services",
      "Content Marketing",
      "Social Media Management",
      "Email Campaigns",
      "Analytics & Reporting"
    ]
  },
  {
    icon: FaCog,
    title: "Web Maintenance",
    description: "Keep your website running smoothly",
    features: [
      "Regular Updates",
      "Security Monitoring",
      "Performance Optimization",
      "Content Updates",
      "Technical Support"
    ]
  },
  {
    icon: FaUsers,
    title: "UI/UX Design",
    description: "Create engaging user experiences",
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Visual Design",
      "Usability Testing"
    ]
  }
]

const features = [
  {
    icon: <FaRocket />,
    title: "Fast Delivery",
    description: "We deliver projects on time without compromising quality"
  },
  {
    icon: <FaUsers />,
    title: "Expert Team",
    description: "Skilled developers with years of industry experience"
  },
  {
    icon: <FaCog />,
    title: "Custom Solutions",
    description: "Tailored solutions to meet your specific needs"
  },
  {
    icon: <FaAward />,
    title: "Quality Assured",
    description: "Rigorous testing and quality control processes"
  }
]

const technologies = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    level: 95
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    level: 90
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    level: 85
  },
  {
    name: "Vue.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    level: 88
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    level: 92
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    level: 87
  }
]

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechStart",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    text: "CodeWhiz transformed our business with their exceptional web development services. Their attention to detail and innovative solutions exceeded our expectations. The team's communication was outstanding throughout the project."
  },
  {
    name: "Michael Chen",
    position: "Founder, HealthTech",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    text: "Working with CodeWhiz was a game-changer for our healthcare platform. Their expertise in both design and development is unmatched. They delivered a secure, scalable solution that our users love."
  },
  {
    name: "Emily Brown",
    position: "Director, EduLearn",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    text: "The team at CodeWhiz delivered our e-learning platform on time and within budget. Their ongoing support has been invaluable to our success. They truly understand the education sector's needs."
  },
  {
    name: "David Wilson",
    position: "CTO, RetailPro",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    text: "CodeWhiz helped us create a seamless e-commerce experience that increased our online sales by 200%. Their technical expertise and strategic insights made all the difference."
  }
]
