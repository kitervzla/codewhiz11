import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaShoppingCart, FaMobile, FaRocket, FaPencilAlt, FaServer, FaCog, FaChartLine } from 'react-icons/fa'
import ScrollRevealSection from '../components/ScrollRevealSection'
import ProcessTimeline from '../components/ProcessTimeline'
import InteractiveCard from '../components/InteractiveCard'

export default function Services() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3"
            alt="Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-black/80"></div>
        </div>
        <div className="relative z-10 text-center text-white container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Comprehensive digital solutions to transform your business and drive growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section bg-gray-50">
        <div className="container">
          <ScrollRevealSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">What We Offer</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide end-to-end digital solutions tailored to your specific needs
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

      {/* Development Process */}
      <section className="section">
        <div className="container">
          <ScrollRevealSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Development Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a systematic approach to ensure project success
              </p>
            </div>
          </ScrollRevealSection>

          <ScrollRevealSection>
            <ProcessTimeline steps={process} />
          </ScrollRevealSection>
        </div>
      </section>

      {/* Technologies & Tools */}
      <section className="section bg-gray-50">
        <div className="container">
          <ScrollRevealSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Technologies & Tools</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We use the latest technologies and tools to build robust solutions
              </p>
            </div>
          </ScrollRevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <ScrollRevealSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <h3 className="text-xl font-semibold mb-4">{tech.category}</h3>
                  <ul className="space-y-2">
                    {tech.items.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <span className="text-indigo-600 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </ScrollRevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section">
        <div className="container">
          <ScrollRevealSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We have experience across various industries and understand their unique challenges
              </p>
            </div>
          </ScrollRevealSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <ScrollRevealSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6"
                >
                  <div className="text-4xl text-indigo-600 mb-4">{industry.icon}</div>
                  <h3 className="font-semibold">{industry.name}</h3>
                </motion.div>
              </ScrollRevealSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const services = [
  {
    icon: FaCode,
    title: "Custom Web Development",
    description: "Tailored web solutions that meet your specific business needs",
    features: [
      "Responsive Design",
      "Progressive Web Apps",
      "Custom CMS Development",
      "API Integration",
      "Performance Optimization"
    ]
  },
  // ... (previous services remain the same)
]

const process = [
  {
    title: "Discovery & Planning",
    description: "We analyze your requirements and create a detailed project roadmap"
  },
  {
    title: "Design & Prototyping",
    description: "Creating user-friendly interfaces and interactive prototypes"
  },
  {
    title: "Development",
    description: "Building your solution using cutting-edge technologies"
  },
  {
    title: "Testing & QA",
    description: "Rigorous testing to ensure quality and performance"
  },
  {
    title: "Deployment",
    description: "Launching your project with careful attention to detail"
  },
  {
    title: "Maintenance & Support",
    description: "Ongoing support and updates to keep your solution running smoothly"
  }
]

const technologies = [
  {
    category: "Frontend Development",
    items: [
      "React.js",
      "Vue.js",
      "Next.js",
      "Angular",
      "Tailwind CSS"
    ]
  },
  {
    category: "Backend Development",
    items: [
      "Node.js",
      "Python/Django",
      "PHP/Laravel",
      "Java Spring",
      "GraphQL"
    ]
  },
  {
    category: "Mobile Development",
    items: [
      "React Native",
      "Flutter",
      "iOS (Swift)",
      "Android (Kotlin)",
      "Progressive Web Apps"
    ]
  },
  {
    category: "Databases",
    items: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Firebase"
    ]
  },
  {
    category: "Cloud Services",
    items: [
      "AWS",
      "Google Cloud",
      "Azure",
      "Digital Ocean",
      "Heroku"
    ]
  },
  {
    category: "DevOps & Tools",
    items: [
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Git",
      "Jenkins"
    ]
  }
]

const industries = [
  { icon: <FaShoppingCart />, name: "E-commerce" },
  { icon: <FaRocket />, name: "Startups" },
  { icon: <FaMobile />, name: "Healthcare" },
  { icon: <FaCog />, name: "Manufacturing" },
  { icon: <FaChartLine />, name: "Finance" },
  { icon: <FaPencilAlt />, name: "Education" },
  { icon: <FaServer />, name: "Technology" },
  { icon: <FaUsers />, name: "Real Estate" }
]
