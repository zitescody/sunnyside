# sunnyside
Sunnyside landing page from Frontend Mentor


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- Interact with responsive menu
- See hover transform

### Screenshot



### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScipt


### What I learned

I learned how to declare variables in css to make assigning values to certain classes more efficient. I also learned how to create a simple, responisve mobile-first navbar

```css
:root {
    /*color palette*/
    --softred: hsl(7, 99%, 70%);
    --yellow: hsl(51, 100%, 49%);
    --darkdesaturatedcyan: hsl(167, 40%, 24%); /*graphic design*/
    --darkblue: hsl(198, 62%, 26%); /*photography*/
    --darkmoderatecyan: hsl(168, 34%, 41%); /*footer*/

    --verydarkdesaturatedblue: hsl(212, 27%, 19%);
    --verydarkgrayishblue: hsl(213, 9%, 39%);
    --darkgrayishblue: hsl(232, 10%, 55%);
    --grayishblue: hsl(210, 4%, 67%);
    --white: hsl(0, 0%, 100%);

    /*fonts*/
    --barlow: 'Barlow', sans-serif;
    --barlowSemiBold: 600;

    --fraunces: 'Fraunces', serif;
    --fraucesBold: 700;
    --frauncesBlack: 900;

    /*font styles*/
    --title: var(--fraunces);
    --sectionHead: var(--fraunces);
    --subSectionHead: var(--fraunces);
    --content: var(--barlow);
    --name: var(--fraunces);
    --jobTitle: var(--barlow);

    /*font size*/
    --titleSize: 36pt;
    --sectionHeadSize: 18pt;
    --subSectionHeadSize: 16pt;
    --contentSize: 14pt;
    --nameSize: 14pt;
    --jobTitleSize: 12pt;

    /*font weights*/
    --titleWeight: var(--frauncesBlack);
    --sectionHeadWeight: var(--fraucesBold);
    --subSectionHeadWeight: var(--fraucesBold);
    --contentWeight: var(--barlowSemiBold);
    --nameWeight: var(--fraucesBold);
    --jobTitleWeight: var(--barlowSemiBold);

    /*font color*/
    --titleColor: var(--white);
    --sectionHeadColor: var(--verydarkdesaturatedblue);
    --subSectionHeadColor: var(--grayishblue);
    --contentColor: var(--verydarkgrayishblue);
    --nameColor: var(--verydarkdesaturatedblue);
    --jobTitleColor: var(--grayishblue);
}
```
```js
//toggle navbar on a mobile orientation
const navToggle = document.querySelector(".hamburger-container");
const links = document.querySelector(".main-nav");

navToggle.addEventListener('click', function(){
    links.classList.toggle("show-nav");
})
```


### Continued development
I want to further develop my skills with navbar creation with javascript


### Useful resources

- [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) - CSS Grid optimization.
- [Background Images](https://stackoverflow.com/questions/18339549/floating-div-over-an-image) - Background image optimization
- [Responsive Navbar](https://blog.devgenius.io/create-a-responsive-navigation-bar-in-html-css-and-js-4648ce90fd6c) - Responsive Navbar


## Author

- Website - [Cody Zites](https://github.com/zitescody)
- Frontend Mentor - [@zitescody](https://www.frontendmentor.io/profile/zitescody)
