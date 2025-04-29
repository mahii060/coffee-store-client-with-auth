import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './component/AddCoffee.jsx';
import UpdateCoffee from './component/UpdateCoffee.jsx';
import Navbar from './component/Navbar.jsx';
import Home from './component/Home.jsx';
import SignIn from './component/SignIn.jsx';
import SignUp from './component/SignUp.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Users from './component/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('https://coffe-store-backend-three.vercel.app/coffee'),
      },
      {
        path: '/addCoffee',
        element: <AddCoffee />
      },
      {
        path: '/signIn',
        element: <SignIn />
      },
      {
        path: '/signUp',
        element: <SignUp />
      },
      {
        path: '/users',
        element: <Users />,
        loader: () => fetch('https://coffe-store-backend-three.vercel.app/users')
      },
      {
        path: '/updateCoffee/:id',
        element: <UpdateCoffee />,
        loader: ({ params }) => fetch(`https://coffe-store-backend-three.vercel.app/coffee/${params.id}`)
      },
    ]
  },


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
