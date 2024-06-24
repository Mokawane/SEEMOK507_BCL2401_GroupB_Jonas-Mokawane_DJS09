/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./enums.ts":
/*!******************!*\
  !*** ./enums.ts ***!
  \******************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoyaltyUser = exports.Permissions = void 0;
var Permissions;
(function (Permissions) {
    Permissions["ADMIN"] = "ADMIN";
    Permissions["READ_ONLY"] = "READ_ONLY";
})(Permissions || (exports.Permissions = Permissions = {}));
var LoyaltyUser;
(function (LoyaltyUser) {
    LoyaltyUser["GOLD_USER"] = "GOLD_USER";
    LoyaltyUser["SILVER_USER"] = "SILVER_USER";
    LoyaltyUser["BRONZE_USER"] = "BRONZE_USER";
})(LoyaltyUser || (exports.LoyaltyUser = LoyaltyUser = {}));


/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const utils_1 = __webpack_require__(/*! ./utils */ "./utils.ts");
const enums_1 = __webpack_require__(/*! ./enums */ "./enums.ts");
const classes_1 = __importDefault(__webpack_require__(/*! ./public/classes */ "./public/classes.ts"));
const propertyContainer = document.querySelector(".properties");
const reviewContainer = document.querySelector('.reviews');
const container = document.querySelector('.container');
const button = document.querySelector('button');
const footer = document.querySelector(".footer");
let isLoggedIn;
//Reviews
const reviews = [
    {
        name: "Sheia",
        stars: 5,
        loyaltyUser: enums_1.LoyaltyUser.GOLD_USER,
        date: "01-04-2021",
    },
    {
        name: "Andrzej",
        stars: 3,
        loyaltyUser: enums_1.LoyaltyUser.BRONZE_USER,
        date: "28-03-2021",
    },
    {
        name: "Omar",
        stars: 4,
        loyaltyUser: enums_1.LoyaltyUser.SILVER_USER,
        date: "27-03-2021",
    },
];
//User
const you = {
    firstName: "Bobby",
    lastName: "Brown",
    permissions: enums_1.Permissions.ADMIN,
    isReturning: true,
    age: 35,
    stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow"],
};
//Properties
const properties = [
    {
        image: "images/Rustenburg-lodge.jpg",
        title: "Rustenburg Lodge",
        price: 500,
        location: {
            firstLine: "Building 48",
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
            firstLine: "Suite 26",
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
            firstLine: "Pilanesburg road",
            city: "Rustenburg",
            code: 322,
            country: "South Africa",
        },
        contact: [+27144110144, "taumogale@gmail.com"],
        isAvailable: false,
    },
    {
        image: 'images/malaysian-hotel.jpeg',
        title: 'Malia Hotel',
        price: 35,
        location: {
            firstLine: 'Room 4',
            city: 'Malia',
            code: 45334,
            country: 'Malaysia'
        },
        contact: [+60349822083, 'lee34@gmail.com'],
        isAvailable: false
    }
];
//Functions
(0, utils_1.showReviewTotal)(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
(0, utils_1.populateUser)(you.isReturning, you.firstName);
//Add the properties
for (let i = 0; i < properties.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = properties[i].title;
    const image = document.createElement("img");
    image.setAttribute("src", properties[i].image);
    card.appendChild(image);
    (0, utils_1.showDetails)(you.permissions, card, properties[i].price);
    propertyContainer.appendChild(card);
}
let count = 0;
function addReviews(array) {
    if (!count) {
        count++;
        const topTwo = (0, utils_1.getTopTwoReviews)(array);
        for (let i = 0; i < topTwo.length; i++) {
            const card = document.createElement("div");
            card.classList.add("review-card");
            card.innerHTML = topTwo[i].stars + " stars from " + topTwo[i].name;
            reviewContainer.appendChild(card);
        }
        container.removeChild(button);
    }
}
button.addEventListener('click', () => addReviews(reviews));
let currentLocation = ["Rustenburg", "09:19", 14];
footer.innerHTML =
    currentLocation[0] +
        " " +
        currentLocation[1] +
        " " +
        currentLocation[2] +
        "°";
let yourMainImage = new classes_1.default('images/Moz-Hotel.jpg', 'Mozambican Hotel', [{
        name: 'Olive',
        stars: 5,
        loyaltyUser: enums_1.LoyaltyUser.GOLD_USER,
        date: '12-04-2021'
    }]);
const mainImageContainer = document.querySelector('.main-image');
if (mainImageContainer) {
    const image = document.createElement('img');
    image.setAttribute('src', yourMainImage.src);
    mainImageContainer.appendChild(image);
}
else {
    console.error('Main image container not found.');
}


/***/ }),

/***/ "./public/classes.ts":
/*!***************************!*\
  !*** ./public/classes.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class MainImage {
    constructor(src, title, reviews) {
        this.src = src;
        this.title = title;
        this.reviews = reviews;
    }
}
exports["default"] = MainImage;


/***/ }),

/***/ "./utils.ts":
/*!******************!*\
  !*** ./utils.ts ***!
  \******************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getTopTwoReviews = exports.makeMultiple = exports.showDetails = exports.populateUser = exports.showReviewTotal = void 0;
const enums_1 = __webpack_require__(/*! ./enums */ "./enums.ts");
const reviewTotalDisplay = document.querySelector("#reviews");
const returningUserDisplay = document.querySelector("#returning-user");
const userNameDisplay = document.querySelector("#user");
function showReviewTotal(value, reviewer, isLoyalty) {
    const iconDisplay = enums_1.LoyaltyUser.GOLD_USER ? "⭐" : "";
    reviewTotalDisplay.innerHTML =
        value.toString() +
            " review" +
            makeMultiple(value) +
            " | last reviewed by " +
            reviewer +
            " " +
            iconDisplay;
}
exports.showReviewTotal = showReviewTotal;
function populateUser(isReturning, userName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = "back";
    }
    userNameDisplay.innerHTML = userName;
}
exports.populateUser = populateUser;
function showDetails(value, element, price) {
    if (value) {
        const priceDisplay = document.createElement("div");
        priceDisplay.innerHTML = price.toString() + "/night";
        element.appendChild(priceDisplay);
    }
}
exports.showDetails = showDetails;
function makeMultiple(value) {
    if (value > 1 || value == 0) {
        return "s";
    }
    else
        return "";
}
exports.makeMultiple = makeMultiple;
function getTopTwoReviews(reviews) {
    const sortedReviews = reviews.sort((a, b) => b.stars - a.stars);
    return sortedReviews.slice(0, 2);
}
exports.getTopTwoReviews = getTopTwoReviews;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC8uL2VudW1zLnRzIiwid2VicGFjazovL3Byb2plY3QvLi9pbmRleC50cyIsIndlYnBhY2s6Ly9wcm9qZWN0Ly4vcHVibGljL2NsYXNzZXMudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL3V0aWxzLnRzIiwid2VicGFjazovL3Byb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Byb2plY3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Byb2plY3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Mb3lhbHR5VXNlciA9IGV4cG9ydHMuUGVybWlzc2lvbnMgPSB2b2lkIDA7XG52YXIgUGVybWlzc2lvbnM7XG4oZnVuY3Rpb24gKFBlcm1pc3Npb25zKSB7XG4gICAgUGVybWlzc2lvbnNbXCJBRE1JTlwiXSA9IFwiQURNSU5cIjtcbiAgICBQZXJtaXNzaW9uc1tcIlJFQURfT05MWVwiXSA9IFwiUkVBRF9PTkxZXCI7XG59KShQZXJtaXNzaW9ucyB8fCAoZXhwb3J0cy5QZXJtaXNzaW9ucyA9IFBlcm1pc3Npb25zID0ge30pKTtcbnZhciBMb3lhbHR5VXNlcjtcbihmdW5jdGlvbiAoTG95YWx0eVVzZXIpIHtcbiAgICBMb3lhbHR5VXNlcltcIkdPTERfVVNFUlwiXSA9IFwiR09MRF9VU0VSXCI7XG4gICAgTG95YWx0eVVzZXJbXCJTSUxWRVJfVVNFUlwiXSA9IFwiU0lMVkVSX1VTRVJcIjtcbiAgICBMb3lhbHR5VXNlcltcIkJST05aRV9VU0VSXCJdID0gXCJCUk9OWkVfVVNFUlwiO1xufSkoTG95YWx0eVVzZXIgfHwgKGV4cG9ydHMuTG95YWx0eVVzZXIgPSBMb3lhbHR5VXNlciA9IHt9KSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcbmNvbnN0IGVudW1zXzEgPSByZXF1aXJlKFwiLi9lbnVtc1wiKTtcbmNvbnN0IGNsYXNzZXNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9wdWJsaWMvY2xhc3Nlc1wiKSk7XG5jb25zdCBwcm9wZXJ0eUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvcGVydGllc1wiKTtcbmNvbnN0IHJldmlld0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXZpZXdzJyk7XG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9vdGVyXCIpO1xubGV0IGlzTG9nZ2VkSW47XG4vL1Jldmlld3NcbmNvbnN0IHJldmlld3MgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiBcIlNoZWlhXCIsXG4gICAgICAgIHN0YXJzOiA1LFxuICAgICAgICBsb3lhbHR5VXNlcjogZW51bXNfMS5Mb3lhbHR5VXNlci5HT0xEX1VTRVIsXG4gICAgICAgIGRhdGU6IFwiMDEtMDQtMjAyMVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkFuZHJ6ZWpcIixcbiAgICAgICAgc3RhcnM6IDMsXG4gICAgICAgIGxveWFsdHlVc2VyOiBlbnVtc18xLkxveWFsdHlVc2VyLkJST05aRV9VU0VSLFxuICAgICAgICBkYXRlOiBcIjI4LTAzLTIwMjFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJPbWFyXCIsXG4gICAgICAgIHN0YXJzOiA0LFxuICAgICAgICBsb3lhbHR5VXNlcjogZW51bXNfMS5Mb3lhbHR5VXNlci5TSUxWRVJfVVNFUixcbiAgICAgICAgZGF0ZTogXCIyNy0wMy0yMDIxXCIsXG4gICAgfSxcbl07XG4vL1VzZXJcbmNvbnN0IHlvdSA9IHtcbiAgICBmaXJzdE5hbWU6IFwiQm9iYnlcIixcbiAgICBsYXN0TmFtZTogXCJCcm93blwiLFxuICAgIHBlcm1pc3Npb25zOiBlbnVtc18xLlBlcm1pc3Npb25zLkFETUlOLFxuICAgIGlzUmV0dXJuaW5nOiB0cnVlLFxuICAgIGFnZTogMzUsXG4gICAgc3RheWVkQXQ6IFtcImZsb3JpZGEtaG9tZVwiLCBcIm9tYW4tZmxhdFwiLCBcInRva3lvLWJ1bmdhbG93XCJdLFxufTtcbi8vUHJvcGVydGllc1xuY29uc3QgcHJvcGVydGllcyA9IFtcbiAgICB7XG4gICAgICAgIGltYWdlOiBcImltYWdlcy9SdXN0ZW5idXJnLWxvZGdlLmpwZ1wiLFxuICAgICAgICB0aXRsZTogXCJSdXN0ZW5idXJnIExvZGdlXCIsXG4gICAgICAgIHByaWNlOiA1MDAsXG4gICAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgICAgICBmaXJzdExpbmU6IFwiQnVpbGRpbmcgNDhcIixcbiAgICAgICAgICAgIGNpdHk6IFwiUnVzdGVuYnVyZ1wiLFxuICAgICAgICAgICAgY29kZTogMzIyLFxuICAgICAgICAgICAgY291bnRyeTogXCJTb3V0aCBBZnJpY2FcIixcbiAgICAgICAgfSxcbiAgICAgICAgY29udGFjdDogWysyNzE0NTE4MDE0NCwgXCJkYXZpZGdlbmFyb0BnbWFpbC5jb21cIl0sXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbWFnZTogXCJpbWFnZXMvSm9oYW5uZXNidXJnLWhvdGVsLmpwZ1wiLFxuICAgICAgICB0aXRsZTogXCJKb2hhbm5lc2J1cmcgSG90ZWxcIixcbiAgICAgICAgcHJpY2U6IDQ4MDAsXG4gICAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgICAgICBmaXJzdExpbmU6IFwiU3VpdGUgMjZcIixcbiAgICAgICAgICAgIGNpdHk6IFwiSm9oYW5uZXNidXJnXCIsXG4gICAgICAgICAgICBjb2RlOiAyMTExLFxuICAgICAgICAgICAgY291bnRyeTogXCJTb3V0aCBBZnJpY2FcIixcbiAgICAgICAgfSxcbiAgICAgICAgY29udGFjdDogWysyNzExNTE4MDE0NCwgXCJzdWZmb2NhdGVuZGxvdnVAZ21haWwuY29tXCJdLFxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW1hZ2U6IFwiaW1hZ2VzL1J1c3RlbmJ1cmctcmVzb3J0LmpwZ1wiLFxuICAgICAgICB0aXRsZTogXCJSdXN0ZW5idXJnIFJlc29ydFwiLFxuICAgICAgICBwcmljZTogOTAwLFxuICAgICAgICBsb2NhdGlvbjoge1xuICAgICAgICAgICAgZmlyc3RMaW5lOiBcIlBpbGFuZXNidXJnIHJvYWRcIixcbiAgICAgICAgICAgIGNpdHk6IFwiUnVzdGVuYnVyZ1wiLFxuICAgICAgICAgICAgY29kZTogMzIyLFxuICAgICAgICAgICAgY291bnRyeTogXCJTb3V0aCBBZnJpY2FcIixcbiAgICAgICAgfSxcbiAgICAgICAgY29udGFjdDogWysyNzE0NDExMDE0NCwgXCJ0YXVtb2dhbGVAZ21haWwuY29tXCJdLFxuICAgICAgICBpc0F2YWlsYWJsZTogZmFsc2UsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGltYWdlOiAnaW1hZ2VzL21hbGF5c2lhbi1ob3RlbC5qcGVnJyxcbiAgICAgICAgdGl0bGU6ICdNYWxpYSBIb3RlbCcsXG4gICAgICAgIHByaWNlOiAzNSxcbiAgICAgICAgbG9jYXRpb246IHtcbiAgICAgICAgICAgIGZpcnN0TGluZTogJ1Jvb20gNCcsXG4gICAgICAgICAgICBjaXR5OiAnTWFsaWEnLFxuICAgICAgICAgICAgY29kZTogNDUzMzQsXG4gICAgICAgICAgICBjb3VudHJ5OiAnTWFsYXlzaWEnXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRhY3Q6IFsrNjAzNDk4MjIwODMsICdsZWUzNEBnbWFpbC5jb20nXSxcbiAgICAgICAgaXNBdmFpbGFibGU6IGZhbHNlXG4gICAgfVxuXTtcbi8vRnVuY3Rpb25zXG4oMCwgdXRpbHNfMS5zaG93UmV2aWV3VG90YWwpKHJldmlld3MubGVuZ3RoLCByZXZpZXdzWzBdLm5hbWUsIHJldmlld3NbMF0ubG95YWx0eVVzZXIpO1xuKDAsIHV0aWxzXzEucG9wdWxhdGVVc2VyKSh5b3UuaXNSZXR1cm5pbmcsIHlvdS5maXJzdE5hbWUpO1xuLy9BZGQgdGhlIHByb3BlcnRpZXNcbmZvciAobGV0IGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgY2FyZC5pbm5lckhUTUwgPSBwcm9wZXJ0aWVzW2ldLnRpdGxlO1xuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgcHJvcGVydGllc1tpXS5pbWFnZSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgKDAsIHV0aWxzXzEuc2hvd0RldGFpbHMpKHlvdS5wZXJtaXNzaW9ucywgY2FyZCwgcHJvcGVydGllc1tpXS5wcmljZSk7XG4gICAgcHJvcGVydHlDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XG59XG5sZXQgY291bnQgPSAwO1xuZnVuY3Rpb24gYWRkUmV2aWV3cyhhcnJheSkge1xuICAgIGlmICghY291bnQpIHtcbiAgICAgICAgY291bnQrKztcbiAgICAgICAgY29uc3QgdG9wVHdvID0gKDAsIHV0aWxzXzEuZ2V0VG9wVHdvUmV2aWV3cykoYXJyYXkpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvcFR3by5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJyZXZpZXctY2FyZFwiKTtcbiAgICAgICAgICAgIGNhcmQuaW5uZXJIVE1MID0gdG9wVHdvW2ldLnN0YXJzICsgXCIgc3RhcnMgZnJvbSBcIiArIHRvcFR3b1tpXS5uYW1lO1xuICAgICAgICAgICAgcmV2aWV3Q29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChidXR0b24pO1xuICAgIH1cbn1cbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGFkZFJldmlld3MocmV2aWV3cykpO1xubGV0IGN1cnJlbnRMb2NhdGlvbiA9IFtcIlJ1c3RlbmJ1cmdcIiwgXCIwOToxOVwiLCAxNF07XG5mb290ZXIuaW5uZXJIVE1MID1cbiAgICBjdXJyZW50TG9jYXRpb25bMF0gK1xuICAgICAgICBcIiBcIiArXG4gICAgICAgIGN1cnJlbnRMb2NhdGlvblsxXSArXG4gICAgICAgIFwiIFwiICtcbiAgICAgICAgY3VycmVudExvY2F0aW9uWzJdICtcbiAgICAgICAgXCLCsFwiO1xubGV0IHlvdXJNYWluSW1hZ2UgPSBuZXcgY2xhc3Nlc18xLmRlZmF1bHQoJ2ltYWdlcy9Nb3otSG90ZWwuanBnJywgJ01vemFtYmljYW4gSG90ZWwnLCBbe1xuICAgICAgICBuYW1lOiAnT2xpdmUnLFxuICAgICAgICBzdGFyczogNSxcbiAgICAgICAgbG95YWx0eVVzZXI6IGVudW1zXzEuTG95YWx0eVVzZXIuR09MRF9VU0VSLFxuICAgICAgICBkYXRlOiAnMTItMDQtMjAyMSdcbiAgICB9XSk7XG5jb25zdCBtYWluSW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1pbWFnZScpO1xuaWYgKG1haW5JbWFnZUNvbnRhaW5lcikge1xuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCB5b3VyTWFpbkltYWdlLnNyYyk7XG4gICAgbWFpbkltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKTtcbn1cbmVsc2Uge1xuICAgIGNvbnNvbGUuZXJyb3IoJ01haW4gaW1hZ2UgY29udGFpbmVyIG5vdCBmb3VuZC4nKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgTWFpbkltYWdlIHtcbiAgICBjb25zdHJ1Y3RvcihzcmMsIHRpdGxlLCByZXZpZXdzKSB7XG4gICAgICAgIHRoaXMuc3JjID0gc3JjO1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMucmV2aWV3cyA9IHJldmlld3M7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gTWFpbkltYWdlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdldFRvcFR3b1Jldmlld3MgPSBleHBvcnRzLm1ha2VNdWx0aXBsZSA9IGV4cG9ydHMuc2hvd0RldGFpbHMgPSBleHBvcnRzLnBvcHVsYXRlVXNlciA9IGV4cG9ydHMuc2hvd1Jldmlld1RvdGFsID0gdm9pZCAwO1xuY29uc3QgZW51bXNfMSA9IHJlcXVpcmUoXCIuL2VudW1zXCIpO1xuY29uc3QgcmV2aWV3VG90YWxEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZXZpZXdzXCIpO1xuY29uc3QgcmV0dXJuaW5nVXNlckRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JldHVybmluZy11c2VyXCIpO1xuY29uc3QgdXNlck5hbWVEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1c2VyXCIpO1xuZnVuY3Rpb24gc2hvd1Jldmlld1RvdGFsKHZhbHVlLCByZXZpZXdlciwgaXNMb3lhbHR5KSB7XG4gICAgY29uc3QgaWNvbkRpc3BsYXkgPSBlbnVtc18xLkxveWFsdHlVc2VyLkdPTERfVVNFUiA/IFwi4q2QXCIgOiBcIlwiO1xuICAgIHJldmlld1RvdGFsRGlzcGxheS5pbm5lckhUTUwgPVxuICAgICAgICB2YWx1ZS50b1N0cmluZygpICtcbiAgICAgICAgICAgIFwiIHJldmlld1wiICtcbiAgICAgICAgICAgIG1ha2VNdWx0aXBsZSh2YWx1ZSkgK1xuICAgICAgICAgICAgXCIgfCBsYXN0IHJldmlld2VkIGJ5IFwiICtcbiAgICAgICAgICAgIHJldmlld2VyICtcbiAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgIGljb25EaXNwbGF5O1xufVxuZXhwb3J0cy5zaG93UmV2aWV3VG90YWwgPSBzaG93UmV2aWV3VG90YWw7XG5mdW5jdGlvbiBwb3B1bGF0ZVVzZXIoaXNSZXR1cm5pbmcsIHVzZXJOYW1lKSB7XG4gICAgaWYgKGlzUmV0dXJuaW5nKSB7XG4gICAgICAgIHJldHVybmluZ1VzZXJEaXNwbGF5LmlubmVySFRNTCA9IFwiYmFja1wiO1xuICAgIH1cbiAgICB1c2VyTmFtZURpc3BsYXkuaW5uZXJIVE1MID0gdXNlck5hbWU7XG59XG5leHBvcnRzLnBvcHVsYXRlVXNlciA9IHBvcHVsYXRlVXNlcjtcbmZ1bmN0aW9uIHNob3dEZXRhaWxzKHZhbHVlLCBlbGVtZW50LCBwcmljZSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBjb25zdCBwcmljZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcmljZURpc3BsYXkuaW5uZXJIVE1MID0gcHJpY2UudG9TdHJpbmcoKSArIFwiL25pZ2h0XCI7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQocHJpY2VEaXNwbGF5KTtcbiAgICB9XG59XG5leHBvcnRzLnNob3dEZXRhaWxzID0gc2hvd0RldGFpbHM7XG5mdW5jdGlvbiBtYWtlTXVsdGlwbGUodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPiAxIHx8IHZhbHVlID09IDApIHtcbiAgICAgICAgcmV0dXJuIFwic1wiO1xuICAgIH1cbiAgICBlbHNlXG4gICAgICAgIHJldHVybiBcIlwiO1xufVxuZXhwb3J0cy5tYWtlTXVsdGlwbGUgPSBtYWtlTXVsdGlwbGU7XG5mdW5jdGlvbiBnZXRUb3BUd29SZXZpZXdzKHJldmlld3MpIHtcbiAgICBjb25zdCBzb3J0ZWRSZXZpZXdzID0gcmV2aWV3cy5zb3J0KChhLCBiKSA9PiBiLnN0YXJzIC0gYS5zdGFycyk7XG4gICAgcmV0dXJuIHNvcnRlZFJldmlld3Muc2xpY2UoMCwgMik7XG59XG5leHBvcnRzLmdldFRvcFR3b1Jldmlld3MgPSBnZXRUb3BUd29SZXZpZXdzO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=