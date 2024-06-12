import { showReviewTotal, populateUser } from "./utils";
import { Permissions } from "./enums";

const propertyContainer = document.querySelector(".properties") as HTMLAreaElement;
const footer = document.querySelector('.footer') as HTMLAreaElement;

let isOpen: boolean;

//Reviews
const reviews: {
  name: string;
  stars: number;
  loyaltyUser: boolean;
  date: string;
}[] = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: true,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: false,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: true,
    date: "27-03-2021",
  },
];

//User
const you: {
  firstName: string;
  lastName: string;
  isReturning: boolean;
  age: number;
  stayedAt: string[];
} = {
  firstName: "Bobby",
  lastName: "Brown",
  isReturning: true,
  age: 35,
  stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow"],
};

//Properties
const properties: {
  image: string;
  title: string;
  price: number;
  location: {
    firstline: string;
    city: string;
    code: number;
    country: string;
  };
  contact: [number, string];
  isAvailable: boolean;
}[] = [
  {
    image: "images/Rustenburg-lodge.jpg",
    title: "Rustenburg Lodge",
    price: 500,
    location: {
      firstline: "Building 48",
      city: "Rustenburg",
      code: 322,
      country: "South Africa",
    },
    contact: [+27145180144, "davidgenaro@gmail.com"],
    isAvailable: true,
  },
  {
    image: "images/Johannesburg-hotel.jpg",
    title: "Johannesburg Hotel",
    price: 500,
    location: {
      firstline: "Suite 26",
      city: "Johannesburg",
      code: 2111,
      country: "South Africa",
    },
    contact: [+27115180144, "suffocatendlovu@gmail.com"],
    isAvailable: true,
  },
  {
    image: "images/Rustenburg-resort.jpg",
    title: "Rustenburg Resort",
    price: 500,
    location: {
      firstline: "Pilanesburg road",
      city: "Rustenburg",
      code: 322,
      country: "South Africa",
    },
    contact: [+27144110144, "taumogale@gmail.com"],
    isAvailable: false,
  },
];

//Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);

populateUser(you.isReturning, you.firstName);

//Add the properties
for (let i = 0; i < properties.length; i++) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = properties[i].title;
  const image = document.createElement("img");
  image.setAttribute("src", properties[i].image);
  card.appendChild(image);
  propertyContainer.appendChild(card);
}

let currentLocation: [string, string, number] = ['Rustenburg', '09:19', 14]
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°'