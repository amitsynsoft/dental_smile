"use client"

import React, { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, Sparkles, CheckCircle } from "lucide-react"

export function LocationAndHours() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Routine Cleaning & Exam",
    preferredTime: "Morning",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-sky-600 tracking-wider uppercase bg-sky-100/80 px-3.5 py-1.5 rounded-full">
            Visit Our Dental Office
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Schedule Your Visit in Overland Park
          </h2>
          <p className="text-slate-600 text-sm mt-3">
            Conveniently located in Medical Plaza with reserved patient parking and modern private treatment suites.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* Left Column: Hours, Location & Emergency Info */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Contact Details Card */}
            <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-xs space-y-5">
              <h3 className="font-extrabold text-slate-900 text-lg border-b border-slate-100 pb-3">
                Smile Dental
              </h3>

              <div className="flex items-start gap-3 text-xs text-slate-700">
                <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-bold">Office Address:</strong>
                  <span>450 Medical Plaza • Suite 400</span><br />
                  <span>Overland Park, KS 66211</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-700">
                <Phone className="w-4 h-4 text-sky-600 shrink-0" />
                <div>
                  <strong className="block text-slate-900 font-bold">Phone Number:</strong>
                  <a href="tel:9135550192" className="text-sky-600 font-bold hover:underline">
                    (913) 555-0192
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-700">
                <Mail className="w-4 h-4 text-sky-600 shrink-0" />
                <div>
                  <strong className="block text-slate-900 font-bold">Email:</strong>
                  <span>care@smiledental.com</span>
                </div>
              </div>
            </div>

            {/* Office Hours Schedule */}
            <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-xs">
              <div className="flex items-center gap-2 font-extrabold text-slate-900 text-base mb-4 border-b border-slate-100 pb-3">
                <Clock className="w-4 h-4 text-sky-600" />
                Office Hours
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between text-slate-700">
                  <span>Monday – Thursday:</span>
                  <span className="font-bold text-slate-900">8:00 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span>Friday:</span>
                  <span className="font-bold text-slate-900">8:00 AM – 2:00 PM</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span>Saturday & Sunday:</span>
                  <span className="font-semibold text-rose-600">Closed (24/7 Virtual Desk)</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-500">
                <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                <span>Our 24/7 Virtual Receptionist can answer questions or record your visit request anytime!</span>
              </div>
            </div>

          </div>

          {/* Right Column: Appointment Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-md">
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                Request an Appointment
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Fill out your details below and our patient coordinator will reach out to confirm your visit time.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-lg">Appointment Request Received!</h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. We received your request for <strong>{formData.service}</strong> and will call you back at <strong>{formData.phone}</strong> shortly to finalize your time.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-bold text-sky-600 hover:underline"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="(913) 555-0192"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="sarah@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Reason for Visit</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none bg-white"
                      >
                        <option value="Routine Cleaning & Exam">Routine Cleaning & Exam</option>
                        <option value="Emergency Toothache Relief">Emergency Toothache Relief</option>
                        <option value="Teeth Whitening Consultation">Teeth Whitening Consultation</option>
                        <option value="Invisalign® Clear Aligners">Invisalign® Clear Aligners</option>
                        <option value="Implants or Crown Work">Implants or Crown Work</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Time of Day</label>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      {["Morning", "Afternoon", "Anytime"].map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setFormData({ ...formData, preferredTime: time })}
                          className={`py-2 rounded-xl font-bold border transition-colors ${
                            formData.preferredTime === time
                              ? "bg-sky-600 text-white border-sky-600"
                              : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-md shadow-sky-600/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Submit Appointment Request
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
