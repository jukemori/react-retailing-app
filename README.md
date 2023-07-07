# Mockup Retail app

This repository contains the solution for the challenge of implementing a web application using React and TypeScript with the Vite build tool. The application includes an Item List page, Item Detail page, navbar with search functionality and category tabs for filtering items. All the pages are responsive and works for both phone and web screen size

<div style="display: flex; align-items: center;">
  <img width="600" alt="" src="./image/web-item-list.png">
  <img width="150" alt="" src="./image/phone-item-list.png">
</div>

<div style="display: flex; align-items: center;">
  <img width="600" alt="" src="./image/web-item-detail.png">
  <img width="150" alt="" src="./image/phone-item-detail.png">
</div>

## Technologies Used
- React
- TypeScript
- Vite
- HTML/CSS


## Setup 

``` shell
$ git clone git@github.com:m-rec/merpay-frontend-template_J264562980.git
$ cd merpay-frontend-template_J264562980/app
$ npm install # or yarn install
$ npm run dev # or yarn dev
$ open http://localhost:5173
```

## Launch API Server

``` shell
$ cd api-server
$ npm start
$ open http://localhost:8000
```

## Production Build
To build the application for production deployment, use the following command:

``` shell
npm run build
```

## Architecture and Strategy
The application follows a component-based architecture and utilizes React and TypeScript. The main components in the project are:

``` shell
- src/
  - components/   # Contains reusable React components such as item cards, navbar, search bar, and menu tabs.
  - data/         # Contains methods to fetch the API by different responses
  - pages/        # Contains the item list, item detail pages, and also pages that are filtered by the search function and category menu tab. 
  - App.tsx       # It sets up the routing using React Router, defining the routes for the item list page and item detail page.
  - main.tsx      # entry point for the React application. It renders the App component and mounts it to the HTML template
- index.html    # HTML template for the application
- package.json    # Project configuration and dependencies

```

- `ItemListPage`
- `ItemDetailPage`
- `Navbar`
- `ItemCard`

The strategy for implementing the application involved closely following the design specification. The provided API was integrated to fetch item data for display and to provide suggestions for the search functionality. React and TypeScript were used to improve the maintainability of the codebase and ensure type safety. The application was designed to be responsive, allowing for optimal viewing on different devices.

## Conclusion
The application successfully meets the minimum requirements specified in the challenge. It provides a responsive user interface with an Item List page, Item Detail page, and a navbar with search functionality and category tabs. The codebase is built with React, TypeScript, and Vite, and it is ready for production deployment.

If you have any questions or need further assistance, please don't hesitate to contact me.
