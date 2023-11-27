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
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import Dashboard from './components/pages/dashboard/Dashboard.jsx';
import Booking from '../src/components/pages/user_route/bookings/Booking.jsx';
import AllUser from './components/pages/admin_route/AllUser.jsx';
import MyProfile from './components/pages/user_route/profile/MyProfile.jsx';
import UpdatePage from './components/pages/updatePage/UpdatePage.jsx';
import AddTest from './components/pages/admin_route/addTest.jsx';
import AdminAllTest from './components/pages/admin_route/AdminAllTest.jsx';

const queryClient = new QueryClient()


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
        element: <AllTest></AllTest>,
        loader: () => fetch('http://localhost:4321/service')
      },
      {
        path: '/details/:id',
        element: <TestDetails></TestDetails>,
        loader: () => fetch('http://localhost:4321/service')
      }
    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: '/dashboard/myBookings',
        element: <Booking></Booking>
      },
      {
        path: '/dashboard/allUser',
        element: <AllUser></AllUser>
      },
      {
        path: "/dashboard/myProfile",
        element: <MyProfile></MyProfile>
      },
      {
        path: '/dashboard/update/:id',
        element: <UpdatePage></UpdatePage>
      },
      {
        path: '/dashboard/addTest',
        element: <AddTest></AddTest>
      },
      {
        path: '/dashboard/AllTest',
        element: <AdminAllTest></AdminAllTest>,
        loader: () => fetch('http://localhost:4321/service')
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
