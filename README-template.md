# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned

Found an easy way to add pictures to the web page:

```html
<div class="egg" />
```

```css
.egg {
    background: url(./images/desktop/image-transform.jpg), no-repeat;
    background-size: cover;
    background-position: center;
}
```

Dynamic adding style classes to an html element using JS and DOM api
```js
const fstButton = document.getElementById('fstButton');
const fstHighlight = document.getElementById('fstHighlight');

fstButton.addEventListener('click', () => {
    fstHighlight.classList.add('highlighted');
    fstHighlight.classList.add('yellow');
});
```

## Author

- Website - https://amir837.github.io/sunnyside-Landing-Page-FChallenge/

## Acknowledgments

Thanks to https://github.com/Anish2529 I learnt a lot from his way of solving this problem