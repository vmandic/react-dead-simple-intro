# REACT 101

This project can help you and your team to grasp the basic setup for the React.js dev environment.<br />
This demo project is linked to a presentation about React.js I made, so take care to see it here: <a href="http://slides.com/vmandic/react-101-v1/">http://slides.com/vmandic/react-101-v1</a>

<img src="http://imgur.com/download/Z6toDov" />

Please note that the setup is based on Mar 2017 npm packages.

---

# REACT DEV ENV SETUP

Below, a simple boilerplate to bootstrap a React dev env.

There are two main parts in this demo setup, those are:<br />
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

1. make an `index.js` and use `ReactDOM` to render your first root component, e.g. `<App />`
2. be creative... explore and learn more of React.js! :)

Kind regards, <a href="https://www.twitter.com/@vekzdran">@vekzdran</a>
