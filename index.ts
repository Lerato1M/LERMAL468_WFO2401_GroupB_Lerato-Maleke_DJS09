// Object Types Challenge
// Property Objects and array,

import { showReviewTotal, populateUser } from 'index.ts'
let isOpen: boolean

// Reviews
const reviews : { 
    name: string; 
    stars: number; 
    loyaltyUser: boolean; 
    date: string
    }[] = [
    {
        name: 'Polena',
        stars: 1,
        loyaltyUser: true,
        date: '01-01-2001'
    },
    {
      name: 'Zinhle',
      stars: 3,
      loyaltyUser: true,
      date: '11-03-1991'
    },
    {
      name: 'Benjamin',
      stars: 5,
      loyaltyUser: true,
      date: '26-12-1997'
    },
]

// User
const you: {
    firstName: string;
    lastName: string;
    isReturning: boolean;
    age: number;
    stayedAt: string[]
} = {
    firstName: 'Chris',
    lastName: 'Brown',
    isReturning: true,
    age: 25,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

//Properties
const properties : {
    image: string;
    title: string;
    price: number;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: string;
    };
    contact:[number, string];
    isAvailable: boolean;
}[] = [
    {
        image: 'images\shack.jpg',
        title: 'Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Johannesburg',
            code: 45632,
            country: 'South Africa'
        },
        contact: [ +9676877987080, 'leratomaleke.m@gmail.com'],
        isAvailable: true  
    },
        {
        image: 'images\polish cottage.jpg',
        title: 'Polish Cottage',
        price: 34,
        location: {
            firstLine: 'no 23',
            city: 'Toronto',
            code: 76632,
            country: 'Canada'
        },
        contact: [ +9676877987080, 'leratomaleke.m@gmail.com'],
        isAvailable: false
    },
      {
      image: 'images\flat.jpg',
      title: 'Flat',
      price: 23,
      location: {
        firstLine: 'flat 15',
        city: 'New York',
        code: 35433,
        country: 'United States',
      },
      contact: [ +9676877987080, 'leratomaleke.m@gmail.com'],
      isAvailable: true
  }
]

// Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.firstName)

//Add the properties
for (let i = 0; i < properties.length; i++) {
  const card = document.createElement('div')
  card.classList.add('card')
  card.innerHTML = properties[i].title
  const image = document.createElement('img')
  image.setAttribute('src', properties[i].image)
  card.appendChild(image)
  propertyContainer.appendChild(card)
}

//Tuple: allow you to express an array with a fixed number of elements whose types are known.

//Enum as in languages like C#.
// An enum is a way of giving more friendly names to sets of numeric values.