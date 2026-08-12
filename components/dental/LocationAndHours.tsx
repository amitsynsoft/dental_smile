"use client"

import React, { useState } from "react"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Sparkles,
  CheckCircle,
} from "lucide-react"

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
    <section id="contact" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-sky-100/80 px-3.5 py-1.5 text-xs font-bold tracking-wider text-sky-600 uppercase">
            Visit Our Dental Office
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Schedule Your Visit in Overland Park
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Conveniently located in Medical Plaza with reserved patient parking
            and modern private treatment suites.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-12">
          {/* Left Column: Hours, Location & Emergency Info */}
          <div className="flex flex-col justify-between gap-6 lg:col-span-5">
            {/* Contact Details Card */}
            <div className="space-y-5 rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs">
              <h3 className="border-b border-slate-100 pb-3 text-lg font-extrabold text-slate-900">
                Smiles Dental
              </h3>

              <div className="flex items-start gap-3 text-xs text-slate-700">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" />
                <div>
                  <strong className="block font-bold text-slate-900">
                    Office Address:
                  </strong>
                  <span>450 Medical Plaza • Suite 400</span>
                  <br />
                  <span>Overland Park, KS 66211</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-700">
                <Phone className="h-4 w-4 shrink-0 text-sky-600" />
                <div>
                  <strong className="block font-bold text-slate-900">
                    Phone Number:
                  </strong>
                  <a
                    href="tel:9135550192"
                    className="font-bold text-sky-600 hover:underline"
                  >
                    (913) 555-0192
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-700">
                <Mail className="h-4 w-4 shrink-0 text-sky-600" />
                <div>
                  <strong className="block font-bold text-slate-900">
                    Email:
                  </strong>
                  <span>care@smiledental.com</span>
                </div>
              </div>
            </div>

            {/* Office Hours Schedule */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs">
              <div className="mb-4 flex items-center gap-2 border-b border-slate-100 pb-3 text-base font-extrabold text-slate-900">
                <Clock className="h-4 w-4 text-sky-600" />
                Office Hours
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between text-slate-700">
                  <span>Monday – Thursday:</span>
                  <span className="font-bold text-slate-900">
                    8:00 AM – 5:00 PM
                  </span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span>Friday:</span>
                  <span className="font-bold text-slate-900">
                    8:00 AM – 2:00 PM
                  </span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span>Saturday & Sunday:</span>
                  <span className="font-semibold text-rose-600">
                    Closed (24/7 Virtual Desk)
                  </span>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-3 text-[11px] text-slate-500">
                <Sparkles className="h-3.5 w-3.5 text-sky-600" />
                <span>
                  Our 24/7 Virtual Receptionist can answer questions or record
                  your visit request anytime!
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Request Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200/90 bg-white p-8 shadow-md">
              <h3 className="mb-2 text-xl font-extrabold text-slate-900">
                Request an Appointment
              </h3>
              <p className="mb-6 text-xs text-slate-500">
                Fill out your details below and our patient coordinator will
                reach out to confirm your visit time.
              </p>

              {submitted ? (
                <div className="space-y-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-extrabold text-slate-900">
                    Appointment Request Received!
                  </h4>
                  <p className="mx-auto max-w-md text-xs text-slate-600">
                    Thank you, <strong>{formData.name}</strong>. We received
                    your request for <strong>{formData.service}</strong> and
                    will call you back at <strong>{formData.phone}</strong>{" "}
                    shortly to finalize your time.
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
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-bold text-slate-700">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-bold text-slate-700">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(913) 555-0192"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-bold text-slate-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="sarah@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-bold text-slate-700">
                        Reason for Visit
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      >
                        <option value="Routine Cleaning & Exam">
                          Routine Cleaning & Exam
                        </option>
                        <option value="Emergency Toothache Relief">
                          Emergency Toothache Relief
                        </option>
                        <option value="Teeth Whitening Consultation">
                          Teeth Whitening Consultation
                        </option>
                        <option value="Invisalign® Clear Aligners">
                          Invisalign® Clear Aligners
                        </option>
                        <option value="Implants or Crown Work">
                          Implants or Crown Work
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-bold text-slate-700">
                      Preferred Time of Day
                    </label>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      {["Morning", "Afternoon", "Anytime"].map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() =>
                            setFormData({ ...formData, preferredTime: time })
                          }
                          className={`rounded-xl border py-2 font-bold transition-colors ${
                            formData.preferredTime === time
                              ? "border-sky-600 bg-sky-600 text-white"
                              : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 py-3.5 text-sm font-bold text-white shadow-md shadow-sky-600/20 transition-all hover:bg-sky-500"
                  >
                    <Send className="h-4 w-4" />
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
