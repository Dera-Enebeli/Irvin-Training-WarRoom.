'use client'

import { useState, useEffect, useRef } from 'react'

const menuItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About Us', href: '#about', submenu: [{ label: 'FAQs', href: '#faqs' }] },
  { label: 'Our Services', href: '#services' },
  { label: 'Loans', href: '#loans' },
  { label: 'News & Media', href: '#news' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact Us', href: '#contact', submenu: [{ label: 'Career', href: '#career' }] },
]

export default function Navigation({ onInquireClick }: { onInquireClick: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false)
        setOpenSubmenu(null)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
    setOpenSubmenu(null)
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className={`bg-navy-900 text-white/80 transition-all duration-300 ${scrolled ? 'max-h-0 opacity-0' : 'max-h-20 opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between py-2 text-xs sm:text-sm gap-1 sm:gap-0">
            <div className="flex items-center gap-3 sm:gap-6 w-full sm:w-auto justify-center">
              <a href="tel:+2349078216588" className="flex items-center gap-1.5 hover:text-gold transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="hidden sm:inline">+234 907 821 6588</span>
                <span className="sm:hidden">Call</span>
              </a>
              <a href="mailto:info@irvinglobalgroup.com" className="flex items-center gap-1.5 hover:text-gold transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="hidden md:inline">info@irvinglobalgroup.com</span>
                <span className="md:hidden">Email</span>
              </a>
            </div>
            <div className="hidden lg:flex items-center gap-6">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                Maitama, FCT-Abuja
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Mon-Fri, 08:00 - 17:00
              </span>
            </div>
          </div>
        </div>
      </div>

      <nav ref={menuRef} className={`bg-navy transition-all duration-300 ${scrolled ? 'shadow-2xl' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 lg:h-20 pb-1">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('#hero')}>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg flex items-center justify-center p-1.5">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <rect x="10" y="30" width="80" height="40" fill="#002147" rx="4" />
                  <rect x="20" y="40" width="25" height="20" fill="#C5A059" rx="2" />
                  <text x="50" y="58" textAnchor="middle" fill="#002147" fontSize="14" fontWeight="bold">IRVIN</text>
                  <rect x="10" y="75" width="80" height="5" fill="#C5A059" rx="2" />
                </svg>
              </div>
              <div className="hidden sm:block">
                <span className="text-white font-serif font-bold text-lg tracking-wide">Irvin Global</span>
                <span className="block text-gold text-xs font-medium -mt-1">& Investment Group</span>
              </div>
            </div>

            <div className="hidden xl:flex items-center gap-1">
              {menuItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.submenu ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setOpenSubmenu(item.label)}
                      onMouseLeave={() => setOpenSubmenu(null)}
                    >
                      <button className="flex items-center gap-1 px-3 lg:px-4 py-2 text-white/90 hover:text-gold transition-colors text-sm font-medium">
                        {item.label}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openSubmenu === item.label && (
                        <div className="absolute top-full left-0 bg-navy shadow-xl rounded-b-lg overflow-hidden min-w-[160px] z-50">
                          {item.submenu.map((sub) => (
                            <button
                              key={sub.label}
                              onClick={() => scrollToSection(sub.href)}
                              className="block w-full text-left px-4 py-3 text-white/90 hover:text-gold hover:bg-white/5 transition-colors text-sm"
                            >
                              {sub.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="px-3 lg:px-4 py-2 text-white/90 hover:text-gold transition-colors text-sm font-medium"
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={onInquireClick}
                className="bg-gold text-navy px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm hover:bg-gold-light transition-all hover:scale-105 shadow-lg shadow-gold/20"
              >
                <span className="hidden sm:inline">Get Started</span>
                <span className="sm:hidden">Apply</span>
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className={`xl:hidden absolute left-0 right-0 bg-navy border-t border-white/10 transition-all duration-300 ${mobileMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
            {menuItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => {
                    if (item.submenu) {
                      setOpenSubmenu(openSubmenu === item.label ? null : item.label)
                    } else {
                      scrollToSection(item.href)
                    }
                  }}
                  className="flex items-center justify-between w-full text-white/90 hover:text-gold py-3 px-4 text-base font-medium hover:bg-white/5 rounded-lg transition-colors"
                >
                  <span>{item.label}</span>
                  {item.submenu && (
                    <svg className={`w-5 h-5 transition-transform duration-200 ${openSubmenu === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
                {item.submenu && openSubmenu === item.label && (
                  <div className="pl-6 space-y-1 pb-2">
                    {item.submenu.map((sub) => (
                      <button
                        key={sub.label}
                        onClick={() => scrollToSection(sub.href)}
                        className="block w-full text-left text-white/70 hover:text-gold py-2 px-4 text-sm hover:bg-white/5 rounded-lg transition-colors"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="pt-4 pb-2 border-t border-white/10 mt-4 space-y-3">
              <div className="px-4 space-y-2">
                <a href="tel:+2349078216588" className="flex items-center gap-3 text-white/70 text-sm">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +234 907 821 6588
                </a>
                <a href="mailto:info@irvinglobalgroup.com" className="flex items-center gap-3 text-white/70 text-sm">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@irvinglobalgroup.com
                </a>
                <p className="flex items-center gap-3 text-white/70 text-sm">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  Maitama, FCT-Abuja
                </p>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  onInquireClick()
                }}
                className="w-full bg-gold text-navy px-5 py-3 rounded-lg font-semibold text-base hover:bg-gold-light transition-colors mx-4"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
