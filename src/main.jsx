import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/About.jsx'
import Home from './components/Home.jsx'
import Books from './components/Books.jsx'
import BookDetails from './components/BookDetails.jsx'
import Error from './components/Error.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <Error></Error>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/books',
        element: <Books></Books>,
        loader: ()=> fetch('https://api.itbook.store/1.0/new')
      },
      {
        path: '/book/:id',
        element: <BookDetails></BookDetails>,
        loader: ({params})=> fetch(`https://api.itbook.store/1.0/books/${params.id}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>,
)
