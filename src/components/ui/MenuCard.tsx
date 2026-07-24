import { motion } from 'framer-motion'
import { Star, Plus } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { useToast } from '../../context/ToastContext'
import { formatPrice } from '../../lib/utils'
import type { MenuItem } from '../../data/menuData'

interface MenuCardProps {
  item: MenuItem
}

export default function MenuCard({ item }: MenuCardProps) {
  const { addItem } = useCart()
  const { showToast } = useToast()

  const handleAddToCart = () => {
    addItem(item)
    showToast(`${item.name} added to cart`, 'success')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-gold/30 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {item.isPopular && (
          <span className="absolute top-3 left-3 bg-gold text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
            Popular
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-gold transition-colors">
            {item.name}
          </h3>
          <div className="flex items-center gap-1 text-gold flex-shrink-0">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">{item.rating}</span>
          </div>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
          {item.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-gold font-bold text-lg">
            {formatPrice(item.price)}
          </span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className="flex items-center gap-2 bg-gold text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold hover:bg-gold-light transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
