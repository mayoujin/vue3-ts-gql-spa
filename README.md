# VueJS 3 SPA code sample project

## Core Technologies

### Framework and PL
- [VueJS 3](https://v3.vuejs.org/) with [JSX templates](https://www.npmjs.com/package/@vue/babel-plugin-jsx)
- [TypeScript](https://www.typescriptlang.org/) for typechecking
- [GraphQL Code Generator](https://graphql-code-generator.com/) – automated TypeScript types generator from GraphQL API schema and operations for build-time typechecking
- [GraphQL](https://graphql.org/) Frontend API
- [Apollo 3 GraphQL Client](https://www.apollographql.com/)

### Infrastructure
- [Vue CLI](https://cli.vuejs.org/)
- 📦 Bundler: [Webpack 4](https://webpack.js.org/)
- Code Linting: [TS StandardX](https://standardjs.com/)

### Tests
- [Cypress](https://www.cypress.io/) E2E tests
- Unit Tests: [Vue Test Utils](https://github.com/vuejs/vue-test-utils-next) + [Vue Jest](https://github.com/vuejs/vue-jest/tree/v3)
- [Storybook](https://storybook.js.org/)

### Styles
- :bar_chart: CSS: [PostCSS](https://postcss.org/)
- :triangular_ruler: CSS utility Framework: [Tailwindcss](https://tailwindcss.com/)
- :bar_chart: [BEM Css Modules](https://postcss.org/), [Reshadow](https://reshadow.dev/)

## Project Core Folder Structure
```bash
.
├── .webpack                # – webpack config overrides and extensions
│   └── ...
├── src
│   ├── .boot               # - vue app instance, plugins configure and boot scripts
│   ├── @app                # - app core components and logic folder
│   │   ├── components      # - app components
│   │   │    ├── menus
│   │   │    ├── layouts
│   │   │    └── routes.ts   # – app basic routes config
|   |   └── pages
│   ├── @modules            # – modules folder
│   │   ├── common          # – common app pages and widgets folder (About, Home, Contacts etc.)
│   │   │    ├── components
│   │   │    |── pages
│   │   │    └── routes.ts  # – common routes config
│   │   └── r-n-m
│   │       ├── api
│   │       ├── components
│   │       ├── composable
│   │       ├── pages
│   │       ├── services    # - module services
│   │       ├── store       # - module local state manager extnnsions
│   │       |── types       # - module extra types
│   │       └── index.ts
│   │       └── routes.ts
│   ├── @ui                 # – common reusable ui in atomic design (atoms, molecules, organisms)
│   ├── api                 # – api client logic
│   ├── css                 # – global / common css styles
│   ├── composable
│   ├── plugins             # - vue plugins
│   ├── router              # - vue router
│   ├── store               # - local state manager
│   ├── services            # - local state manager
│   ├── tools
│   ├── utils
│   ├── i18n                # - i18n files
│   └── types               # - common / global types
├── tests
│   ├── e2e
│   └── unit


...
└── README.md
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm serve
```

### Compiles and minifies for production
```
npm build
```

### Lints and fixes files
```
npm lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
