# VueJS 3 SPA code sample project

## Used Technologies

### Core
- [VueJS 3](https://v3.vuejs.org/) with [JSX templates](https://www.npmjs.com/package/@vue/babel-plugin-jsx)
- [TypeScript](https://www.typescriptlang.org/) for typechecking
- [GraphQL Code Generator](https://graphql-code-generator.com/) – automated TypeScript types generator from GraphQL API schema and operations for build-time typechecking
- [GraphQL API](https://rickandmortyapi.com/graphql) – Frontend API provider
- [Apollo 3 GraphQL Client](https://www.apollographql.com/) - Frontend API client and API cache manager
- [Apollo 3 Local State](https://www.apollographql.com/docs/react/local-state/local-state-management/) - Local state management

### Infrastructure
- [Vue CLI 5](https://cli.vuejs.org/)
- 📦 Bundler: [Webpack 5](https://webpack.js.org/)
- Code Linting: [TS StandardX](https://standardjs.com/)

### Tests
- [Jest](http://jestjs.io/) + [Vue Test Utils](https://github.com/vuejs/vue-test-utils-next) + [Vue Jest](https://github.com/vuejs/vue-jest/tree/v3) – Unit Tests

### Styles
- :bar_chart: [PostCSS](https://postcss.org/)
- :triangular_ruler: [Tailwindcss](https://tailwindcss.com/) – CSS utility Framework
- :bar_chart: [BEM Css Modules](https://postcss.org/), [Reshadow](https://reshadow.dev/) – Isolated Css-Moules-based styles management

## Project Core Folder Structure
```bash
.
├── .github                 # – github workflows
├── .webpack                # – webpack config overrides and extensions
├── .jest                   # – jest config overrides and extensions
├── dist                    # – app build catalog
├── public
├── src
│   ├── .boot               # - vue app instance, plugins configure and boot scripts
│   ├── @app                # - app core components and logic folder
│   │   ├── components      # - app components
│   │   │    ├── layouts
│   │   │    └── organisms
│   │   ├── App.vue         # - base app component
│   │   └── routes.ts       # – app basic routes config
│   │
│   ├── @modules            # – modules folder
│   │   ├── common          # – common app pages and widgets folder (About, Home, Contacts etc.)
│   │   │    ├── components
│   │   │    |── pages
│   │   │    └── routes.ts  # – common routes config
│   │   └── r-n-m
│   │       ├── api
│   │       ├── components  # - module components
│   │       ├── composable  # - module composables
│   │       ├── pages
│   │       ├── services    # - module services
│   │       ├── store       # - module local state manager extensions
│   │       |── types       # - module extra types
│   │       └── index.ts
│   │       └── routes.ts
│   │── @types              # - common / global types
│   ├── @ui                 # – common reusable ui in atomic design (atoms, molecules, organisms)
│   ├── api                 # – api client logic
│   ├── composable          # – global / common css styles
│   ├── router              # - vue router
│   ├── store               # - local state manager
│   ├── services            # - common services
│   ├── css                 # – global / common css styles
│   ├── i18n                # - i18n files
│   ├── plugins             # - vue plugins
│   ├── tools               # - common tools
│   ├── utils               # - common utils
│   └── types               # - common / global types
│
├── tests
│   ├── e2e
│   └── unit
...
├── codegen.yml             # - graphql codegen config
├── tailwind.config.js
├── tsconfig.config.js
├── vue.config.js
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

