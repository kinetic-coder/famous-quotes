import { ArrowRight, CheckCircle, Mail, Phone, MapPin, Code, Smartphone, Globe, Zap, Users, Award } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <Code className="h-6 w-6" />
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">TechCorp</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Building the 
                <span className="text-blue-600"> Future</span> of 
                <span className="text-purple-600"> Technology</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We create innovative digital solutions that transform businesses and drive growth. 
                Our expert team delivers cutting-edge technology with exceptional user experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all">
                  View Our Work
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                      Active Projects
                    </div>
                    <div className="text-gray-500 text-sm">24/7</div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Web Development</span>
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full w-14"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Mobile Apps</span>
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-600 h-2 rounded-full w-12"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Cloud Solutions</span>
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full w-10"></div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="text-2xl font-bold text-gray-900">500+</div>
                    <div className="text-gray-500 text-sm">Projects Completed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive technology solutions to help your business thrive in the digital age.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-blue-600 text-white p-3 rounded-xl w-fit mb-6">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Web Development</h3>
              <p className="text-gray-600 mb-6">
                Custom websites and web applications built with modern technologies for optimal performance and user experience.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Responsive Design
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  SEO Optimization
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Fast Loading
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-purple-600 text-white p-3 rounded-xl w-fit mb-6">
                <Smartphone className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile Apps</h3>
              <p className="text-gray-600 mb-6">
                Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  iOS & Android
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Cross-Platform
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  App Store Ready
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-green-600 text-white p-3 rounded-xl w-fit mb-6">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Solutions</h3>
              <p className="text-gray-600 mb-6">
                Scalable cloud infrastructure and deployment solutions to ensure your applications perform at their best.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Auto Scaling
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  High Availability
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Security First
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About TechCorp</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With over a decade of experience in the technology industry, we&apos;ve helped hundreds of businesses 
                transform their operations through innovative digital solutions. Our team of expert developers, 
                designers, and strategists work together to deliver exceptional results.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                  <div className="text-gray-600">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Expert Team</h3>
                </div>
                <p className="text-gray-600">
                  Our team consists of senior developers, UX/UI designers, and project managers with extensive experience.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Quality Assurance</h3>
                </div>
                <p className="text-gray-600">
                  We follow industry best practices and rigorous testing procedures to ensure the highest quality deliverables.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <Zap className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Fast Delivery</h3>
                </div>
                <p className="text-gray-600">
                  We use agile methodologies to deliver projects on time without compromising on quality or functionality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
                          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to start your next project? Contact us today and let&apos;s discuss how we can help bring your vision to life.
              </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-xl mr-4">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-600 mb-2">Send us an email and we&apos;ll respond within 24 hours.</p>
                  <a href="mailto:contact@techcorp.com" className="text-blue-600 hover:text-blue-700 font-medium">
                    contact@techcorp.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-100 text-purple-600 p-3 rounded-xl mr-4">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                  <p className="text-gray-600 mb-2">Speak directly with our team for immediate assistance.</p>
                  <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-700 font-medium">
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 text-green-600 p-3 rounded-xl mr-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                  <p className="text-gray-600 mb-2">Come visit our office for a face-to-face consultation.</p>
                  <p className="text-gray-700">
                    123 Technology Street<br />
                    San Francisco, CA 94102
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 text-white p-2 rounded-lg">
                  <Code className="h-6 w-6" />
                </div>
                <span className="ml-3 text-xl font-bold">TechCorp</span>
              </div>
              <p className="text-gray-400 mb-4">
                Building the future of technology with innovative solutions and exceptional service.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mobile Apps</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cloud Solutions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Consulting</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>123 Technology Street</p>
                <p>San Francisco, CA 94102</p>
                <p>+1 (234) 567-8900</p>
                <p>contact@techcorp.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 TechCorp. All rights reserved. Built with Next.js and deployed on Vercel.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
