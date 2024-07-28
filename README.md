# Frontend Mentor - Testimonials grid section solution

This is a solution to the [Testimonials grid section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- View the optimal layout for the site depending on their device's screen size

### Screenshot

mobile<br>
<img src="https://github.com/DarrickFauvel/fem2407-testimonials-grid-section-next/blob/main/screenshot-mobile.png?raw=true" width="200" />
<br>
tablet<br>
<img src="https://github.com/DarrickFauvel/fem2407-testimonials-grid-section-next/blob/main/screenshot-tablet.png?raw=true" width="300" />
<br>
desktop<br>
<img src="https://github.com/DarrickFauvel/fem2407-testimonials-grid-section-next/blob/main/screenshot-desktop.png?raw=true" width="400" />

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/testimonials-grid-section---tailwind-css-nextjs-BpGt_2Td9I](https://www.frontendmentor.io/solutions/testimonials-grid-section---tailwind-css-nextjs-BpGt_2Td9I)
- Live Site URL: [https://fem2407-testimonials-grid-section-next.vercel.app/](https://fem2407-testimonials-grid-section-next.vercel.app/)

## My process

### Built with

- Mobile-first workflow
- Semantic HTML5 markup
- CSS custom properties
- CSS grid
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - For styles

### What I learned

This time I added the project fonts and colors directly into the Tailwind configuration file.

```javascript
// tailwind.config.ts
const config: Config = {
  ...
  theme: {
    extend: {
      fontSize: {
        ["fem-11px"]: "0.688rem",
        ["fem-13px"]: "0.813rem",
        ["fem-20px"]: "1.25rem",
        ["fem-28px"]: "1.75rem",
      },
      colors: {
        ["fem-blue-violet"]: "#733FC8",
        ["fem-tropical-indigo"]: "#A775F1",
        ["fem-paynes-gray"]: "#48556A",
        ["fem-white-smoke"]: "#F2F2F2",
      },
    },
  },
  ...
}
```

### Continued development

Maybe I could add some slight animation or transition effects.

### Useful resources

- [MDN - CSS :nth-child()](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child)
- [MDN - CSS grid-template-areas](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas)
- [MDN - CSS grid-area](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area)

## Author

- Frontend Mentor - [@DarrickFauvel](https://www.frontendmentor.io/profile/DarrickFauvel)
- LinkedIn - [Darrick Fauvel](https://www.linkedin.com/in/darrickfauvel/)
