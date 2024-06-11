/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!******************!*\
  !*** ./index.ts ***!
  \******************/

// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to
// all TypeScript weakness flags.
// : number
const reviewTotalDisplay = document.querySelector("#reviews");
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
function showReviewTotal(value) {
    reviewTotalDisplay.innerHTML = "review total " + value.toString();
}
showReviewTotal(reviews.length);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgucGFjay5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsc0NBQXNDO0FBQ3RDLCtEQUErRDtBQUMvRCxpQ0FBaUM7QUFDakMsV0FBVztBQUNYLE1BQU0sa0JBQWtCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQWdCO0FBRTVFLE1BQU0sT0FBTyxHQUFHO0lBQ2Q7UUFDRSxJQUFJLEVBQUUsT0FBTztRQUNiLEtBQUssRUFBRSxDQUFDO1FBQ1IsV0FBVyxFQUFFLElBQUk7UUFDakIsSUFBSSxFQUFFLFlBQVk7S0FDbkI7SUFDRDtRQUNFLElBQUksRUFBRSxTQUFTO1FBQ2YsS0FBSyxFQUFFLENBQUM7UUFDUixXQUFXLEVBQUUsS0FBSztRQUNsQixJQUFJLEVBQUUsWUFBWTtLQUNuQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLE1BQU07UUFDWixLQUFLLEVBQUUsQ0FBQztRQUNSLFdBQVcsRUFBRSxJQUFJO1FBQ2pCLElBQUksRUFBRSxZQUFZO0tBQ25CO0NBQ0YsQ0FBQztBQUVGLFNBQVMsZUFBZSxDQUFDLEtBQWE7SUFDcEMsa0JBQWtCLENBQUMsU0FBUyxHQUFHLGVBQWUsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDcEUsQ0FBQztBQUVELGVBQWUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0Ly4vaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTnVtYmVyIFR5cGVzIG1pbmktY2hhbGxlbmdlIDEwIDEwLjJcclxuLy8gV3JpdGUgYSBmdW5jdGlvbiB0aGF0IHdpbGwgb25seSBhY2NlcHQgbnVtYmVycyBhbmQgYXR0ZW5kIHRvXHJcbi8vIGFsbCBUeXBlU2NyaXB0IHdlYWtuZXNzIGZsYWdzLlxyXG4vLyA6IG51bWJlclxyXG5jb25zdCByZXZpZXdUb3RhbERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jldmlld3NcIikgYXMgSFRNTEVsZW1lbnRcclxuXHJcbmNvbnN0IHJldmlld3MgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJTaGVpYVwiLFxyXG4gICAgc3RhcnM6IDUsXHJcbiAgICBsb3lhbHR5VXNlcjogdHJ1ZSxcclxuICAgIGRhdGU6IFwiMDEtMDQtMjAyMVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJBbmRyemVqXCIsXHJcbiAgICBzdGFyczogMyxcclxuICAgIGxveWFsdHlVc2VyOiBmYWxzZSxcclxuICAgIGRhdGU6IFwiMjgtMDMtMjAyMVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJPbWFyXCIsXHJcbiAgICBzdGFyczogNCxcclxuICAgIGxveWFsdHlVc2VyOiB0cnVlLFxyXG4gICAgZGF0ZTogXCIyNy0wMy0yMDIxXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmZ1bmN0aW9uIHNob3dSZXZpZXdUb3RhbCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgcmV2aWV3VG90YWxEaXNwbGF5LmlubmVySFRNTCA9IFwicmV2aWV3IHRvdGFsIFwiICsgdmFsdWUudG9TdHJpbmcoKTtcclxufVxyXG5cclxuc2hvd1Jldmlld1RvdGFsKHJldmlld3MubGVuZ3RoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9