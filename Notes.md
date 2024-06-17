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

We start by creating a bare-bones for the different components like Body, Header, Login and Browse. 

Let's also set up routing in the application. For now, we'll map the route '/' to Login component and '/browse' route to Browse component. We'll work on making the '/browse' route protected later. In order to set up routing in the React app, we'll leverage React Router DOM Library.

We start by designing the Login component. This component needs quite a bit of styling (which needs lots of trial and error), hence used it the same way as the instructor did. However, here's an interesting summary about CSS positions which helped a lot:

![CSS-position](./public/assets/CSS-position-summary.png)

This summary is taken as a comment from this [video](https://www.youtube.com/watch?v=jx5jmI0UlXU).

Don't fret too much about the CSS, just try to understand the different properties being used in Login component. Moreover, the CSS for such designs are just a Google search away, so no worries on that part.

Let's now work on creating a sign up form. We can re-use the login form as a sign up form. We can create a state variable `isSignInForm` which stores information about whether the form is a sign-in form or not. According to the value of this state variable, we modify the verbiage on the form. The value of the state variable is toggled on click of the button due to the onClick callback passed to it.

Let's take a look at form validations : By the way, if we have a form with many fields, and we need to handle form validations and error handling, it's recommended to use a form handling library like Formik which makes things convenient.
