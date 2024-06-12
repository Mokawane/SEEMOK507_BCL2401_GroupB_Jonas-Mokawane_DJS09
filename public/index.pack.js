/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./utils.ts":
/*!******************!*\
  !*** ./utils.ts ***!
  \******************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.populateUser = exports.showReviewTotal = void 0;
const reviewTotalDisplay = document.querySelector('#reviews');
const returningUserDisplay = document.querySelector('#returning-user');
const userNameDisplay = document.querySelector('#user');
function showReviewTotal(value, reviewer, isLoyalty) {
    const iconDisplay = isLoyalty ? '⭐' : '';
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
let isOpen;
const propertyContainer = document.querySelector(".properties");
const footer = document.querySelector('.footer');
//Reviews
const reviews = [
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
const you = {
    firstName: "Bobby",
    lastName: "Brown",
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
    propertyContainer.appendChild(card);
}
let currentLocation = ['Rustenburg', '09:19', 14];
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°';

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgucGFjay5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsb0JBQW9CLEdBQUcsdUJBQXVCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjs7Ozs7OztVQ2pCcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7OztBQ3RCYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxnQkFBZ0IsbUJBQU8sQ0FBQywyQkFBUztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsdUJBQXVCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC8uL3V0aWxzLnRzIiwid2VicGFjazovL3Byb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wb3B1bGF0ZVVzZXIgPSBleHBvcnRzLnNob3dSZXZpZXdUb3RhbCA9IHZvaWQgMDtcbmNvbnN0IHJldmlld1RvdGFsRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXZpZXdzJyk7XG5jb25zdCByZXR1cm5pbmdVc2VyRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXR1cm5pbmctdXNlcicpO1xuY29uc3QgdXNlck5hbWVEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXInKTtcbmZ1bmN0aW9uIHNob3dSZXZpZXdUb3RhbCh2YWx1ZSwgcmV2aWV3ZXIsIGlzTG95YWx0eSkge1xuICAgIGNvbnN0IGljb25EaXNwbGF5ID0gaXNMb3lhbHR5ID8gJ+KtkCcgOiAnJztcbiAgICByZXZpZXdUb3RhbERpc3BsYXkuaW5uZXJIVE1MID0gJ3JldmlldyB0b3RhbCAnICsgdmFsdWUudG9TdHJpbmcoKSArICd8IGxhc3QgcmV2aWV3ZWQgYnkgJyArIHJldmlld2VyICsgJyAnICsgaWNvbkRpc3BsYXk7XG59XG5leHBvcnRzLnNob3dSZXZpZXdUb3RhbCA9IHNob3dSZXZpZXdUb3RhbDtcbmZ1bmN0aW9uIHBvcHVsYXRlVXNlcihpc1JldHVybmluZywgdXNlck5hbWUpIHtcbiAgICBpZiAoaXNSZXR1cm5pbmcgPT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm5pbmdVc2VyRGlzcGxheS5pbm5lckhUTUwgPSAnYmFjayc7XG4gICAgfVxuICAgIHVzZXJOYW1lRGlzcGxheS5pbm5lckhUTUwgPSB1c2VyTmFtZTtcbn1cbmV4cG9ydHMucG9wdWxhdGVVc2VyID0gcG9wdWxhdGVVc2VyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xubGV0IGlzT3BlbjtcbmNvbnN0IHByb3BlcnR5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9wZXJ0aWVzXCIpO1xuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3RlcicpO1xuLy9SZXZpZXdzXG5jb25zdCByZXZpZXdzID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogXCJTaGVpYVwiLFxuICAgICAgICBzdGFyczogNSxcbiAgICAgICAgbG95YWx0eVVzZXI6IHRydWUsXG4gICAgICAgIGRhdGU6IFwiMDEtMDQtMjAyMVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkFuZHJ6ZWpcIixcbiAgICAgICAgc3RhcnM6IDMsXG4gICAgICAgIGxveWFsdHlVc2VyOiBmYWxzZSxcbiAgICAgICAgZGF0ZTogXCIyOC0wMy0yMDIxXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiT21hclwiLFxuICAgICAgICBzdGFyczogNCxcbiAgICAgICAgbG95YWx0eVVzZXI6IHRydWUsXG4gICAgICAgIGRhdGU6IFwiMjctMDMtMjAyMVwiLFxuICAgIH0sXG5dO1xuLy9Vc2VyXG5jb25zdCB5b3UgPSB7XG4gICAgZmlyc3ROYW1lOiBcIkJvYmJ5XCIsXG4gICAgbGFzdE5hbWU6IFwiQnJvd25cIixcbiAgICBpc1JldHVybmluZzogdHJ1ZSxcbiAgICBhZ2U6IDM1LFxuICAgIHN0YXllZEF0OiBbXCJmbG9yaWRhLWhvbWVcIiwgXCJvbWFuLWZsYXRcIiwgXCJ0b2t5by1idW5nYWxvd1wiXSxcbn07XG4vL1Byb3BlcnRpZXNcbmNvbnN0IHByb3BlcnRpZXMgPSBbXG4gICAge1xuICAgICAgICBpbWFnZTogXCJpbWFnZXMvUnVzdGVuYnVyZy1sb2RnZS5qcGdcIixcbiAgICAgICAgdGl0bGU6IFwiUnVzdGVuYnVyZyBMb2RnZVwiLFxuICAgICAgICBwcmljZTogNTAwLFxuICAgICAgICBsb2NhdGlvbjoge1xuICAgICAgICAgICAgZmlyc3RsaW5lOiBcIkJ1aWxkaW5nIDQ4XCIsXG4gICAgICAgICAgICBjaXR5OiBcIlJ1c3RlbmJ1cmdcIixcbiAgICAgICAgICAgIGNvZGU6IDMyMixcbiAgICAgICAgICAgIGNvdW50cnk6IFwiU291dGggQWZyaWNhXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRhY3Q6IFsrMjcxNDUxODAxNDQsIFwiZGF2aWRnZW5hcm9AZ21haWwuY29tXCJdLFxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW1hZ2U6IFwiaW1hZ2VzL0pvaGFubmVzYnVyZy1ob3RlbC5qcGdcIixcbiAgICAgICAgdGl0bGU6IFwiSm9oYW5uZXNidXJnIEhvdGVsXCIsXG4gICAgICAgIHByaWNlOiA1MDAsXG4gICAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgICAgICBmaXJzdGxpbmU6IFwiU3VpdGUgMjZcIixcbiAgICAgICAgICAgIGNpdHk6IFwiSm9oYW5uZXNidXJnXCIsXG4gICAgICAgICAgICBjb2RlOiAyMTExLFxuICAgICAgICAgICAgY291bnRyeTogXCJTb3V0aCBBZnJpY2FcIixcbiAgICAgICAgfSxcbiAgICAgICAgY29udGFjdDogWysyNzExNTE4MDE0NCwgXCJzdWZmb2NhdGVuZGxvdnVAZ21haWwuY29tXCJdLFxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW1hZ2U6IFwiaW1hZ2VzL1J1c3RlbmJ1cmctcmVzb3J0LmpwZ1wiLFxuICAgICAgICB0aXRsZTogXCJSdXN0ZW5idXJnIFJlc29ydFwiLFxuICAgICAgICBwcmljZTogNTAwLFxuICAgICAgICBsb2NhdGlvbjoge1xuICAgICAgICAgICAgZmlyc3RsaW5lOiBcIlBpbGFuZXNidXJnIHJvYWRcIixcbiAgICAgICAgICAgIGNpdHk6IFwiUnVzdGVuYnVyZ1wiLFxuICAgICAgICAgICAgY29kZTogMzIyLFxuICAgICAgICAgICAgY291bnRyeTogXCJTb3V0aCBBZnJpY2FcIixcbiAgICAgICAgfSxcbiAgICAgICAgY29udGFjdDogWysyNzE0NDExMDE0NCwgXCJ0YXVtb2dhbGVAZ21haWwuY29tXCJdLFxuICAgICAgICBpc0F2YWlsYWJsZTogZmFsc2UsXG4gICAgfSxcbl07XG4vL0Z1bmN0aW9uc1xuKDAsIHV0aWxzXzEuc2hvd1Jldmlld1RvdGFsKShyZXZpZXdzLmxlbmd0aCwgcmV2aWV3c1swXS5uYW1lLCByZXZpZXdzWzBdLmxveWFsdHlVc2VyKTtcbigwLCB1dGlsc18xLnBvcHVsYXRlVXNlcikoeW91LmlzUmV0dXJuaW5nLCB5b3UuZmlyc3ROYW1lKTtcbi8vQWRkIHRoZSBwcm9wZXJ0aWVzXG5mb3IgKGxldCBpID0gMDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICAgIGNhcmQuaW5uZXJIVE1MID0gcHJvcGVydGllc1tpXS50aXRsZTtcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIHByb3BlcnRpZXNbaV0uaW1hZ2UpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgIHByb3BlcnR5Q29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xufVxubGV0IGN1cnJlbnRMb2NhdGlvbiA9IFsnUnVzdGVuYnVyZycsICcwOToxOScsIDE0XTtcbmZvb3Rlci5pbm5lckhUTUwgPSBjdXJyZW50TG9jYXRpb25bMF0gKyAnICcgKyBjdXJyZW50TG9jYXRpb25bMV0gKyAnICcgKyBjdXJyZW50TG9jYXRpb25bMl0gKyAnwrAnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9