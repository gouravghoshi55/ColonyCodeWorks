import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, ArrowRight, CheckCircle, Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { subscribeNewsletter } from '../../utils/api'
import toast from 'react-hot-toast'

const schema = z.object({
  email: z.string().email('Please enter a valid email'),
})

const Newsletter = () => {
  const [subscribed, setSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      await subscribeNewsletter(data.email)
      setSubscribed(true)
      reset()
      toast.success('Welcome to the Colony! 🐝', {
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
      toast.error(err.message || 'Failed to subscribe. Please try again.', {
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

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-honey/5 via-orange-500/5 to-honey/5" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-honey/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-honey/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-honey/20 flex items-center justify-center mx-auto mb-6">
            <Mail size={28} className="text-honey" />
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Stay in the <span className="gradient-text">Loop</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Get the latest updates on our products, tech insights, and company news.
            Join the colony! 🐝
          </p>

          {subscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="flex items-center justify-center gap-3 text-green-400">
                <CheckCircle size={24} />
                <span className="text-lg font-medium">
                  You're subscribed! Welcome to the colony. 🐝
                </span>
              </div>
              <button
                onClick={() => setSubscribed(false)}
                className="text-gray-500 text-sm hover:text-gray-300 underline transition-colors"
              >
                Subscribe another email
              </button>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <div className="flex-1">
                <input
                  {...register('email')}
                  type="email"
                  placeholder="Enter your email"
                  disabled={loading}
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-honey/50 hover:border-white/20 transition-colors disabled:opacity-50"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1 text-left">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <motion.button
                whileHover={{ scale: loading ? 1 : 1.05 }}
                whileTap={{ scale: loading ? 1 : 0.95 }}
                type="submit"
                disabled={loading}
                className="honey-btn flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed min-w-[140px]"
              >
                {loading ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <>
                    Subscribe
                    <ArrowRight size={18} />
                  </>
                )}
              </motion.button>
            </form>
          )}

          <p className="text-gray-600 text-xs mt-4">
            🔒 No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Newsletter