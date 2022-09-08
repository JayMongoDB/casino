import pokerImg from '/Users/jeremymcgowan/Desktop/NucampFolder/3-React/casino/src/app/assets/img/poker.jpg';
import crapsImg from '/Users/jeremymcgowan/Desktop/NucampFolder/3-React/casino/src/app/assets/img/craps.jpg';
import bjImg from '/Users/jeremymcgowan/Desktop/NucampFolder/3-React/casino/src/app/assets/img/blackjack.jpg';
import rouletteImg from '/Users/jeremymcgowan/Desktop/NucampFolder/3-React/casino/src/app/assets/img/roulette.jpg';
import slotsImg from '/Users/jeremymcgowan/Desktop/NucampFolder/3-React/casino/src/app/assets/img/slots.jpg';

export const GAMES = [
    {
        id: 0,
        name: 'Poker',
        image: pokerImg,
        description:
            'Come Play in our Texas Hold-em Room!'
    },
    {
        id: 1,
        name: 'Craps',
        image: crapsImg,
        description: 'Come Play in our Craps Room!'
    },
    {
        id: 2,
        name: 'BlackJack',
        image: bjImg,
        description: 'Come Play 21 Room!'

    },
    {
        id: 3,
        name: 'Roulette',
        image: rouletteImg,
        description: 'Come Play in our Slot Room!'

    },
    {
        id: 4,
        name: 'Slots',
        image: slotsImg,
        description: 'Come Play Roulette!'

    }
];
