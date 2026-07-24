import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

interface SectionHeadingProps {
  subtitle?: string
  title: string
  description?: string
  centered?: boolean
  light?: boolean
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn('mb-12', centered && 'text-center')}
    >
      {subtitle && (
        <span className="text-gold text-sm font-medium tracking-wider uppercase mb-2 block">
          {subtitle}
        </span>
      )}
      <h2
        className={cn(
          'font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance',
          light ? 'text-foreground' : 'text-foreground'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'text-muted-foreground max-w-2xl leading-relaxed text-pretty',
            centered && 'mx-auto'
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  )
}
