import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled || location.pathname !== '/' ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className={`text-2xl font-bold ${
              isScrolled || location.pathname !== '/' ? 'text-gray-900' : 'text-white'
            }`}>
              CodeWhiz
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`nav-link ${
              isScrolled || location.pathname !== '/' ? 'text-gray-900' : 'text-white'
            }`}>
              Home
            </Link>
            <Link to="/services" className={`nav-link ${
              isScrolled || location.pathname !== '/' ? 'text-gray-900' : 'text-white'
            }`}>
              Services
            </Link>
            <Link to="/portfolio" className={`nav-link ${
              isScrolled || location.pathname !== '/' ? 'text-gray-900' : 'text-white'
            }`}>
              Portfolio
            </Link>
            <Link to="/about" className={`nav-link ${
              isScrolled || location.pathname !== '/' ? 'text-gray-900' : 'text-white'
            }`}>
              About
            </Link>
            <Link to="/blog" className={`nav-link ${
              isScrolled || location.pathname !== '/' ? 'text-gray-900' : 'text-white'
            }`}>
              Blog
            </Link>
            <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>

          <button 
            className={`md:hidden ${
              isScrolled || location.pathname !== '/' ? 'text-gray-900' : 'text-white'
            }`} 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <Link to="/" className="block nav-link">Home</Link>
            <Link to="/services" className="block nav-link">Services</Link>
            <Link to="/portfolio" className="block nav-link">Portfolio</Link>
            <Link to="/about" className="block nav-link">About</Link>
            <Link to="/blog" className="block nav-link">Blog</Link>
            <Link to="/contact" className="block nav-link">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  )
}
