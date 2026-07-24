export interface JobPosition {
  id: string
  title: string
  department: string
  type: 'Full-time' | 'Part-time' | 'Contract'
  location: string
  description: string
  requirements: string[]
}

export const jobPositions: JobPosition[] = [
  {
    id: '1',
    title: 'Executive Chef',
    department: 'Kitchen',
    type: 'Full-time',
    location: 'Lagos, Nigeria',
    description: 'We are looking for an experienced Executive Chef to lead our kitchen team and create exceptional dining experiences.',
    requirements: [
      'Minimum 7 years of experience in fine dining',
      'Strong knowledge of Nigerian and international cuisine',
      'Leadership and team management skills',
      'Culinary degree or equivalent certification',
    ],
  },
  {
    id: '2',
    title: 'Sous Chef',
    department: 'Kitchen',
    type: 'Full-time',
    location: 'Lagos, Nigeria',
    description: 'Join our culinary team as a Sous Chef and help maintain our high standards of food quality.',
    requirements: [
      'Minimum 4 years of kitchen experience',
      'Knowledge of local and continental dishes',
      'Ability to work in a fast-paced environment',
      'Food safety certification',
    ],
  },
  {
    id: '3',
    title: 'Restaurant Manager',
    department: 'Management',
    type: 'Full-time',
    location: 'Lagos, Nigeria',
    description: 'Lead our front-of-house operations and ensure exceptional guest experiences.',
    requirements: [
      'Minimum 5 years in restaurant management',
      'Excellent communication skills',
      'Experience with POS systems',
      'Bachelor\'s degree in hospitality or related field',
    ],
  },
  {
    id: '4',
    title: 'Server',
    department: 'Service',
    type: 'Full-time',
    location: 'Lagos, Nigeria',
    description: 'Provide excellent customer service and create memorable dining experiences for our guests.',
    requirements: [
      'Previous serving experience preferred',
      'Excellent communication skills',
      'Ability to work weekends and holidays',
      'Knowledge of food and beverage service',
    ],
  },
  {
    id: '5',
    title: 'Bartender',
    department: 'Bar',
    type: 'Part-time',
    location: 'Lagos, Nigeria',
    description: 'Create and serve creative cocktails while providing excellent customer service at our bar.',
    requirements: [
      'Minimum 2 years bartending experience',
      'Knowledge of classic and modern cocktails',
      'Excellent customer service skills',
      'Ability to work late nights and weekends',
    ],
  },
]
