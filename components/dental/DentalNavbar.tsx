"use client"

import React, { useState, useEffect } from "react"
import { Phone, Calendar, Menu, X, ChevronRight, Sparkles } from "lucide-react"

export function DentalNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "About Doctor", href: "#about" },
    { label: "Insurance", href: "#insurance" },
    { label: "Patient Reviews", href: "#reviews" },
    { label: "Location & Hours", href: "#contact" },
  ]

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs py-3"
          : "bg-white border-b border-slate-100 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Practice Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-600 via-blue-600 to-teal-400 p-0.5 shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6 text-sky-600">
                  <path d="M16 4C10.5 4 7 7.5 7 12C7 16.5 9 20.5 11 24C12 25.8 13.5 28 15 28C15.5 28 16 27.5 16 26V20C16 19.4 16.4 19 17 19H17.5C18.1 19 18.5 19.4 18.5 20V26C18.5 27.5 19 28 19.5 28C21 28 22.5 25.8 23.5 24C25.5 20.5 27.5 16.5 27.5 12C27.5 7.5 24 4 18.5 4H16Z" fill="currentColor"/>
                  <path d="M11 13C13 16 19 16 21 13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 leading-none">
                Smile <span className="text-sky-600">Dental</span>
              </span>
              <span className="text-[11px] text-slate-500 font-medium mt-1">
                Gentle Family & Cosmetic Dentistry
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="text-sm font-semibold text-slate-700 hover:text-sky-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:9135550192"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-700 hover:text-sky-600 transition-colors"
            >
              <Phone className="w-4 h-4 text-sky-600" />
              (913) 555-0192
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white font-semibold rounded-full px-5 py-2.5 text-sm shadow-md shadow-sky-600/20 transition-all hover:scale-[1.02]"
            >
              <Calendar className="w-4 h-4" />
              Request Visit
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 mt-3 shadow-xl">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="flex items-center justify-between px-4 py-3 text-base font-semibold text-slate-700 hover:bg-sky-50 rounded-xl transition-colors"
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-slate-200 flex flex-col gap-2">
              <a
                href="tel:9135550192"
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-slate-800 bg-slate-100 rounded-xl"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                Call (913) 555-0192
              </a>
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "#contact")}
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-white bg-sky-600 rounded-xl shadow-md"
              >
                <Calendar className="w-4 h-4" />
                Request Visit Online
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
