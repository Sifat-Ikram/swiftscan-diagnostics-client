import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from './components/shared/error_page/ErrorPage.jsx';
import Home from './components/pages/home_page/home/Home.jsx';
import SignUp from './components/pages/sign/SignUp.jsx';
import AuthProvider from './components/provider/AuthProvider.jsx';
import SignIn from './components/pages/sign/SignIn.jsx';
import AllTest from './components/pages/all_test/AllTest.jsx';
import TestDetails from './components/pages/details/TestDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>
      },
      {
        path: '/allTest',
        element: <AllTest></AllTest>
      },
      {
        path: '/details/:id',
        element: <TestDetails></TestDetails>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
