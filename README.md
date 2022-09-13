# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview
An interactive rating card implemented with Flexbox and basic Javascript.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Solution URL: (https://github.com/carolb92/interactive-rating-component)
- Live Site URL: (https://carolb92.github.io/interactive-rating-component/)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla Javascript

### What I learned

I learned about the CSS pseudo class :focus, which I was unaware of before this challenge. 

I also got great practice making interactive buttons and adding an event listener to an array (I guess technically a node list) of buttons.

```js
const buttons = document.querySelectorAll("button.number");

buttons.forEach(button => {
    button.addEventListener("click", e => {
        let selection = e.target.value;
        return selectionText.innerText = `You selected ${selection} out of 5`;
        
    });
});
}
```

### Continued development

Will need to continue building up my JavaScript skillset.


## Author

- Website - [Carol Bruggeman](https://github.com/carolb92)
- Frontend Mentor - [@carolb92](https://www.frontendmentor.io/profile/carolb92)

