import { Sweet, GalleryItem, Testimonial } from './types';

export const SWEETS_DATA: Sweet[] = [
  {
    id: 'kaju-katli',
    name: 'Kaju Katli',
    description: 'Delicate diamond-shaped cashew fudge made with premium ground cashews and sugar syrup, finished with a classic touch of elegant edible silver foil.',
    image: '/images/kaju-katli.jpg',
    tag: 'signature',
    type: 'sweet'
  },
  {
    id: 'motichoor-laddu',
    name: 'Motichoor Laddu',
    description: 'Meltingly soft, golden pearls made of fine chickpea flour, fried in pure desi ghee, and infused with aromatic cardamom and saffron.',
    image: '/images/motichoor-laddu.jpg',
    tag: 'popular',
    type: 'sweet'
  },
  {
    id: 'gulab-jamun',
    name: 'Gulab Jamun',
    description: 'Decadent, soft milk-solid dumplings, deep-fried to a golden brown and soaked in warm, fragrant rose-infused cardamom syrup.',
    image: '/images/gulab-jamun.jpg',
    tag: 'popular',
    type: 'sweet'
  },
  {
    id: 'rasgulla',
    name: 'Rasgulla',
    description: 'Classic, light, and spongy cottage cheese balls cooked in sugar syrup, offering a delightfully sweet and juicy bite of tradition.',
    image: '/images/rasgulla.jpg',
    tag: 'traditional',
    type: 'sweet'
  },
  {
    id: 'rasmalai',
    name: 'Rasmalai',
    description: 'Delicate, spongy cottage cheese patties soaked in thick, sweetened milk flavored with cardamom, saffron, and garnished with pistachios.',
    image: '/images/rasmalai.jpg',
    tag: 'signature',
    type: 'sweet'
  },
  {
    id: 'milk-cake',
    name: 'Milk Cake',
    description: 'A legendary traditional sweet made of slow-cooked milk, curdled perfectly to form a rich, grainy, caramelized sweet fudge.',
    image: '/images/milk-cake.jpg',
    tag: 'traditional',
    type: 'sweet'
  },
  {
    id: 'peda',
    name: 'Peda',
    description: 'Traditional milk sweet made of slow-cooked condensed milk (khoya), flavored with cardamom, and topped with chopped pistachios.',
    image: '/images/peda.jpg',
    tag: 'fresh',
    type: 'dairy'
  },
  {
    id: 'jalebi',
    name: 'Jalebi',
    description: 'Crispy, golden-orange concentric spirals made of fermented batter, deep-fried to perfection, and dipped in warm, luscious saffron syrup.',
    image: '/images/jalebi.jpg',
    tag: 'popular',
    type: 'sweet'
  },
  {
    id: 'ghewar',
    name: 'Ghewar',
    description: 'An exquisite honeycomb-textured Rajasthani festive sweet made from flour and ghee, soaked in sugar syrup, and garnished with malai and nuts.',
    image: '/images/ghewar.jpg',
    tag: 'signature',
    type: 'sweet'
  },
  {
    id: 'rabri',
    name: 'Rabri',
    description: 'Rich, creamy condensed milk sweet made of slow-boiling milk, layered with thick malai cream, and infused with saffron and pistachios.',
    image: '/images/rabri.jpg',
    tag: 'fresh',
    type: 'dairy'
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Warm Gulab Jamun',
    image: '/images/gulab-jamun.jpg',
    category: 'Sweets'
  },
  {
    id: 'g2',
    title: 'Freshly Fried Jalebi',
    image: '/images/jalebi.jpg',
    category: 'Sweets'
  },
  {
    id: 'g3',
    title: 'Traditional Mithai Platter',
    image: '/images/peda.jpg',
    category: 'Festive'
  },
  {
    id: 'g4',
    title: 'Pristine Kaju Katli',
    image: '/images/kaju-katli.jpg',
    category: 'Signature'
  },
  {
    id: 'g5',
    title: 'Golden Motichoor Laddus',
    image: '/images/motichoor-laddu.jpg',
    category: 'Festive'
  },
  {
    id: 'g6',
    title: 'Fragrant Saffron Rasmalai',
    image: '/images/rasmalai.jpg',
    category: 'Signature'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Suresh Patel',
    rating: 5,
    comment: 'The Kaju Katli and Milk Cake here are out of this world! Reminds me of traditional home-cooked sweets from Rajasthan.',
    date: 'June 2026'
  },
  {
    id: 't2',
    name: 'Pooja Shah',
    rating: 5,
    comment: 'Unmatched quality and hygiene. Their Jalebi is always hot and crispy, and they use pure desi ghee which you can taste instantly.',
    date: 'May 2026'
  },
  {
    id: 't3',
    name: 'Rajesh Sharma',
    rating: 5,
    comment: 'Best dairy and sweets in Pandesara. The Rabri is rich, thick, and perfectly sweetened. Highly recommended for festive orders!',
    date: 'June 2026'
  }
];

export const STORE_CONTACT = {
  name: 'Rajasthan Sweet & Dairy',
  address: '311312, New Bamroli Rd, Rameshwar Nagar, Nem Nagar, Pandesara, Udhana, Surat, Gujarat 394210',
  phone: '+91 92512 71008',
  phoneRaw: '9251271008',
  whatsapp: 'https://wa.me/919251271008?text=Hello%20Rajasthan%20Sweet%20%26%20Dairy%2C%20I%20would%20like%20to%20inquire%20about%20your%20fresh%20sweets%21',
  hours: 'Monday - Sunday: 7:00 AM - 10:00 PM',
  mapIframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.23438495048!2d72.8122359!3d21.1431616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fbc8a25c1df%3A0xe51b9e27c9d0979e!2sRameshwar%20Nagar%2C%20Pandesara%2C%20Surat%2C%20Gujarat%20394210!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
};
