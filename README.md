# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz).

## Table of contents

- [Overview](#overview)
- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [Links](#links)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

This is a single-page website that provides answers to FAQs using an accordion layout. Answers are displayed or hidden when the buttons or questions are clicked.

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](</faq-accordion-screenshot(a).png>)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://challenge-accordion-page.netlify.app/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Media queries
- Javascript
- [Bootstrap](https://getbootstrap.com/) - CSS library

### What I learned

This project allowed me to practice using loops in javascript. In order to correctly display/hide the answers to each question when clicked, I looped through each question and made use of the click event listener.

```js
let faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", (event) => {
    event.preventDefault();

    let answer = question.nextElementSibling;
    let toggleSign = question.querySelector(".sign");

    if (answer.style.display === "none" || answer.style.display === "") {
      answer.style.display = "block";
      toggleSign.src = "/assets/images/icon-minus.svg";
    } else {
      answer.style.display = "none";
      toggleSign.src = "/assets/images/icon-plus.svg";
    }
  });
});
```

## Author

- Frontend Mentor - [@PraiseKemi](https://www.frontendmentor.io/profile/PraiseKemi)
