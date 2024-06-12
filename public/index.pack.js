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
exports.populateUser = exports.showReviewTotal = void 0;
const enums_1 = __webpack_require__(/*! ./enums */ "./enums.ts");
const reviewTotalDisplay = document.querySelector('#reviews');
const returningUserDisplay = document.querySelector('#returning-user');
const userNameDisplay = document.querySelector('#user');
function showReviewTotal(value, reviewer, isLoyalty) {
    const iconDisplay = enums_1.LoyaltyUser.GOLD_USER ? '⭐' : '';
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay;
}
exports.showReviewTotal = showReviewTotal;
function populateUser(isReturning, userName) {
    if (isReturning == true) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
}
exports.populateUser = populateUser;


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
const footer = document.querySelector('.footer');
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
        description: 'Great hosts, location was a bit further than said'
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
let authorityStatus;
isLoggedIn = true;
function showDetails(authorityStatus, element, price) {
    if (authorityStatus) {
        const priceDisplay = document.createElement('div');
        priceDisplay.innerHTML = price.toString() + '/night';
        element.appendChild(priceDisplay);
    }
}
//Add the properties
for (let i = 0; i < properties.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = properties[i].title;
    const image = document.createElement("img");
    image.setAttribute("src", properties[i].image);
    card.appendChild(image);
    propertyContainer.appendChild(card);
    showDetails(you.permissions, card, properties[i].price);
}
let currentLocation = ['Rustenburg', '09:19', 14];
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°';

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgucGFjay5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsbUJBQW1CLEdBQUcsbUJBQW1CO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxrQkFBa0IsbUJBQW1CLG1CQUFtQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxrQkFBa0IsbUJBQW1CLG1CQUFtQjs7Ozs7Ozs7Ozs7QUNiNUM7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsb0JBQW9CLEdBQUcsdUJBQXVCO0FBQzlDLGdCQUFnQixtQkFBTyxDQUFDLDJCQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjs7Ozs7OztVQ2xCcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7OztBQ3RCYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxnQkFBZ0IsbUJBQU8sQ0FBQywyQkFBUztBQUNqQyxnQkFBZ0IsbUJBQU8sQ0FBQywyQkFBUztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHVCQUF1QjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC8uL2VudW1zLnRzIiwid2VicGFjazovL3Byb2plY3QvLi91dGlscy50cyIsIndlYnBhY2s6Ly9wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QvLi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTG95YWx0eVVzZXIgPSBleHBvcnRzLlBlcm1pc3Npb25zID0gdm9pZCAwO1xudmFyIFBlcm1pc3Npb25zO1xuKGZ1bmN0aW9uIChQZXJtaXNzaW9ucykge1xuICAgIFBlcm1pc3Npb25zW1wiQURNSU5cIl0gPSBcIkFETUlOXCI7XG4gICAgUGVybWlzc2lvbnNbXCJSRUFEX09OTFlcIl0gPSBcIlJFQURfT05MWVwiO1xufSkoUGVybWlzc2lvbnMgfHwgKGV4cG9ydHMuUGVybWlzc2lvbnMgPSBQZXJtaXNzaW9ucyA9IHt9KSk7XG52YXIgTG95YWx0eVVzZXI7XG4oZnVuY3Rpb24gKExveWFsdHlVc2VyKSB7XG4gICAgTG95YWx0eVVzZXJbXCJHT0xEX1VTRVJcIl0gPSBcIkdPTERfVVNFUlwiO1xuICAgIExveWFsdHlVc2VyW1wiU0lMVkVSX1VTRVJcIl0gPSBcIlNJTFZFUl9VU0VSXCI7XG4gICAgTG95YWx0eVVzZXJbXCJCUk9OWkVfVVNFUlwiXSA9IFwiQlJPTlpFX1VTRVJcIjtcbn0pKExveWFsdHlVc2VyIHx8IChleHBvcnRzLkxveWFsdHlVc2VyID0gTG95YWx0eVVzZXIgPSB7fSkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBvcHVsYXRlVXNlciA9IGV4cG9ydHMuc2hvd1Jldmlld1RvdGFsID0gdm9pZCAwO1xuY29uc3QgZW51bXNfMSA9IHJlcXVpcmUoXCIuL2VudW1zXCIpO1xuY29uc3QgcmV2aWV3VG90YWxEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jldmlld3MnKTtcbmNvbnN0IHJldHVybmluZ1VzZXJEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JldHVybmluZy11c2VyJyk7XG5jb25zdCB1c2VyTmFtZURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlcicpO1xuZnVuY3Rpb24gc2hvd1Jldmlld1RvdGFsKHZhbHVlLCByZXZpZXdlciwgaXNMb3lhbHR5KSB7XG4gICAgY29uc3QgaWNvbkRpc3BsYXkgPSBlbnVtc18xLkxveWFsdHlVc2VyLkdPTERfVVNFUiA/ICfirZAnIDogJyc7XG4gICAgcmV2aWV3VG90YWxEaXNwbGF5LmlubmVySFRNTCA9ICdyZXZpZXcgdG90YWwgJyArIHZhbHVlLnRvU3RyaW5nKCkgKyAnfCBsYXN0IHJldmlld2VkIGJ5ICcgKyByZXZpZXdlciArICcgJyArIGljb25EaXNwbGF5O1xufVxuZXhwb3J0cy5zaG93UmV2aWV3VG90YWwgPSBzaG93UmV2aWV3VG90YWw7XG5mdW5jdGlvbiBwb3B1bGF0ZVVzZXIoaXNSZXR1cm5pbmcsIHVzZXJOYW1lKSB7XG4gICAgaWYgKGlzUmV0dXJuaW5nID09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuaW5nVXNlckRpc3BsYXkuaW5uZXJIVE1MID0gJ2JhY2snO1xuICAgIH1cbiAgICB1c2VyTmFtZURpc3BsYXkuaW5uZXJIVE1MID0gdXNlck5hbWU7XG59XG5leHBvcnRzLnBvcHVsYXRlVXNlciA9IHBvcHVsYXRlVXNlcjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcbmNvbnN0IGVudW1zXzEgPSByZXF1aXJlKFwiLi9lbnVtc1wiKTtcbmNvbnN0IHByb3BlcnR5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9wZXJ0aWVzXCIpO1xuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3RlcicpO1xubGV0IGlzTG9nZ2VkSW47XG4vL1Jldmlld3NcbmNvbnN0IHJldmlld3MgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiBcIlNoZWlhXCIsXG4gICAgICAgIHN0YXJzOiA1LFxuICAgICAgICBsb3lhbHR5VXNlcjogZW51bXNfMS5Mb3lhbHR5VXNlci5HT0xEX1VTRVIsXG4gICAgICAgIGRhdGU6IFwiMDEtMDQtMjAyMVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkFuZHJ6ZWpcIixcbiAgICAgICAgc3RhcnM6IDMsXG4gICAgICAgIGxveWFsdHlVc2VyOiBlbnVtc18xLkxveWFsdHlVc2VyLkJST05aRV9VU0VSLFxuICAgICAgICBkYXRlOiBcIjI4LTAzLTIwMjFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJPbWFyXCIsXG4gICAgICAgIHN0YXJzOiA0LFxuICAgICAgICBsb3lhbHR5VXNlcjogZW51bXNfMS5Mb3lhbHR5VXNlci5TSUxWRVJfVVNFUixcbiAgICAgICAgZGF0ZTogXCIyNy0wMy0yMDIxXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnR3JlYXQgaG9zdHMsIGxvY2F0aW9uIHdhcyBhIGJpdCBmdXJ0aGVyIHRoYW4gc2FpZCdcbiAgICB9LFxuXTtcbi8vVXNlclxuY29uc3QgeW91ID0ge1xuICAgIGZpcnN0TmFtZTogXCJCb2JieVwiLFxuICAgIGxhc3ROYW1lOiBcIkJyb3duXCIsXG4gICAgcGVybWlzc2lvbnM6IGVudW1zXzEuUGVybWlzc2lvbnMuQURNSU4sXG4gICAgaXNSZXR1cm5pbmc6IHRydWUsXG4gICAgYWdlOiAzNSxcbiAgICBzdGF5ZWRBdDogW1wiZmxvcmlkYS1ob21lXCIsIFwib21hbi1mbGF0XCIsIFwidG9reW8tYnVuZ2Fsb3dcIl0sXG59O1xuLy9Qcm9wZXJ0aWVzXG5jb25zdCBwcm9wZXJ0aWVzID0gW1xuICAgIHtcbiAgICAgICAgaW1hZ2U6IFwiaW1hZ2VzL1J1c3RlbmJ1cmctbG9kZ2UuanBnXCIsXG4gICAgICAgIHRpdGxlOiBcIlJ1c3RlbmJ1cmcgTG9kZ2VcIixcbiAgICAgICAgcHJpY2U6IDUwMCxcbiAgICAgICAgbG9jYXRpb246IHtcbiAgICAgICAgICAgIGZpcnN0bGluZTogXCJCdWlsZGluZyA0OFwiLFxuICAgICAgICAgICAgY2l0eTogXCJSdXN0ZW5idXJnXCIsXG4gICAgICAgICAgICBjb2RlOiAzMjIsXG4gICAgICAgICAgICBjb3VudHJ5OiBcIlNvdXRoIEFmcmljYVwiLFxuICAgICAgICB9LFxuICAgICAgICBjb250YWN0OiBbKzI3MTQ1MTgwMTQ0LCBcImRhdmlkZ2VuYXJvQGdtYWlsLmNvbVwiXSxcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGltYWdlOiBcImltYWdlcy9Kb2hhbm5lc2J1cmctaG90ZWwuanBnXCIsXG4gICAgICAgIHRpdGxlOiBcIkpvaGFubmVzYnVyZyBIb3RlbFwiLFxuICAgICAgICBwcmljZTogNDgwMCxcbiAgICAgICAgbG9jYXRpb246IHtcbiAgICAgICAgICAgIGZpcnN0bGluZTogXCJTdWl0ZSAyNlwiLFxuICAgICAgICAgICAgY2l0eTogXCJKb2hhbm5lc2J1cmdcIixcbiAgICAgICAgICAgIGNvZGU6IDIxMTEsXG4gICAgICAgICAgICBjb3VudHJ5OiBcIlNvdXRoIEFmcmljYVwiLFxuICAgICAgICB9LFxuICAgICAgICBjb250YWN0OiBbKzI3MTE1MTgwMTQ0LCBcInN1ZmZvY2F0ZW5kbG92dUBnbWFpbC5jb21cIl0sXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbWFnZTogXCJpbWFnZXMvUnVzdGVuYnVyZy1yZXNvcnQuanBnXCIsXG4gICAgICAgIHRpdGxlOiBcIlJ1c3RlbmJ1cmcgUmVzb3J0XCIsXG4gICAgICAgIHByaWNlOiA5MDAsXG4gICAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgICAgICBmaXJzdGxpbmU6IFwiUGlsYW5lc2J1cmcgcm9hZFwiLFxuICAgICAgICAgICAgY2l0eTogXCJSdXN0ZW5idXJnXCIsXG4gICAgICAgICAgICBjb2RlOiAzMjIsXG4gICAgICAgICAgICBjb3VudHJ5OiBcIlNvdXRoIEFmcmljYVwiLFxuICAgICAgICB9LFxuICAgICAgICBjb250YWN0OiBbKzI3MTQ0MTEwMTQ0LCBcInRhdW1vZ2FsZUBnbWFpbC5jb21cIl0sXG4gICAgICAgIGlzQXZhaWxhYmxlOiBmYWxzZSxcbiAgICB9LFxuXTtcbi8vRnVuY3Rpb25zXG4oMCwgdXRpbHNfMS5zaG93UmV2aWV3VG90YWwpKHJldmlld3MubGVuZ3RoLCByZXZpZXdzWzBdLm5hbWUsIHJldmlld3NbMF0ubG95YWx0eVVzZXIpO1xuKDAsIHV0aWxzXzEucG9wdWxhdGVVc2VyKSh5b3UuaXNSZXR1cm5pbmcsIHlvdS5maXJzdE5hbWUpO1xubGV0IGF1dGhvcml0eVN0YXR1cztcbmlzTG9nZ2VkSW4gPSB0cnVlO1xuZnVuY3Rpb24gc2hvd0RldGFpbHMoYXV0aG9yaXR5U3RhdHVzLCBlbGVtZW50LCBwcmljZSkge1xuICAgIGlmIChhdXRob3JpdHlTdGF0dXMpIHtcbiAgICAgICAgY29uc3QgcHJpY2VEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByaWNlRGlzcGxheS5pbm5lckhUTUwgPSBwcmljZS50b1N0cmluZygpICsgJy9uaWdodCc7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQocHJpY2VEaXNwbGF5KTtcbiAgICB9XG59XG4vL0FkZCB0aGUgcHJvcGVydGllc1xuZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgICBjYXJkLmlubmVySFRNTCA9IHByb3BlcnRpZXNbaV0udGl0bGU7XG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBwcm9wZXJ0aWVzW2ldLmltYWdlKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICBwcm9wZXJ0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICBzaG93RGV0YWlscyh5b3UucGVybWlzc2lvbnMsIGNhcmQsIHByb3BlcnRpZXNbaV0ucHJpY2UpO1xufVxubGV0IGN1cnJlbnRMb2NhdGlvbiA9IFsnUnVzdGVuYnVyZycsICcwOToxOScsIDE0XTtcbmZvb3Rlci5pbm5lckhUTUwgPSBjdXJyZW50TG9jYXRpb25bMF0gKyAnICcgKyBjdXJyZW50TG9jYXRpb25bMV0gKyAnICcgKyBjdXJyZW50TG9jYXRpb25bMl0gKyAnwrAnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9