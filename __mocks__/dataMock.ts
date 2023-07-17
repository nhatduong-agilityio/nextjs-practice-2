import { v4 as uuidv4 } from 'uuid'

// import furniture1 from '@public/images/furniture-1.jpg'
// import furniture2 from '@public/images/furniture-2.jpg'
// import furniture3 from '@public/images/furniture-3.jpg'
// import furniture4 from '@public/images/furniture-4.jpg'

// // Images
// import SOFA_GREY from '@public/images/bg-hero.png'
// import SOFA_GREEN from '@public/images/sofa-green.jpg'

// import CHAIR_YELLOW from '@public/images/chair-yellow.jpg'
// import OFFICE_CHAIR from '@public/images/office-chair.jpg'
// import FAMILY_CHAIR from '@public/images/family-chair.jpg'
// import READING_CHAIR from '@public/images/reading-chair.jpg'

// import DESK from '@public/images/desk.jpg'
// import OFFICE_DESK from '@public/images/office-desk.jpg'

// import BED from '@public/images/bed.jpg'
// import SPRING_BED from '@public/images/springbed.jpg'

// import CARPET from '@public/images/carpet.jpg'

// import CUPBOARD from '@public/images/cupboard.jpg'

// import ARTICLE_1 from '@public/images/article-1.jpg'
// import ARTICLE_2 from '@public/images/article-2.jpg'
// import ARTICLE_3 from '@public/images/article-3.jpg'
// import ARTICLE_4 from '@public/images/article-4.jpg'

// import ALFA_MART from '@public/images/alfa-mart.png'
// import INDO_MART from '@public/images/indomaret.png'
// import GOPAY from '@public/images/gopay.png'
// import OVO from '@public/images/ovo.png'
// import LINK_AJA from '@public/images/link-aja.png'
// import BCA from '@public/images/bca-bank.png'
// import MANDIRI from '@public/images/mandiri-bank.png'
// import BRI from '@public/images/bri-bank.png'
// import PAYPAL from '@public/images/paypal.png'

export const CartMock = {
  id: 1,
  name: 'Green Slepper Sofa',
  category: 'Sofa',
  images: {
    image:
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Fsofa-green.jpg?alt=media&token=74327cb3-d85e-45a3-bfb5-b01010c77e3b',
  },
  imageAlt: 'Picture of Full set Grey Sofa With Pillows',
  description: 'Modern home in city center in the heart of historic Los Angele',
  details: [
    { id: 1, content: 'High Quality Leathers' },
    { id: 2, content: 'High Quality Paints' },
    { id: 3, content: 'High Quality Woods' },
    { id: 4, content: 'Cheaps Price' },
  ],
  color: 'green',
  price: 120,
  discount: 0,
  sellCount: 400,
  rating: 5,
  quantity: 1,
}

export const SlideMock = [
  {
    id: uuidv4(),
    image:
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Ffurniture-1.jpg?alt=media&token=80498422-2aa7-4cca-8888-ab8cd598aeb9',
    imageAlt: 'Picture of furniture chair leather',
    content: {
      title: 'Japanese Cupboard',
      description:
        'The combination of vintage, minimalist and classic makes this Japanese design cupboard the right choice. This cabinet was chosen by millennials to complement their housing',
    },
  },
  {
    id: uuidv4(),
    image:
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Ffurniture-2.jpg?alt=media&token=c9fc0710-acac-41c7-9ed6-055cab3090c7',
    imageAlt: 'Picture of furniture desk office',
    content: {
      title: 'Japanese Cupboard1',
      description:
        'The combination of vintage, minimalist and classic makes this Japanese design cupboard the right choice. This cabinet was chosen by millennials to complement their housing1',
    },
  },
  {
    id: uuidv4(),
    image:
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Ffurniture-3.jpg?alt=media&token=f732d0ee-6d35-4bd3-9e81-8dbf2d8b80ec',
    imageAlt: 'Picture of furniture sofa leather',
    content: {
      title: 'Japanese Cupboard2',
      description:
        'The combination of vintage, minimalist and classic makes this Japanese design cupboard the right choice. This cabinet was chosen by millennials to complement their housing2',
    },
  },
  {
    id: uuidv4(),
    image:
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Ffurniture-4.jpg?alt=media&token=5b255243-d0e3-4b6a-8643-aa58d099d9ff',
    imageAlt: 'Picture of furniture chair office',
    content: {
      title: 'Japanese Cupboard3',
      description:
        'The combination of vintage, minimalist and classic makes this Japanese design cupboard the right choice. This cabinet was chosen by millennials to complement their housing3',
    },
  },
]

export const UserMock = [
  {
    id: uuidv4(),
    username: 'kfcdcn',
    password: '123456789',
  },
]

export const CommunityLinks = [
  {
    id: uuidv4(),
    name: 'Job Board',
  },
  {
    id: uuidv4(),
    name: 'Career Advice',
  },
  {
    id: uuidv4(),
    name: 'Pricing',
  },
  {
    id: uuidv4(),
    name: 'Assessments',
  },
  {
    id: uuidv4(),
    name: 'Powered',
  },
]

export const AboutUsLinks = [
  {
    id: uuidv4(),
    name: 'Career',
  },
  {
    id: uuidv4(),
    name: 'Internship',
  },
  {
    id: uuidv4(),
    name: 'Press',
  },
  {
    id: uuidv4(),
    name: 'Blog',
  },
  {
    id: uuidv4(),
    name: 'Contact',
  },
]

export const HelpAndSupportLinks = [
  {
    id: uuidv4(),
    name: 'Job Search',
  },
  {
    id: uuidv4(),
    name: 'Hello',
  },
  {
    id: uuidv4(),
    name: 'Hiring',
  },
  {
    id: uuidv4(),
    name: 'Talent Guide',
  },
  {
    id: uuidv4(),
    name: 'Online Test',
  },
]

export const ContactUsLinks = [
  {
    id: uuidv4(),
    name: 'Hello@shopbag.com',
  },
  {
    id: uuidv4(),
    name: '081437650889',
  },
]

export const CategoriesMock = {
  CHAIR: {
    ALL: {
      NAME: 'Chair',
      BG_IMAGE:
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Fchair-yellow.jpg?alt=media&token=c97cf937-78e2-4d88-bd81-ac25a3b2299d',
      IMAGE_ALT: 'Picture of furniture chair category',
    },
    OFFICE: {
      NAME: 'Office Chair',
      BG_IMAGE:
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Foffice-chair.jpg?alt=media&token=fac054e4-11e5-4a77-afec-ed3a9db71b19',
      IMAGE_ALT: 'Picture of furniture office chair category',
    },
    FAMILY: {
      NAME: 'Family Chair',
      BG_IMAGE:
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Ffamily-chair.jpg?alt=media&token=fd644fda-885f-420b-a1ff-24777ca006a3',
      IMAGE_ALT: 'Picture of furniture family chair category',
    },
    READING: {
      NAME: 'Reading Chair',
      BG_IMAGE:
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Freading-chair.jpg?alt=media&token=f4a6d352-ebfc-44bd-a487-da8d8148c5f7',
      IMAGE_ALT: 'Picture of furniture reading chair category',
    },
  },
  DESK: {
    ALL: {
      NAME: 'Desk',
      BG_IMAGE:
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Fdesk.jpg?alt=media&token=f0a2a298-9e41-4d45-9dd1-8110aaafaab1',
      IMAGE_ALT: 'Picture of furniture desk category',
    },
    OFFICE: {
      NAME: 'Office desk',
      BG_IMAGE:
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Foffice-desk.jpg?alt=media&token=642b7de7-fecd-4c3a-a1e1-2eb7f6b9db00',
      IMAGE_ALT: 'Picture of furniture office desk category',
    },
  },
  Bed: {
    ALL: {
      NAME: 'Bed',
      BG_IMAGE:
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Fbed.jpg?alt=media&token=586f27e1-1e58-418d-bdaa-0ed97350a695',
      IMAGE_ALT: 'Picture of furniture bed category',
    },
    SPRING: {
      NAME: 'Springbed',
      BG_IMAGE:
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Fspringbed.jpg?alt=media&token=808d9fb9-14da-4386-8a37-69ab393df3cb',
      IMAGE_ALT: 'Picture of furniture spring bed category',
    },
  },
  CARPET: {
    ALL: {
      NAME: 'Carpet',
      BG_IMAGE:
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Fcarpet.jpg?alt=media&token=066049a5-e737-4147-9338-a6702c34380f',
      IMAGE_ALT: 'Picture of furniture carpet category',
    },
  },
  SOFA: {
    ALL: {
      NAME: 'Sofa',
      BG_IMAGE:
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Fbg-hero.png?alt=media&token=4c7db115-1628-4f10-9240-08a48d4ac0d1',
      IMAGE_ALT: 'Picture of furniture sofa category',
    },
  },
  CUPBOARD: {
    ALL: {
      NAME: 'Cupboard',
      BG_IMAGE:
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Fcupboard.jpg?alt=media&token=c1f228fc-b5e9-4804-aaf6-17a898d5024b',
      IMAGE_ALT: 'Picture of furniture cupboard category',
    },
  },
}

export const ProductsMock = [
  {
    id: '40e74e5f-d9c1-4469-a1ed-9e35a6dff6123',
    name: 'Green Slepper Sofa',
    category: 'Sofa',
    images: {
      image:
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Fsofa-green.jpg?alt=media&token=74327cb3-d85e-45a3-bfb5-b01010c77e3b',
      listImage: [
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Fsofa-green.jpg?alt=media&token=74327cb3-d85e-45a3-bfb5-b01010c77e3b',
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Fsofa-green.jpg?alt=media&token=74327cb3-d85e-45a3-bfb5-b01010c77e3b',
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Fsofa-green.jpg?alt=media&token=74327cb3-d85e-45a3-bfb5-b01010c77e3b',
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Fsofa-green.jpg?alt=media&token=74327cb3-d85e-45a3-bfb5-b01010c77e3b',
      ],
    },
    imageAlt: 'Picture of Green Slepper Sofa',
    description: 'Modern home in city center in the heart of historic Los Angele',
    details: [
      { id: uuidv4(), content: 'High Quality Leathers' },
      { id: uuidv4(), content: 'High Quality Paints' },
      { id: uuidv4(), content: 'High Quality Woods' },
      { id: uuidv4(), content: 'Cheaps Price' },
    ],
    color: 'green',
    price: 120,
    discount: 0,
    sellCount: 400,
    rating: 5,
    wish: true,
  },
  {
    id: '40e74e5f-d9c1-4469-a1ed-9e35a6dff345',
    name: 'Yellow Chair X Banana Kitty',
    category: 'Chair',
    images: {
      image:
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Fchair-yellow.jpg?alt=media&token=c97cf937-78e2-4d88-bd81-ac25a3b2299d',
      listImage: [
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Fchair-yellow.jpg?alt=media&token=c97cf937-78e2-4d88-bd81-ac25a3b2299d',
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Fchair-yellow.jpg?alt=media&token=c97cf937-78e2-4d88-bd81-ac25a3b2299d',
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Fchair-yellow.jpg?alt=media&token=c97cf937-78e2-4d88-bd81-ac25a3b2299d',
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Fchair-yellow.jpg?alt=media&token=c97cf937-78e2-4d88-bd81-ac25a3b2299d',
      ],
    },
    imageAlt: 'Picture of Yellow Chair X Banana Kitty',
    description: 'Modern home in city center in the heart of historic Los Angeles',
    details: [
      { id: uuidv4(), content: 'High Quality Leathers2' },
      { id: uuidv4(), content: 'High Quality Paints2' },
      { id: uuidv4(), content: 'High Quality Woods2' },
      { id: uuidv4(), content: 'Cheaps Price2' },
    ],
    color: 'yellow',
    price: 699,
    discount: 41,
    sellCount: 400,
    rating: 5,
    wish: true,
  },
  {
    id: '40e74e5f-d9c1-4469-a1ed-9e35a6dff567',
    name: 'Fullset Grey Sofa With Pillow',
    category: 'Sofa',
    images: {
      image:
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Fbg-hero.png?alt=media&token=4c7db115-1628-4f10-9240-08a48d4ac0d1',
      listImage: [
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Fbg-hero.png?alt=media&token=4c7db115-1628-4f10-9240-08a48d4ac0d1',
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Fbg-hero.png?alt=media&token=4c7db115-1628-4f10-9240-08a48d4ac0d1',
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Fbg-hero.png?alt=media&token=4c7db115-1628-4f10-9240-08a48d4ac0d1',
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Fbg-hero.png?alt=media&token=4c7db115-1628-4f10-9240-08a48d4ac0d1',
      ],
    },
    imageAlt: 'Picture of Full set Grey Sofa With Pillow',
    description: 'Modern home in city center in the heart of historic Los Angeles',
    details: [
      { id: uuidv4(), content: 'High Quality Leathers3' },
      { id: uuidv4(), content: 'High Quality Paints3' },
      { id: uuidv4(), content: 'High Quality Woods3' },
      { id: uuidv4(), content: 'Cheaps Price3' },
    ],
    color: 'grey',
    price: 820,
    discount: 3,
    sellCount: 400,
    rating: 5,
    wish: true,
  },
  {
    id: '40e74e5f-d9c1-4469-a1ed-9e35a6dff789',
    name: 'Winter Carpet',
    category: 'Carpet',
    images: {
      image:
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Fcarpet.jpg?alt=media&token=066049a5-e737-4147-9338-a6702c34380f',
      listImage: [
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Fcarpet.jpg?alt=media&token=066049a5-e737-4147-9338-a6702c34380f',
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Fcarpet.jpg?alt=media&token=066049a5-e737-4147-9338-a6702c34380f',
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Fcarpet.jpg?alt=media&token=066049a5-e737-4147-9338-a6702c34380f',
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Fcarpet.jpg?alt=media&token=066049a5-e737-4147-9338-a6702c34380f',
      ],
    },
    imageAlt: 'Picture of Winter Carpet',
    description: 'Modern home in city center',
    details: [
      { id: uuidv4(), content: 'High Quality Leathers4' },
      { id: uuidv4(), content: 'High Quality Paints4' },
      { id: uuidv4(), content: 'High Quality Woods4' },
      { id: uuidv4(), content: 'Cheaps Price4' },
    ],
    color: 'red',
    price: 820,
    discount: 3,
    sellCount: 400,
    rating: 5,
    wish: true,
  },
]

export const ArticlesMock = [
  {
    id: uuidv4(),
    title: 'Plants make the atmosphere of the house come alive',
    image:
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Farticle-1.jpg?alt=media&token=770ae6fb-042a-438c-bd3f-d29d3b1368e5',
    imageAlt: 'Picture of furniture chair and table office',
    description:
      'Houseplants are good for your health — and not just for their visual beauty. Why? They essentially do the opposite of what we do when we breathe: release oxygen and absorb carbon dioxide. This not only freshens up the air, but also eliminates harmful toxins. Extensive research by NASA has revealed that houseplants can remove up to 87 per cent of air toxin in 24 hours. Studies have also proven that indoor plants improve concentration and productivity (by up to 15 percent!), reduce stress levels and boost your mood — making them perfect for not just your home but your work space, too. At work, place plants, especially those with broad leaves, on your desk; they will help regulate humidity and increase levels of positivity — seeing greenery and nature help us feel more relaxed and calm, which in turn benefits your every day mood. Indoor plants serve a practical and aesthetic purpose, and will enhance your life. How to Create your Personal Plant Sanctuary. An indoor garden can be your refuge from the outside world, and for many people it is a source of great joy. Whether you live in a small apartment, or a large house, by introducing certain plants into your home, you will start to notice improvements to your health, and overall happiness. As well as enhancing your mood and creating a living space that is soothing to be in, plants can also help with loneliness and depression: caring for a living thing gives us a purpose and is rewarding — especially when you see that living thing bloom and thrive. choose the right plants for the an optimal nights sleep. Although plants release oxygen during the day, it is worth remembering that, at night, when photosynthesis stops, most plants switch things up and release carbon dioxide. However plants such as orchids, succulents, snake plants and bromeliads do the opposite and emit oxygen, making them perfect plants for the bedroom (and getting better sleep). Beware of too much sun. Most indoor plants don’t like direct midday sun, so please be wary of this when placing plants in your home. There are very obvious warning signs to look out for, such as leaf burn, spotting or sudden leaf-fall. Most plants can be easily rescued, so don’t panic! Often it is a case of not watering them too much, or letting the soil dry out a bit if it is feeling too soggy. Check if your plant is sitting by a cold draft as this can case the leaves to curl and eventually drop off. Organic fertilizers are a great way to revive your plants.',
  },
  {
    id: uuidv4(),
    title: 'Good Lighting Makes The Home More Light',
    image:
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Farticle-2.jpg?alt=media&token=423e3185-6c78-4c98-b46e-91a4373b551b',
    imageAlt: 'Picture of furniture desk office',
    description:
      'Houseplants are good for your health — and not just for their visual beauty. Why? They essentially do the opposite of what we do when we breathe: release oxygen and absorb carbon dioxide. This not only freshens up the air, but also eliminates harmful toxins. Extensive research by NASA has revealed that houseplants can remove up to 87 per cent of air toxin in 24 hours. Studies have also proven that indoor plants improve concentration and productivity (by up to 15 percent!), reduce stress levels and boost your mood — making them perfect for not just your home but your work space, too. At work, place plants, especially those with broad leaves, on your desk; they will help regulate humidity and increase levels of positivity — seeing greenery and nature help us feel more relaxed and calm, which in turn benefits your every day mood. Indoor plants serve a practical and aesthetic purpose, and will enhance your life. How to Create your Personal Plant Sanctuary. An indoor garden can be your refuge from the outside world, and for many people it is a source of great joy. Whether you live in a small apartment, or a large house, by introducing certain plants into your home, you will start to notice improvements to your health, and overall happiness. As well as enhancing your mood and creating a living space that is soothing to be in, plants can also help with loneliness and depression: caring for a living thing gives us a purpose and is rewarding — especially when you see that living thing bloom and thrive. choose the right plants for the an optimal nights sleep. Although plants release oxygen during the day, it is worth remembering that, at night, when photosynthesis stops, most plants switch things up and release carbon dioxide. However plants such as orchids, succulents, snake plants and bromeliads do the opposite and emit oxygen, making them perfect plants for the bedroom (and getting better sleep). Beware of too much sun. Most indoor plants don’t like direct midday sun, so please be wary of this when placing plants in your home. There are very obvious warning signs to look out for, such as leaf burn, spotting or sudden leaf-fall. Most plants can be easily rescued, so don’t panic! Often it is a case of not watering them too much, or letting the soil dry out a bit if it is feeling too soggy. Check if your plant is sitting by a cold draft as this can case the leaves to curl and eventually drop off.',
  },
  {
    id: uuidv4(),
    title: 'Classic Style Makes Houses Look More Expensive',
    image:
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Farticle-3.jpg?alt=media&token=2bfc45b7-8afb-4d56-8d6e-657104072056',
    imageAlt: 'Picture of furniture sofa',
    description:
      'Houseplants are good for your health — and not just for their visual beauty. Why? They essentially do the opposite of what we do when we breathe: release oxygen and absorb carbon dioxide. This not only freshens up the air, but also eliminates harmful toxins. Extensive research by NASA has revealed that houseplants can remove up to 87 per cent of air toxin in 24 hours. Studies have also proven that indoor plants improve concentration and productivity (by up to 15 percent!), reduce stress levels and boost your mood — making them perfect for not just your home but your work space, too. At work, place plants, especially those with broad leaves, on your desk; they will help regulate humidity and increase levels of positivity — seeing greenery and nature help us feel more relaxed and calm, which in turn benefits your every day mood. Indoor plants serve a practical and aesthetic purpose, and will enhance your life. How to Create your Personal Plant Sanctuary. An indoor garden can be your refuge from the outside world, and for many people it is a source of great joy. Whether you live in a small apartment, or a large house, by introducing certain plants into your home, you will start to notice improvements to your health, and overall happiness. As well as enhancing your mood and creating a living space that is soothing to be in, plants can also help with loneliness and depression: caring for a living thing gives us a purpose and is rewarding — especially when you see that living thing bloom and thrive. choose the right plants for the an optimal nights sleep. Although plants release oxygen during the day, it is worth remembering that, at night, when photosynthesis stops, most plants switch things up and release carbon dioxide. However plants such as orchids, succulents, snake plants and bromeliads do the opposite and emit oxygen, making them perfect plants for the bedroom (and getting better sleep). Beware of too much sun. Most indoor plants don’t like direct midday sun, so please be wary of this when placing plants in your home. There are very obvious warning signs to look out for, such as leaf burn, spotting or sudden leaf-fall. Most plants can be easily rescued, so don’t panic! Often it is a case of not watering them too much, or letting the soil dry out a bit if it is feeling too soggy. Check if your plant is sitting by a cold draft as this can case the leaves to curl and eventually drop off. Organic fertilizers are a great way to revive your plants.',
  },
  {
    id: uuidv4(),
    title: 'Plants make the atmosphere of the house come alive2',
    image:
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Farticle-4.jpg?alt=media&token=c87b1214-7d85-4322-b797-b820e6760622',
    imageAlt: 'Picture of furniture chair and table office2',
    description:
      '2Houseplants are good for your health — and not just for their visual beauty. Why? They essentially do the opposite of what we do when we breathe: release oxygen and absorb carbon dioxide. This not only freshens up the air, but also eliminates harmful toxins. Extensive research by NASA has revealed that houseplants can remove up to 87 per cent of air toxin in 24 hours. Studies have also proven that indoor plants improve concentration and productivity (by up to 15 percent!), reduce stress levels and boost your mood — making them perfect for not just your home but your work space, too. At work, place plants, especially those with broad leaves, on your desk; they will help regulate humidity and increase levels of positivity — seeing greenery and nature help us feel more relaxed and calm, which in turn benefits your every day mood. Indoor plants serve a practical and aesthetic purpose, and will enhance your life. How to Create your Personal Plant Sanctuary. An indoor garden can be your refuge from the outside world, and for many people it is a source of great joy. Whether you live in a small apartment, or a large house, by introducing certain plants into your home, you will start to notice improvements to your health, and overall happiness. As well as enhancing your mood and creating a living space that is soothing to be in, plants can also help with loneliness and depression: caring for a living thing gives us a purpose and is rewarding — especially when you see that living thing bloom and thrive. choose the right plants for the an optimal nights sleep. Although plants release oxygen during the day, it is worth remembering that, at night, when photosynthesis stops, most plants switch things up and release carbon dioxide. However plants such as orchids, succulents, snake plants and bromeliads do the opposite and emit oxygen, making them perfect plants for the bedroom (and getting better sleep). Beware of too much sun. Most indoor plants don’t like direct midday sun, so please be wary of this when placing plants in your home. There are very obvious warning signs to look out for, such as leaf burn, spotting or sudden leaf-fall. Most plants can be easily rescued, so don’t panic! Often it is a case of not watering them too much, or letting the soil dry out a bit if it is feeling too soggy. Check if your plant is sitting by a cold draft as this can case the leaves to curl and eventually drop off. Organic fertilizers are a great way to revive your plants.',
  },
  {
    id: uuidv4(),
    title: 'Good Lighting Makes The Home More Light2',
    image:
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Fdesk.jpg?alt=media&token=f0a2a298-9e41-4d45-9dd1-8110aaafaab1',
    imageAlt: 'Picture of furniture desk office2',
    description:
      '2Houseplants are good for your health — and not just for their visual beauty. Why? They essentially do the opposite of what we do when we breathe: release oxygen and absorb carbon dioxide. This not only freshens up the air, but also eliminates harmful toxins. Extensive research by NASA has revealed that houseplants can remove up to 87 per cent of air toxin in 24 hours. Studies have also proven that indoor plants improve concentration and productivity (by up to 15 percent!), reduce stress levels and boost your mood — making them perfect for not just your home but your work space, too. At work, place plants, especially those with broad leaves, on your desk; they will help regulate humidity and increase levels of positivity — seeing greenery and nature help us feel more relaxed and calm, which in turn benefits your every day mood. Indoor plants serve a practical and aesthetic purpose, and will enhance your life. How to Create your Personal Plant Sanctuary. An indoor garden can be your refuge from the outside world, and for many people it is a source of great joy. Whether you live in a small apartment, or a large house, by introducing certain plants into your home, you will start to notice improvements to your health, and overall happiness. As well as enhancing your mood and creating a living space that is soothing to be in, plants can also help with loneliness and depression: caring for a living thing gives us a purpose and is rewarding — especially when you see that living thing bloom and thrive. choose the right plants for the an optimal nights sleep. Although plants release oxygen during the day, it is worth remembering that, at night, when photosynthesis stops, most plants switch things up and release carbon dioxide. However plants such as orchids, succulents, snake plants and bromeliads do the opposite and emit oxygen, making them perfect plants for the bedroom (and getting better sleep). Beware of too much sun. Most indoor plants don’t like direct midday sun, so please be wary of this when placing plants in your home. There are very obvious warning signs to look out for, such as leaf burn, spotting or sudden leaf-fall. Most plants can be easily rescued, so don’t panic! Often it is a case of not watering them too much, or letting the soil dry out a bit if it is feeling too soggy. Check if your plant is sitting by a cold draft as this can case the leaves to curl and eventually drop off.',
  },
  {
    id: uuidv4(),
    title: 'Classic Style Makes Houses Look More Expensive2',
    image:
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Fcarpet.jpg?alt=media&token=066049a5-e737-4147-9338-a6702c34380f',
    imageAlt: 'Picture of furniture sofa2',
    description:
      '2Houseplants are good for your health — and not just for their visual beauty. Why? They essentially do the opposite of what we do when we breathe: release oxygen and absorb carbon dioxide. This not only freshens up the air, but also eliminates harmful toxins. Extensive research by NASA has revealed that houseplants can remove up to 87 per cent of air toxin in 24 hours. Studies have also proven that indoor plants improve concentration and productivity (by up to 15 percent!), reduce stress levels and boost your mood — making them perfect for not just your home but your work space, too. At work, place plants, especially those with broad leaves, on your desk; they will help regulate humidity and increase levels of positivity — seeing greenery and nature help us feel more relaxed and calm, which in turn benefits your every day mood. Indoor plants serve a practical and aesthetic purpose, and will enhance your life. How to Create your Personal Plant Sanctuary. An indoor garden can be your refuge from the outside world, and for many people it is a source of great joy. Whether you live in a small apartment, or a large house, by introducing certain plants into your home, you will start to notice improvements to your health, and overall happiness. As well as enhancing your mood and creating a living space that is soothing to be in, plants can also help with loneliness and depression: caring for a living thing gives us a purpose and is rewarding — especially when you see that living thing bloom and thrive. choose the right plants for the an optimal nights sleep. Although plants release oxygen during the day, it is worth remembering that, at night, when photosynthesis stops, most plants switch things up and release carbon dioxide. However plants such as orchids, succulents, snake plants and bromeliads do the opposite and emit oxygen, making them perfect plants for the bedroom (and getting better sleep). Beware of too much sun. Most indoor plants don’t like direct midday sun, so please be wary of this when placing plants in your home. There are very obvious warning signs to look out for, such as leaf burn, spotting or sudden leaf-fall. Most plants can be easily rescued, so don’t panic! Often it is a case of not watering them too much, or letting the soil dry out a bit if it is feeling too soggy. Check if your plant is sitting by a cold draft as this can case the leaves to curl and eventually drop off. Organic fertilizers are a great way to revive your plants.',
  },
  {
    id: uuidv4(),
    title: 'Plants make the atmosphere of the house come alive3',
    image:
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Fcupboard.jpg?alt=media&token=c1f228fc-b5e9-4804-aaf6-17a898d5024b',
    imageAlt: 'Picture of furniture chair and table office3',
    description:
      '3Houseplants are good for your health — and not just for their visual beauty. Why? They essentially do the opposite of what we do when we breathe: release oxygen and absorb carbon dioxide. This not only freshens up the air, but also eliminates harmful toxins. Extensive research by NASA has revealed that houseplants can remove up to 87 per cent of air toxin in 24 hours. Studies have also proven that indoor plants improve concentration and productivity (by up to 15 percent!), reduce stress levels and boost your mood — making them perfect for not just your home but your work space, too. At work, place plants, especially those with broad leaves, on your desk; they will help regulate humidity and increase levels of positivity — seeing greenery and nature help us feel more relaxed and calm, which in turn benefits your every day mood. Indoor plants serve a practical and aesthetic purpose, and will enhance your life. How to Create your Personal Plant Sanctuary. An indoor garden can be your refuge from the outside world, and for many people it is a source of great joy. Whether you live in a small apartment, or a large house, by introducing certain plants into your home, you will start to notice improvements to your health, and overall happiness. As well as enhancing your mood and creating a living space that is soothing to be in, plants can also help with loneliness and depression: caring for a living thing gives us a purpose and is rewarding — especially when you see that living thing bloom and thrive. choose the right plants for the an optimal nights sleep. Although plants release oxygen during the day, it is worth remembering that, at night, when photosynthesis stops, most plants switch things up and release carbon dioxide. However plants such as orchids, succulents, snake plants and bromeliads do the opposite and emit oxygen, making them perfect plants for the bedroom (and getting better sleep). Beware of too much sun. Most indoor plants don’t like direct midday sun, so please be wary of this when placing plants in your home. There are very obvious warning signs to look out for, such as leaf burn, spotting or sudden leaf-fall. Most plants can be easily rescued, so don’t panic! Often it is a case of not watering them too much, or letting the soil dry out a bit if it is feeling too soggy. Check if your plant is sitting by a cold draft as this can case the leaves to curl and eventually drop off. Organic fertilizers are a great way to revive your plants.',
  },
  {
    id: uuidv4(),
    title: 'Good Lighting Makes The Home More Light3',
    image:
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Freading-chair.jpg?alt=media&token=f4a6d352-ebfc-44bd-a487-da8d8148c5f7',
    imageAlt: 'Picture of furniture desk office3',
    description:
      '3Houseplants are good for your health — and not just for their visual beauty. Why? They essentially do the opposite of what we do when we breathe: release oxygen and absorb carbon dioxide. This not only freshens up the air, but also eliminates harmful toxins. Extensive research by NASA has revealed that houseplants can remove up to 87 per cent of air toxin in 24 hours. Studies have also proven that indoor plants improve concentration and productivity (by up to 15 percent!), reduce stress levels and boost your mood — making them perfect for not just your home but your work space, too. At work, place plants, especially those with broad leaves, on your desk; they will help regulate humidity and increase levels of positivity — seeing greenery and nature help us feel more relaxed and calm, which in turn benefits your every day mood. Indoor plants serve a practical and aesthetic purpose, and will enhance your life. How to Create your Personal Plant Sanctuary. An indoor garden can be your refuge from the outside world, and for many people it is a source of great joy. Whether you live in a small apartment, or a large house, by introducing certain plants into your home, you will start to notice improvements to your health, and overall happiness. As well as enhancing your mood and creating a living space that is soothing to be in, plants can also help with loneliness and depression: caring for a living thing gives us a purpose and is rewarding — especially when you see that living thing bloom and thrive. choose the right plants for the an optimal nights sleep. Although plants release oxygen during the day, it is worth remembering that, at night, when photosynthesis stops, most plants switch things up and release carbon dioxide. However plants such as orchids, succulents, snake plants and bromeliads do the opposite and emit oxygen, making them perfect plants for the bedroom (and getting better sleep). Beware of too much sun. Most indoor plants don’t like direct midday sun, so please be wary of this when placing plants in your home. There are very obvious warning signs to look out for, such as leaf burn, spotting or sudden leaf-fall. Most plants can be easily rescued, so don’t panic! Often it is a case of not watering them too much, or letting the soil dry out a bit if it is feeling too soggy. Check if your plant is sitting by a cold draft as this can case the leaves to curl and eventually drop off.',
  },
  {
    id: uuidv4(),
    title: 'Classic Style Makes Houses Look More Expensive3',
    image:
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Fspringbed.jpg?alt=media&token=808d9fb9-14da-4386-8a37-69ab393df3cb',
    imageAlt: 'Picture of furniture sofa3',
    description:
      '3Houseplants are good for your health — and not just for their visual beauty. Why? They essentially do the opposite of what we do when we breathe: release oxygen and absorb carbon dioxide. This not only freshens up the air, but also eliminates harmful toxins. Extensive research by NASA has revealed that houseplants can remove up to 87 per cent of air toxin in 24 hours. Studies have also proven that indoor plants improve concentration and productivity (by up to 15 percent!), reduce stress levels and boost your mood — making them perfect for not just your home but your work space, too. At work, place plants, especially those with broad leaves, on your desk; they will help regulate humidity and increase levels of positivity — seeing greenery and nature help us feel more relaxed and calm, which in turn benefits your every day mood. Indoor plants serve a practical and aesthetic purpose, and will enhance your life. How to Create your Personal Plant Sanctuary. An indoor garden can be your refuge from the outside world, and for many people it is a source of great joy. Whether you live in a small apartment, or a large house, by introducing certain plants into your home, you will start to notice improvements to your health, and overall happiness. As well as enhancing your mood and creating a living space that is soothing to be in, plants can also help with loneliness and depression: caring for a living thing gives us a purpose and is rewarding — especially when you see that living thing bloom and thrive. choose the right plants for the an optimal nights sleep. Although plants release oxygen during the day, it is worth remembering that, at night, when photosynthesis stops, most plants switch things up and release carbon dioxide. However plants such as orchids, succulents, snake plants and bromeliads do the opposite and emit oxygen, making them perfect plants for the bedroom (and getting better sleep). Beware of too much sun. Most indoor plants don’t like direct midday sun, so please be wary of this when placing plants in your home. There are very obvious warning signs to look out for, such as leaf burn, spotting or sudden leaf-fall. Most plants can be easily rescued, so don’t panic! Often it is a case of not watering them too much, or letting the soil dry out a bit if it is feeling too soggy. Check if your plant is sitting by a cold draft as this can case the leaves to curl and eventually drop off. Organic fertilizers are a great way to revive your plants.',
  },
  {
    id: uuidv4(),
    title: 'Plants make the atmosphere of the house come alive4',
    image:
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Fsofa-green.jpg?alt=media&token=74327cb3-d85e-45a3-bfb5-b01010c77e3b',
    imageAlt: 'Picture of furniture chair and table office4',
    description:
      '4Houseplants are good for your health — and not just for their visual beauty. Why? They essentially do the opposite of what we do when we breathe: release oxygen and absorb carbon dioxide. This not only freshens up the air, but also eliminates harmful toxins. Extensive research by NASA has revealed that houseplants can remove up to 87 per cent of air toxin in 24 hours. Studies have also proven that indoor plants improve concentration and productivity (by up to 15 percent!), reduce stress levels and boost your mood — making them perfect for not just your home but your work space, too. At work, place plants, especially those with broad leaves, on your desk; they will help regulate humidity and increase levels of positivity — seeing greenery and nature help us feel more relaxed and calm, which in turn benefits your every day mood. Indoor plants serve a practical and aesthetic purpose, and will enhance your life. How to Create your Personal Plant Sanctuary. An indoor garden can be your refuge from the outside world, and for many people it is a source of great joy. Whether you live in a small apartment, or a large house, by introducing certain plants into your home, you will start to notice improvements to your health, and overall happiness. As well as enhancing your mood and creating a living space that is soothing to be in, plants can also help with loneliness and depression: caring for a living thing gives us a purpose and is rewarding — especially when you see that living thing bloom and thrive. choose the right plants for the an optimal nights sleep. Although plants release oxygen during the day, it is worth remembering that, at night, when photosynthesis stops, most plants switch things up and release carbon dioxide. However plants such as orchids, succulents, snake plants and bromeliads do the opposite and emit oxygen, making them perfect plants for the bedroom (and getting better sleep). Beware of too much sun. Most indoor plants don’t like direct midday sun, so please be wary of this when placing plants in your home. There are very obvious warning signs to look out for, such as leaf burn, spotting or sudden leaf-fall. Most plants can be easily rescued, so don’t panic! Often it is a case of not watering them too much, or letting the soil dry out a bit if it is feeling too soggy. Check if your plant is sitting by a cold draft as this can case the leaves to curl and eventually drop off. Organic fertilizers are a great way to revive your plants.',
  },
  {
    id: uuidv4(),
    title: 'Good Lighting Makes The Home More Light4',
    image:
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Fbg-hero.png?alt=media&token=4c7db115-1628-4f10-9240-08a48d4ac0d1',
    imageAlt: 'Picture of furniture desk office4',
    description:
      '4Houseplants are good for your health — and not just for their visual beauty. Why? They essentially do the opposite of what we do when we breathe: release oxygen and absorb carbon dioxide. This not only freshens up the air, but also eliminates harmful toxins. Extensive research by NASA has revealed that houseplants can remove up to 87 per cent of air toxin in 24 hours. Studies have also proven that indoor plants improve concentration and productivity (by up to 15 percent!), reduce stress levels and boost your mood — making them perfect for not just your home but your work space, too. At work, place plants, especially those with broad leaves, on your desk; they will help regulate humidity and increase levels of positivity — seeing greenery and nature help us feel more relaxed and calm, which in turn benefits your every day mood. Indoor plants serve a practical and aesthetic purpose, and will enhance your life. How to Create your Personal Plant Sanctuary. An indoor garden can be your refuge from the outside world, and for many people it is a source of great joy. Whether you live in a small apartment, or a large house, by introducing certain plants into your home, you will start to notice improvements to your health, and overall happiness. As well as enhancing your mood and creating a living space that is soothing to be in, plants can also help with loneliness and depression: caring for a living thing gives us a purpose and is rewarding — especially when you see that living thing bloom and thrive. choose the right plants for the an optimal nights sleep. Although plants release oxygen during the day, it is worth remembering that, at night, when photosynthesis stops, most plants switch things up and release carbon dioxide. However plants such as orchids, succulents, snake plants and bromeliads do the opposite and emit oxygen, making them perfect plants for the bedroom (and getting better sleep). Beware of too much sun. Most indoor plants don’t like direct midday sun, so please be wary of this when placing plants in your home. There are very obvious warning signs to look out for, such as leaf burn, spotting or sudden leaf-fall. Most plants can be easily rescued, so don’t panic! Often it is a case of not watering them too much, or letting the soil dry out a bit if it is feeling too soggy. Check if your plant is sitting by a cold draft as this can case the leaves to curl and eventually drop off.',
  },
  {
    id: uuidv4(),
    title: 'Classic Style Makes Houses Look More Expensive4',
    image:
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Fchair-yellow.jpg?alt=media&token=c97cf937-78e2-4d88-bd81-ac25a3b2299d',
    imageAlt: 'Picture of furniture sofa4',
    description:
      '4Houseplants are good for your health — and not just for their visual beauty. Why? They essentially do the opposite of what we do when we breathe: release oxygen and absorb carbon dioxide. This not only freshens up the air, but also eliminates harmful toxins. Extensive research by NASA has revealed that houseplants can remove up to 87 per cent of air toxin in 24 hours. Studies have also proven that indoor plants improve concentration and productivity (by up to 15 percent!), reduce stress levels and boost your mood — making them perfect for not just your home but your work space, too. At work, place plants, especially those with broad leaves, on your desk; they will help regulate humidity and increase levels of positivity — seeing greenery and nature help us feel more relaxed and calm, which in turn benefits your every day mood. Indoor plants serve a practical and aesthetic purpose, and will enhance your life. How to Create your Personal Plant Sanctuary. An indoor garden can be your refuge from the outside world, and for many people it is a source of great joy. Whether you live in a small apartment, or a large house, by introducing certain plants into your home, you will start to notice improvements to your health, and overall happiness. As well as enhancing your mood and creating a living space that is soothing to be in, plants can also help with loneliness and depression: caring for a living thing gives us a purpose and is rewarding — especially when you see that living thing bloom and thrive. choose the right plants for the an optimal nights sleep. Although plants release oxygen during the day, it is worth remembering that, at night, when photosynthesis stops, most plants switch things up and release carbon dioxide. However plants such as orchids, succulents, snake plants and bromeliads do the opposite and emit oxygen, making them perfect plants for the bedroom (and getting better sleep). Beware of too much sun. Most indoor plants don’t like direct midday sun, so please be wary of this when placing plants in your home. There are very obvious warning signs to look out for, such as leaf burn, spotting or sudden leaf-fall. Most plants can be easily rescued, so don’t panic! Often it is a case of not watering them too much, or letting the soil dry out a bit if it is feeling too soggy. Check if your plant is sitting by a cold draft as this can case the leaves to curl and eventually drop off. Organic fertilizers are a great way to revive your plants.',
  },
]

export const MiniMarketMock = [
  {
    id: uuidv4(),
    value: 'alfaMart',
    image:
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Falfa-mart.png?alt=media&token=9b048c66-4c5c-4e9b-a09e-1ddb83ff3524',
    altImage: 'Logo brand of Alfa Mart',
  },
  {
    id: uuidv4(),
    value: 'indoMaret',
    image:
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Findomaret.png?alt=media&token=7c053710-efe1-4db1-851a-9c794a0cbf08',
    altImage: 'Logo brand of Indo Maret',
  },
]

export const DigitalWalletMock = [
  {
    id: uuidv4(),
    value: 'goPay',
    image:
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Fgopay.png?alt=media&token=f2138737-db02-4422-98ab-0fa3c0bfffad',
    altImage: 'Logo brand of Go Pay',
  },
  {
    id: uuidv4(),
    value: 'ovo',
    image:
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Fovo.png?alt=media&token=052c5f08-df30-4c0a-bf33-2cd659e8c200',
    altImage: 'Logo brand of Ovo',
  },
  {
    id: uuidv4(),
    value: 'linkAja',
    image:
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Flink-aja.png?alt=media&token=06b2663c-7b3b-4c3e-8411-747090c471b2',
    altImage: 'Logo brand of Link Aja',
  },
]

export const BankMock = [
  {
    id: uuidv4(),
    value: 'bca',
    image:
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Fbca-bank.png?alt=media&token=c3e7c3ba-ea25-4b97-9d4e-56429c2c95b1',
    altImage: 'Logo brand of Bca Bank',
  },
  {
    id: uuidv4(),
    value: 'mandiri',
    image:
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Fmandiri-bank.png?alt=media&token=f8662f51-bf25-4d29-be6a-d708bb0f4d6f',
    altImage: 'Logo brand of Mandiri Bank',
  },
  {
    id: uuidv4(),
    value: 'bri',
    image:
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Fbri-bank.png?alt=media&token=dee39c51-5c71-4b2e-a192-f332f8ab2a7b',
    altImage: 'Logo brand of Bri Bank',
  },
]

export const PaymentMock = [
  {
    id: uuidv4(),
    value: 'payPal',
    image:
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-f4624.appspot.com/o/images%2Fpaypal.png?alt=media&token=1940655d-b9b6-4b89-b115-a905db4a68a3',
    altImage: 'Logo brand of Paypal',
  },
]

export const ColorMock = [
  { id: uuidv4(), value: 'blue', label: 'Blue' },
  { id: uuidv4(), value: 'purple', label: 'Purple' },
  { id: uuidv4(), value: 'red', label: 'Red' },
  { id: uuidv4(), value: 'orange', label: 'Orange' },
  { id: uuidv4(), value: 'yellow', label: 'Yellow' },
  { id: uuidv4(), value: 'green', label: 'Green' },
]
