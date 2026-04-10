import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Component/Root/Root.jsx'
import Home from './Component/Home/Home.jsx'
import Mobile from './Component/Mobile/Mobile.jsx'
import Laptop from './Component/Mobile/Laptop/Laptop.jsx'
import Users from './Component/Users/Users.jsx'
import Users2 from './Component/Users2/Users2.jsx'
import UserDetails from './Component/UserDetails/UserDetails.jsx'
import Posts from './Component/Posts/Posts.jsx'
import PostDetails from './Component/PostDetails/PostDetails.jsx'

const usersPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {index: true, Component: Home},
      {path: 'mobile', Component: Mobile},
      {path: 'laptop', Component: Laptop},
      {
        path: 'users', 
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users},
      {
        path: 'users2',
        element: <Suspense fallback={<span>Loading....</span>}>
          <Users2 usersPromise={usersPromise} />
        </Suspense>
      },
      {
        path: 'users/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails
      },
      {
        path: 'posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        Component: Posts
      },
      {
        path: 'posts/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetails
      },
      {
        path: '*',
        element: <h1>Not Found: 404 Staaaaaatus</h1>
      }
      
    ]
  },
  {
    path: '/dash',
    element: <div className="">Welecome to Bangladesh</div>
  },
  {
    path: 'about',
    element: <div className="">About Us</div>
  },
  {
    path: 'blog',
    element: <div className="">Blog of me</div>
  },
  {
    path: 'app',
    element: <App/>
  },
  {
    path: 'app',
    // element: <App/>
    Component: App
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
