export interface FAQ {
  id: string
  question: string
  answer: string
}

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'What are your opening hours?',
    answer: 'We are open Monday to Thursday from 10:00 AM to 10:00 PM, Friday and Saturday from 10:00 AM to 11:00 PM, and Sunday from 12:00 PM to 9:00 PM.',
  },
  {
    id: '2',
    question: 'Do you take reservations?',
    answer: 'Yes! We highly recommend making reservations, especially for weekends and special occasions. You can book online through our website or call us directly at +234 916 141 3245.',
  },
  {
    id: '3',
    question: 'Is there parking available?',
    answer: 'Yes, we have a spacious parking lot that can accommodate up to 50 vehicles. Valet parking is also available on weekends.',
  },
  {
    id: '4',
    question: 'Do you cater for private events?',
    answer: 'Absolutely! We have a private dining room that can host up to 50 guests for birthdays, corporate events, and special celebrations. Contact our events team for custom packages.',
  },
  {
    id: '5',
    question: 'What payment methods do you accept?',
    answer: 'We accept cash, all major debit and credit cards, bank transfers, and mobile payments including Paystack and Flutterwave.',
  },
  {
    id: '6',
    question: 'Do you offer delivery services?',
    answer: 'Yes, we partner with major delivery platforms and also have our own delivery service within Lagos. You can order through our website or WhatsApp.',
  },
  {
    id: '7',
    question: 'Are there vegetarian options on the menu?',
    answer: 'Yes, we have a variety of vegetarian dishes including our vegetable fried rice, plantain dishes, and several local soups that can be prepared without meat.',
  },
  {
    id: '8',
    question: 'Can you accommodate food allergies?',
    answer: 'Yes, please inform your server about any allergies when ordering. Our kitchen staff is trained to handle allergy requests and can modify dishes accordingly.',
  },
  {
    id: '9',
    question: 'Is there a dress code?',
    answer: 'We maintain a smart casual dress code. While we want you to be comfortable, we kindly ask guests to avoid beachwear, slippers, and overly casual attire.',
  },
  {
    id: '10',
    question: 'Do you have a kids menu?',
    answer: 'Yes! We have a special kids menu with smaller portions and child-friendly options. We also have high chairs and a small play area.',
  },
]
