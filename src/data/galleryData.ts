export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: 'food' | 'interior' | 'events'
}

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
    alt: 'Restaurant interior with elegant lighting',
    category: 'interior',
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=800',
    alt: 'Delicious jollof rice dish',
    category: 'food',
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800',
    alt: 'Private dining area',
    category: 'interior',
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800',
    alt: 'Grilled meat platter',
    category: 'food',
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800',
    alt: 'Bar area with ambient lighting',
    category: 'interior',
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800',
    alt: 'Signature shawarma wrap',
    category: 'food',
  },
  {
    id: '7',
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
    alt: 'Fine dining setup',
    category: 'interior',
  },
  {
    id: '8',
    src: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800',
    alt: 'Premium dessert presentation',
    category: 'food',
  },
  {
    id: '9',
    src: 'https://images.unsplash.com/photo-1530554764233-e79e16c91d08?w=800',
    alt: 'Corporate event setup',
    category: 'events',
  },
  {
    id: '10',
    src: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800',
    alt: 'Grilled chicken perfection',
    category: 'food',
  },
  {
    id: '11',
    src: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800',
    alt: 'Birthday celebration at the restaurant',
    category: 'events',
  },
  {
    id: '12',
    src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800',
    alt: 'Outdoor seating area',
    category: 'interior',
  },
]
