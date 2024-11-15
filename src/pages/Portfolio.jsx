import { motion } from 'framer-motion'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import ScrollRevealSection from '../components/ScrollRevealSection'
import { FaLink, FaGithub } from 'react-icons/fa'

export default function Portfolio() {
  const [filter, setFilter] = useState('all')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3"
            alt="Portfolio"
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
            <h1 className="text-5xl font-bold mb-4">Our Work</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Explore our latest projects and success stories
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Filters */}
      <section className="py-8 bg-gray-50">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            {['all', 'web', 'mobile', 'ecommerce', 'healthcare', 'education'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full transition-all ${
                  filter === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section" ref={ref}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ScrollRevealSection key={index} delay={index * 0.1}>
                <motion.div
                  layout
                  className="card group overflow-hidden"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6 w-full">
                        <div className="flex justify-between items-center">
                          <span className="text-white text-sm font-medium">
                            {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                          </span>
                          <div className="flex gap-3">
                            {project.liveUrl && (
                              <a 
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-indigo-400"
                              >
                                <FaLink />
                              </a>
                            )}
                            {project.githubUrl && (
                              <a 
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-indigo-400"
                              >
                                <FaGithub />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Key Results:</h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {project.results.map((result, i) => (
                          <li key={i}>{result}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </ScrollRevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section bg-gray-50">
        <div className="container">
          <ScrollRevealSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Featured Case Studies</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dive deep into our most impactful projects
              </p>
            </div>
          </ScrollRevealSection>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <ScrollRevealSection key={index}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative h-64 md:h-auto">
                      <img 
                        src={study.image} 
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <span className="text-sm text-indigo-600 font-medium">
                        {study.category}
                      </span>
                      <h3 className="text-2xl font-bold mt-2 mb-4">{study.title}</h3>
                      <p className="text-gray-600 mb-6">{study.description}</p>
                      <div className="mb-6">
                        <h4 className="font-semibold mb-2">Challenge:</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      <div className="mb-6">
                        <h4 className="font-semibold mb-2">Solution:</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          <span className="font-semibold mr-2">ROI:</span>
                          <span className="text-green-600">{study.roi}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="font-semibold mr-2">Timeline:</span>
                          <span>{study.timeline}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollRevealSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const projects = [
  {
    title: "MediConnect Pro",
    description: "Healthcare management platform for clinics and hospitals",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3",
    category: "healthcare",
    results: [
      "50% reduction in appointment scheduling time",
      "30% increase in patient satisfaction",
      "Streamlined medical records management"
    ],
    technologies: ["React", "Node.js", "MongoDB", "WebRTC", "AWS"],
    liveUrl: "https://mediconnect.example.com",
    githubUrl: "https://github.com/example/mediconnect"
  },
  {
    title: "EduLearn LMS",
    description: "Comprehensive learning management system",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3",
    category: "education",
    results: [
      "10,000+ active students",
      "95% course completion rate",
      "4.8/5 average user rating"
    ],
    technologies: ["Vue.js", "Python", "PostgreSQL", "Redis"],
    liveUrl: "https://edulearn.example.com"
  },
  {
    title: "ShopSmart",
    description: "Feature-rich e-commerce platform",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3",
    category: "ecommerce",
    results: [
      "200% increase in online sales",
      "40% higher conversion rate",
      "Reduced cart abandonment by 25%"
    ],
    technologies: ["Next.js", "Stripe", "MongoDB", "Redis"],
    liveUrl: "https://shopsmart.example.com"
  },
  {
    title: "TravelBuddy",
    description: "Mobile app for travel planning and booking",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3",
    category: "mobile",
    results: [
      "100,000+ app downloads",
      "4.9/5 App Store rating",
      "35% increase in bookings"
    ],
    technologies: ["React Native", "Node.js", "MongoDB", "AWS"],
    liveUrl: "https://travelbuddy.example.com"
  },
  {
    title: "RestaurantPro",
    description: "Restaurant management and ordering system",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3",
    category: "web",
    results: [
      "45% increase in online orders",
      "Reduced order processing time by 60%",
      "Improved inventory management"
    ],
    technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
    liveUrl: "https://restaurantpro.example.com"
  },
  {
    title: "FitTrack",
    description: "Fitness tracking and workout planning app",
    image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3",
    category: "mobile",
    results: [
      "50,000+ active users",
      "85% user retention rate",
      "4.8/5 average rating"
    ],
    technologies: ["React Native", "Firebase", "Node.js"],
    liveUrl: "https://fittrack.example.com"
  }
]

const caseStudies = [
  {
    title: "Healthcare Revolution with MediConnect Pro",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3",
    description: "Transforming patient care through digital innovation",
    challenge: "The client needed to streamline their healthcare operations and improve patient experience while ensuring HIPAA compliance and data security.",
    solution: "We developed a comprehensive healthcare platform with electronic health records, telemedicine capabilities, and automated appointment scheduling.",
    roi: "+150% efficiency",
    timeline: "6 months"
  },
  {
    title: "E-commerce Success with ShopSmart",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3",
    description: "Boosting online sales through innovative e-commerce solutions",
    challenge: "The client wanted to increase their online presence and streamline their e-commerce operations to handle growing customer demand.",
    solution: "We built a scalable e-commerce platform with advanced features like AI-powered recommendations and real-time inventory management.",
    roi: "+200% sales",
    timeline: "4 months"
  },
  {
    title: "Educational Innovation with EduLearn",
    category: "Education",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3",
    description: "Revolutionizing online learning through technology",
    challenge: "The client needed a robust learning management system to support their transition to online education during the pandemic.",
    solution: "We created an interactive learning platform with live classes, assessment tools, and progress tracking capabilities.",
    roi: "+95% engagement",
    timeline: "5 months"
  }
]
