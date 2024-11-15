import { motion } from 'framer-motion'
import { FaLightbulb, FaHandshake, FaRocket, FaHeart } from 'react-icons/fa'
import ScrollRevealSection from '../components/ScrollRevealSection'
import ProcessTimeline from '../components/ProcessTimeline'

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3"
            alt="About Us"
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
            <h1 className="text-5xl font-bold mb-4">Our Story</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Building digital excellence since 2013
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollRevealSection>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-600">
                  To empower businesses through innovative digital solutions that drive growth and success. 
                  We're committed to delivering excellence in every project, helping our clients stay ahead 
                  in the digital landscape.
                </p>
              </div>
            </ScrollRevealSection>

            <ScrollRevealSection delay={0.2}>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-gray-600">
                  To be the leading force in digital transformation, recognized globally for our innovative 
                  solutions and commitment to client success. We aim to shape the future of technology 
                  while maintaining our core values of excellence and integrity.
                </p>
              </div>
            </ScrollRevealSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-gray-50">
        <div className="container">
          <ScrollRevealSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
          </ScrollRevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollRevealSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white p-6 rounded-xl shadow-lg text-center"
                >
                  <div className="text-4xl text-indigo-600 mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              </ScrollRevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <ScrollRevealSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The talented people behind our success
              </p>
            </div>
          </ScrollRevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <ScrollRevealSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-indigo-600 mb-2">{member.position}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </motion.div>
              </ScrollRevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-gray-50">
        <div className="container">
          <ScrollRevealSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A decade of innovation and growth
              </p>
            </div>
          </ScrollRevealSection>

          <ScrollRevealSection>
            <ProcessTimeline steps={journey} />
          </ScrollRevealSection>
        </div>
      </section>
    </div>
  )
}

const values = [
  {
    icon: <FaLightbulb />,
    title: "Innovation",
    description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions."
  },
  {
    icon: <FaHandshake />,
    title: "Integrity",
    description: "We maintain the highest standards of honesty and transparency in all our dealings."
  },
  {
    icon: <FaRocket />,
    title: "Excellence",
    description: "We strive for excellence in every project, ensuring the highest quality deliverables."
  },
  {
    icon: <FaHeart />,
    title: "Client Focus",
    description: "Our clients' success is our success. We're committed to exceeding expectations."
  }
]

const team = [
  {
    name: "John Smith",
    position: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3",
    bio: "With 15+ years of experience in tech, John leads our vision and strategy."
  },
  {
    name: "Sarah Johnson",
    position: "Technical Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3",
    bio: "Sarah ensures technical excellence across all our projects."
  },
  {
    name: "Michael Chen",
    position: "Creative Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
    bio: "Michael brings creativity and innovation to every design challenge."
  },
  {
    name: "Emily Brown",
    position: "Project Manager",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3",
    bio: "Emily ensures smooth project delivery and client satisfaction."
  },
  {
    name: "David Wilson",
    position: "Lead Developer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3",
    bio: "David leads our development team with technical expertise."
  },
  {
    name: "Lisa Zhang",
    position: "UX Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3",
    bio: "Lisa creates intuitive and engaging user experiences."
  }
]

const journey = [
  {
    title: "2013",
    description: "Founded as a small web development studio"
  },
  {
    title: "2015",
    description: "Expanded services to include mobile app development"
  },
  {
    title: "2017",
    description: "Opened new office and grew to 20+ team members"
  },
  {
    title: "2019",
    description: "Launched enterprise solutions division"
  },
  {
    title: "2021",
    description: "Expanded globally with international clients"
  },
  {
    title: "2023",
    description: "Celebrating 10 years of digital excellence"
  }
]
