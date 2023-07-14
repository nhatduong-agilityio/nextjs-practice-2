import { v4 as uuidv4 } from 'uuid'

import furniture1 from '@public/images/furniture-1.jpg'
import furniture2 from '@public/images/furniture-2.jpg'
import furniture3 from '@public/images/furniture-3.jpg'
import furniture4 from '@public/images/furniture-4.jpg'

// Images
import SOFA_GREY from '@public/images/bg-hero.png'
import SOFA_GREEN from '@public/images/sofa-green.jpg'
import CHAIR_YELLOW from '@public/images/chair-yellow.jpg'
import ALFA_MART from '@public/images/alfa-mart.png'
import INDO_MART from '@public/images/indomaret.png'
import GOPAY from '@public/images/gopay.png'
import OVO from '@public/images/ovo.png'
import LINK_AJA from '@public/images/link-aja.png'
import BCA from '@public/images/bca-bank.png'
import MANDIRI from '@public/images/mandiri-bank.png'
import BRI from '@public/images/bri-bank.png'
import PAYPAL from '@public/images/paypal.png'

export const SlideMock = [
  {
    id: uuidv4(),
    image: furniture1,
    imageAlt: 'Picture of furniture chair leather',
    content: {
      title: 'Japanese Cupboard',
      description:
        'The combination of vintage, minimalist and classic makes this Japanese design cupboard the right choice. This cabinet was chosen by millennials to complement their housing',
    },
  },
  {
    id: uuidv4(),
    image: furniture2,
    imageAlt: 'Picture of furniture dest office',
    content: {
      title: 'Japanese Cupboard1',
      description:
        'The combination of vintage, minimalist and classic makes this Japanese design cupboard the right choice. This cabinet was chosen by millennials to complement their housing1',
    },
  },
  {
    id: uuidv4(),
    image: furniture3,
    imageAlt: 'Picture of furniture sofa leather',
    content: {
      title: 'Japanese Cupboard2',
      description:
        'The combination of vintage, minimalist and classic makes this Japanese design cupboard the right choice. This cabinet was chosen by millennials to complement their housing2',
    },
  },
  {
    id: uuidv4(),
    image: furniture4,
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
      BG_IMAGE: CHAIR_YELLOW,
      IMAGE_ALT: 'Picture of furniture chair category',
    },
    OFFICE: {
      NAME: 'Office Chair',
      BG_IMAGE: CHAIR_YELLOW,
      IMAGE_ALT: 'Picture of furniture office chair category',
    },
    FAMILY: {
      NAME: 'Family Chair',
      BG_IMAGE: CHAIR_YELLOW,
      IMAGE_ALT: 'Picture of furniture family chair category',
    },
    READING: {
      NAME: 'Reading Chair',
      BG_IMAGE: CHAIR_YELLOW,
      IMAGE_ALT: 'Picture of furniture reading chair category',
    },
  },
  DEST: {
    ALL: {
      NAME: 'Dest',
      BG_IMAGE: SOFA_GREY,
      IMAGE_ALT: 'Picture of furniture dest category',
    },
    OFFICE: {
      NAME: 'Office dest',
      BG_IMAGE: SOFA_GREY,
      IMAGE_ALT: 'Picture of furniture office dest category',
    },
  },
  BEST: {
    ALL: {
      NAME: 'Best',
      BG_IMAGE: SOFA_GREY,
      IMAGE_ALT: 'Picture of furniture best category',
    },
    SPRING: {
      NAME: 'Springbed',
      BG_IMAGE: SOFA_GREY,
      IMAGE_ALT: 'Picture of furniture spring best category',
    },
  },
  CARPET: {
    ALL: {
      NAME: 'Carpet',
      BG_IMAGE: SOFA_GREY,
      IMAGE_ALT: 'Picture of furniture carpet category',
    },
  },
  SOFA: {
    ALL: {
      NAME: 'Sofa',
      BG_IMAGE: SOFA_GREY,
      IMAGE_ALT: 'Picture of furniture sofa category',
    },
  },
  CUPBOARD: {
    ALL: {
      NAME: 'Cupboard',
      BG_IMAGE: SOFA_GREY,
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
      image: SOFA_GREEN,
      listImage: [SOFA_GREEN, SOFA_GREEN, SOFA_GREEN, SOFA_GREEN],
    },
    imageAlt: 'Picture of Full set Grey Sofa With Pillows',
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
      image: CHAIR_YELLOW,
      listImage: [SOFA_GREEN, SOFA_GREEN, SOFA_GREEN, SOFA_GREEN],
    },
    imageAlt: 'Picture of Full set Grey Sofa With Pillow',
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
      image: SOFA_GREY,
      listImage: [SOFA_GREEN, SOFA_GREEN, SOFA_GREEN, SOFA_GREEN],
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
    name: 'Fullset Grey Sofa',
    category: 'Sofa',
    images: {
      image: SOFA_GREY,
      listImage: [SOFA_GREEN, SOFA_GREEN, SOFA_GREEN, SOFA_GREEN],
    },
    imageAlt: 'Picture of Full set Grey Sofa',
    description: 'Modern home in city center',
    details: [
      { id: uuidv4(), content: 'High Quality Leathers4' },
      { id: uuidv4(), content: 'High Quality Paints4' },
      { id: uuidv4(), content: 'High Quality Woods4' },
      { id: uuidv4(), content: 'Cheaps Price4' },
    ],
    color: 'grey',
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
    image: SOFA_GREEN,
    imageAlt: 'Picture of furniture chair and table office',
    description:
      'Houseplants are good for your health — and not just for their visual beauty. Why? They essentially do the opposite of what we do when we breathe: release oxygen and absorb carbon dioxide. This not only freshens up the air, but also eliminates harmful toxins. Extensive research by NASA has revealed that houseplants can remove up to 87 per cent of air toxin in 24 hours. Studies have also proven that indoor plants improve concentration and productivity (by up to 15 percent!), reduce stress levels and boost your mood — making them perfect for not just your home but your work space, too. At work, place plants, especially those with broad leaves, on your desk; they will help regulate humidity and increase levels of positivity — seeing greenery and nature help us feel more relaxed and calm, which in turn benefits your every day mood. Indoor plants serve a practical and aesthetic purpose, and will enhance your life. How to Create your Personal Plant Sanctuary. An indoor garden can be your refuge from the outside world, and for many people it is a source of great joy. Whether you live in a small apartment, or a large house, by introducing certain plants into your home, you will start to notice improvements to your health, and overall happiness. As well as enhancing your mood and creating a living space that is soothing to be in, plants can also help with loneliness and depression: caring for a living thing gives us a purpose and is rewarding — especially when you see that living thing bloom and thrive. choose the right plants for the an optimal nights sleep. Although plants release oxygen during the day, it is worth remembering that, at night, when photosynthesis stops, most plants switch things up and release carbon dioxide. However plants such as orchids, succulents, snake plants and bromeliads do the opposite and emit oxygen, making them perfect plants for the bedroom (and getting better sleep). Beware of too much sun. Most indoor plants don’t like direct midday sun, so please be wary of this when placing plants in your home. There are very obvious warning signs to look out for, such as leaf burn, spotting or sudden leaf-fall. Most plants can be easily rescued, so don’t panic! Often it is a case of not watering them too much, or letting the soil dry out a bit if it is feeling too soggy. Check if your plant is sitting by a cold draft as this can case the leaves to curl and eventually drop off. Organic fertilizers are a great way to revive your plants.',
  },
  {
    id: uuidv4(),
    title: 'Good Lighting Makes The Home More Light',
    image: SOFA_GREY,
    imageAlt: 'Picture of furniture dest office',
    description:
      'Houseplants are good for your health — and not just for their visual beauty. Why? They essentially do the opposite of what we do when we breathe: release oxygen and absorb carbon dioxide. This not only freshens up the air, but also eliminates harmful toxins. Extensive research by NASA has revealed that houseplants can remove up to 87 per cent of air toxin in 24 hours. Studies have also proven that indoor plants improve concentration and productivity (by up to 15 percent!), reduce stress levels and boost your mood — making them perfect for not just your home but your work space, too. At work, place plants, especially those with broad leaves, on your desk; they will help regulate humidity and increase levels of positivity — seeing greenery and nature help us feel more relaxed and calm, which in turn benefits your every day mood. Indoor plants serve a practical and aesthetic purpose, and will enhance your life. How to Create your Personal Plant Sanctuary. An indoor garden can be your refuge from the outside world, and for many people it is a source of great joy. Whether you live in a small apartment, or a large house, by introducing certain plants into your home, you will start to notice improvements to your health, and overall happiness. As well as enhancing your mood and creating a living space that is soothing to be in, plants can also help with loneliness and depression: caring for a living thing gives us a purpose and is rewarding — especially when you see that living thing bloom and thrive. choose the right plants for the an optimal nights sleep. Although plants release oxygen during the day, it is worth remembering that, at night, when photosynthesis stops, most plants switch things up and release carbon dioxide. However plants such as orchids, succulents, snake plants and bromeliads do the opposite and emit oxygen, making them perfect plants for the bedroom (and getting better sleep). Beware of too much sun. Most indoor plants don’t like direct midday sun, so please be wary of this when placing plants in your home. There are very obvious warning signs to look out for, such as leaf burn, spotting or sudden leaf-fall. Most plants can be easily rescued, so don’t panic! Often it is a case of not watering them too much, or letting the soil dry out a bit if it is feeling too soggy. Check if your plant is sitting by a cold draft as this can case the leaves to curl and eventually drop off.',
  },
  {
    id: uuidv4(),
    title: 'Classic Style Makes Houses Look More Expensive',
    image: CHAIR_YELLOW,
    imageAlt: 'Picture of furniture sofa',
    description:
      'Houseplants are good for your health — and not just for their visual beauty. Why? They essentially do the opposite of what we do when we breathe: release oxygen and absorb carbon dioxide. This not only freshens up the air, but also eliminates harmful toxins. Extensive research by NASA has revealed that houseplants can remove up to 87 per cent of air toxin in 24 hours. Studies have also proven that indoor plants improve concentration and productivity (by up to 15 percent!), reduce stress levels and boost your mood — making them perfect for not just your home but your work space, too. At work, place plants, especially those with broad leaves, on your desk; they will help regulate humidity and increase levels of positivity — seeing greenery and nature help us feel more relaxed and calm, which in turn benefits your every day mood. Indoor plants serve a practical and aesthetic purpose, and will enhance your life. How to Create your Personal Plant Sanctuary. An indoor garden can be your refuge from the outside world, and for many people it is a source of great joy. Whether you live in a small apartment, or a large house, by introducing certain plants into your home, you will start to notice improvements to your health, and overall happiness. As well as enhancing your mood and creating a living space that is soothing to be in, plants can also help with loneliness and depression: caring for a living thing gives us a purpose and is rewarding — especially when you see that living thing bloom and thrive. choose the right plants for the an optimal nights sleep. Although plants release oxygen during the day, it is worth remembering that, at night, when photosynthesis stops, most plants switch things up and release carbon dioxide. However plants such as orchids, succulents, snake plants and bromeliads do the opposite and emit oxygen, making them perfect plants for the bedroom (and getting better sleep). Beware of too much sun. Most indoor plants don’t like direct midday sun, so please be wary of this when placing plants in your home. There are very obvious warning signs to look out for, such as leaf burn, spotting or sudden leaf-fall. Most plants can be easily rescued, so don’t panic! Often it is a case of not watering them too much, or letting the soil dry out a bit if it is feeling too soggy. Check if your plant is sitting by a cold draft as this can case the leaves to curl and eventually drop off. Organic fertilizers are a great way to revive your plants.',
  },
  {
    id: uuidv4(),
    title: 'Plants make the atmosphere of the house come alive2',
    image: SOFA_GREEN,
    imageAlt: 'Picture of furniture chair and table office2',
    description:
      '2Houseplants are good for your health — and not just for their visual beauty. Why? They essentially do the opposite of what we do when we breathe: release oxygen and absorb carbon dioxide. This not only freshens up the air, but also eliminates harmful toxins. Extensive research by NASA has revealed that houseplants can remove up to 87 per cent of air toxin in 24 hours. Studies have also proven that indoor plants improve concentration and productivity (by up to 15 percent!), reduce stress levels and boost your mood — making them perfect for not just your home but your work space, too. At work, place plants, especially those with broad leaves, on your desk; they will help regulate humidity and increase levels of positivity — seeing greenery and nature help us feel more relaxed and calm, which in turn benefits your every day mood. Indoor plants serve a practical and aesthetic purpose, and will enhance your life. How to Create your Personal Plant Sanctuary. An indoor garden can be your refuge from the outside world, and for many people it is a source of great joy. Whether you live in a small apartment, or a large house, by introducing certain plants into your home, you will start to notice improvements to your health, and overall happiness. As well as enhancing your mood and creating a living space that is soothing to be in, plants can also help with loneliness and depression: caring for a living thing gives us a purpose and is rewarding — especially when you see that living thing bloom and thrive. choose the right plants for the an optimal nights sleep. Although plants release oxygen during the day, it is worth remembering that, at night, when photosynthesis stops, most plants switch things up and release carbon dioxide. However plants such as orchids, succulents, snake plants and bromeliads do the opposite and emit oxygen, making them perfect plants for the bedroom (and getting better sleep). Beware of too much sun. Most indoor plants don’t like direct midday sun, so please be wary of this when placing plants in your home. There are very obvious warning signs to look out for, such as leaf burn, spotting or sudden leaf-fall. Most plants can be easily rescued, so don’t panic! Often it is a case of not watering them too much, or letting the soil dry out a bit if it is feeling too soggy. Check if your plant is sitting by a cold draft as this can case the leaves to curl and eventually drop off. Organic fertilizers are a great way to revive your plants.',
  },
  {
    id: uuidv4(),
    title: 'Good Lighting Makes The Home More Light2',
    image: SOFA_GREY,
    imageAlt: 'Picture of furniture dest office2',
    description:
      '2Houseplants are good for your health — and not just for their visual beauty. Why? They essentially do the opposite of what we do when we breathe: release oxygen and absorb carbon dioxide. This not only freshens up the air, but also eliminates harmful toxins. Extensive research by NASA has revealed that houseplants can remove up to 87 per cent of air toxin in 24 hours. Studies have also proven that indoor plants improve concentration and productivity (by up to 15 percent!), reduce stress levels and boost your mood — making them perfect for not just your home but your work space, too. At work, place plants, especially those with broad leaves, on your desk; they will help regulate humidity and increase levels of positivity — seeing greenery and nature help us feel more relaxed and calm, which in turn benefits your every day mood. Indoor plants serve a practical and aesthetic purpose, and will enhance your life. How to Create your Personal Plant Sanctuary. An indoor garden can be your refuge from the outside world, and for many people it is a source of great joy. Whether you live in a small apartment, or a large house, by introducing certain plants into your home, you will start to notice improvements to your health, and overall happiness. As well as enhancing your mood and creating a living space that is soothing to be in, plants can also help with loneliness and depression: caring for a living thing gives us a purpose and is rewarding — especially when you see that living thing bloom and thrive. choose the right plants for the an optimal nights sleep. Although plants release oxygen during the day, it is worth remembering that, at night, when photosynthesis stops, most plants switch things up and release carbon dioxide. However plants such as orchids, succulents, snake plants and bromeliads do the opposite and emit oxygen, making them perfect plants for the bedroom (and getting better sleep). Beware of too much sun. Most indoor plants don’t like direct midday sun, so please be wary of this when placing plants in your home. There are very obvious warning signs to look out for, such as leaf burn, spotting or sudden leaf-fall. Most plants can be easily rescued, so don’t panic! Often it is a case of not watering them too much, or letting the soil dry out a bit if it is feeling too soggy. Check if your plant is sitting by a cold draft as this can case the leaves to curl and eventually drop off.',
  },
  {
    id: uuidv4(),
    title: 'Classic Style Makes Houses Look More Expensive2',
    image: CHAIR_YELLOW,
    imageAlt: 'Picture of furniture sofa2',
    description:
      '2Houseplants are good for your health — and not just for their visual beauty. Why? They essentially do the opposite of what we do when we breathe: release oxygen and absorb carbon dioxide. This not only freshens up the air, but also eliminates harmful toxins. Extensive research by NASA has revealed that houseplants can remove up to 87 per cent of air toxin in 24 hours. Studies have also proven that indoor plants improve concentration and productivity (by up to 15 percent!), reduce stress levels and boost your mood — making them perfect for not just your home but your work space, too. At work, place plants, especially those with broad leaves, on your desk; they will help regulate humidity and increase levels of positivity — seeing greenery and nature help us feel more relaxed and calm, which in turn benefits your every day mood. Indoor plants serve a practical and aesthetic purpose, and will enhance your life. How to Create your Personal Plant Sanctuary. An indoor garden can be your refuge from the outside world, and for many people it is a source of great joy. Whether you live in a small apartment, or a large house, by introducing certain plants into your home, you will start to notice improvements to your health, and overall happiness. As well as enhancing your mood and creating a living space that is soothing to be in, plants can also help with loneliness and depression: caring for a living thing gives us a purpose and is rewarding — especially when you see that living thing bloom and thrive. choose the right plants for the an optimal nights sleep. Although plants release oxygen during the day, it is worth remembering that, at night, when photosynthesis stops, most plants switch things up and release carbon dioxide. However plants such as orchids, succulents, snake plants and bromeliads do the opposite and emit oxygen, making them perfect plants for the bedroom (and getting better sleep). Beware of too much sun. Most indoor plants don’t like direct midday sun, so please be wary of this when placing plants in your home. There are very obvious warning signs to look out for, such as leaf burn, spotting or sudden leaf-fall. Most plants can be easily rescued, so don’t panic! Often it is a case of not watering them too much, or letting the soil dry out a bit if it is feeling too soggy. Check if your plant is sitting by a cold draft as this can case the leaves to curl and eventually drop off. Organic fertilizers are a great way to revive your plants.',
  },
  {
    id: uuidv4(),
    title: 'Plants make the atmosphere of the house come alive3',
    image: SOFA_GREEN,
    imageAlt: 'Picture of furniture chair and table office3',
    description:
      '3Houseplants are good for your health — and not just for their visual beauty. Why? They essentially do the opposite of what we do when we breathe: release oxygen and absorb carbon dioxide. This not only freshens up the air, but also eliminates harmful toxins. Extensive research by NASA has revealed that houseplants can remove up to 87 per cent of air toxin in 24 hours. Studies have also proven that indoor plants improve concentration and productivity (by up to 15 percent!), reduce stress levels and boost your mood — making them perfect for not just your home but your work space, too. At work, place plants, especially those with broad leaves, on your desk; they will help regulate humidity and increase levels of positivity — seeing greenery and nature help us feel more relaxed and calm, which in turn benefits your every day mood. Indoor plants serve a practical and aesthetic purpose, and will enhance your life. How to Create your Personal Plant Sanctuary. An indoor garden can be your refuge from the outside world, and for many people it is a source of great joy. Whether you live in a small apartment, or a large house, by introducing certain plants into your home, you will start to notice improvements to your health, and overall happiness. As well as enhancing your mood and creating a living space that is soothing to be in, plants can also help with loneliness and depression: caring for a living thing gives us a purpose and is rewarding — especially when you see that living thing bloom and thrive. choose the right plants for the an optimal nights sleep. Although plants release oxygen during the day, it is worth remembering that, at night, when photosynthesis stops, most plants switch things up and release carbon dioxide. However plants such as orchids, succulents, snake plants and bromeliads do the opposite and emit oxygen, making them perfect plants for the bedroom (and getting better sleep). Beware of too much sun. Most indoor plants don’t like direct midday sun, so please be wary of this when placing plants in your home. There are very obvious warning signs to look out for, such as leaf burn, spotting or sudden leaf-fall. Most plants can be easily rescued, so don’t panic! Often it is a case of not watering them too much, or letting the soil dry out a bit if it is feeling too soggy. Check if your plant is sitting by a cold draft as this can case the leaves to curl and eventually drop off. Organic fertilizers are a great way to revive your plants.',
  },
  {
    id: uuidv4(),
    title: 'Good Lighting Makes The Home More Light3',
    image: SOFA_GREY,
    imageAlt: 'Picture of furniture dest office3',
    description:
      '3Houseplants are good for your health — and not just for their visual beauty. Why? They essentially do the opposite of what we do when we breathe: release oxygen and absorb carbon dioxide. This not only freshens up the air, but also eliminates harmful toxins. Extensive research by NASA has revealed that houseplants can remove up to 87 per cent of air toxin in 24 hours. Studies have also proven that indoor plants improve concentration and productivity (by up to 15 percent!), reduce stress levels and boost your mood — making them perfect for not just your home but your work space, too. At work, place plants, especially those with broad leaves, on your desk; they will help regulate humidity and increase levels of positivity — seeing greenery and nature help us feel more relaxed and calm, which in turn benefits your every day mood. Indoor plants serve a practical and aesthetic purpose, and will enhance your life. How to Create your Personal Plant Sanctuary. An indoor garden can be your refuge from the outside world, and for many people it is a source of great joy. Whether you live in a small apartment, or a large house, by introducing certain plants into your home, you will start to notice improvements to your health, and overall happiness. As well as enhancing your mood and creating a living space that is soothing to be in, plants can also help with loneliness and depression: caring for a living thing gives us a purpose and is rewarding — especially when you see that living thing bloom and thrive. choose the right plants for the an optimal nights sleep. Although plants release oxygen during the day, it is worth remembering that, at night, when photosynthesis stops, most plants switch things up and release carbon dioxide. However plants such as orchids, succulents, snake plants and bromeliads do the opposite and emit oxygen, making them perfect plants for the bedroom (and getting better sleep). Beware of too much sun. Most indoor plants don’t like direct midday sun, so please be wary of this when placing plants in your home. There are very obvious warning signs to look out for, such as leaf burn, spotting or sudden leaf-fall. Most plants can be easily rescued, so don’t panic! Often it is a case of not watering them too much, or letting the soil dry out a bit if it is feeling too soggy. Check if your plant is sitting by a cold draft as this can case the leaves to curl and eventually drop off.',
  },
  {
    id: uuidv4(),
    title: 'Classic Style Makes Houses Look More Expensive3',
    image: CHAIR_YELLOW,
    imageAlt: 'Picture of furniture sofa3',
    description:
      '3Houseplants are good for your health — and not just for their visual beauty. Why? They essentially do the opposite of what we do when we breathe: release oxygen and absorb carbon dioxide. This not only freshens up the air, but also eliminates harmful toxins. Extensive research by NASA has revealed that houseplants can remove up to 87 per cent of air toxin in 24 hours. Studies have also proven that indoor plants improve concentration and productivity (by up to 15 percent!), reduce stress levels and boost your mood — making them perfect for not just your home but your work space, too. At work, place plants, especially those with broad leaves, on your desk; they will help regulate humidity and increase levels of positivity — seeing greenery and nature help us feel more relaxed and calm, which in turn benefits your every day mood. Indoor plants serve a practical and aesthetic purpose, and will enhance your life. How to Create your Personal Plant Sanctuary. An indoor garden can be your refuge from the outside world, and for many people it is a source of great joy. Whether you live in a small apartment, or a large house, by introducing certain plants into your home, you will start to notice improvements to your health, and overall happiness. As well as enhancing your mood and creating a living space that is soothing to be in, plants can also help with loneliness and depression: caring for a living thing gives us a purpose and is rewarding — especially when you see that living thing bloom and thrive. choose the right plants for the an optimal nights sleep. Although plants release oxygen during the day, it is worth remembering that, at night, when photosynthesis stops, most plants switch things up and release carbon dioxide. However plants such as orchids, succulents, snake plants and bromeliads do the opposite and emit oxygen, making them perfect plants for the bedroom (and getting better sleep). Beware of too much sun. Most indoor plants don’t like direct midday sun, so please be wary of this when placing plants in your home. There are very obvious warning signs to look out for, such as leaf burn, spotting or sudden leaf-fall. Most plants can be easily rescued, so don’t panic! Often it is a case of not watering them too much, or letting the soil dry out a bit if it is feeling too soggy. Check if your plant is sitting by a cold draft as this can case the leaves to curl and eventually drop off. Organic fertilizers are a great way to revive your plants.',
  },
  {
    id: uuidv4(),
    title: 'Plants make the atmosphere of the house come alive4',
    image: SOFA_GREEN,
    imageAlt: 'Picture of furniture chair and table office4',
    description:
      '4Houseplants are good for your health — and not just for their visual beauty. Why? They essentially do the opposite of what we do when we breathe: release oxygen and absorb carbon dioxide. This not only freshens up the air, but also eliminates harmful toxins. Extensive research by NASA has revealed that houseplants can remove up to 87 per cent of air toxin in 24 hours. Studies have also proven that indoor plants improve concentration and productivity (by up to 15 percent!), reduce stress levels and boost your mood — making them perfect for not just your home but your work space, too. At work, place plants, especially those with broad leaves, on your desk; they will help regulate humidity and increase levels of positivity — seeing greenery and nature help us feel more relaxed and calm, which in turn benefits your every day mood. Indoor plants serve a practical and aesthetic purpose, and will enhance your life. How to Create your Personal Plant Sanctuary. An indoor garden can be your refuge from the outside world, and for many people it is a source of great joy. Whether you live in a small apartment, or a large house, by introducing certain plants into your home, you will start to notice improvements to your health, and overall happiness. As well as enhancing your mood and creating a living space that is soothing to be in, plants can also help with loneliness and depression: caring for a living thing gives us a purpose and is rewarding — especially when you see that living thing bloom and thrive. choose the right plants for the an optimal nights sleep. Although plants release oxygen during the day, it is worth remembering that, at night, when photosynthesis stops, most plants switch things up and release carbon dioxide. However plants such as orchids, succulents, snake plants and bromeliads do the opposite and emit oxygen, making them perfect plants for the bedroom (and getting better sleep). Beware of too much sun. Most indoor plants don’t like direct midday sun, so please be wary of this when placing plants in your home. There are very obvious warning signs to look out for, such as leaf burn, spotting or sudden leaf-fall. Most plants can be easily rescued, so don’t panic! Often it is a case of not watering them too much, or letting the soil dry out a bit if it is feeling too soggy. Check if your plant is sitting by a cold draft as this can case the leaves to curl and eventually drop off. Organic fertilizers are a great way to revive your plants.',
  },
  {
    id: uuidv4(),
    title: 'Good Lighting Makes The Home More Light4',
    image: SOFA_GREY,
    imageAlt: 'Picture of furniture dest office4',
    description:
      '4Houseplants are good for your health — and not just for their visual beauty. Why? They essentially do the opposite of what we do when we breathe: release oxygen and absorb carbon dioxide. This not only freshens up the air, but also eliminates harmful toxins. Extensive research by NASA has revealed that houseplants can remove up to 87 per cent of air toxin in 24 hours. Studies have also proven that indoor plants improve concentration and productivity (by up to 15 percent!), reduce stress levels and boost your mood — making them perfect for not just your home but your work space, too. At work, place plants, especially those with broad leaves, on your desk; they will help regulate humidity and increase levels of positivity — seeing greenery and nature help us feel more relaxed and calm, which in turn benefits your every day mood. Indoor plants serve a practical and aesthetic purpose, and will enhance your life. How to Create your Personal Plant Sanctuary. An indoor garden can be your refuge from the outside world, and for many people it is a source of great joy. Whether you live in a small apartment, or a large house, by introducing certain plants into your home, you will start to notice improvements to your health, and overall happiness. As well as enhancing your mood and creating a living space that is soothing to be in, plants can also help with loneliness and depression: caring for a living thing gives us a purpose and is rewarding — especially when you see that living thing bloom and thrive. choose the right plants for the an optimal nights sleep. Although plants release oxygen during the day, it is worth remembering that, at night, when photosynthesis stops, most plants switch things up and release carbon dioxide. However plants such as orchids, succulents, snake plants and bromeliads do the opposite and emit oxygen, making them perfect plants for the bedroom (and getting better sleep). Beware of too much sun. Most indoor plants don’t like direct midday sun, so please be wary of this when placing plants in your home. There are very obvious warning signs to look out for, such as leaf burn, spotting or sudden leaf-fall. Most plants can be easily rescued, so don’t panic! Often it is a case of not watering them too much, or letting the soil dry out a bit if it is feeling too soggy. Check if your plant is sitting by a cold draft as this can case the leaves to curl and eventually drop off.',
  },
  {
    id: uuidv4(),
    title: 'Classic Style Makes Houses Look More Expensive4',
    image: CHAIR_YELLOW,
    imageAlt: 'Picture of furniture sofa4',
    description:
      '4Houseplants are good for your health — and not just for their visual beauty. Why? They essentially do the opposite of what we do when we breathe: release oxygen and absorb carbon dioxide. This not only freshens up the air, but also eliminates harmful toxins. Extensive research by NASA has revealed that houseplants can remove up to 87 per cent of air toxin in 24 hours. Studies have also proven that indoor plants improve concentration and productivity (by up to 15 percent!), reduce stress levels and boost your mood — making them perfect for not just your home but your work space, too. At work, place plants, especially those with broad leaves, on your desk; they will help regulate humidity and increase levels of positivity — seeing greenery and nature help us feel more relaxed and calm, which in turn benefits your every day mood. Indoor plants serve a practical and aesthetic purpose, and will enhance your life. How to Create your Personal Plant Sanctuary. An indoor garden can be your refuge from the outside world, and for many people it is a source of great joy. Whether you live in a small apartment, or a large house, by introducing certain plants into your home, you will start to notice improvements to your health, and overall happiness. As well as enhancing your mood and creating a living space that is soothing to be in, plants can also help with loneliness and depression: caring for a living thing gives us a purpose and is rewarding — especially when you see that living thing bloom and thrive. choose the right plants for the an optimal nights sleep. Although plants release oxygen during the day, it is worth remembering that, at night, when photosynthesis stops, most plants switch things up and release carbon dioxide. However plants such as orchids, succulents, snake plants and bromeliads do the opposite and emit oxygen, making them perfect plants for the bedroom (and getting better sleep). Beware of too much sun. Most indoor plants don’t like direct midday sun, so please be wary of this when placing plants in your home. There are very obvious warning signs to look out for, such as leaf burn, spotting or sudden leaf-fall. Most plants can be easily rescued, so don’t panic! Often it is a case of not watering them too much, or letting the soil dry out a bit if it is feeling too soggy. Check if your plant is sitting by a cold draft as this can case the leaves to curl and eventually drop off. Organic fertilizers are a great way to revive your plants.',
  },
]

export const MiniMarketMock = [
  {
    id: uuidv4(),
    value: 'alfaMart',
    image: ALFA_MART,
    altImage: 'Logo brand of Alfa Mart',
  },
  {
    id: uuidv4(),
    value: 'indoMaret',
    image: INDO_MART,
    altImage: 'Logo brand of Indo Maret',
  },
]

export const DigitalWalletMock = [
  {
    id: uuidv4(),
    value: 'goPay',
    image: GOPAY,
    altImage: 'Logo brand of Go Pay',
  },
  {
    id: uuidv4(),
    value: 'ovo',
    image: OVO,
    altImage: 'Logo brand of Ovo',
  },
  {
    id: uuidv4(),
    value: 'linkAja',
    image: LINK_AJA,
    altImage: 'Logo brand of Link Aja',
  },
]

export const BankMock = [
  {
    id: uuidv4(),
    value: 'bca',
    image: BCA,
    altImage: 'Logo brand of Bca Bank',
  },
  {
    id: uuidv4(),
    value: 'mandiri',
    image: MANDIRI,
    altImage: 'Logo brand of Mandiri Bank',
  },
  {
    id: uuidv4(),
    value: 'bri',
    image: BRI,
    altImage: 'Logo brand of Bri Bank',
  },
]

export const PaymentMock = [
  {
    id: uuidv4(),
    value: 'payPal',
    image: PAYPAL,
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
