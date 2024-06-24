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
    if (isReturning == true) {
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgucGFjay5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsbUJBQW1CLEdBQUcsbUJBQW1CO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxrQkFBa0IsbUJBQW1CLG1CQUFtQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxrQkFBa0IsbUJBQW1CLG1CQUFtQjs7Ozs7Ozs7Ozs7QUNiNUM7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsd0JBQXdCLEdBQUcsb0JBQW9CLEdBQUcsbUJBQW1CLEdBQUcsb0JBQW9CLEdBQUcsdUJBQXVCO0FBQ3RILGdCQUFnQixtQkFBTyxDQUFDLDJCQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCOzs7Ozs7O1VDOUN4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDdEJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGdCQUFnQixtQkFBTyxDQUFDLDJCQUFTO0FBQ2pDLGdCQUFnQixtQkFBTyxDQUFDLDJCQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHVCQUF1QjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC8uL2VudW1zLnRzIiwid2VicGFjazovL3Byb2plY3QvLi91dGlscy50cyIsIndlYnBhY2s6Ly9wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QvLi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTG95YWx0eVVzZXIgPSBleHBvcnRzLlBlcm1pc3Npb25zID0gdm9pZCAwO1xudmFyIFBlcm1pc3Npb25zO1xuKGZ1bmN0aW9uIChQZXJtaXNzaW9ucykge1xuICAgIFBlcm1pc3Npb25zW1wiQURNSU5cIl0gPSBcIkFETUlOXCI7XG4gICAgUGVybWlzc2lvbnNbXCJSRUFEX09OTFlcIl0gPSBcIlJFQURfT05MWVwiO1xufSkoUGVybWlzc2lvbnMgfHwgKGV4cG9ydHMuUGVybWlzc2lvbnMgPSBQZXJtaXNzaW9ucyA9IHt9KSk7XG52YXIgTG95YWx0eVVzZXI7XG4oZnVuY3Rpb24gKExveWFsdHlVc2VyKSB7XG4gICAgTG95YWx0eVVzZXJbXCJHT0xEX1VTRVJcIl0gPSBcIkdPTERfVVNFUlwiO1xuICAgIExveWFsdHlVc2VyW1wiU0lMVkVSX1VTRVJcIl0gPSBcIlNJTFZFUl9VU0VSXCI7XG4gICAgTG95YWx0eVVzZXJbXCJCUk9OWkVfVVNFUlwiXSA9IFwiQlJPTlpFX1VTRVJcIjtcbn0pKExveWFsdHlVc2VyIHx8IChleHBvcnRzLkxveWFsdHlVc2VyID0gTG95YWx0eVVzZXIgPSB7fSkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdldFRvcFR3b1Jldmlld3MgPSBleHBvcnRzLm1ha2VNdWx0aXBsZSA9IGV4cG9ydHMuc2hvd0RldGFpbHMgPSBleHBvcnRzLnBvcHVsYXRlVXNlciA9IGV4cG9ydHMuc2hvd1Jldmlld1RvdGFsID0gdm9pZCAwO1xuY29uc3QgZW51bXNfMSA9IHJlcXVpcmUoXCIuL2VudW1zXCIpO1xuY29uc3QgcmV2aWV3VG90YWxEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZXZpZXdzXCIpO1xuY29uc3QgcmV0dXJuaW5nVXNlckRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JldHVybmluZy11c2VyXCIpO1xuY29uc3QgdXNlck5hbWVEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1c2VyXCIpO1xuZnVuY3Rpb24gc2hvd1Jldmlld1RvdGFsKHZhbHVlLCByZXZpZXdlciwgaXNMb3lhbHR5KSB7XG4gICAgY29uc3QgaWNvbkRpc3BsYXkgPSBlbnVtc18xLkxveWFsdHlVc2VyLkdPTERfVVNFUiA/IFwi4q2QXCIgOiBcIlwiO1xuICAgIHJldmlld1RvdGFsRGlzcGxheS5pbm5lckhUTUwgPVxuICAgICAgICB2YWx1ZS50b1N0cmluZygpICtcbiAgICAgICAgICAgIFwiIHJldmlld1wiICtcbiAgICAgICAgICAgIG1ha2VNdWx0aXBsZSh2YWx1ZSkgK1xuICAgICAgICAgICAgXCIgfCBsYXN0IHJldmlld2VkIGJ5IFwiICtcbiAgICAgICAgICAgIHJldmlld2VyICtcbiAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgIGljb25EaXNwbGF5O1xufVxuZXhwb3J0cy5zaG93UmV2aWV3VG90YWwgPSBzaG93UmV2aWV3VG90YWw7XG5mdW5jdGlvbiBwb3B1bGF0ZVVzZXIoaXNSZXR1cm5pbmcsIHVzZXJOYW1lKSB7XG4gICAgaWYgKGlzUmV0dXJuaW5nID09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuaW5nVXNlckRpc3BsYXkuaW5uZXJIVE1MID0gXCJiYWNrXCI7XG4gICAgfVxuICAgIHVzZXJOYW1lRGlzcGxheS5pbm5lckhUTUwgPSB1c2VyTmFtZTtcbn1cbmV4cG9ydHMucG9wdWxhdGVVc2VyID0gcG9wdWxhdGVVc2VyO1xuZnVuY3Rpb24gc2hvd0RldGFpbHModmFsdWUsIGVsZW1lbnQsIHByaWNlKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHByaWNlRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByaWNlRGlzcGxheS5pbm5lckhUTUwgPSBwcmljZS50b1N0cmluZygpICsgXCIvbmlnaHRcIjtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChwcmljZURpc3BsYXkpO1xuICAgIH1cbn1cbmV4cG9ydHMuc2hvd0RldGFpbHMgPSBzaG93RGV0YWlscztcbmZ1bmN0aW9uIG1ha2VNdWx0aXBsZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA+IDEgfHwgdmFsdWUgPT0gMCkge1xuICAgICAgICByZXR1cm4gXCJzXCI7XG4gICAgfVxuICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIFwiXCI7XG59XG5leHBvcnRzLm1ha2VNdWx0aXBsZSA9IG1ha2VNdWx0aXBsZTtcbmZ1bmN0aW9uIGdldFRvcFR3b1Jldmlld3MocmV2aWV3cykge1xuICAgIGNvbnN0IHNvcnRlZFJldmlld3MgPSByZXZpZXdzLnNvcnQoKGEsIGIpID0+IGIuc3RhcnMgLSBhLnN0YXJzKTtcbiAgICByZXR1cm4gc29ydGVkUmV2aWV3cy5zbGljZSgwLCAyKTtcbn1cbmV4cG9ydHMuZ2V0VG9wVHdvUmV2aWV3cyA9IGdldFRvcFR3b1Jldmlld3M7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5jb25zdCBlbnVtc18xID0gcmVxdWlyZShcIi4vZW51bXNcIik7XG5jb25zdCBwcm9wZXJ0eUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvcGVydGllc1wiKTtcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9vdGVyXCIpO1xuY29uc3QgcmV2aWV3Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJldmlld3MnKTtcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xubGV0IGlzTG9nZ2VkSW47XG4vL1Jldmlld3NcbmNvbnN0IHJldmlld3MgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiBcIlNoZWlhXCIsXG4gICAgICAgIHN0YXJzOiA1LFxuICAgICAgICBsb3lhbHR5VXNlcjogZW51bXNfMS5Mb3lhbHR5VXNlci5HT0xEX1VTRVIsXG4gICAgICAgIGRhdGU6IFwiMDEtMDQtMjAyMVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkFuZHJ6ZWpcIixcbiAgICAgICAgc3RhcnM6IDMsXG4gICAgICAgIGxveWFsdHlVc2VyOiBlbnVtc18xLkxveWFsdHlVc2VyLkJST05aRV9VU0VSLFxuICAgICAgICBkYXRlOiBcIjI4LTAzLTIwMjFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJPbWFyXCIsXG4gICAgICAgIHN0YXJzOiA0LFxuICAgICAgICBsb3lhbHR5VXNlcjogZW51bXNfMS5Mb3lhbHR5VXNlci5TSUxWRVJfVVNFUixcbiAgICAgICAgZGF0ZTogXCIyNy0wMy0yMDIxXCIsXG4gICAgfSxcbl07XG4vL1VzZXJcbmNvbnN0IHlvdSA9IHtcbiAgICBmaXJzdE5hbWU6IFwiQm9iYnlcIixcbiAgICBsYXN0TmFtZTogXCJCcm93blwiLFxuICAgIHBlcm1pc3Npb25zOiBlbnVtc18xLlBlcm1pc3Npb25zLkFETUlOLFxuICAgIGlzUmV0dXJuaW5nOiB0cnVlLFxuICAgIGFnZTogMzUsXG4gICAgc3RheWVkQXQ6IFtcImZsb3JpZGEtaG9tZVwiLCBcIm9tYW4tZmxhdFwiLCBcInRva3lvLWJ1bmdhbG93XCJdLFxufTtcbi8vUHJvcGVydGllc1xuY29uc3QgcHJvcGVydGllcyA9IFtcbiAgICB7XG4gICAgICAgIGltYWdlOiBcImltYWdlcy9SdXN0ZW5idXJnLWxvZGdlLmpwZ1wiLFxuICAgICAgICB0aXRsZTogXCJSdXN0ZW5idXJnIExvZGdlXCIsXG4gICAgICAgIHByaWNlOiA1MDAsXG4gICAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgICAgICBmaXJzdGxpbmU6IFwiQnVpbGRpbmcgNDhcIixcbiAgICAgICAgICAgIGNpdHk6IFwiUnVzdGVuYnVyZ1wiLFxuICAgICAgICAgICAgY29kZTogMzIyLFxuICAgICAgICAgICAgY291bnRyeTogXCJTb3V0aCBBZnJpY2FcIixcbiAgICAgICAgfSxcbiAgICAgICAgY29udGFjdDogWysyNzE0NTE4MDE0NCwgXCJkYXZpZGdlbmFyb0BnbWFpbC5jb21cIl0sXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbWFnZTogXCJpbWFnZXMvSm9oYW5uZXNidXJnLWhvdGVsLmpwZ1wiLFxuICAgICAgICB0aXRsZTogXCJKb2hhbm5lc2J1cmcgSG90ZWxcIixcbiAgICAgICAgcHJpY2U6IDQ4MDAsXG4gICAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgICAgICBmaXJzdGxpbmU6IFwiU3VpdGUgMjZcIixcbiAgICAgICAgICAgIGNpdHk6IFwiSm9oYW5uZXNidXJnXCIsXG4gICAgICAgICAgICBjb2RlOiAyMTExLFxuICAgICAgICAgICAgY291bnRyeTogXCJTb3V0aCBBZnJpY2FcIixcbiAgICAgICAgfSxcbiAgICAgICAgY29udGFjdDogWysyNzExNTE4MDE0NCwgXCJzdWZmb2NhdGVuZGxvdnVAZ21haWwuY29tXCJdLFxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW1hZ2U6IFwiaW1hZ2VzL1J1c3RlbmJ1cmctcmVzb3J0LmpwZ1wiLFxuICAgICAgICB0aXRsZTogXCJSdXN0ZW5idXJnIFJlc29ydFwiLFxuICAgICAgICBwcmljZTogOTAwLFxuICAgICAgICBsb2NhdGlvbjoge1xuICAgICAgICAgICAgZmlyc3RsaW5lOiBcIlBpbGFuZXNidXJnIHJvYWRcIixcbiAgICAgICAgICAgIGNpdHk6IFwiUnVzdGVuYnVyZ1wiLFxuICAgICAgICAgICAgY29kZTogMzIyLFxuICAgICAgICAgICAgY291bnRyeTogXCJTb3V0aCBBZnJpY2FcIixcbiAgICAgICAgfSxcbiAgICAgICAgY29udGFjdDogWysyNzE0NDExMDE0NCwgXCJ0YXVtb2dhbGVAZ21haWwuY29tXCJdLFxuICAgICAgICBpc0F2YWlsYWJsZTogZmFsc2UsXG4gICAgfSxcbl07XG4vL0Z1bmN0aW9uc1xuKDAsIHV0aWxzXzEuc2hvd1Jldmlld1RvdGFsKShyZXZpZXdzLmxlbmd0aCwgcmV2aWV3c1swXS5uYW1lLCByZXZpZXdzWzBdLmxveWFsdHlVc2VyKTtcbigwLCB1dGlsc18xLnBvcHVsYXRlVXNlcikoeW91LmlzUmV0dXJuaW5nLCB5b3UuZmlyc3ROYW1lKTtcbi8vQWRkIHRoZSBwcm9wZXJ0aWVzXG5mb3IgKGxldCBpID0gMDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICAgIGNhcmQuaW5uZXJIVE1MID0gcHJvcGVydGllc1tpXS50aXRsZTtcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIHByb3BlcnRpZXNbaV0uaW1hZ2UpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgICgwLCB1dGlsc18xLnNob3dEZXRhaWxzKSh5b3UucGVybWlzc2lvbnMsIGNhcmQsIHByb3BlcnRpZXNbaV0ucHJpY2UpO1xuICAgIHByb3BlcnR5Q29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xufVxubGV0IGNvdW50ID0gMDtcbmZ1bmN0aW9uIGFkZFJldmlld3MoYXJyYXkpIHtcbiAgICBpZiAoIWNvdW50KSB7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIGNvbnN0IHRvcFR3byA9ICgwLCB1dGlsc18xLmdldFRvcFR3b1Jldmlld3MpKGFycmF5KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3BUd28ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwicmV2aWV3LWNhcmRcIik7XG4gICAgICAgICAgICBjYXJkLmlubmVySFRNTCA9IHRvcFR3b1tpXS5zdGFycyArIFwiIHN0YXJzIGZyb20gXCIgKyB0b3BUd29baV0ubmFtZTtcbiAgICAgICAgICAgIHJldmlld0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICAgICAgfVxuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoYnV0dG9uKTtcbiAgICB9XG59XG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBhZGRSZXZpZXdzKHJldmlld3MpKTtcbmxldCBjdXJyZW50TG9jYXRpb24gPSBbXCJSdXN0ZW5idXJnXCIsIFwiMDk6MTlcIiwgMTRdO1xuZm9vdGVyLmlubmVySFRNTCA9XG4gICAgY3VycmVudExvY2F0aW9uWzBdICtcbiAgICAgICAgXCIgXCIgK1xuICAgICAgICBjdXJyZW50TG9jYXRpb25bMV0gK1xuICAgICAgICBcIiBcIiArXG4gICAgICAgIGN1cnJlbnRMb2NhdGlvblsyXSArXG4gICAgICAgIFwiwrBcIjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==