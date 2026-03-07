'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface ContactFormData {
  fullName: string
  email: string
  phone: string
  projectType: string
  location: string
  vision: string
}

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    try {
      // This can be connected to a backend API later
      console.log('Form submitted:', data)
      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      console.error('Submission error:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="block text-sm font-raleway font-semibold text-rock-black mb-2 uppercase tracking-wider">
          Full Name
        </label>
        <input
          {...register('fullName', { required: 'Full name is required' })}
          id="fullName"
          type="text"
          placeholder="Jonathan Doe"
          className="w-full px-4 py-3 border-2 border-border rounded-none focus:border-royo-burgundy focus:outline-none bg-off-white text-rock-black placeholder-shown:text-shine-brown transition-colors"
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
        )}
      </div>

      {/* Email Address */}
      <div>
        <label htmlFor="email" className="block text-sm font-raleway font-semibold text-rock-black mb-2 uppercase tracking-wider">
          Email Address
        </label>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' }
          })}
          id="email"
          type="email"
          placeholder="email@studio.com"
          className="w-full px-4 py-3 border-2 border-border rounded-none focus:border-royo-burgundy focus:outline-none bg-off-white text-rock-black placeholder-shown:text-shine-brown transition-colors"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Phone Number */}
      <div>
        <label htmlFor="phone" className="block text-sm font-raleway font-semibold text-rock-black mb-2 uppercase tracking-wider">
          Phone Number
        </label>
        <input
          {...register('phone', { required: 'Phone number is required' })}
          id="phone"
          type="tel"
          placeholder="+94 77 123 4567"
          className="w-full px-4 py-3 border-2 border-border rounded-none focus:border-royo-burgundy focus:outline-none bg-off-white text-rock-black placeholder-shown:text-shine-brown transition-colors"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>

      {/* Project Type */}
      <div>
        <label htmlFor="projectType" className="block text-sm font-raleway font-semibold text-rock-black mb-2 uppercase tracking-wider">
          Project Type
        </label>
        <select
          {...register('projectType', { required: 'Project type is required' })}
          id="projectType"
          className="w-full px-4 py-3 border-2 border-border rounded-none focus:border-royo-burgundy focus:outline-none bg-off-white text-rock-black transition-colors"
        >
          <option value="">Select project type</option>
          <option value="residential">Residential Design</option>
          <option value="commercial">Commercial Design</option>
          <option value="gypsum-art">Gypsum Art & Moulding</option>
          <option value="other">Other</option>
        </select>
        {errors.projectType && (
          <p className="text-red-500 text-sm mt-1">{errors.projectType.message}</p>
        )}
      </div>

      {/* Location */}
      <div>
        <label htmlFor="location" className="block text-sm font-raleway font-semibold text-rock-black mb-2 uppercase tracking-wider">
          Location
        </label>
        <input
          {...register('location', { required: 'Location is required' })}
          id="location"
          type="text"
          placeholder="City, Country"
          className="w-full px-4 py-3 border-2 border-border rounded-none focus:border-royo-burgundy focus:outline-none bg-off-white text-rock-black placeholder-shown:text-shine-brown transition-colors"
        />
        {errors.location && (
          <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>
        )}
      </div>

      {/* Vision Description */}
      <div>
        <label htmlFor="vision" className="block text-sm font-raleway font-semibold text-rock-black mb-2 uppercase tracking-wider">
          Describe Your Vision
        </label>
        <textarea
          {...register('vision', { required: 'Please describe your vision' })}
          id="vision"
          placeholder="Tell us about your project requirements and style preferences..."
          rows={6}
          className="w-full px-4 py-3 border-2 border-border rounded-none focus:border-royo-burgundy focus:outline-none bg-off-white text-rock-black placeholder-shown:text-shine-brown transition-colors resize-none"
        />
        {errors.vision && (
          <p className="text-red-500 text-sm mt-1">{errors.vision.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-6">
        <button
          type="submit"
          className="w-full px-8 py-4 bg-royo-burgundy text-off-white font-raleway font-semibold uppercase tracking-wider hover:bg-opacity-90 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 rounded-xl"
        >
          Send Inquiry
        </button>
      </div>

      {/* Success Message */}
      {isSubmitted && (
        <div className="p-4 bg-green-100 border-2 border-green-500 rounded-none text-green-800 text-sm font-raleway">
          Thank you for your inquiry! We'll be in touch shortly.
        </div>
      )}
    </form>
  )
}
