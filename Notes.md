In this project, we'll be applying all the knowledge learnt so far in the FoodVilla project.

A brief about the project: This project is like a Netflix clone, wherein we show all the latest movies, shows, series etc.

We'll be exploring authentication in this project. Although authentication is mostly backend oriented, and we'll not build a NodeJS backend for the same. Instead, we'll setup a Firebase backend and connect our React application to the Firebase backend.

We'll also be exploring about protected routes (which are routes in a React application which require the user to be authenticated before accessing).

We'll also be looking at form handling: learning how to build sign-in and sign-up forms etc.

We'll also be integrating GPT APIs into the project. Let's understand about the usecases for GPT in our application: The user can search for 'funny Hindi Movies' and the recommendations for the same will be powered by GPT.

It's also important to note that the knowledge gained while building these projects are extremely helpful while building any frontend large scale application.

We'll also be focusing on styling using TailwindCSS, and making the UI of our web app look good.

## NetflixGPT Episode-1 Part-1

We built the FoodVilla project from scratch, and used Parcel as the bundler. But for the sake of this project, we'll use `create-react-app`. `create-react-app` provides a scaffold i.e. an out-of-the-box folder structure on which we can work. As an example, it will install and configure React Testing Library and Jest out of the box.

In order to create the react app, we use the syntax `npx create-react-app <project name>`.

`create-react-app` uses Webpack bundler behind the scenes.

See the package.json to see the start script, which in our case is `npm run start`.

Webpack provides Hot Module Replacement (HMR) out-of-the-box. As a recap, HMR is a feature which provides real-time updates to modules within a running application, without requiring a full page reload. This saves a lot of time during development.

Let's start by installing the dependencies of the project: TailwindCSS.

We'll start by identifying the requirements and desired features in our frontend app. This is the first and most important step during development of a project. The desired features have been discussed in [README](./README.md)

## NetflixGPT Episode-1 Part-2

