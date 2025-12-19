'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Ship, 
  Anchor, 
  Navigation, 
  Waves, 
  Globe, 
  Package,
  Shield,
  Users,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  Menu,
  X
} from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-blue-600 rounded-lg flex items-center justify-center">
                  <img src="/logo.png" alt="PT Bina Samudra Mandiri" className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">PT BINA SAMUDRA MANDIRI</h1>
                  <p className="text-xs text-gray-500">Maritime Solutions Excellence</p>
                </div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-900 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-900 transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-900 transition-colors">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-900 transition-colors">Contact</a>
            </div>

            <div className="md:hidden flex items-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-900">About</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Services</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-900 to-blue-600 rounded-full mb-6">
              <Anchor className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              PT <span className="text-blue-900">BINA SAMUDRA</span> MANDIRI
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Your trusted partner in maritime logistics and shipping solutions. 
              Delivering excellence across Indonesian waters and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white">
                <Navigation className="w-5 h-5 mr-2" />
                Explore Our Services
              </Button>
              <Button variant="outline" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-r from-blue-50 to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About <span className="text-blue-900">PT BINA SAMUDRA MANDIRI</span></h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Leading maritime solutions provider with commitment to safety, reliability, and customer satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Building Maritime Excellence</h3>
              <p className="text-gray-600 mb-6">
                PT Bina Samudra Mandiri is a premier maritime company dedicated to providing comprehensive 
                shipping and logistics solutions across Indonesia. With years of experience in the industry, 
                we have established ourselves as a trusted partner for businesses seeking reliable maritime services.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Shield className="w-8 h-8 text-blue-900" />
                  <div>
                    <h4 className="font-semibold">Safety First</h4>
                    <p className="text-sm text-gray-600">International standards</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-8 h-8 text-blue-900" />
                  <div>
                    <h4 className="font-semibold">Growth Focused</h4>
                    <p className="text-sm text-gray-600">Sustainable solutions</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <Globe className="w-12 h-12 text-blue-900 mx-auto mb-3" />
                <h4 className="font-bold text-2xl text-blue-900">50+</h4>
                <p className="text-sm text-gray-600">Ports Served</p>
              </Card>
              <Card className="p-6 text-center">
                <Package className="w-12 h-12 text-blue-900 mx-auto mb-3" />
                <h4 className="font-bold text-2xl text-blue-900">1000+</h4>
                <p className="text-sm text-gray-600">Shipments Monthly</p>
              </Card>
              <Card className="p-6 text-center">
                <Users className="w-12 h-12 text-blue-900 mx-auto mb-3" />
                <h4 className="font-bold text-2xl text-blue-900">200+</h4>
                <p className="text-sm text-gray-600">Happy Clients</p>
              </Card>
              <Card className="p-6 text-center">
                <Ship className="w-12 h-12 text-blue-900 mx-auto mb-3" />
                <h4 className="font-bold text-2xl text-blue-900">15+</h4>
                <p className="text-sm text-gray-600">Years Experience</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our <span className="text-blue-900">Services</span></h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive maritime solutions tailored to meet your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Ship className="w-6 h-6 text-blue-900" />
                </div>
                <CardTitle className="text-xl">Shipping & Freight</CardTitle>
                <CardDescription>
                  Reliable cargo shipping services across Indonesian waters with real-time tracking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Container shipping</li>
                  <li>• Bulk cargo transport</li>
                  <li>• Project cargo handling</li>
                  <li>• Door-to-door delivery</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Anchor className="w-6 h-6 text-blue-900" />
                </div>
                <CardTitle className="text-xl">Port Services</CardTitle>
                <CardDescription>
                  Comprehensive port operations and stevedoring services for efficient cargo handling
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Loading & unloading</li>
                  <li>• Warehousing</li>
                  <li>• Customs clearance</li>
                  <li>• Port agency services</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Navigation className="w-6 h-6 text-blue-900" />
                </div>
                <CardTitle className="text-xl">Logistics Solutions</CardTitle>
                <CardDescription>
                  End-to-end logistics management with advanced tracking and optimization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Supply chain management</li>
                  <li>• Route optimization</li>
                  <li>• Inventory management</li>
                  <li>• Last-mile delivery</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Contact <span className="text-yellow-400">PT BINA SAMUDRA MANDIRI</span></h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Get in touch with us for your maritime logistics needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"></textarea>
                </div>
                <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white">
                  Send Message
                </Button>
              </form>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-900 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Office Address</h4>
                    <p className="text-gray-600">
                      Perumahan Bumi Pasanggrahan Blok D Nomor 12A RT. 002 RW. 013,<br />
                      Desa/Kelurahan Ciriung, Kec. Cibinong,<br />
                      Kab. Bogor, Provinsi Jawa Barat<br />
                      Kode Pos: 16918
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-blue-900 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">085373047291</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-blue-900 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@binasamudramandiri.com</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
                  <img src="/logo.png" alt="PT Bina Samudra Mandiri" className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold">PT BINA SAMUDRA MANDIRI</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Your trusted maritime partner for shipping and logistics solutions.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Business Hours</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Monday - Friday: 08:00 - 17:00</li>
                <li>Saturday: 08:00 - 12:00</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 PT Bina Samudra Mandiri. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}