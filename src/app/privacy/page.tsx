'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Eye, Lock, User, Database, FileText } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-blue-600 rounded-lg flex items-center justify-center">
                  <img src="/logo.png" alt="PT Bina Samudra Mandiri" className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">PT BINA SAMUDRA MANDIRI</h1>
                  <p className="text-xs text-gray-500">Maritime Solutions Excellence</p>
                </div>
              </Link>
            </div>
            
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-900 transition-colors">Home</Link>
              <Link href="/terms" className="text-gray-700 hover:text-blue-900 transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Shield className="w-8 h-8 text-blue-900" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            Your privacy is important to <span className="text-blue-900 font-semibold">PT Bina Samudra Mandiri</span>
          </p>
          <p className="text-sm text-gray-500 mt-2">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-blue-900" />
                <span>Introduction</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                PT Bina Samudra Mandiri ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website or use our maritime and logistics services.
              </p>
              <p className="text-gray-700">
                By using our website and services, you consent to the collection and use of information 
                in accordance with this policy.
              </p>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Database className="w-5 h-5 text-blue-900" />
                <span>Information We Collect</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Personal Information</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Name and contact details (email, phone number, address)</li>
                  <li>Company information and business details</li>
                  <li>Shipping and logistics requirements</li>
                  <li>Payment and billing information</li>
                  <li>Communication records and correspondence</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Technical Information</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>IP address and device information</li>
                  <li>Browser type and operating system</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referring website information</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Your Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="w-5 h-5 text-blue-900" />
                <span>How We Use Your Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                We use your information for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Service Provision:</strong> To provide maritime and logistics services as requested</li>
                <li><strong>Communication:</strong> To respond to inquiries and send service-related updates</li>
                <li><strong>Account Management:</strong> To create and manage your account with us</li>
                <li><strong>Payment Processing:</strong> To process payments and manage billing</li>
                <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
                <li><strong>Marketing:</strong> To send information about our services (with your consent)</li>
                <li><strong>Website Improvement:</strong> To analyze usage patterns and improve our services</li>
              </ul>
            </CardContent>
          </Card>

          {/* Information Sharing */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="w-5 h-5 text-blue-900" />
                <span>Information Sharing</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                We may share your information with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Service Partners:</strong> Third-party logistics providers and shipping companies</li>
                <li><strong>Financial Institutions:</strong> Banks and payment processors for transaction processing</li>
                <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets</li>
              </ul>
              <p className="text-gray-700">
                We do not sell your personal information to third parties for marketing purposes.
              </p>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lock className="w-5 h-5 text-blue-900" />
                <span>Data Security</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                We implement appropriate security measures to protect your information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>SSL encryption for data transmission</li>
                <li>Secure servers and database protection</li>
                <li>Access controls and authentication systems</li>
                <li>Regular security audits and updates</li>
                <li>Employee training on data protection</li>
              </ul>
              <p className="text-gray-700">
                However, no method of transmission over the internet is 100% secure, and we cannot 
                guarantee absolute security.
              </p>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="w-5 h-5 text-blue-900" />
                <span>Your Rights</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Objection:</strong> Object to processing of your information</li>
              </ul>
            </CardContent>
          </Card>

          {/* Cookies Policy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Database className="w-5 h-5 text-blue-900" />
                <span>Cookies Policy</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Our website uses cookies to enhance your experience:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors use our site</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
              </ul>
              <p className="text-gray-700">
                You can control cookie settings through your browser preferences.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-blue-900" />
                <span>Contact Us</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                If you have questions about this Privacy Policy or how we handle your information, 
                please contact us:
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold text-blue-900">PT Bina Samudra Mandiri</p>
                <p className="text-gray-700">
                  Perumahan Bumi Pasanggrahan Blok D Nomor 12A RT. 002 RW. 013,<br />
                  Desa/Kelurahan Ciriung, Kec. Cibinong, Kab. Bogor, Provinsi Jawa Barat<br />
                  Kode Pos: 16918
                </p>
                <p className="text-gray-700">Email: privacy@binasamudramandiri.com</p>
                <p className="text-gray-700">Phone: 085373047291</p>
              </div>
            </CardContent>
          </Card>

          {/* Policy Updates */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-blue-900" />
                <span>Policy Updates</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. The updated policy will be 
                posted on our website with the revised "Last Updated" date. We encourage you to 
                review this policy periodically for any changes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-400">
            &copy; 2024 PT Bina Samudra Mandiri. All rights reserved.
          </p>
          <div className="mt-4 space-x-4">
            <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors">Home</Link>
            <Link href="/terms" className="text-blue-400 hover:text-blue-300 transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}