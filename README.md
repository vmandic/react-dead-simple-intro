# ER-REACT101 - DEMO SETUP GUIDE

There are two main parts in this demo setup, those are:
1. **setting up the project and build system**
2. **actually writing react**

## 1. The Setup

1. npm init
    - in project root you will get a `package.json` file
2. install react
    - `$ npm i -S react react-dom`
3. install Babel transpiler
    - a transpiler tool that transforms JSX into JavaScript
    - `$ npm i -D babel-core babel-loader babel-preset-react babel-preset-react`
    - create in project root a `.babelrc` file
        - save the following code inside: `{ presets: ['react'] }`
4. install webpack build tool
    - runs babel for transpilation
    - minifying files, moving files, has a plugin system
    - `$ npm i -D webpack webpack-dev-server html-webpack-plugin`
    - create in project root a `webpack.config.js` file
5. setup webpack with a basic config
6. add HTMLWebPackPlugin
    - basically creates a new `index.html` with working `<script></script>` link/s in the output `\dist` directory
7. setup basic npm scripts
    - `"scripts": {
            "build": "webpack",
            "start": "webpack-dev-server"
        }`
8. and finally start the app
    - `$ npm start` that will start a NodeJS server with your React app and *hot module replacement* i.e. live editing on

## 2. Writing the React App