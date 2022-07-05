import brunchImg from '../assets/img/brunches.jpg';
import dinnerImg from '../assets/img/dinner.jpg';
import cocktailsImg from '../assets/img/cocktails.jpg';
import dessertsImg from '../assets/img/desserts.jpg';

export const DINES = [
    {
        id: 0,
        name: 'Brunch Deluxe',
        image: brunchImg,
        cost: '$$',
        featured: false,
        description:
            'Luxurious platters of the freshest harvest, begin your day or end your weekend with the most dazzling of all brunches.'
    },
    {
        id: 1,
        name: 'Dinner and Dine',
        image: dinnerImg,
        cost: '$$$',
        featured: false,
        description:
            'Spend an evening dining on breathtaking and delicious trays from around the world. Straight from local and organic farms.'
    },
    {
        id: 2,
        name: 'Happy Hour Escape',
        image: cocktailsImg,
        cost: '$',
        featured: false,
        description:
            'Let our happy hour take away your stress. Sit back, relax, and enjoy our most elegant cocktails.'
    },
    {
        id: 3,
        name: 'Dessert Delicacies',
        image: dessertsImg,
        cost: '$$',
        featured: true,
        description:
            'Once you try one of our world famous desserts, you will never quit coming back'
    }
];

