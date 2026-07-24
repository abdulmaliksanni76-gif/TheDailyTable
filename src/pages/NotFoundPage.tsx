import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, UtensilsCrossed } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <UtensilsCrossed className="w-24 h-24 text-gold mx-auto mb-8" />
          
          <h1 className="font-serif text-8xl md:text-9xl font-bold text-gold mb-4">
            404
          </h1>
          
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
            Page Not Found
          </h2>
          
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            Oops! It seems like this page has left the kitchen. Let us guide you back to our delicious menu.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="bg-gold text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-gold-light transition-colors flex items-center gap-2"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="border border-gold text-gold px-8 py-4 rounded-full font-semibold hover:bg-gold hover:text-primary-foreground transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
