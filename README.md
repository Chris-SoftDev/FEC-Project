# Front-End Capstone Project - Groundbnb

Hi and welcome to the Pit Vipers Groundbnb Application

Groundbnb is an application designed to help students of Galvanize's Operation Level Up practice and learn front-end web development using the React library. Inspired by Airbnb, this website mimics the basic functionality of the Airbnb website for non-logged-in users. It allows users to view detailed information about a Airbnb property, including the property's description, amenities, location, host and co-host information, and reviews. The website is built using multiple components, each with its own unique functionality, which is detailed below. Additionally, the website uses a Node Express server to retrieve dynamic data, and it is deployed on the Railway platform.

## Features

The app includes the following features:

- Single property display with comprehensive host, cohost, and property information.
- Multiple property photos to help you make informed decisions.
- Dynamic calendar selection system that sends date ranges to the database and displays those dates as unavailable to other users.
- Map location display using Google API with draggable map functionality to explore the surrounding area.
- User-friendly interface with a burger menu that pops up a login and sign-up modal.
- Easy date selection using the calendar system to reserve the number of nights with adults, children, infants, and pets, and calculate the total cost of your stay with cleaning and other fees.
- Reviews section to read other user experiences.
- Ability to view the languages and currencies Airbnb can translate to for your convenience.
- Responsive design for desktop and mobile devices

---

## Getting Started

To run the app, follow these steps:

1. Clone this repository.
2. Install dependencies with `npm install`.
3. Run the app with `npm run dev`.
4. Run the back-end Express server `npm run server`.

## Dependencies

The app uses the following dependencies:

- `react`: A JavaScript library for building user interfaces.
- `react-dom`: A package that provides DOM-specific methods for working with React.
- `react-router-dom`: A package that provides declarative routing for React applications using the browser's URL bar.
- `cors`: A package that enables cross-origin resource sharing (CORS) for APIs built with Express.
- `react-day-picker`: A flexible date picker component for React.
- `date-fns`: A package that provides lightweight date utility functions for JavaScript.
- `express`: A fast, unopinionated, minimalist web framework for Node.js.
- `pg`: A PostgreSQL client for Node.js.

<dt>As devDependencies:</dt>

- `react-google-maps/api`: A library that provides a simple and easy-to-use interface for integrating Google Maps into React applications.
- `types/react`: A package that provides TypeScript type definitions for the React library.
- `types/react-dom`: A package that provides TypeScript type definitions for the React DOM library.
- `vite`:A fast build tool and development server for modern web projects, designed to be highly scalable and flexible.
- `vitejs/plugin-react`: A plugin for the Vite build tool that enables React support.
- `nodemon`: A development utility that automatically restarts the Node.js server when changes are made to the codebase.


## Components

This app consists of the following components:

- `NavBar`: Displays the website header with links to the home page, search page, and login page
- `MiniNavBar`: A minimized version of the NavBar that appears when scrolling down the page, allowing users to quickly navigate to different parts of the website.
- `Rental Header`:Displays the property's title, rating, number of reviews, location, and images, with the ability to open more images with the "Show all photos" button.
- `Rental Description`: Provides a detailed description of the rental property, including information on its amenities, nearby attractions, and pricing details.
- `Rental Amenities`: Displays a list of the amenities available at the rental property, including items such as Wi-Fi, parking, and kitchen facilities.
- `Rental Calendar`: Uses the [react day picker](https://react-day-picker.js.org/) library to allows users to view the availability of the rental property and make a reservation by selecting their desired dates.
- `Rental Modal`: A sliding modal that appears when a user clicks on the "Book" or "Contact host" button on the rental page. This modal allows users to select their desired check-in and check-out dates, the number of guests, and to send a message to the host. It also displays the rental's price breakdown, including the base nightly rate, cleaning fee, service fee, and taxes. This component provides users with a convenient and streamlined way to book a rental property or contact the host with any questions or concerns.
- `Reviews`: Displays reviews from previous guests, including ratings and comments on their stay at the rental property.
- `Location Description`: Uses the [google map api](https://developers.google.com/maps) Displays a map of your groundbnb  and local area,  along with an expanded map with property and local information about the surrounding area. 
- `Host`: Provides information about the host of the rental property, including their name, profile picture, and a brief bio. Also displays co-host information, contact host information, house rules, safety information, and cancellation policy information. This component allows users to learn more about the host and their policies, as well as to contact them directly with any questions or concerns.
- `Footer`: Displays important links and information at the bottom of the website, such as contact information, social media links, and legal notices.
