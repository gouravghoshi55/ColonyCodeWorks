import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { Send, Mail, MapPin, Phone, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import toast from 'react-hot-toast'
import { submitContact } from '../../utils/api'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  projectType: z.string().min(1, 'Please select a project type'),
  budget: z.string().min(1, 'Please select your budget range'),
  message: z.string().min(20, 'Message must be at least 20 characters').max(5000),
})

const projectTypes = [
  'SaaS Product',
  'Web Application',
  'Mobile App',
  'AI Solution',
  'Enterprise Software',
  'UI/UX Design',
  'Other',
]

const budgets = [
  '$5K - $15K',
  '$15K - $30K',
  '$30K - $50K',
  '$50K - $100K',
  '$100K+',
]

const ContactInfo = ({ icon: Icon, title, value, href }) => (
  <a href={href} className="flex items-center gap-4 group">
    <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center border border-honey/20 flex-shrink-0 group-hover:border-honey/50 transition-colors">
      <Icon size={20} className="text-honey" />
    </div>
    <div>
      <p className="text-gray-400 text-sm">{title}</p>
      <p className="text-white font-medium group-hover:text-honey transition-colors">{value}</p>
    </div>
  </a>
)

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(schema) })

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      await submitContact(data)
      setSubmitted(true)
      reset()
      toast.success('Message sent! We\'ll get back to you within 24 hours. 🐝', {
        duration: 5000,
        style: {
          background: '#1E293B',
          color: '#fff',
          border: '1px solid rgba(253,184,19,0.3)',
        },
        iconTheme: {
          primary: '#FDB813',
          secondary: '#0F172A',
        },
      })
    } catch (err) {
      toast.error(err.message || 'Failed to send message. Please try again.', {
        style: {
          background: '#1E293B',
          color: '#fff',
          border: '1px solid rgba(239,68,68,0.3)',
        },
      })
    } finally {
      setLoading(false)
    }
  }

  const inputClass = (error) => `
    w-full px-5 py-4 bg-white/5 border rounded-xl text-white placeholder-gray-500 
    focus:outline-none transition-all duration-200
    ${error ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-honey/50 hover:border-white/20'}
  `

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute inset-0 grid-pattern opacity-10" />

      {/* Blobs */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-honey/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-card border border-honey/20 px-4 py-2 rounded-full mb-6">
            <span className="text-honey text-sm font-medium">📬 Get In Touch</span>
          </div>
          <h2 className="section-title mb-6">
            Let's Build Something{' '}
            <span className="gradient-text">Amazing Together</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind? We'd love to hear about it.
            Fill out the form and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact info - Left side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass-card border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-display font-bold text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <ContactInfo
                  icon={Mail}
                  title="Email"
                  value="hello@colonycodeworks.com"
                  href="mailto:hello@colonycodeworks.com"
                />
                <ContactInfo
                  icon={Phone}
                  title="Phone"
                  value="+91 74893 25064"
                  href="tel:+91 7489325064"
                />
                <ContactInfo
                  icon={MapPin}
                  title="Location"
                  value="Remote — Working Globally"
                  href="#"
                />
              </div>
            </div>

            {/* Response time badge */}
            <div className="glass-card border border-green-500/20 bg-green-500/5 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-semibold">Available Now</span>
              </div>
              <p className="text-gray-400 text-sm">
                We respond to all inquiries within{' '}
                <strong className="text-white">24 hours</strong>.
                For urgent projects, mention it in your message.
              </p>
            </div>

            {/* Google Sheet indicator */}
            <div className="glass-card border border-honey/20 bg-honey/5 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xl">📊</span>
                <span className="text-honey font-semibold text-sm">Secure & Tracked</span>
              </div>
              <p className="text-gray-400 text-sm">
                All inquiries are securely logged. Your data is safe with us 
                and never shared with third parties.
              </p>
            </div>

            {/* Social links */}
            <div className="glass-card border border-white/10 rounded-2xl p-6">
              <p className="text-gray-400 text-sm mb-4">Connect with us</p>
              <div className="flex gap-3">
                {[
                  { name: 'LinkedIn', url: 'https://linkedin.com/company/colonycodeworks' },
                  { name: 'Twitter', url: 'https://twitter.com/colonycodeworks' },
                  { name: 'GitHub', url: 'https://github.com/colonycodeworks' },
                  { name: 'Dribbble', url: 'https://dribbble.com/colonycodeworks' },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass-card border border-white/10 hover:border-honey/30 px-3 py-2 rounded-xl text-gray-400 hover:text-honey text-xs font-medium transition-colors"
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form - Right side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card border border-green-500/20 bg-green-500/5 rounded-3xl p-12 text-center h-full flex flex-col items-center justify-center min-h-[500px]"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="w-20 h-20 bg-green-500/20 rounded-3xl flex items-center justify-center mb-6"
                >
                  <CheckCircle size={40} className="text-green-400" />
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl font-display font-bold text-white mb-4"
                >
                  Message Sent! 🎉
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-400 mb-4 max-w-sm"
                >
                  Thank you for reaching out! We've received your message and will
                  get back to you within 24 hours.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-gray-500 text-sm mb-8"
                >
                  Your inquiry has been saved to our system ✅
                </motion.p>

                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSubmitted(false)}
                  className="outline-btn"
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="glass-card border border-white/10 rounded-3xl p-8 space-y-6"
              >
                {/* Name & Email */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name <span className="text-honey">*</span>
                    </label>
                    <input
                      {...register('name')}
                      placeholder="John Smith"
                      className={inputClass(errors.name)}
                      disabled={loading}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address <span className="text-honey">*</span>
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="john@company.com"
                      className={inputClass(errors.email)}
                      disabled={loading}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    {...register('company')}
                    placeholder="Your Company Inc."
                    className={inputClass(errors.company)}
                    disabled={loading}
                  />
                </div>

                {/* Project Type & Budget */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Project Type <span className="text-honey">*</span>
                    </label>
                    <select
                      {...register('projectType')}
                      className={`${inputClass(errors.projectType)} cursor-pointer appearance-none`}
                      disabled={loading}
                    >
                      <option value="" className="bg-dark text-gray-400">
                        Select type...
                      </option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t} className="bg-dark text-white">
                          {t}
                        </option>
                      ))}
                    </select>
                    {errors.projectType && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.projectType.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Budget Range <span className="text-honey">*</span>
                    </label>
                    <select
                      {...register('budget')}
                      className={`${inputClass(errors.budget)} cursor-pointer appearance-none`}
                      disabled={loading}
                    >
                      <option value="" className="bg-dark text-gray-400">
                        Select budget...
                      </option>
                      {budgets.map((b) => (
                        <option key={b} value={b} className="bg-dark text-white">
                          {b}
                        </option>
                      ))}
                    </select>
                    {errors.budget && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.budget.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Description <span className="text-honey">*</span>
                  </label>
                  <textarea
                    {...register('message')}
                    placeholder="Tell us about your project — goals, features, timeline, any specific requirements..."
                    rows={5}
                    className={`${inputClass(errors.message)} resize-none`}
                    disabled={loading}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02, boxShadow: loading ? 'none' : '0 0 40px rgba(253,184,19,0.3)' }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  className="honey-btn w-full flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed text-base"
                >
                  {loading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Sending Your Message...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>

                <p className="text-gray-500 text-xs text-center">
                  🔒 Your information is secure and never shared. By submitting, you agree to our Privacy Policy.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact