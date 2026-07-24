export interface Testimonial {
  id: string
  name: string
  role: string
  image: string
  content: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Adaeze Okonkwo',
    role: 'Food Blogger',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    content: 'The Place has become my go-to spot for authentic Nigerian cuisine. Their Jollof rice is absolutely divine - the smoky flavor and perfect seasoning transport me back to my grandmother\'s kitchen.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Emeka Nwosu',
    role: 'Business Executive',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    content: 'I\'ve hosted several business dinners here and the service is always impeccable. The ambiance strikes the perfect balance between sophisticated and welcoming.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Folake Adeleke',
    role: 'Event Planner',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
    content: 'From the moment you walk in, you\'re treated like royalty. The grilled catfish is a must-try - perfectly seasoned and cooked to perfection. Highly recommend!',
    rating: 5,
  },
  {
    id: '4',
    name: 'Chidi Obi',
    role: 'Chef',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
    content: 'As a fellow chef, I appreciate the attention to detail in every dish. The blend of traditional recipes with modern presentation is remarkable.',
    rating: 4,
  },
  {
    id: '5',
    name: 'Ngozi Eze',
    role: 'Regular Customer',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100',
    content: 'My family has been coming here for years. The consistency in quality is what keeps us coming back. Best restaurant in Lagos, hands down!',
    rating: 5,
  },
]
