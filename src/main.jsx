import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Root';
import StartLearning from './StartLearning';
import Tutorials from './Tutorials';
import AboutUs from './AboutUs';
import MyProfile from './MyProfile';
import Home from './Home';
import LessonNoPage from './LessonNoPage';
import Errorpage from './Errorpage';
import Login from './Login';
import Registration from './Registration';
import AuthProvider from './AuthProvider/AuthProvider';
import UpdateProfile from './UpdateProfile';
import UpdatePassword from './UpdatePassword';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: '/start-learning',
        element: <StartLearning></StartLearning>,

      },
      {
        path: '/start-learning/:lessonNo',
        element: <LessonNoPage></LessonNoPage>,
        loader: () => fetch('../public/vocabulary.json')
      },
      {
        path: '/tutorials',
        element: <Tutorials></Tutorials>
      },
      {
        path: '/aboutus',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/profile',
        element: <MyProfile></MyProfile>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },
      {
        path: '/updateprofile',
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: '/forgot-password',
        element: <UpdatePassword></UpdatePassword>
      }
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