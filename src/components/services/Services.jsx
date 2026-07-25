import React from 'react'

import ServiceCard from './ServiceCard'
import { services } from '../../data/services'

const Services = () => {
  return (
    <section id="services" className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-4">Services</h2>
        <p className="text-gray-300 mb-8">I build and maintain web apps â€” here are the services I offer.</p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

