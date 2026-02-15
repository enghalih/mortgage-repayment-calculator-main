```markdown
# Frontend Mentor - Mortgage repayment calculator solution

This is a solution to the [Mortgage repayment calculator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-Galx1LXK73).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Input mortgage information and see monthly repayment and total repayment amounts after submitting the form
- See form validation messages if any field is incomplete
- Complete the form only using their keyboard
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [https://github.com/enghalih/mortgage-repayment-calculator](https://github.com/enghalih/mortgage-repayment-calculator)
- Live Site URL: [https://enghalih.github.io/mortgage-repayment-calculator/](https://enghalih.github.io/mortgage-repayment-calculator/)

## My process

### Built with

- Semantic HTML5 markup
- CSS Custom Properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - For styles

### What I learned

During this project, I focused on handling form state efficiently in React and implementing custom validation logic.

```js
const calculateMortgage = (amount, term, rate, type) => {
  const monthlyRate = rate / 100 / 12;
  const numberOfPayments = term * 12;
  // Calculation logic here...
}
```

### Continued development

In future projects, I want to explore more complex form management libraries like React Hook Form to handle validation more declaratively and improve performance in larger applications.

### AI Collaboration

I used AI tools to help streamline the development process:
- **GitHub Copilot**: Assisted with generating boilerplate for the calculation logic and repetitive JSX structures.
- **ChatGPT**: Helped debug specific CSS layout issues regarding the alignment of input icons within the form fields.

## Author

- Frontend Mentor - [@enghalih](https://www.frontendmentor.io/profile/enghalih)
- Github - [@enghalih](https://github.com/enghalih)
- Linkedin - [Wenning Ghalih](https://www.linkedin.com/in/enghalih/)