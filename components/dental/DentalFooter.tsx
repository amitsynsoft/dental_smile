"use client"

import React from "react"
import { Phone, Mail, MapPin, Sparkles } from "lucide-react"

export function DentalFooter() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Clinic Branding */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-extrabold text-lg">
              <div className="w-7 h-7 rounded-lg bg-sky-500 text-white flex items-center justify-center font-bold text-xs">
                SD
              </div>
              Smile Dental
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Providing gentle, patient-centered family & cosmetic dentistry to Overland Park and surrounding communities.
            </p>
            <div className="flex items-center gap-1.5 text-emerald-400 font-medium text-[11px]">
              <Sparkles className="w-3.5 h-3.5" /> 24/7 AI Receptionist Powered by ElevenLabs
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-2">
            <h4 className="font-bold text-white text-sm mb-3">Our Services</h4>
            <ul className="space-y-1.5">
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Cleanings & Prevention</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Emergency Dental Care</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Teeth Whitening & Veneers</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Dental Implants & Crowns</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Invisalign® Clear Aligners</a></li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-2">
            <h4 className="font-bold text-white text-sm mb-3">Patient Links</h4>
            <ul className="space-y-1.5">
              <li><a href="#about" className="hover:text-sky-400 transition-colors">Meet Dr. Sarah Johnson</a></li>
              <li><a href="#insurance" className="hover:text-sky-400 transition-colors">In-Network Insurances</a></li>
              <li><a href="#insurance" className="hover:text-sky-400 transition-colors">Dental Membership Savings Plan</a></li>
              <li><a href="#reviews" className="hover:text-sky-400 transition-colors">Patient Testimonials</a></li>
              <li><a href="#contact" className="hover:text-sky-400 transition-colors">Request Appointment</a></li>
            </ul>
          </div>

          {/* Col 4: Office Contact */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-white text-sm mb-3">Contact Information</h4>
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
              450 Medical Plaza • Suite 400, Overland Park, KS
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-sky-400 shrink-0" />
              <a href="tel:9135550192" className="text-white font-bold hover:text-sky-400">
                (913) 555-0192
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-sky-400 shrink-0" />
              care@smiledental.com
            </p>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} Smile Dental. All rights reserved. Member of ADA & KDA.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">HIPAA Notice</a>
            <a href="#" className="hover:underline">Accessibility</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
