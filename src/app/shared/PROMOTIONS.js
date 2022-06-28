import romanticImg from '../assets/img/romance.jpg';
import picnicImg from '../assets/img/picnic.jpg';
import vegetarianImg from '../assets/img/vegetarian.jpg';
import partyImg from '../assets/img/party.jpg';

export const PROMOTIONS = [
    {
        id: 0,
        name: 'Romance for Two',
        image: romanticImg,
        featured: true,
        description:
            'Enjoy a Romantic evening with stunning views, and rooftop experience.'
    },
    {
        id: 1,
        name: 'Rustic Picnic',
        image: picnicImg,
        featured: false,
        description:
            'This oceanside picnic combines adventure with relaxation'
    },
    {
        id: 2,
        name: 'Vegetarian Deluxe',
        image: vegetarianImg,
        featured: false,
        description: `A 5 course vegetarian meal so good you will forget about meat`
    },
    {
        id: 3,
        name: 'Party for many',
        image: partyImg,
        featured: false,
        description:
            'Celebrate with friends and family with our deluxe party room and selections'
    }
];
