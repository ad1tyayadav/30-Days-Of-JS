import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Challenge from './component/Challenge.jsx';
import ChallengeDetails from './component/ChallengeDetails.jsx'; // Add this import
import Home from './component/Home.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/challenge',
        element: <Challenge />
      },
      {
        path: '/challenge-details/:id', // Updated path to include dynamic id
        element: <ChallengeDetails /> // Add this component for detailed view
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
