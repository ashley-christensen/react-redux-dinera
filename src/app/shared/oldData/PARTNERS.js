import flesImg from '../assets/img/fles.jpg';
import clubImg from '../assets/img/club.jpg';
import barberImg from '../assets/img/barber.jpg';
import cafeImg from '../assets/img/cafe.jpg';

export const PARTNERS = [
    {
        id: 0,
        name: 'Svelte Car Service',
        image: flesImg,
        featured: false,
        description:
            "Svelte car service provides transport to and from anywhere in the city, with special rates for Dinera patrons."
    },
    {
        id: 1,
        name: 'Club Channing',
        image: clubImg,
        featured: false,
        description:
            'Join us afterhours so the night never ends!'
    },
    {
        id: 2,
        name: 'SF Barber',
        image: barberImg,
        featured: false,
        description:
            'Need a new cut for your big night? We are next door and have you covered.'
    },
    {
        id: 3,
        name: 'Let\'s Cafe',
        image: cafeImg,
        featured: true,
        description:
            'From Taiwanese to French, our pastries are delivered fresh to Dinera, daily.'
    }
];
