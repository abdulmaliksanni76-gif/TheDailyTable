import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Target, Heart, Award, Users } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'

const values = [
  {
    icon: Target,
    title: 'Quality First',
    description: 'We source only the freshest ingredients from trusted local suppliers to ensure every dish meets our high standards.',
  },
  {
    icon: Heart,
    title: 'Passion for Food',
    description: 'Our chefs pour their hearts into every recipe, blending traditional techniques with innovative flavors.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'From the kitchen to the table, we strive for excellence in every aspect of your dining experience.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We believe in giving back to our community and creating opportunities for local talent to thrive.',
  },
]

const team = [
  {
    name: 'Chef Adebayo Ogundimu',
    role: 'Executive Chef',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400',
    bio: 'With over 20 years of culinary experience, Chef Adebayo brings traditional Nigerian flavors to life with a modern twist.',
  },
  {
    name: 'Amaka Eze',
    role: 'Head Pastry Chef',
    image: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400',
    bio: 'Award-winning pastry chef known for her innovative desserts that combine African flavors with French techniques.',
  },
  {
    name: 'Chukwuemeka Obi',
    role: 'Restaurant Manager',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    bio: 'Ensuring every guest receives exceptional service with his 15 years of hospitality experience.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1920"
            alt="Restaurant exterior"
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
              Our Story
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
              About Us
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the passion, heritage, and dedication behind The Place Restaurant.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold text-sm font-medium tracking-wider uppercase mb-2 block">
                Est. 2009
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Legacy of Flavor
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The Place Restaurant was born from a simple dream: to create a space where Nigerian 
                  culinary traditions could be celebrated and elevated. Founded in 2009 by a group of 
                  passionate food enthusiasts, we started as a small eatery in the heart of Lagos.
                </p>
                <p>
                  Today, we have grown into one of the most recognized dining establishments in Nigeria, 
                  known for our commitment to quality, authenticity, and innovation. Our journey has been 
                  marked by countless memories shared over plates of jollof rice, bowls of pepper soup, 
                  and perfectly grilled suya.
                </p>
                <p>
                  We believe that food is more than sustenance—it is a bridge that connects generations, 
                  cultures, and communities. Every dish we serve carries the essence of our rich Nigerian 
                  heritage, prepared with recipes passed down through generations and perfected over time.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400"
                alt="Restaurant interior"
                className="rounded-2xl w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400"
                alt="Nigerian dish"
                className="rounded-2xl w-full h-48 object-cover mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400"
                alt="Dining area"
                className="rounded-2xl w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?w=400"
                alt="Grilled food"
                className="rounded-2xl w-full h-48 object-cover mt-8"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="What We Stand For"
            title="Our Core Values"
            description="The principles that guide everything we do"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Meet The Team"
            title="The People Behind The Magic"
            description="Our talented team brings passion and expertise to every dish"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-gold text-sm mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading
            subtitle="Join Us"
            title="Experience The Place"
            description="Come and taste the difference for yourself"
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/reservations"
              className="bg-gold text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-gold-light transition-colors flex items-center gap-2"
            >
              Reserve a Table
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/menu"
              className="border border-gold text-gold px-8 py-4 rounded-full font-semibold hover:bg-gold hover:text-primary-foreground transition-colors"
            >
              View Our Menu
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
