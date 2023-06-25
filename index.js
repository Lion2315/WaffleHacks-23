import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomePage from './components/pages/HomePage';
import TaskList from './components/pages/TaskList';
import FlightOptions from './components/pages/FlightOptions';
import HotelOption from './components/pages/HotelOption';
import Communities from './components/pages/Communities';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "homepage",
    element: <HomePage/>,

  },
  {
    path: "listpage",
    element: <TaskList/>,

  },
  {
    path: "flightspage",
    element: <FlightOptions/>,

  },
  {
    path: "hotelspage",
    element: <HotelOption/>,

  },
  
]);
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
