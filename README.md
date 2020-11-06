# HiHa Store TypeScript

![CI/CD](https://github.com/nvdai2401/hiha-store-ts/workflows/CI/CD/badge.svg)

> HiHa Store is a e-commerce website that allows client buying products easily.

Visit the store: <https://nvdai2401.github.io/hiha-store-ts>

## Front-end architecture

### Why do we need a scalable architecture?

Modern front-end frameworks and libraries make it easy to create reusable UI components. This is a step in a good direction to create maintainable front-end applications. Yet, in many projects over my career, I have found that making reusable components is often not enough. My projects became unmaintainable, as requirements changed or new requirements came up. It took longer and longer to find the correct file or debug something across many files.

Change needed to happen. I can improve my search skills, or be more proficient in using Visual Studio Code. But, I often not the only one working on the front-end. So, we need to the setup of our front-end projects. We need to make them maintainable and scalable. This means that we can apply changes in the current features, but also add new features quicker.

### Finding a scalable architecture

In traditional development, we have many [architectural patterns](https://en.wikipedia.org/wiki/Software_design_pattern) we can follow. Two of them that are still popular are [domain-driven development (DDD)](https://martinfowler.com/bliki/BoundedContext.html) and [separation of concerns (SoC)](https://en.wikipedia.org/wiki/Separation_of_concerns). In front-end development, they too can be of great value. With DDD you try to groups of similar features and decouple them as much as possible from other groups (e.g. modules). While with SoC we, for instance, separate logic, views, and data-models (e.g. using the MVC or MVVM design pattern).

We expect modern front-end applications to do more and more of the heavy lifting. With this added complexity, bugs are becoming more frequent. We need a reliable architecture, that is both maintainable and scalable. My goal was, and still is, to find such a front-end architecture which is <b>framework-agnostic</b>.

<p align="center"><img src="/images/architecture-high-level.png" /></p>

### A scalable and maintainable front-end architecture

This app is using a [reliable, maintainable and scalable front-end architecture](https://vycke.dev/blog/scalable-front-end-architecture/) base on two architectural patterns [domain-driven development (DDD)](https://martinfowler.com/bliki/BoundedContext.html) and [separation of concerns (SoC)](https://en.wikipedia.org/wiki/Separation_of_concerns). This architecture provides a developer or a team to build a scalable front-end. By adopting the architecture (e.g. remove parts), you can adapt it to small and big projects.

<p align="center"><img src="/images/architecture-detailed.png" /></p>

### The application structure

```
src/
├── assets/        // e.g. svg, fonts
├── common/        // commons in the app: icons, layouts, pages, routes,...
├── components/    // generic reusable UI components
├── config/        // configurations for different builds
├── constants/     // holds constants and static data
├── core/          // the backbone of the app
├── hooks/         // custom hooks, such as: routes, state
├── modules/       // e.g cart, directory,shop, user module
├── styles/        // styles of the app. E.g: settings, components, tools,...
└── utils/         // generic JavaScript helper functions
```

### The application backbone

> The core layer is the backbone of the architecture. The goal of this part of the application is to be scalable and framework-agnostic.

There are a few main parts in this layer:

```
.
└── core/
    ├── api/
    │   ├── firebase/
    │   ├── external-api/
    ├── config/
    ├── store/
    └── workers/
```

- The `api` directory contains APIs to interact with the server
- The `config` directory holds configurations of the core layer, such as firebase, history,...
- The `store` directory is the application state. It contains store configuration, root reducer ,and root saga
- The `worker` directory includes web workers for the heavy lifting

### Modules, modules & more modules

> The structure of a module is inspired by the ideas of MVC and MVVM. This is reflected in the models, actions and pages/components directories. Most times, the application routing points towards a specific module.

The `modules` directory holds all the different modules based on the different identified domains.

```
.
└── modules/
    └── user/
        ├── components/
        ├── config/
        │   ├── routes.ts
        │   └── index.ts
        ├── pages/
        ├── state/
        └── index.ts
```

- The `components` directory contains reusable UI components of the module.
- The `config` directory holds the configurations, such as routes configuration.
- The `pages` directory holds the pages of the module (A page is what a user sees and comprises out of UI components and actions).
- The `state` directory keeps the state of the module. It contains reducer, actions, sagas ,and selectors.

### CSS architecture - More Transparent UI Code with Namespaces

When we work at scale, we often find that we spend a large amount of our time reading, maintaining, and refactoring existing code, rather than writing and adding new features. This is the reason we focus so much on things like architectures, naming conventions, methodologies, preprocessors, scalability, etc.: because writing CSS is easy; looking after it is not.

What we want is to be able to write code that is as transparent and self-documenting as possible. Transparency means that it is clear and obvious (to others) in its intent; self-documenting means that we don’t have to lose time to writing and reading lengthy, supplementary documentation.

> ITCSS stands for Inverted Triangle CSS and it helps you to organize your project CSS files in such a way that you can better deal with (not always easy-to-deal with) CSS specifics like global namespace, cascade and selectors specificity.

In this project, I use [ITCSS Architecture](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/) that's a scalable and maintainable CSS architecture and BEM methodologies for naming convention. ITCSS’s prescriptive nature especially when combined with [BEMIT naming convention](https://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/) allows you to focus more on solving front-end challenges rather than thinking up names and styles location.

<p align="center"><img src="/images/itcss-key-metrics.png" /></p>
The triangle also shows how styles represented by selectors are ordered in the resulting CSS: from generic styles to explicit ones, from low-specificity selectors to more specific ones (but still not too specific, IDs are not allowed) and from far reaching to localized ones.

- Settings – used with preprocessors and contain font, colors definitions, etc.
- Tools – globally used mixins and functions. It’s important not to output any CSS in the first 2 layers.
- Generic – reset and/or normalize styles, box-sizing definition, etc. This is the first layer which generates actual CSS.
- Elements – styling for bare HTML elements (like H1, A, etc.). These come with default styling from the browser so we can redefine them here.
- Objects – class-based selectors which define undecorated design patterns, for example media object known from OOCSS
- Components – specific UI components. This is where the majority of our work takes place and our UI components are often composed of Objects and Components
- Utilities – utilities and helper classes with the ability to override anything which goes before in the triangle, eg. hide helper class

<p align="center"><img src="/images/itcss-layers.png" /></p>

## Requirements

- [node 10+](https://nodejs.org/en/)
- [TypeScript 3.8+](https://www.typescriptlang.org/)

## Techniques

- Splitting code by route using React Lazy API to decrease the bundle size of each route
- Web font: Use [Critical FOFT with Data URI](https://www.zachleat.com/web/comprehensive-webfonts/#critical-foft-with-data-uri) with sessionStorage trick for repeat view optimization
- Persist and reselect data of Redux store to decrease request and rerender times
- Use lazy loading image with [Dominant Color Placeholder](https://css-tricks.com/the-complete-guide-to-lazy-loading-images/) by scaling down the image to down to a 1×1 pixel and then scaling it up to the size of the placeholder

## Tech stack

- Language: Typescript
- Library: React, React-router, Redux, Redux-saga, React Hooks, Reselect
- Styles: SCSS
- Tools: Firebase, Docker, [ImageKit](https://imagekit.io/)

## Installation guide

1. Download zip file or type this command into your terminal `git clone git@github.com:nvdai2401/hiha-store-ts.git`
2. Run `yarn` to install essential dependencies
3. Run `yarn start` to start the web app. The app will run at `localhost:3003`

## Todo list

- [ ] Add safer type checking for saga, utilities, firebase helpers
- [ ] Develop additional features
  - [ ] Integrate cart module to user module
  - [ ] Improve product image quality and improve lazy loading image
  - [ ] Notify user when adding a product to cart successfully
  - [ ] Develop product detail page
  - [ ] Use auth token instead of checking firebase session
  - [ ] Improve SEO performance by using SSR and adding meta tags
- [ ] Develop a server to serve this app
- [ ] Write unit tests

## Resources

- [How to create a scalable and maintainable front-end architecture](https://vycke.dev/blog/scalable-front-end-architecture/)
- [ITCSS: Scalable and Maintainable CSS Architecture](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)
- [More Transparent UI Code with Namespaces](https://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/)
- [BEMIT: Taking the BEM Naming Convention a Step Further](https://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/)
- [A Comprehensive Guide To Font Loading Strategies](https://www.zachleat.com/web/comprehensive-webfonts/#font-face)
- [The Complete Guide to Lazy Loading Images](https://css-tricks.com/the-complete-guide-to-lazy-loading-images/)

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
