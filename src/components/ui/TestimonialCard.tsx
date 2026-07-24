import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import type { Testimonial } from '../../data/testimonialsData'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass p-6 rounded-2xl h-full flex flex-col"
    >
      <Quote className="w-10 h-10 text-gold/30 mb-4" />
      
      <p className="text-muted-foreground leading-relaxed flex-1 mb-6">
        {testimonial.content}
      </p>

      <div className="flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
          <p className="text-muted-foreground text-sm">{testimonial.role}</p>
        </div>
        <div className="ml-auto flex items-center gap-1">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 text-gold fill-current" />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
