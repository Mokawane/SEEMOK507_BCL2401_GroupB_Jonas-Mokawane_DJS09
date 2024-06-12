import { showReviewTotal, populateUser, showDetails, getTopTwoReviews } from "./utils";
import { Permissions, LoyaltyUser } from "./enums";
import { Price, Country } from "./typesAlias";

const propertyContainer = document.querySelector(
  ".properties"
) as HTMLElement;
const footer = document.querySelector(".footer") as HTMLElement;
const reviewContainer = document.querySelector('.reviews') as HTMLElement;
const container = document.querySelector('.container') as HTMLElement;
const button = document.querySelector('button') as HTMLElement;

let isLoggedIn: boolean;

//Reviews
const reviews: any[] = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: LoyaltyUser.GOLD_USER,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: LoyaltyUser.BRONZE_USER,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: LoyaltyUser.SILVER_USER,
    date: "27-03-2021",
    description: "Great hosts, location was a bit further than said",
  },
];

//User
const you = {
  firstName: "Bobby",
  lastName: "Brown",
  permissions: Permissions.ADMIN,
  isReturning: true,
  age: 35,
  stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow"],
};

//Properties
const properties: {
  image: string;
  title: string;
  price: Price;
  location: {
    firstline: string;
    city: string;
    code: number;
    country: Country;
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
    price: 4800,
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
    price: 900,
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
  showDetails(you.permissions, card, properties[i].price);
  propertyContainer.appendChild(card);
}

let count = 0;
function addReviews(
  array: {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
  }[]
): void {
  if (!count) {
    count++;
    const topTwo = getTopTwoReviews(array);
    for (let i = 0; i < topTwo.length; i++) {
      const card = document.createElement("div");
      card.classList.add("review-card");
      card.innerHTML = topTwo[i].stars + " stars from " + topTwo[i].name;
      reviewContainer.appendChild(card);
    }
    container.removeChild(button);
  }
}

let currentLocation: [string, string, number] = ["Rustenburg", "09:19", 14];
footer.innerHTML =
  currentLocation[0] +
  " " +
  currentLocation[1] +
  " " +
  currentLocation[2] +
  "°";
