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

/***/ "./utils.ts":
/*!******************!*\
  !*** ./utils.ts ***!
  \******************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getTopTwoReviews = exports.makeMultiple = exports.showDetails = exports.populateUser = exports.showReviewTotal = void 0;
const enums_1 = __webpack_require__(/*! ./enums */ "./enums.ts");
const reviewTotalDisplay = document.querySelector('#reviews');
const returningUserDisplay = document.querySelector('#returning-user');
const userNameDisplay = document.querySelector('#user');
function showReviewTotal(value, reviewer, isLoyalty) {
    const iconDisplay = enums_1.LoyaltyUser.GOLD_USER ? '⭐' : '';
    reviewTotalDisplay.innerHTML = value.toString() + ' review' + makeMultiple(value) + ' | last reviewed by ' + reviewer + ' ' + iconDisplay;
}
exports.showReviewTotal = showReviewTotal;
function populateUser(isReturning, userName) {
    if (isReturning == true) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
}
exports.populateUser = populateUser;
function showDetails(value, element, price) {
    if (value) {
        const priceDisplay = document.createElement('div');
        priceDisplay.innerHTML = price.toString() + '/night';
        element.appendChild(priceDisplay);
    }
}
exports.showDetails = showDetails;
function makeMultiple(value) {
    if (value > 1) {
        return 's';
    }
    else
        return '';
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!******************!*\
  !*** ./index.ts ***!
  \******************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const utils_1 = __webpack_require__(/*! ./utils */ "./utils.ts");
const enums_1 = __webpack_require__(/*! ./enums */ "./enums.ts");
const propertyContainer = document.querySelector(".properties");
const footer = document.querySelector(".footer");
const reviewContainer = document.querySelector('.reviews');
const container = document.querySelector('.container');
const button = document.querySelector('button');
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
        description: "Great hosts, location was a bit further than said",
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
let currentLocation = ["Rustenburg", "09:19", 14];
footer.innerHTML =
    currentLocation[0] +
        " " +
        currentLocation[1] +
        " " +
        currentLocation[2] +
        "°";

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgucGFjay5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsbUJBQW1CLEdBQUcsbUJBQW1CO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxrQkFBa0IsbUJBQW1CLG1CQUFtQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxrQkFBa0IsbUJBQW1CLG1CQUFtQjs7Ozs7Ozs7Ozs7QUNiNUM7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsd0JBQXdCLEdBQUcsb0JBQW9CLEdBQUcsbUJBQW1CLEdBQUcsb0JBQW9CLEdBQUcsdUJBQXVCO0FBQ3RILGdCQUFnQixtQkFBTyxDQUFDLDJCQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qjs7Ozs7OztVQ3ZDeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7OztBQ3RCYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxnQkFBZ0IsbUJBQU8sQ0FBQywyQkFBUztBQUNqQyxnQkFBZ0IsbUJBQU8sQ0FBQywyQkFBUztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHVCQUF1QjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QvLi9lbnVtcy50cyIsIndlYnBhY2s6Ly9wcm9qZWN0Ly4vdXRpbHMudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0Ly4vaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkxveWFsdHlVc2VyID0gZXhwb3J0cy5QZXJtaXNzaW9ucyA9IHZvaWQgMDtcbnZhciBQZXJtaXNzaW9ucztcbihmdW5jdGlvbiAoUGVybWlzc2lvbnMpIHtcbiAgICBQZXJtaXNzaW9uc1tcIkFETUlOXCJdID0gXCJBRE1JTlwiO1xuICAgIFBlcm1pc3Npb25zW1wiUkVBRF9PTkxZXCJdID0gXCJSRUFEX09OTFlcIjtcbn0pKFBlcm1pc3Npb25zIHx8IChleHBvcnRzLlBlcm1pc3Npb25zID0gUGVybWlzc2lvbnMgPSB7fSkpO1xudmFyIExveWFsdHlVc2VyO1xuKGZ1bmN0aW9uIChMb3lhbHR5VXNlcikge1xuICAgIExveWFsdHlVc2VyW1wiR09MRF9VU0VSXCJdID0gXCJHT0xEX1VTRVJcIjtcbiAgICBMb3lhbHR5VXNlcltcIlNJTFZFUl9VU0VSXCJdID0gXCJTSUxWRVJfVVNFUlwiO1xuICAgIExveWFsdHlVc2VyW1wiQlJPTlpFX1VTRVJcIl0gPSBcIkJST05aRV9VU0VSXCI7XG59KShMb3lhbHR5VXNlciB8fCAoZXhwb3J0cy5Mb3lhbHR5VXNlciA9IExveWFsdHlVc2VyID0ge30pKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5nZXRUb3BUd29SZXZpZXdzID0gZXhwb3J0cy5tYWtlTXVsdGlwbGUgPSBleHBvcnRzLnNob3dEZXRhaWxzID0gZXhwb3J0cy5wb3B1bGF0ZVVzZXIgPSBleHBvcnRzLnNob3dSZXZpZXdUb3RhbCA9IHZvaWQgMDtcbmNvbnN0IGVudW1zXzEgPSByZXF1aXJlKFwiLi9lbnVtc1wiKTtcbmNvbnN0IHJldmlld1RvdGFsRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXZpZXdzJyk7XG5jb25zdCByZXR1cm5pbmdVc2VyRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXR1cm5pbmctdXNlcicpO1xuY29uc3QgdXNlck5hbWVEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXInKTtcbmZ1bmN0aW9uIHNob3dSZXZpZXdUb3RhbCh2YWx1ZSwgcmV2aWV3ZXIsIGlzTG95YWx0eSkge1xuICAgIGNvbnN0IGljb25EaXNwbGF5ID0gZW51bXNfMS5Mb3lhbHR5VXNlci5HT0xEX1VTRVIgPyAn4q2QJyA6ICcnO1xuICAgIHJldmlld1RvdGFsRGlzcGxheS5pbm5lckhUTUwgPSB2YWx1ZS50b1N0cmluZygpICsgJyByZXZpZXcnICsgbWFrZU11bHRpcGxlKHZhbHVlKSArICcgfCBsYXN0IHJldmlld2VkIGJ5ICcgKyByZXZpZXdlciArICcgJyArIGljb25EaXNwbGF5O1xufVxuZXhwb3J0cy5zaG93UmV2aWV3VG90YWwgPSBzaG93UmV2aWV3VG90YWw7XG5mdW5jdGlvbiBwb3B1bGF0ZVVzZXIoaXNSZXR1cm5pbmcsIHVzZXJOYW1lKSB7XG4gICAgaWYgKGlzUmV0dXJuaW5nID09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuaW5nVXNlckRpc3BsYXkuaW5uZXJIVE1MID0gJ2JhY2snO1xuICAgIH1cbiAgICB1c2VyTmFtZURpc3BsYXkuaW5uZXJIVE1MID0gdXNlck5hbWU7XG59XG5leHBvcnRzLnBvcHVsYXRlVXNlciA9IHBvcHVsYXRlVXNlcjtcbmZ1bmN0aW9uIHNob3dEZXRhaWxzKHZhbHVlLCBlbGVtZW50LCBwcmljZSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBjb25zdCBwcmljZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJpY2VEaXNwbGF5LmlubmVySFRNTCA9IHByaWNlLnRvU3RyaW5nKCkgKyAnL25pZ2h0JztcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChwcmljZURpc3BsYXkpO1xuICAgIH1cbn1cbmV4cG9ydHMuc2hvd0RldGFpbHMgPSBzaG93RGV0YWlscztcbmZ1bmN0aW9uIG1ha2VNdWx0aXBsZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA+IDEpIHtcbiAgICAgICAgcmV0dXJuICdzJztcbiAgICB9XG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gJyc7XG59XG5leHBvcnRzLm1ha2VNdWx0aXBsZSA9IG1ha2VNdWx0aXBsZTtcbmZ1bmN0aW9uIGdldFRvcFR3b1Jldmlld3MocmV2aWV3cykge1xuICAgIGNvbnN0IHNvcnRlZFJldmlld3MgPSByZXZpZXdzLnNvcnQoKGEsIGIpID0+IGIuc3RhcnMgLSBhLnN0YXJzKTtcbiAgICByZXR1cm4gc29ydGVkUmV2aWV3cy5zbGljZSgwLCAyKTtcbn1cbmV4cG9ydHMuZ2V0VG9wVHdvUmV2aWV3cyA9IGdldFRvcFR3b1Jldmlld3M7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5jb25zdCBlbnVtc18xID0gcmVxdWlyZShcIi4vZW51bXNcIik7XG5jb25zdCBwcm9wZXJ0eUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvcGVydGllc1wiKTtcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9vdGVyXCIpO1xuY29uc3QgcmV2aWV3Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJldmlld3MnKTtcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xubGV0IGlzTG9nZ2VkSW47XG4vL1Jldmlld3NcbmNvbnN0IHJldmlld3MgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiBcIlNoZWlhXCIsXG4gICAgICAgIHN0YXJzOiA1LFxuICAgICAgICBsb3lhbHR5VXNlcjogZW51bXNfMS5Mb3lhbHR5VXNlci5HT0xEX1VTRVIsXG4gICAgICAgIGRhdGU6IFwiMDEtMDQtMjAyMVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkFuZHJ6ZWpcIixcbiAgICAgICAgc3RhcnM6IDMsXG4gICAgICAgIGxveWFsdHlVc2VyOiBlbnVtc18xLkxveWFsdHlVc2VyLkJST05aRV9VU0VSLFxuICAgICAgICBkYXRlOiBcIjI4LTAzLTIwMjFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJPbWFyXCIsXG4gICAgICAgIHN0YXJzOiA0LFxuICAgICAgICBsb3lhbHR5VXNlcjogZW51bXNfMS5Mb3lhbHR5VXNlci5TSUxWRVJfVVNFUixcbiAgICAgICAgZGF0ZTogXCIyNy0wMy0yMDIxXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkdyZWF0IGhvc3RzLCBsb2NhdGlvbiB3YXMgYSBiaXQgZnVydGhlciB0aGFuIHNhaWRcIixcbiAgICB9LFxuXTtcbi8vVXNlclxuY29uc3QgeW91ID0ge1xuICAgIGZpcnN0TmFtZTogXCJCb2JieVwiLFxuICAgIGxhc3ROYW1lOiBcIkJyb3duXCIsXG4gICAgcGVybWlzc2lvbnM6IGVudW1zXzEuUGVybWlzc2lvbnMuQURNSU4sXG4gICAgaXNSZXR1cm5pbmc6IHRydWUsXG4gICAgYWdlOiAzNSxcbiAgICBzdGF5ZWRBdDogW1wiZmxvcmlkYS1ob21lXCIsIFwib21hbi1mbGF0XCIsIFwidG9reW8tYnVuZ2Fsb3dcIl0sXG59O1xuLy9Qcm9wZXJ0aWVzXG5jb25zdCBwcm9wZXJ0aWVzID0gW1xuICAgIHtcbiAgICAgICAgaW1hZ2U6IFwiaW1hZ2VzL1J1c3RlbmJ1cmctbG9kZ2UuanBnXCIsXG4gICAgICAgIHRpdGxlOiBcIlJ1c3RlbmJ1cmcgTG9kZ2VcIixcbiAgICAgICAgcHJpY2U6IDUwMCxcbiAgICAgICAgbG9jYXRpb246IHtcbiAgICAgICAgICAgIGZpcnN0bGluZTogXCJCdWlsZGluZyA0OFwiLFxuICAgICAgICAgICAgY2l0eTogXCJSdXN0ZW5idXJnXCIsXG4gICAgICAgICAgICBjb2RlOiAzMjIsXG4gICAgICAgICAgICBjb3VudHJ5OiBcIlNvdXRoIEFmcmljYVwiLFxuICAgICAgICB9LFxuICAgICAgICBjb250YWN0OiBbKzI3MTQ1MTgwMTQ0LCBcImRhdmlkZ2VuYXJvQGdtYWlsLmNvbVwiXSxcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGltYWdlOiBcImltYWdlcy9Kb2hhbm5lc2J1cmctaG90ZWwuanBnXCIsXG4gICAgICAgIHRpdGxlOiBcIkpvaGFubmVzYnVyZyBIb3RlbFwiLFxuICAgICAgICBwcmljZTogNDgwMCxcbiAgICAgICAgbG9jYXRpb246IHtcbiAgICAgICAgICAgIGZpcnN0bGluZTogXCJTdWl0ZSAyNlwiLFxuICAgICAgICAgICAgY2l0eTogXCJKb2hhbm5lc2J1cmdcIixcbiAgICAgICAgICAgIGNvZGU6IDIxMTEsXG4gICAgICAgICAgICBjb3VudHJ5OiBcIlNvdXRoIEFmcmljYVwiLFxuICAgICAgICB9LFxuICAgICAgICBjb250YWN0OiBbKzI3MTE1MTgwMTQ0LCBcInN1ZmZvY2F0ZW5kbG92dUBnbWFpbC5jb21cIl0sXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbWFnZTogXCJpbWFnZXMvUnVzdGVuYnVyZy1yZXNvcnQuanBnXCIsXG4gICAgICAgIHRpdGxlOiBcIlJ1c3RlbmJ1cmcgUmVzb3J0XCIsXG4gICAgICAgIHByaWNlOiA5MDAsXG4gICAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgICAgICBmaXJzdGxpbmU6IFwiUGlsYW5lc2J1cmcgcm9hZFwiLFxuICAgICAgICAgICAgY2l0eTogXCJSdXN0ZW5idXJnXCIsXG4gICAgICAgICAgICBjb2RlOiAzMjIsXG4gICAgICAgICAgICBjb3VudHJ5OiBcIlNvdXRoIEFmcmljYVwiLFxuICAgICAgICB9LFxuICAgICAgICBjb250YWN0OiBbKzI3MTQ0MTEwMTQ0LCBcInRhdW1vZ2FsZUBnbWFpbC5jb21cIl0sXG4gICAgICAgIGlzQXZhaWxhYmxlOiBmYWxzZSxcbiAgICB9LFxuXTtcbi8vRnVuY3Rpb25zXG4oMCwgdXRpbHNfMS5zaG93UmV2aWV3VG90YWwpKHJldmlld3MubGVuZ3RoLCByZXZpZXdzWzBdLm5hbWUsIHJldmlld3NbMF0ubG95YWx0eVVzZXIpO1xuKDAsIHV0aWxzXzEucG9wdWxhdGVVc2VyKSh5b3UuaXNSZXR1cm5pbmcsIHlvdS5maXJzdE5hbWUpO1xuLy9BZGQgdGhlIHByb3BlcnRpZXNcbmZvciAobGV0IGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgY2FyZC5pbm5lckhUTUwgPSBwcm9wZXJ0aWVzW2ldLnRpdGxlO1xuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgcHJvcGVydGllc1tpXS5pbWFnZSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgKDAsIHV0aWxzXzEuc2hvd0RldGFpbHMpKHlvdS5wZXJtaXNzaW9ucywgY2FyZCwgcHJvcGVydGllc1tpXS5wcmljZSk7XG4gICAgcHJvcGVydHlDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XG59XG5sZXQgY291bnQgPSAwO1xuZnVuY3Rpb24gYWRkUmV2aWV3cyhhcnJheSkge1xuICAgIGlmICghY291bnQpIHtcbiAgICAgICAgY291bnQrKztcbiAgICAgICAgY29uc3QgdG9wVHdvID0gZ2V0VG9wVHdvUmV2aWV3cyhhcnJheSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9wVHdvLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcInJldmlldy1jYXJkXCIpO1xuICAgICAgICAgICAgY2FyZC5pbm5lckhUTUwgPSB0b3BUd29baV0uc3RhcnMgKyBcIiBzdGFycyBmcm9tIFwiICsgdG9wVHdvW2ldLm5hbWU7XG4gICAgICAgICAgICByZXZpZXdDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGJ1dHRvbik7XG4gICAgfVxufVxubGV0IGN1cnJlbnRMb2NhdGlvbiA9IFtcIlJ1c3RlbmJ1cmdcIiwgXCIwOToxOVwiLCAxNF07XG5mb290ZXIuaW5uZXJIVE1MID1cbiAgICBjdXJyZW50TG9jYXRpb25bMF0gK1xuICAgICAgICBcIiBcIiArXG4gICAgICAgIGN1cnJlbnRMb2NhdGlvblsxXSArXG4gICAgICAgIFwiIFwiICtcbiAgICAgICAgY3VycmVudExvY2F0aW9uWzJdICtcbiAgICAgICAgXCLCsFwiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9