# HiHa Store TypeScript

![CI/CD](https://github.com/nvdai2401/hiha-store-ts/workflows/CI/CD/badge.svg)

Visit the store: <https://nvdai2401.github.io/hiha-store-ts>

> HiHa Store is a reliable, scalable and maintainable front-end application. <br>
> Read [the application architecture](/ARCHITECTURE.md) to explore awesome things that makes the application reliable, scalable and maintainable.

HiHa Store TypeScript is a big upgrade version of [HiHa Store JavaScript](https://github.com/nvdai2401/hiha-store). I built this app to apply [a scalable architecture](/ARCHITECTURE.md) and experiment best practices that I've learnt for one year. You should read the [HiHa Store JavaScript](https://github.com/nvdai2401/hiha-store) firstly and then explore this application codebase to see the magic behind the scene.

## Requirements

- [node 12+](https://nodejs.org/en/)
- [TypeScript 3.8+](https://www.typescriptlang.org/)

## Techniques

- Splitting code by route using React Lazy API to decrease the bundle size of each route
- Use [Critical FOFT with Data URI](https://www.zachleat.com/web/comprehensive-webfonts/#critical-foft-with-data-uri) for web font with sessionStorage trick for repeat view optimization
- Persist and reselect data of Redux store to decrease request and rerender times
- Use lazy loading image with [Dominant Color Placeholder](https://css-tricks.com/the-complete-guide-to-lazy-loading-images/) by scaling down the image to down to a 1×1 pixel and then scaling it up to the size of the placeholder

## Tech stack

- Language: Typescript
- Library: React, React-router, Redux, Redux-saga, Reselect, Redux-persist
- Styles: SCSS
- Tools: Firebase, Docker, [ImageKit](https://imagekit.io/)

## Installation guide

1. Download zip file or type this command into your terminal `git clone git@github.com:nvdai2401/hiha-store-ts.git`
2. Run `yarn` to install essential dependencies
3. Run `yarn start` to start the web app. The app will run at `localhost:3003`

## Todo list

- [ ] Add safer type checking for saga, utilities, firebase helpers
- [ ] Develop additional features
  - [ ] Improve product image quality and improve lazy loading image
  - [ ] Notify user when adding a product to cart successfully
  - [ ] Develop product detail page
  - [ ] Use auth token instead of checking firebase session
  - [ ] Improve SEO performance by using SSR and adding meta tags
- [ ] Develop a server to serve this app
- [ ] Write unit tests

## Demo

### Mobile version

<p align="center"><img src="/images/mobile_signinpage.PNG" /></p>
<p align="center"><img src="/images/mobile_userinfopage.PNG" /></p>
<p align="center"><img src="/images/mobile_collectionpage.PNG" /></p>
<p align="center"><img src="/images/mobile_payment.PNG" /></p>

### Desktop version

<p align="center"><img src="/images/desktop_homepage.PNG" /></p>
<p align="center"><img src="/images/desktop_collectionpage.PNG" /></p>
<p align="center"><img src="/images/desktop_checkoutpage.PNG" /></p>
