import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Briefcase, Clock, ChevronRight, X, Send } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import { jobPositions, type JobPosition } from '../data/careersData'
import { useToast } from '../context/ToastContext'

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null)
  const { showToast } = useToast()

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault()
    showToast('Application submitted successfully! We will contact you soon.', 'success')
    setSelectedJob(null)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1920"
            alt="Chef in kitchen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-gold text-sm font-medium tracking-wider uppercase mb-4 block">
              Join Our Team
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
              Careers at The Place
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Be part of a passionate team dedicated to delivering exceptional dining experiences. Explore our current openings and start your journey with us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Why The Place?"
            title="Build Your Career With Us"
            description="Join a team that values growth, creativity, and excellence"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Competitive Salary', desc: 'We offer industry-leading compensation packages' },
              { title: 'Growth Opportunities', desc: 'Clear paths for career advancement and skill development' },
              { title: 'Team Culture', desc: 'Work in a supportive and collaborative environment' },
              { title: 'Benefits Package', desc: 'Comprehensive health insurance and meal allowances' },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-2xl text-center"
              >
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Open Positions"
            title="Current Job Openings"
            description="Find the perfect role that matches your skills and passion"
          />

          <div className="max-w-4xl mx-auto space-y-4">
            {jobPositions.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-2xl hover:border-gold/30 transition-all cursor-pointer"
                onClick={() => setSelectedJob(job)}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4 text-gold" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-gold" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-gold" />
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 text-gold font-semibold">
                    Apply Now
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Application Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedJob(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-card rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-6 border-b border-border flex items-center justify-between">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground">
                    {selectedJob.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mt-1">
                    {selectedJob.department} • {selectedJob.type}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="p-2 rounded-full hover:bg-secondary transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Description</h3>
                  <p className="text-muted-foreground text-sm">{selectedJob.description}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Requirements</h3>
                  <ul className="space-y-2">
                    {selectedJob.requirements.map((req, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-gold">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <form onSubmit={handleApply} className="space-y-4 pt-4 border-t border-border">
                  <h3 className="font-semibold text-foreground">Apply for this position</h3>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Full Name *"
                      required
                      className="bg-secondary border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Email Address *"
                      required
                      className="bg-secondary border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    required
                    className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                  />
                  
                  <textarea
                    placeholder="Tell us about yourself and why you'd be a great fit..."
                    rows={4}
                    required
                    className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors resize-none"
                  />

                  <button
                    type="submit"
                    className="w-full bg-gold text-primary-foreground py-4 rounded-xl font-semibold hover:bg-gold-light transition-colors flex items-center justify-center gap-2"
                  >
                    Submit Application
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact HR */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading
            subtitle="Don&apos;t See Your Role?"
            title="We&apos;re Always Looking for Talent"
            description="Send us your CV and we'll keep it on file for future opportunities"
          />
          <a
            href="mailto:careers@thedailytable.ng"
            className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-gold-light transition-colors"
          >
            Send Your CV
            <Send className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  )
}
