# Project Setup

[README](README.md)

## Build Workflow

The steps below are designed to setup the project architecture and allow us to use the latest version of JavaScript but also be compatible with older browsers.

To do this we need to set up a build workflow.

Using the build workflow will mean that we can:
- optimise our code
- allow us to use next-gen JavaScript features, whilst supporting older browsers in production
- be more productive

We will do this by:
- Use a Dependency Mangement tool, e.g. npm
- Use a Bundler, so we can spread our code across different files to make it manageable, but bundle these together for production, e.g. Webpack
- Use a JavaScript Compiler so that we can convert the latest features to compatible code, e.g. Babel
- Use a Development Server

To do the above, we can use Create React App (CRA)

- Install this globally using npm
```
npm install -g create-react-app
```
- Now create the app with create-react-app
```
create-react-app react-complete-guide
```
- Navigate to the new project folder
```
cd react-complete-guide
```
- Start the application
```
npm start
```

## Source Control
- Initiate a Git repository
```
git init
```
- Create React App has created a .gitignore file so we can ignore node modules from our source control