import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Home from './components/Home/Home'
import ResultChart from './components/ResultChart/ResultChart'
import JobDetails from './components/JobDetails/JobDetails'
import Blog from './components/Blog/Blog'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import JobDetailsPage from './components/JobDetails/JobDetailsPage'
// import Error from './components/Error/Error'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home/>,
//     // element: <App/>,
//     errorElement: <Error></Error>,
//     children: [
//       {
//         path: "/statistics",
//         element: <ResultChart></ResultChart>,
//       },
//       {
//         path: "/job",
//         element: <JobDetailsPage/>,
//       },
//       {
//         path: "/blog",
//         element: <Blog/>,
//       },
//     ],
//   },
// ]);


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
  {/* <Home></Home> */}
    {/* <RouterProvider router={router} /> */}
    <App></App>
  </React.StrictMode>,
)
