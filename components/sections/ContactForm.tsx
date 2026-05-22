'use client'

import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { CheckCircle, RefreshCcw } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const successCardRef = useRef<HTMLDivElement>(null)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>()

  const scrollToSuccess = () => {
    if (successCardRef.current) {
      const element = successCardRef.current
      const offset = 100 // Adjust this value to scroll "more up"
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Submission failed')
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitError('We could not send your message right now. Please try again in a moment.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReset = () => {
    reset()
    setIsSubmitted(false)
    setSubmitError('')
  }

  return (
    <div className="relative flex items-start pt-12 md:pt-0 min-h-[600px]">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form
            key="contact-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit(onSubmit)}
            className="w-full space-y-6"
          >
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
                disabled={isSubmitting}
                className="w-full px-4 py-3 border-2 border-border rounded-none focus:border-royo-burgundy focus:outline-none bg-off-white text-rock-black placeholder-shown:text-shine-brown transition-colors"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
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
                disabled={isSubmitting}
                className="w-full px-4 py-3 border-2 border-border rounded-none focus:border-royo-burgundy focus:outline-none bg-off-white text-rock-black placeholder-shown:text-shine-brown transition-colors"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-sm font-raleway font-semibold text-rock-black mb-2 uppercase tracking-wider">
                Email Address (Optional)
              </label>
              <input
                {...register('email', {
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Invalid email'
                  }
                })}
                id="email"
                type="email"
                placeholder="email@studio.com"
                disabled={isSubmitting}
                className="w-full px-4 py-3 border-2 border-border rounded-none focus:border-royo-burgundy focus:outline-none bg-off-white text-rock-black placeholder-shown:text-shine-brown transition-colors"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Project Type */}
            <div>
              <label htmlFor="projectType" className="block text-sm font-raleway font-semibold text-rock-black mb-2 uppercase tracking-wider">
                Project Type (Optional)
              </label>
              <select
                {...register('projectType')}
                id="projectType"
                disabled={isSubmitting}
                className="w-full px-4 py-3 border-2 border-border rounded-none focus:border-royo-burgundy focus:outline-none bg-off-white text-rock-black transition-colors"
              >
                <option value="">Select project type</option>
                <option value="residential">Residential Design</option>
                <option value="commercial">Commercial Design</option>
                <option value="gypsum-art">Gypsum Art & Moulding</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-sm font-raleway font-semibold text-rock-black mb-2 uppercase tracking-wider">
                Location (Optional)
              </label>
              <input
                {...register('location')}
                id="location"
                type="text"
                placeholder="City, Country"
                disabled={isSubmitting}
                className="w-full px-4 py-3 border-2 border-border rounded-none focus:border-royo-burgundy focus:outline-none bg-off-white text-rock-black placeholder-shown:text-shine-brown transition-colors"
              />
            </div>

            {/* Vision Description */}
            <div>
              <label htmlFor="vision" className="block text-sm font-raleway font-semibold text-rock-black mb-2 uppercase tracking-wider">
                Describe Your Vision (Optional)
              </label>
              <textarea
                {...register('vision')}
                id="vision"
                placeholder="Tell us about your project requirements and style preferences..."
                rows={6}
                disabled={isSubmitting}
                className="w-full px-4 py-3 border-2 border-border rounded-none focus:border-royo-burgundy focus:outline-none bg-off-white text-rock-black placeholder-shown:text-shine-brown transition-colors resize-none"
              />
            </div>

            {submitError && (
              <p className="text-red-600 text-sm">{submitError}</p>
            )}

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-royo-burgundy text-off-white font-raleway font-semibold uppercase tracking-wider hover:bg-opacity-90 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 rounded-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
              </button>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="success-card"
            ref={successCardRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            onAnimationComplete={scrollToSuccess}
            transition={{ duration: 0.5, type: 'spring' }}
            className="w-full p-12 bg-white border border-[#EAE5E0] rounded-[2.5rem] shadow-2xl shadow-royo-burgundy/5 text-center flex flex-col items-center"
          >
            <div className="w-20 h-20 bg-[#F9F6F3] rounded-full flex items-center justify-center mb-8">
              <CheckCircle className="w-10 h-10 text-[#C5A059]" strokeWidth={1.5} />
            </div>

            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-royo-burgundy mb-6">
              Inquiry Received
            </h2>

            <p className="text-rock-black/70 font-raleway leading-relaxed text-lg mb-10 max-w-md">
              Thank you for sharing your vision with us. Our design principals will review your requirements and reach out within 24 hours to begin the dialogue.
            </p>

            <button
              onClick={handleReset}
              className="group flex items-center gap-3 px-8 py-4 border-2 border-royo-burgundy text-royo-burgundy font-raleway font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-royo-burgundy hover:text-white transition-all duration-300"
            >
              <RefreshCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
              <span>Start Another Project</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
