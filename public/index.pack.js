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
const returningUserDisplay = document.querySelector('#returning-user');
const userNameDisplay = document.querySelector('#user');
const reviewTotalDisplay = document.querySelector('#reviews');
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
function showReviewTotal(value, reviewer, isLoyalty) {
    const iconDisplay = isLoyalty ? "⭐" : "";
    reviewTotalDisplay.innerHTML =
        "review total " +
            value.toString() +
            "| last reviewed by " +
            reviewer +
            " " +
            iconDisplay;
}
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
const you = {
    userName: "Bobby",
    isReturning: true,
};
function populateUser(isReturning, userName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
}
populateUser(you.isReturning, you.userName);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgucGFjay5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsc0NBQXNDO0FBQ3RDLCtEQUErRDtBQUMvRCxpQ0FBaUM7QUFDakMsV0FBVztBQUNYLE1BQU0sb0JBQW9CLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBZ0IsQ0FBQztBQUN0RixNQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBZ0IsQ0FBQztBQUN2RSxNQUFNLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFnQixDQUFDO0FBRTdFLE1BQU0sT0FBTyxHQUFHO0lBQ2Q7UUFDRSxJQUFJLEVBQUUsT0FBTztRQUNiLEtBQUssRUFBRSxDQUFDO1FBQ1IsV0FBVyxFQUFFLElBQUk7UUFDakIsSUFBSSxFQUFFLFlBQVk7S0FDbkI7SUFDRDtRQUNFLElBQUksRUFBRSxTQUFTO1FBQ2YsS0FBSyxFQUFFLENBQUM7UUFDUixXQUFXLEVBQUUsS0FBSztRQUNsQixJQUFJLEVBQUUsWUFBWTtLQUNuQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLE1BQU07UUFDWixLQUFLLEVBQUUsQ0FBQztRQUNSLFdBQVcsRUFBRSxJQUFJO1FBQ2pCLElBQUksRUFBRSxZQUFZO0tBQ25CO0NBQ0YsQ0FBQztBQUVGLFNBQVMsZUFBZSxDQUFDLEtBQWEsRUFBRSxRQUFnQixFQUFFLFNBQWtCO0lBQzFFLE1BQU0sV0FBVyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDekMsa0JBQWtCLENBQUMsU0FBUztRQUMxQixlQUFlO1lBQ2YsS0FBSyxDQUFDLFFBQVEsRUFBRTtZQUNoQixxQkFBcUI7WUFDckIsUUFBUTtZQUNSLEdBQUc7WUFDSCxXQUFXLENBQUM7QUFDaEIsQ0FBQztBQUVELGVBQWUsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRXpFLE1BQU0sR0FBRyxHQUFHO0lBQ1IsUUFBUSxFQUFFLE9BQU87SUFDakIsV0FBVyxFQUFFLElBQUk7Q0FDcEIsQ0FBQztBQUVGLFNBQVMsWUFBWSxDQUFDLFdBQXFCLEVBQUUsUUFBaUI7SUFDNUQsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUNoQixvQkFBb0IsQ0FBQyxTQUFTLEdBQUcsTUFBTTtJQUN6QyxDQUFDO0lBQ0QsZUFBZSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7QUFDdkMsQ0FBQztBQUNELFlBQVksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0Ly4vaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTnVtYmVyIFR5cGVzIG1pbmktY2hhbGxlbmdlIDEwIDEwLjJcclxuLy8gV3JpdGUgYSBmdW5jdGlvbiB0aGF0IHdpbGwgb25seSBhY2NlcHQgbnVtYmVycyBhbmQgYXR0ZW5kIHRvXHJcbi8vIGFsbCBUeXBlU2NyaXB0IHdlYWtuZXNzIGZsYWdzLlxyXG4vLyA6IG51bWJlclxyXG5jb25zdCByZXR1cm5pbmdVc2VyRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXR1cm5pbmctdXNlcicpIGFzIEhUTUxFbGVtZW50O1xyXG5jb25zdCB1c2VyTmFtZURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlcicpIGFzIEhUTUxFbGVtZW50OyBcclxuY29uc3QgcmV2aWV3VG90YWxEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jldmlld3MnKSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbmNvbnN0IHJldmlld3MgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJTaGVpYVwiLFxyXG4gICAgc3RhcnM6IDUsXHJcbiAgICBsb3lhbHR5VXNlcjogdHJ1ZSxcclxuICAgIGRhdGU6IFwiMDEtMDQtMjAyMVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJBbmRyemVqXCIsXHJcbiAgICBzdGFyczogMyxcclxuICAgIGxveWFsdHlVc2VyOiBmYWxzZSxcclxuICAgIGRhdGU6IFwiMjgtMDMtMjAyMVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJPbWFyXCIsXHJcbiAgICBzdGFyczogNCxcclxuICAgIGxveWFsdHlVc2VyOiB0cnVlLFxyXG4gICAgZGF0ZTogXCIyNy0wMy0yMDIxXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmZ1bmN0aW9uIHNob3dSZXZpZXdUb3RhbCh2YWx1ZTogbnVtYmVyLCByZXZpZXdlcjogc3RyaW5nLCBpc0xveWFsdHk6IGJvb2xlYW4pIHtcclxuICBjb25zdCBpY29uRGlzcGxheSA9IGlzTG95YWx0eSA/IFwi4q2QXCIgOiBcIlwiO1xyXG4gIHJldmlld1RvdGFsRGlzcGxheS5pbm5lckhUTUwgPVxyXG4gICAgXCJyZXZpZXcgdG90YWwgXCIgK1xyXG4gICAgdmFsdWUudG9TdHJpbmcoKSArXHJcbiAgICBcInwgbGFzdCByZXZpZXdlZCBieSBcIiArXHJcbiAgICByZXZpZXdlciArXHJcbiAgICBcIiBcIiArXHJcbiAgICBpY29uRGlzcGxheTtcclxufVxyXG5cclxuc2hvd1Jldmlld1RvdGFsKHJldmlld3MubGVuZ3RoLCByZXZpZXdzWzBdLm5hbWUsIHJldmlld3NbMF0ubG95YWx0eVVzZXIpO1xyXG5cclxuY29uc3QgeW91ID0ge1xyXG4gICAgdXNlck5hbWU6IFwiQm9iYnlcIixcclxuICAgIGlzUmV0dXJuaW5nOiB0cnVlLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gcG9wdWxhdGVVc2VyKGlzUmV0dXJuaW5nIDogYm9vbGVhbiwgdXNlck5hbWUgOiBzdHJpbmcpIHtcclxuICBpZiAoaXNSZXR1cm5pbmcpIHtcclxuICAgIHJldHVybmluZ1VzZXJEaXNwbGF5LmlubmVySFRNTCA9ICdiYWNrJ1xyXG4gIH1cclxuICB1c2VyTmFtZURpc3BsYXkuaW5uZXJIVE1MID0gdXNlck5hbWU7XHJcbn1cclxucG9wdWxhdGVVc2VyKHlvdS5pc1JldHVybmluZywgeW91LnVzZXJOYW1lKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==