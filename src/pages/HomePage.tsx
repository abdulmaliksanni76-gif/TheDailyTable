import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Clock, MapPin, Phone, Star, Utensils, Award, Users } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import MenuCard from '../components/ui/MenuCard'
import TestimonialCard from '../components/ui/TestimonialCard'
import { featuredDishes } from '../data/menuData'
import { testimonials } from '../data/testimonialsData'

const stats = [
  { icon: Utensils, value: '150+', label: 'Dishes Served' },
  { icon: Users, value: '50K+', label: 'Happy Customers' },
  { icon: Award, value: '15+', label: 'Awards Won' },
  { icon: Star, value: '4.9', label: 'Average Rating' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920"
            alt="Restaurant interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-gold text-sm font-medium tracking-widest uppercase mb-4">
              Welcome to
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6">
              The Place
              <span className="block text-gold">Restaurant</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 text-pretty">
              Experience the finest Nigerian cuisine in an elegant setting. Where tradition meets modern luxury dining.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/menu"
                className="bg-gold text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-gold-light transition-colors flex items-center gap-2"
              >
                Explore Menu
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/reservations"
                className="border border-gold text-gold px-8 py-4 rounded-full font-semibold hover:bg-gold hover:text-primary-foreground transition-colors"
              >
                Reserve a Table
              </Link>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gold rounded-full flex justify-center pt-2"
            >
              <div className="w-1.5 h-3 bg-gold rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Info Bar */}
      <section className="bg-card border-y border-border py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-gold" />
              <span className="text-muted-foreground text-sm">Mon-Sun: 10AM - 11PM</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gold" />
              <span className="text-muted-foreground text-sm">Victoria Island, Lagos</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gold" />
              <a href="tel:+2349161413245" className="text-muted-foreground text-sm hover:text-gold transition-colors">
                +234 916 141 3245
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800"
                  alt="Fine dining"
                  className="rounded-2xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-gold text-primary-foreground p-6 rounded-2xl hidden md:block">
                  <p className="font-serif text-4xl font-bold">15+</p>
                  <p className="text-sm">Years of Excellence</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold text-sm font-medium tracking-wider uppercase mb-2 block">
                Our Story
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Culinary Journey Through Nigeria
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Since 2009, The Place Restaurant has been at the forefront of Nigerian culinary excellence. 
                Our commitment to quality ingredients, authentic recipes, and exceptional service has made us 
                a beloved destination for food enthusiasts across Lagos.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Every dish we serve tells a story of our rich Nigerian heritage, prepared with passion 
                and presented with elegance. From traditional favorites to innovative creations, 
                we invite you to experience the true taste of Nigeria.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-4 transition-all"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-10 h-10 text-gold mx-auto mb-4" />
                <p className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Our Menu"
            title="Featured Dishes"
            description="Discover our most popular dishes, crafted with love and the finest ingredients"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredDishes.slice(0, 8).map(dish => (
              <MenuCard key={dish.id} item={dish} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-gold-light transition-colors"
            >
              View Full Menu
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1920"
            alt="Grilled dishes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold text-sm font-medium tracking-wider uppercase mb-4 block">
              Special Offer
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
              Weekend Grill Festival
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Every weekend, enjoy our signature grilled platters with a complimentary drink. 
              Perfect for family gatherings and celebrations.
            </p>
            <Link
              to="/reservations"
              className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-gold-light transition-colors"
            >
              Book Your Table
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Testimonials"
            title="What Our Guests Say"
            description="Real experiences from our valued customers"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-4 transition-all"
            >
              Read More Reviews
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <SectionHeading
              subtitle="Newsletter"
              title="Stay Updated"
              description="Subscribe to our newsletter for exclusive offers, new menu items, and special events"
            />
            <form className="flex flex-col sm:flex-row gap-4 mt-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-secondary border border-border rounded-full px-6 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-gold text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-gold-light transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7286456015!2d3.4219!3d6.4281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjUnNDEuMiJOIDPCsDI1JzE4LjgiRQ!5e0!3m2!1sen!2sng!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Restaurant Location"
        />
      </section>
    </>
  )
}
