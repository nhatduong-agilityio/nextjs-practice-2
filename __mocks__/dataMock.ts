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
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Fsofa-green.jpg?alt=media&token=c2479cc5-ceb6-414f-bc97-5113599d35a5',
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
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Ffurniture-1.jpg?alt=media&token=7bcafb51-3ee9-4916-8c7c-826c441de454',
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
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Ffurniture-2.jpg?alt=media&token=dc12d663-9439-4af6-b045-b029e68dd7ea',
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
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Ffurniture-3.jpg?alt=media&token=c779d10a-f089-45ab-bc5c-fb950d212b6f',
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
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Ffurniture-4.jpg?alt=media&token=57963afa-5ffc-49aa-ba0e-286ed5fd0fe4',
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
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Fchair-yellow.jpg?alt=media&token=9171655e-4a37-4922-aff2-69a0bbcf7d51',
      IMAGE_ALT: 'Picture of furniture chair category',
    },
    OFFICE: {
      NAME: 'Office Chair',
      BG_IMAGE:
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Foffice-chair.jpg?alt=media&token=2471a85a-3849-4de0-ac7f-ab34fbfd27ea',
      IMAGE_ALT: 'Picture of furniture office chair category',
    },
    FAMILY: {
      NAME: 'Family Chair',
      BG_IMAGE:
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Ffamily-chair.jpg?alt=media&token=e65d33c6-3e75-4287-a0c8-5faf7ab15a61',
      IMAGE_ALT: 'Picture of furniture family chair category',
    },
    READING: {
      NAME: 'Reading Chair',
      BG_IMAGE:
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Freading-chair.jpg?alt=media&token=c3ef931d-0ace-4ba1-b7b9-84806972c3da',
      IMAGE_ALT: 'Picture of furniture reading chair category',
    },
  },
  DESK: {
    ALL: {
      NAME: 'Desk',
      BG_IMAGE:
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Fdesk.jpg?alt=media&token=2dfeecf5-d39f-4ade-b035-cd782e8517e0',
      IMAGE_ALT: 'Picture of furniture desk category',
    },
    OFFICE: {
      NAME: 'Office desk',
      BG_IMAGE:
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Foffice-desk.jpg?alt=media&token=54d7c2f2-afb6-486f-b994-cf3ede2a7f36',
      IMAGE_ALT: 'Picture of furniture office desk category',
    },
  },
  Bed: {
    ALL: {
      NAME: 'Bed',
      BG_IMAGE:
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Fbed.jpg?alt=media&token=217c4178-6b90-4565-8e70-0caa1c73316f',
      IMAGE_ALT: 'Picture of furniture bed category',
    },
    SPRING: {
      NAME: 'Springbed',
      BG_IMAGE:
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Fspringbed.jpg?alt=media&token=0a8d06c7-a0b4-4b6f-86a9-27682c450217',
      IMAGE_ALT: 'Picture of furniture spring bed category',
    },
  },
  CARPET: {
    ALL: {
      NAME: 'Carpet',
      BG_IMAGE:
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Fcarpet.jpg?alt=media&token=ec0868f8-5a5a-4603-9a6a-e353c4787903',
      IMAGE_ALT: 'Picture of furniture carpet category',
    },
  },
  SOFA: {
    ALL: {
      NAME: 'Sofa',
      BG_IMAGE:
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Fbg-hero.png?alt=media&token=c2146a23-01bf-4394-af0d-ccbe6aff7b36',
      IMAGE_ALT: 'Picture of furniture sofa category',
    },
  },
  CUPBOARD: {
    ALL: {
      NAME: 'Cupboard',
      BG_IMAGE:
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Fcupboard.jpg?alt=media&token=6694692a-d03e-41d0-9a2c-f3dd7bd546a4',
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
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Fsofa-green.jpg?alt=media&token=c2479cc5-ceb6-414f-bc97-5113599d35a5',
      listImage: [
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Fsofa-green.jpg?alt=media&token=c2479cc5-ceb6-414f-bc97-5113599d35a5',
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Fsofa-green.jpg?alt=media&token=c2479cc5-ceb6-414f-bc97-5113599d35a5',
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Fsofa-green.jpg?alt=media&token=c2479cc5-ceb6-414f-bc97-5113599d35a5',
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Fsofa-green.jpg?alt=media&token=c2479cc5-ceb6-414f-bc97-5113599d35a5',
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
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Fchair-yellow.jpg?alt=media&token=9171655e-4a37-4922-aff2-69a0bbcf7d51',
      listImage: [
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Fchair-yellow.jpg?alt=media&token=9171655e-4a37-4922-aff2-69a0bbcf7d51',
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Fchair-yellow.jpg?alt=media&token=9171655e-4a37-4922-aff2-69a0bbcf7d51',
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Fchair-yellow.jpg?alt=media&token=9171655e-4a37-4922-aff2-69a0bbcf7d51',
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Fchair-yellow.jpg?alt=media&token=9171655e-4a37-4922-aff2-69a0bbcf7d51',
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
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Fbg-hero.png?alt=media&token=c2146a23-01bf-4394-af0d-ccbe6aff7b36',
      listImage: [
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Fbg-hero.png?alt=media&token=c2146a23-01bf-4394-af0d-ccbe6aff7b36',
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Fbg-hero.png?alt=media&token=c2146a23-01bf-4394-af0d-ccbe6aff7b36',
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Fbg-hero.png?alt=media&token=c2146a23-01bf-4394-af0d-ccbe6aff7b36',
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Fbg-hero.png?alt=media&token=c2146a23-01bf-4394-af0d-ccbe6aff7b36',
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
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Fcarpet.jpg?alt=media&token=ec0868f8-5a5a-4603-9a6a-e353c4787903',
      listImage: [
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Fcarpet.jpg?alt=media&token=ec0868f8-5a5a-4603-9a6a-e353c4787903',
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Fcarpet.jpg?alt=media&token=ec0868f8-5a5a-4603-9a6a-e353c4787903',
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Fcarpet.jpg?alt=media&token=ec0868f8-5a5a-4603-9a6a-e353c4787903',
        'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Fcarpet.jpg?alt=media&token=ec0868f8-5a5a-4603-9a6a-e353c4787903',
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
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Farticle-1.jpg?alt=media&token=c1a5e572-6861-4b4d-86da-b047368f8a2c',
    imageAlt: 'Picture of furniture chair and table office',
    description:
      'Houseplants are good for your health — and not just for their visual beauty. Why? They essentially do the opposite of what we do when we breathe: release oxygen and absorb carbon dioxide. This not only freshens up the air, but also eliminates harmful toxins. Extensive research by NASA has revealed that houseplants can remove up to 87 per cent of air toxin in 24 hours. Studies have also proven that indoor plants improve concentration and productivity (by up to 15 percent!), reduce stress levels and boost your mood — making them perfect for not just your home but your work space, too. At work, place plants, especially those with broad leaves, on your desk; they will help regulate humidity and increase levels of positivity — seeing greenery and nature help us feel more relaxed and calm, which in turn benefits your every day mood. Indoor plants serve a practical and aesthetic purpose, and will enhance your life. How to Create your Personal Plant Sanctuary. An indoor garden can be your refuge from the outside world, and for many people it is a source of great joy. Whether you live in a small apartment, or a large house, by introducing certain plants into your home, you will start to notice improvements to your health, and overall happiness. As well as enhancing your mood and creating a living space that is soothing to be in, plants can also help with loneliness and depression: caring for a living thing gives us a purpose and is rewarding — especially when you see that living thing bloom and thrive. choose the right plants for the an optimal nights sleep. Although plants release oxygen during the day, it is worth remembering that, at night, when photosynthesis stops, most plants switch things up and release carbon dioxide. However plants such as orchids, succulents, snake plants and bromeliads do the opposite and emit oxygen, making them perfect plants for the bedroom (and getting better sleep). Beware of too much sun. Most indoor plants don’t like direct midday sun, so please be wary of this when placing plants in your home. There are very obvious warning signs to look out for, such as leaf burn, spotting or sudden leaf-fall. Most plants can be easily rescued, so don’t panic! Often it is a case of not watering them too much, or letting the soil dry out a bit if it is feeling too soggy. Check if your plant is sitting by a cold draft as this can case the leaves to curl and eventually drop off. Organic fertilizers are a great way to revive your plants.',
  },
  {
    id: uuidv4(),
    title: 'Good Lighting Makes The Home More Light',
    image:
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Farticle-2.jpg?alt=media&token=e8e0d53b-a13f-4d97-84b3-a0768d732c12',
    imageAlt: 'Picture of furniture desk office',
    description:
      'Houseplants are good for your health — and not just for their visual beauty. Why? They essentially do the opposite of what we do when we breathe: release oxygen and absorb carbon dioxide. This not only freshens up the air, but also eliminates harmful toxins. Extensive research by NASA has revealed that houseplants can remove up to 87 per cent of air toxin in 24 hours. Studies have also proven that indoor plants improve concentration and productivity (by up to 15 percent!), reduce stress levels and boost your mood — making them perfect for not just your home but your work space, too. At work, place plants, especially those with broad leaves, on your desk; they will help regulate humidity and increase levels of positivity — seeing greenery and nature help us feel more relaxed and calm, which in turn benefits your every day mood. Indoor plants serve a practical and aesthetic purpose, and will enhance your life. How to Create your Personal Plant Sanctuary. An indoor garden can be your refuge from the outside world, and for many people it is a source of great joy. Whether you live in a small apartment, or a large house, by introducing certain plants into your home, you will start to notice improvements to your health, and overall happiness. As well as enhancing your mood and creating a living space that is soothing to be in, plants can also help with loneliness and depression: caring for a living thing gives us a purpose and is rewarding — especially when you see that living thing bloom and thrive. choose the right plants for the an optimal nights sleep. Although plants release oxygen during the day, it is worth remembering that, at night, when photosynthesis stops, most plants switch things up and release carbon dioxide. However plants such as orchids, succulents, snake plants and bromeliads do the opposite and emit oxygen, making them perfect plants for the bedroom (and getting better sleep). Beware of too much sun. Most indoor plants don’t like direct midday sun, so please be wary of this when placing plants in your home. There are very obvious warning signs to look out for, such as leaf burn, spotting or sudden leaf-fall. Most plants can be easily rescued, so don’t panic! Often it is a case of not watering them too much, or letting the soil dry out a bit if it is feeling too soggy. Check if your plant is sitting by a cold draft as this can case the leaves to curl and eventually drop off.',
  },
  {
    id: uuidv4(),
    title: 'Classic Style Makes Houses Look More Expensive',
    image:
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Farticle-3.jpg?alt=media&token=a65665dd-db86-475c-ad2f-0e7c16bd2815',
    imageAlt: 'Picture of furniture sofa',
    description:
      'Houseplants are good for your health — and not just for their visual beauty. Why? They essentially do the opposite of what we do when we breathe: release oxygen and absorb carbon dioxide. This not only freshens up the air, but also eliminates harmful toxins. Extensive research by NASA has revealed that houseplants can remove up to 87 per cent of air toxin in 24 hours. Studies have also proven that indoor plants improve concentration and productivity (by up to 15 percent!), reduce stress levels and boost your mood — making them perfect for not just your home but your work space, too. At work, place plants, especially those with broad leaves, on your desk; they will help regulate humidity and increase levels of positivity — seeing greenery and nature help us feel more relaxed and calm, which in turn benefits your every day mood. Indoor plants serve a practical and aesthetic purpose, and will enhance your life. How to Create your Personal Plant Sanctuary. An indoor garden can be your refuge from the outside world, and for many people it is a source of great joy. Whether you live in a small apartment, or a large house, by introducing certain plants into your home, you will start to notice improvements to your health, and overall happiness. As well as enhancing your mood and creating a living space that is soothing to be in, plants can also help with loneliness and depression: caring for a living thing gives us a purpose and is rewarding — especially when you see that living thing bloom and thrive. choose the right plants for the an optimal nights sleep. Although plants release oxygen during the day, it is worth remembering that, at night, when photosynthesis stops, most plants switch things up and release carbon dioxide. However plants such as orchids, succulents, snake plants and bromeliads do the opposite and emit oxygen, making them perfect plants for the bedroom (and getting better sleep). Beware of too much sun. Most indoor plants don’t like direct midday sun, so please be wary of this when placing plants in your home. There are very obvious warning signs to look out for, such as leaf burn, spotting or sudden leaf-fall. Most plants can be easily rescued, so don’t panic! Often it is a case of not watering them too much, or letting the soil dry out a bit if it is feeling too soggy. Check if your plant is sitting by a cold draft as this can case the leaves to curl and eventually drop off. Organic fertilizers are a great way to revive your plants.',
  },
  {
    id: uuidv4(),
    title: 'Plants make the atmosphere of the house come alive2',
    image:
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Farticle-4.jpg?alt=media&token=7bfd6950-78f0-4dba-a072-3f0527e0ca25',
    imageAlt: 'Picture of furniture chair and table office2',
    description:
      '2Houseplants are good for your health — and not just for their visual beauty. Why? They essentially do the opposite of what we do when we breathe: release oxygen and absorb carbon dioxide. This not only freshens up the air, but also eliminates harmful toxins. Extensive research by NASA has revealed that houseplants can remove up to 87 per cent of air toxin in 24 hours. Studies have also proven that indoor plants improve concentration and productivity (by up to 15 percent!), reduce stress levels and boost your mood — making them perfect for not just your home but your work space, too. At work, place plants, especially those with broad leaves, on your desk; they will help regulate humidity and increase levels of positivity — seeing greenery and nature help us feel more relaxed and calm, which in turn benefits your every day mood. Indoor plants serve a practical and aesthetic purpose, and will enhance your life. How to Create your Personal Plant Sanctuary. An indoor garden can be your refuge from the outside world, and for many people it is a source of great joy. Whether you live in a small apartment, or a large house, by introducing certain plants into your home, you will start to notice improvements to your health, and overall happiness. As well as enhancing your mood and creating a living space that is soothing to be in, plants can also help with loneliness and depression: caring for a living thing gives us a purpose and is rewarding — especially when you see that living thing bloom and thrive. choose the right plants for the an optimal nights sleep. Although plants release oxygen during the day, it is worth remembering that, at night, when photosynthesis stops, most plants switch things up and release carbon dioxide. However plants such as orchids, succulents, snake plants and bromeliads do the opposite and emit oxygen, making them perfect plants for the bedroom (and getting better sleep). Beware of too much sun. Most indoor plants don’t like direct midday sun, so please be wary of this when placing plants in your home. There are very obvious warning signs to look out for, such as leaf burn, spotting or sudden leaf-fall. Most plants can be easily rescued, so don’t panic! Often it is a case of not watering them too much, or letting the soil dry out a bit if it is feeling too soggy. Check if your plant is sitting by a cold draft as this can case the leaves to curl and eventually drop off. Organic fertilizers are a great way to revive your plants.',
  },
  {
    id: uuidv4(),
    title: 'Good Lighting Makes The Home More Light2',
    image:
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Fdesk.jpg?alt=media&token=2dfeecf5-d39f-4ade-b035-cd782e8517e0',
    imageAlt: 'Picture of furniture desk office2',
    description:
      '2Houseplants are good for your health — and not just for their visual beauty. Why? They essentially do the opposite of what we do when we breathe: release oxygen and absorb carbon dioxide. This not only freshens up the air, but also eliminates harmful toxins. Extensive research by NASA has revealed that houseplants can remove up to 87 per cent of air toxin in 24 hours. Studies have also proven that indoor plants improve concentration and productivity (by up to 15 percent!), reduce stress levels and boost your mood — making them perfect for not just your home but your work space, too. At work, place plants, especially those with broad leaves, on your desk; they will help regulate humidity and increase levels of positivity — seeing greenery and nature help us feel more relaxed and calm, which in turn benefits your every day mood. Indoor plants serve a practical and aesthetic purpose, and will enhance your life. How to Create your Personal Plant Sanctuary. An indoor garden can be your refuge from the outside world, and for many people it is a source of great joy. Whether you live in a small apartment, or a large house, by introducing certain plants into your home, you will start to notice improvements to your health, and overall happiness. As well as enhancing your mood and creating a living space that is soothing to be in, plants can also help with loneliness and depression: caring for a living thing gives us a purpose and is rewarding — especially when you see that living thing bloom and thrive. choose the right plants for the an optimal nights sleep. Although plants release oxygen during the day, it is worth remembering that, at night, when photosynthesis stops, most plants switch things up and release carbon dioxide. However plants such as orchids, succulents, snake plants and bromeliads do the opposite and emit oxygen, making them perfect plants for the bedroom (and getting better sleep). Beware of too much sun. Most indoor plants don’t like direct midday sun, so please be wary of this when placing plants in your home. There are very obvious warning signs to look out for, such as leaf burn, spotting or sudden leaf-fall. Most plants can be easily rescued, so don’t panic! Often it is a case of not watering them too much, or letting the soil dry out a bit if it is feeling too soggy. Check if your plant is sitting by a cold draft as this can case the leaves to curl and eventually drop off.',
  },
  {
    id: uuidv4(),
    title: 'Classic Style Makes Houses Look More Expensive2',
    image:
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Fcarpet.jpg?alt=media&token=ec0868f8-5a5a-4603-9a6a-e353c4787903',
    imageAlt: 'Picture of furniture sofa2',
    description:
      '2Houseplants are good for your health — and not just for their visual beauty. Why? They essentially do the opposite of what we do when we breathe: release oxygen and absorb carbon dioxide. This not only freshens up the air, but also eliminates harmful toxins. Extensive research by NASA has revealed that houseplants can remove up to 87 per cent of air toxin in 24 hours. Studies have also proven that indoor plants improve concentration and productivity (by up to 15 percent!), reduce stress levels and boost your mood — making them perfect for not just your home but your work space, too. At work, place plants, especially those with broad leaves, on your desk; they will help regulate humidity and increase levels of positivity — seeing greenery and nature help us feel more relaxed and calm, which in turn benefits your every day mood. Indoor plants serve a practical and aesthetic purpose, and will enhance your life. How to Create your Personal Plant Sanctuary. An indoor garden can be your refuge from the outside world, and for many people it is a source of great joy. Whether you live in a small apartment, or a large house, by introducing certain plants into your home, you will start to notice improvements to your health, and overall happiness. As well as enhancing your mood and creating a living space that is soothing to be in, plants can also help with loneliness and depression: caring for a living thing gives us a purpose and is rewarding — especially when you see that living thing bloom and thrive. choose the right plants for the an optimal nights sleep. Although plants release oxygen during the day, it is worth remembering that, at night, when photosynthesis stops, most plants switch things up and release carbon dioxide. However plants such as orchids, succulents, snake plants and bromeliads do the opposite and emit oxygen, making them perfect plants for the bedroom (and getting better sleep). Beware of too much sun. Most indoor plants don’t like direct midday sun, so please be wary of this when placing plants in your home. There are very obvious warning signs to look out for, such as leaf burn, spotting or sudden leaf-fall. Most plants can be easily rescued, so don’t panic! Often it is a case of not watering them too much, or letting the soil dry out a bit if it is feeling too soggy. Check if your plant is sitting by a cold draft as this can case the leaves to curl and eventually drop off. Organic fertilizers are a great way to revive your plants.',
  },
  {
    id: uuidv4(),
    title: 'Plants make the atmosphere of the house come alive3',
    image:
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Fcupboard.jpg?alt=media&token=6694692a-d03e-41d0-9a2c-f3dd7bd546a4',
    imageAlt: 'Picture of furniture chair and table office3',
    description:
      '3Houseplants are good for your health — and not just for their visual beauty. Why? They essentially do the opposite of what we do when we breathe: release oxygen and absorb carbon dioxide. This not only freshens up the air, but also eliminates harmful toxins. Extensive research by NASA has revealed that houseplants can remove up to 87 per cent of air toxin in 24 hours. Studies have also proven that indoor plants improve concentration and productivity (by up to 15 percent!), reduce stress levels and boost your mood — making them perfect for not just your home but your work space, too. At work, place plants, especially those with broad leaves, on your desk; they will help regulate humidity and increase levels of positivity — seeing greenery and nature help us feel more relaxed and calm, which in turn benefits your every day mood. Indoor plants serve a practical and aesthetic purpose, and will enhance your life. How to Create your Personal Plant Sanctuary. An indoor garden can be your refuge from the outside world, and for many people it is a source of great joy. Whether you live in a small apartment, or a large house, by introducing certain plants into your home, you will start to notice improvements to your health, and overall happiness. As well as enhancing your mood and creating a living space that is soothing to be in, plants can also help with loneliness and depression: caring for a living thing gives us a purpose and is rewarding — especially when you see that living thing bloom and thrive. choose the right plants for the an optimal nights sleep. Although plants release oxygen during the day, it is worth remembering that, at night, when photosynthesis stops, most plants switch things up and release carbon dioxide. However plants such as orchids, succulents, snake plants and bromeliads do the opposite and emit oxygen, making them perfect plants for the bedroom (and getting better sleep). Beware of too much sun. Most indoor plants don’t like direct midday sun, so please be wary of this when placing plants in your home. There are very obvious warning signs to look out for, such as leaf burn, spotting or sudden leaf-fall. Most plants can be easily rescued, so don’t panic! Often it is a case of not watering them too much, or letting the soil dry out a bit if it is feeling too soggy. Check if your plant is sitting by a cold draft as this can case the leaves to curl and eventually drop off. Organic fertilizers are a great way to revive your plants.',
  },
  {
    id: uuidv4(),
    title: 'Good Lighting Makes The Home More Light3',
    image:
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Freading-chair.jpg?alt=media&token=c3ef931d-0ace-4ba1-b7b9-84806972c3da',
    imageAlt: 'Picture of furniture desk office3',
    description:
      '3Houseplants are good for your health — and not just for their visual beauty. Why? They essentially do the opposite of what we do when we breathe: release oxygen and absorb carbon dioxide. This not only freshens up the air, but also eliminates harmful toxins. Extensive research by NASA has revealed that houseplants can remove up to 87 per cent of air toxin in 24 hours. Studies have also proven that indoor plants improve concentration and productivity (by up to 15 percent!), reduce stress levels and boost your mood — making them perfect for not just your home but your work space, too. At work, place plants, especially those with broad leaves, on your desk; they will help regulate humidity and increase levels of positivity — seeing greenery and nature help us feel more relaxed and calm, which in turn benefits your every day mood. Indoor plants serve a practical and aesthetic purpose, and will enhance your life. How to Create your Personal Plant Sanctuary. An indoor garden can be your refuge from the outside world, and for many people it is a source of great joy. Whether you live in a small apartment, or a large house, by introducing certain plants into your home, you will start to notice improvements to your health, and overall happiness. As well as enhancing your mood and creating a living space that is soothing to be in, plants can also help with loneliness and depression: caring for a living thing gives us a purpose and is rewarding — especially when you see that living thing bloom and thrive. choose the right plants for the an optimal nights sleep. Although plants release oxygen during the day, it is worth remembering that, at night, when photosynthesis stops, most plants switch things up and release carbon dioxide. However plants such as orchids, succulents, snake plants and bromeliads do the opposite and emit oxygen, making them perfect plants for the bedroom (and getting better sleep). Beware of too much sun. Most indoor plants don’t like direct midday sun, so please be wary of this when placing plants in your home. There are very obvious warning signs to look out for, such as leaf burn, spotting or sudden leaf-fall. Most plants can be easily rescued, so don’t panic! Often it is a case of not watering them too much, or letting the soil dry out a bit if it is feeling too soggy. Check if your plant is sitting by a cold draft as this can case the leaves to curl and eventually drop off.',
  },
  {
    id: uuidv4(),
    title: 'Classic Style Makes Houses Look More Expensive3',
    image:
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Fspringbed.jpg?alt=media&token=0a8d06c7-a0b4-4b6f-86a9-27682c450217',
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
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Fbg-hero.png?alt=media&token=c2146a23-01bf-4394-af0d-ccbe6aff7b36',
    imageAlt: 'Picture of furniture desk office4',
    description:
      '4Houseplants are good for your health — and not just for their visual beauty. Why? They essentially do the opposite of what we do when we breathe: release oxygen and absorb carbon dioxide. This not only freshens up the air, but also eliminates harmful toxins. Extensive research by NASA has revealed that houseplants can remove up to 87 per cent of air toxin in 24 hours. Studies have also proven that indoor plants improve concentration and productivity (by up to 15 percent!), reduce stress levels and boost your mood — making them perfect for not just your home but your work space, too. At work, place plants, especially those with broad leaves, on your desk; they will help regulate humidity and increase levels of positivity — seeing greenery and nature help us feel more relaxed and calm, which in turn benefits your every day mood. Indoor plants serve a practical and aesthetic purpose, and will enhance your life. How to Create your Personal Plant Sanctuary. An indoor garden can be your refuge from the outside world, and for many people it is a source of great joy. Whether you live in a small apartment, or a large house, by introducing certain plants into your home, you will start to notice improvements to your health, and overall happiness. As well as enhancing your mood and creating a living space that is soothing to be in, plants can also help with loneliness and depression: caring for a living thing gives us a purpose and is rewarding — especially when you see that living thing bloom and thrive. choose the right plants for the an optimal nights sleep. Although plants release oxygen during the day, it is worth remembering that, at night, when photosynthesis stops, most plants switch things up and release carbon dioxide. However plants such as orchids, succulents, snake plants and bromeliads do the opposite and emit oxygen, making them perfect plants for the bedroom (and getting better sleep). Beware of too much sun. Most indoor plants don’t like direct midday sun, so please be wary of this when placing plants in your home. There are very obvious warning signs to look out for, such as leaf burn, spotting or sudden leaf-fall. Most plants can be easily rescued, so don’t panic! Often it is a case of not watering them too much, or letting the soil dry out a bit if it is feeling too soggy. Check if your plant is sitting by a cold draft as this can case the leaves to curl and eventually drop off.',
  },
  {
    id: uuidv4(),
    title: 'Classic Style Makes Houses Look More Expensive4',
    image:
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Fchair-yellow.jpg?alt=media&token=9171655e-4a37-4922-aff2-69a0bbcf7d51',
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
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Falfa-mart.png?alt=media&token=1c0b2cba-977f-402d-a457-132d103de31b',
    altImage: 'Logo brand of Alfa Mart',
  },
  {
    id: uuidv4(),
    value: 'indoMaret',
    image:
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Findomaret.png?alt=media&token=651463b6-7b3d-44ac-a038-28aff66b4fbd',
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
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Fovo.png?alt=media&token=cf38fe11-dc6e-448a-bcd4-ec918a0535e4',
    altImage: 'Logo brand of Ovo',
  },
  {
    id: uuidv4(),
    value: 'linkAja',
    image:
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Flink-aja.png?alt=media&token=209d51fd-b7d3-412c-afb9-f92bbb896d33',
    altImage: 'Logo brand of Link Aja',
  },
]

export const BankMock = [
  {
    id: uuidv4(),
    value: 'bca',
    image:
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Fbca-bank.png?alt=media&token=fbadf89a-1723-4760-868b-faa407bd004a',
    altImage: 'Logo brand of Bca Bank',
  },
  {
    id: uuidv4(),
    value: 'mandiri',
    image:
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Fmandiri-bank.png?alt=media&token=7d9fd118-5cba-484b-a775-81372ffd92c8',
    altImage: 'Logo brand of Mandiri Bank',
  },
  {
    id: uuidv4(),
    value: 'bri',
    image:
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Fbri-bank.png?alt=media&token=637eb850-660a-4d5c-ac4d-7db1844a8d87',
    altImage: 'Logo brand of Bri Bank',
  },
]

export const PaymentMock = [
  {
    id: uuidv4(),
    value: 'payPal',
    image:
      'https://firebasestorage.googleapis.com/v0/b/shop-bag-ffd59.appspot.com/o/images%2Fpaypal.png?alt=media&token=300e38ad-6415-44b4-b44e-095012e3fb9c',
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
