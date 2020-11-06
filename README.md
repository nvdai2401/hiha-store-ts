# HiHa Store TypeScript

- Intro app: ref to hiha
- Intro frontend architecture
  - Module
  - SCSS
- Technique:
  - Like hiha
  - web font
- Todo
  - Safer type
  - features
  - Backend
  - Tests
- Installation guide
- Require
- Pic

# Front-end architecture

Modern front-end frameworks and libraries make it easy to create reusable UI components. This is a step in a good direction to create maintainable front-end applications. Yet, in many projects over the years I have found that making reusable components is often not enough. My projects became unmaintainable, as requirements changed or new requirements came up. It took longer and longer to find the correct file or debug something across many files.

Change needed to happen. I can improve my search skills, or be more proficient in using Visual Studio Code. But, I often not the only one working on the front-end. So, we need to the setup of our front-end projects. We need to make them maintainable and scalable. This means that we can apply changes in the current features, but also add new features quicker.

## Finding a scalable architecture

In traditional development, we have many [architectural patterns](https://en.wikipedia.org/wiki/Software_design_pattern) we can follow. Two of them that are still popular are [domain-driven development (DDD)](https://martinfowler.com/bliki/BoundedContext.html) and [separation of concerns (SoC)](https://en.wikipedia.org/wiki/Separation_of_concerns). In front-end development, they too can be of great value. With DDD you try to groups of similar features and decouple them as much as possible from other groups (e.g. modules). While with SoC we, for instance, separate logic, views, and data-models (e.g. using the MVC or MVVM design pattern).

We expect modern front-end applications to do more and more of the heavy lifting. With this added complexity, bugs are becoming more frequent. We need a reliable architecture, that is both maintainable and scalable. My goal was, and still is, to find such a front-end architecture which is framework-agnostic. The architecture should provide a developer or a team to build a scalable front-end. By adopting the architecture (e.g. remove parts), you can adapt it to small and big projects.

<p align="center"><img src="/images/architecture-high-level.png" /></p>

## Filling in the details

```
src/
├── assets/        // e.g. svg, fonts
├── common/        // commons in the app: icons, layouts, pages, routes,...
├── components/    // generic reusable UI components
├── config/        // configurations for different builds
├── constants/     // holds constants and static data
├── core/          // the backbone of the app
├── utils/         // generic JavaScript helper functions
├── hooks/         // custom hooks, such as: routes, state
├── modules/       //
└── styles/        // styles of the app. E.g: settings, components, tools,...
```

## The application backbone

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

- The `api` directory contains APIs to interact with server
- The `config` directory holds configurations of the core layer, such as: firebase, history,...
- The `store` directory is the application state. It contains store configuration, root reducer and root saga
- The `worker` directory include web workers for the heavy lifting

## Modules, modules & more modules

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
- The `state` directory keeps state of the module. It contains reducer, actions, sagas and selectors.

## CSS architecture

> When we work at scale, we often find that we spend a large amount of our time reading, maintaining, and refactoring existing code, rather than writing and adding new features.

The `styles` directory holds all the CSS files. I prefer [BEMIT Architecture(BEM + ITCSS)](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/) that's a scalable and maintainable CSS architecture.

- Settings – used with preprocessors and contain font, colors definitions, etc.
- Tools – globally used mixins and functions. It’s important not to output any CSS in the first 2 layers.
- Generic – reset and/or normalize styles, box-sizing definition, etc. This is the first layer which generates actual CSS.
- Elements – styling for bare HTML elements (like H1, A, etc.). These come with default styling from the browser so we can redefine them here.
- Objects – class-based selectors which define undecorated design patterns, for example media object known from OOCSS
- Components – specific UI components. This is where the majority of our work takes place and our UI components are often composed of Objects and Components
- Utilities – utilities and helper classes with ability to override anything which goes before in the triangle, eg. hide helper class

  <p align="center"><img src="/images/itcss-layers.png" /></p>

# Requirements

- [node 10+](https://nodejs.org/en/)
- [TypeScript 3.8+](https://www.typescriptlang.org/)

# Tech stack

- Language: Typescript
- Library: React, React-router, Redux, Redux-saga, React Hooks, Reselect
- Styles: SCSS
- Tools: Firebase, Docker, [ImageKit](https://imagekit.io/)

# Installation guide

1. Download zip file or type this command into your terminal `git clone git@github.com:nvdai2401/hiha-store-ts.git`
2. Run `yarn` to install essential dependencies
3. Run `yarn start` to start the web app. The app will run at `localhost:3003`

# Todo list

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

# Demo
