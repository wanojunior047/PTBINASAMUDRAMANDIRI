'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, Shield, AlertTriangle, Scale, Clock, DollarSign, Users, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditions() {
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
              <Link href="/privacy" className="text-gray-700 hover:text-blue-900 transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <FileText className="w-8 h-8 text-blue-900" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
          <p className="text-lg text-gray-600">
            Terms of service for <span className="text-blue-900 font-semibold">PT Bina Samudra Mandiri</span>
          </p>
          <p className="text-sm text-gray-500 mt-2">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        <div className="space-y-8">
          {/* Agreement to Terms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-blue-900" />
                <span>Agreement to Terms</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Welcome to PT Bina Samudra Mandiri. These Terms and Conditions ("Terms") govern your use 
                of our maritime and logistics services, website, and any related products or services 
                (collectively, the "Services").
              </p>
              <p className="text-gray-700">
                By accessing or using our Services, you agree to be bound by these Terms. If you 
                disagree with any part of these terms, then you may not access the Service.
              </p>
            </CardContent>
          </Card>

          {/* Services Description */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-900" />
                <span>Services Description</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                PT Bina Samudra Mandiri provides the following maritime and logistics services:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Shipping Services:</strong> Container shipping, bulk cargo transport, and project cargo handling</li>
                <li><strong>Port Services:</strong> Loading/unloading, warehousing, customs clearance, and port agency services</li>
                <li><strong>Logistics Solutions:</strong> Supply chain management, route optimization, and last-mile delivery</li>
                <li><strong>Consultation:</strong> Maritime logistics consulting and advisory services</li>
              </ul>
            </CardContent>
          </Card>

          {/* Client Responsibilities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-900" />
                <span>Client Responsibilities</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                As a client of PT Bina Samudra Mandiri, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Provide accurate and complete information for shipping documentation</li>
                <li>Ensure all cargo complies with applicable laws and regulations</li>
                <li>Pay all fees and charges in accordance with agreed payment terms</li>
                <li>Properly package and label shipments according to industry standards</li>
                <li>Obtain necessary permits and licenses for restricted or regulated cargo</li>
                <li>Cooperate with customs and other regulatory authorities</li>
              </ul>
            </CardContent>
          </Card>

          {/* Payment Terms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5 text-blue-900" />
                <span>Payment Terms</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Payment Schedule</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>50% deposit required upon service confirmation</li>
                  <li>50% balance due before cargo release</li>
                  <li>Payment methods: Bank transfer, wire transfer, or corporate check</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Late Payment</h3>
                <p className="text-gray-700">
                  Late payments will incur a penalty of 2% per month on the outstanding amount. 
                  Services may be suspended for accounts with overdue payments.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Additional Charges</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Customs duties and taxes (as applicable)</li>
                  <li>Storage fees for cargo exceeding free time limits</li>
                  <li>Demurrage and detention charges</li>
                  <li>Additional handling charges for special cargo requirements</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-blue-900" />
                <span>Limitation of Liability</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                PT Bina Samudra Mandiri's liability is limited as follows:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Cargo Value:</strong> Liability limited to USD 100 per package or actual value, whichever is lower</li>
                <li><strong>Indirect Damages:</strong> Not liable for consequential, indirect, or punitive damages</li>
                <li><strong>Force Majeure:</strong> Not liable for delays or losses due to acts of nature, war, strikes, or government actions</li>
                <li><strong>Third-Party Actions:</strong> Not responsible for actions of independent contractors, carriers, or government authorities</li>
              </ul>
            </CardContent>
          </Card>

          {/* Insurance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-900" />
                <span>Insurance</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Regarding insurance coverage:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Clients are responsible for obtaining cargo insurance</li>
                <li>We can arrange insurance coverage upon request (additional charges apply)</li>
                <li>Claims must be filed within 30 days of delivery or loss notification</li>
                <li>Proof of value and documentation required for all insurance claims</li>
              </ul>
            </CardContent>
          </Card>

          {/* Cancellation and Refunds */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-900" />
                <span>Cancellation and Refunds</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Cancellation Policy</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>More than 7 days notice: Full refund minus 10% administrative fee</li>
                  <li>3-7 days notice: 50% refund of total service cost</li>
                  <li>Less than 3 days notice: No refund</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Refund Process</h3>
                <p className="text-gray-700">
                  Refunds will be processed within 14 business days of cancellation approval. 
                  Refunds will be issued using the original payment method.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Dispute Resolution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Scale className="w-5 h-5 text-blue-900" />
                <span>Dispute Resolution</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Any disputes arising from these Terms or our Services shall be resolved as follows:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li><strong>Negotiation:</strong> Parties shall first attempt to resolve disputes through good faith negotiation</li>
                <li><strong>Mediation:</strong> If negotiation fails, disputes will be submitted to mediation in Bogor, Indonesia</li>
                <li><strong>Arbitration:</strong> Unresolved disputes will be settled through binding arbitration under Indonesian law</li>
                <li><strong>Governing Law:</strong> These Terms are governed by the laws of the Republic of Indonesia</li>
              </ol>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-blue-900" />
                <span>Intellectual Property</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                All content, trademarks, service marks, logos, and intellectual property on our 
                website and materials belong to PT Bina Samudra Mandiri or our licensors. 
                You may not use, copy, reproduce, or distribute any of our intellectual property 
                without prior written consent.
              </p>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-blue-900" />
                <span>Termination</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                We may terminate or suspend your account and bar access to the Service immediately, 
                without prior notice or liability, under our sole discretion, for any reason whatsoever, 
                including without limitation if you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Breach the Terms and Conditions</li>
                <li>Provide fraudulent or false information</li>
                <li>Engage in illegal or prohibited activities</li>
                <li>Fail to pay for services rendered</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-900" />
                <span>Contact Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                For questions about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold text-blue-900">PT Bina Samudra Mandiri</p>
                <p className="text-gray-700">
                  Perumahan Bumi Pasanggrahan Blok D Nomor 12A RT. 002 RW. 013,<br />
                  Desa/Kelurahan Ciriung, Kec. Cibinong, Kab. Bogor, Provinsi Jawa Barat<br />
                  Kode Pos: 16918
                </p>
                <p className="text-gray-700">Email: legal@binasamudramandiri.com</p>
                <p className="text-gray-700">Phone: 085373047291</p>
              </div>
            </CardContent>
          </Card>

          {/* Terms Updates */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-900" />
                <span>Terms Updates</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                We reserve the right to modify these Terms at any time. Changes will be effective 
                immediately upon posting on our website. Your continued use of our Services after 
                any changes constitutes acceptance of the new Terms.
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
            <Link href="/privacy" className="text-blue-400 hover:text-blue-300 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}