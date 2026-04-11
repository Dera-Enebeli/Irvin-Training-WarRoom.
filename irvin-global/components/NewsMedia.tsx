'use client'

import { useState, useEffect, useRef } from 'react'

const pressLogos = [
  {
    name: 'Nairametrics',
    logo: 'https://www.irvinglobalgroup.com/wp-content/uploads/2023/11/channels4_banner.jpg',
    url: 'https://nairametrics.com/2024/08/16/irvin-global-and-investment-group-a-premier-finance-company-celebrates-its-8-years-anniversary-with-the-unveiling-of-its-corporate-headquarters-in-maitama-abuja/',
  },
  {
    name: 'Vanguard',
    logo: 'https://www.irvinglobalgroup.com/wp-content/uploads/2023/11/Vanguard.png',
    url: 'https://www.vanguardngr.com/2024/08/irvin-global-and-investment-group-celebrates-8th-anniversary-unveils-corporate-hq-in-maitama-abuja/',
  },
  {
    name: 'Punch',
    logo: 'https://www.irvinglobalgroup.com/wp-content/uploads/2024/08/punch.png',
    url: 'https://punchng.com/irvin-global-and-investment-group-a-premier-finance-company-celebrates-its-8years-anniversary-with-the-unveiling-of-its-corporate-headquarters-in-maitama-abuja/',
  },
  {
    name: 'Business Day',
    logo: 'https://www.irvinglobalgroup.com/wp-content/uploads/2024/08/businessday.png',
    url: 'https://businessday.ng/bd-weekender/sponsored-bd-weekender/article/irvin-global-and-investment-group-a-premier-finance-company-celebrates-its-8-years-anniversary-with-the-unveiling-of-its-corporate-headquarters-in-maitama-abuja/',
  },
  {
    name: 'Guardian',
    logo: 'https://www.irvinglobalgroup.com/wp-content/uploads/2023/11/Guardian_logo.png',
    url: 'https://guardian.ng/news/firm-empowers-smes-salary-earners-with-tailored-credit-facilities/',
  },
]

const coreServices = [
  {
    title: 'Term Deposit',
    description: 'We help to facilitate mergers and acquisitions, reorganizations and broker trades for both institutions and private investors. We are insured.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Loans',
    description: 'Discover the latest market trends and uncover sources of future market growth for the Consumer Lending industry in Nigeria with research.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Financial Consultancy',
    description: 'Our primary markets are young, fast growing and quickly transforming into middle-income status economies. This rapid growth creates both social and economic upheaval with their unique consequences.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
]

export default function NewsMedia() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref}>
      <section id="news" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-gold font-semibold text-sm uppercase tracking-wider mb-3 block">In The News</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
              Irving Global Group in the News
            </h2>
            <p className="text-gray-600 text-lg">
              We have been featured in leading Nigerian publications for our commitment to financial empowerment and SME growth.
            </p>
          </div>

          <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {pressLogos.map((press, index) => (
              <a
                key={press.name}
                href={press.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-50 rounded-xl p-6 flex items-center justify-center hover:bg-navy transition-all duration-300 hover:shadow-xl"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <img
                  src={press.logo}
                  alt={press.name}
                  className="max-h-12 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-gold font-semibold text-sm uppercase tracking-wider mb-3 block">Our Core Services</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
              Beyond Loans
            </h2>
            <p className="text-gray-600 text-lg">
              Below are some of the services rendered at Irvin Global Group.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <div
                key={service.title}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center mb-6 text-gold">
                  {service.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-navy mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
