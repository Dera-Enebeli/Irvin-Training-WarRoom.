'use client'

import { useState, useEffect, useRef } from 'react'

const services = [
  {
    title: 'Asset Financing',
    description: 'Acquire assets without straining your cash flow. We provide flexible financing solutions for equipment, vehicles, and other business assets.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    features: ['Equipment financing', 'Vehicle loans', 'Flexible repayment terms', 'Competitive rates'],
  },
  {
    title: 'Payday Loans',
    description: 'Quick access to funds for urgent personal needs. Designed for salary earners in private establishments, structured against your salary.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    features: ['Up to 273 days tenure', '6% interest rate', 'Salary-based amount', 'Quick disbursement'],
  },
  {
    title: 'SME Loans',
    description: 'Fuel your business growth with working capital, project financing, and LPO funding. Designed for small and medium enterprises.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    features: ['Working capital', 'Project financing', 'LPO funding', 'Flexible collateral'],
  },
  {
    title: 'Contract Financing',
    description: 'Execute government and corporate contracts with ease. Get the funding you need to fulfill large orders and contracts.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    features: ['Contract execution funds', 'Purchase order financing', 'Supply chain support', 'Competitive rates'],
  },
  {
    title: 'Payroll Loans',
    description: 'Tailored for public sector employees. Access funds with personal guarantee and flexible repayment structured against business turnover.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    features: ['Public sector employees', 'Personal guarantee', '180 days tenure', 'Flexible repayment'],
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
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
      { threshold: 0.2 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
        <div className="text-gold group-hover:text-navy transition-colors duration-300">
          {service.icon}
        </div>
      </div>

      <h3 className="font-serif text-xl font-bold text-navy mb-4">{service.title}</h3>
      
      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

      <ul className="space-y-3">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-gray-600 text-sm">
            <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider mb-4 block">Our Services</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We offer a wide range of financial services designed to meet your personal and business needs. 
            Our experienced team is committed to helping you achieve your financial goals.
          </p>
        </div>

        <div className="flex flex-col items-center gap-8 lg:gap-10">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl">
            <ServiceCard service={services[0]} index={0} />
            <ServiceCard service={services[1]} index={1} />
            <ServiceCard service={services[2]} index={2} />
          </div>
          
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl">
            <ServiceCard service={services[3]} index={3} />
            <ServiceCard service={services[4]} index={4} />
          </div>
        </div>
      </div>
    </section>
  )
}
