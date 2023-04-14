import React, { useState } from 'react';
import {Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
// import Link from '../Link/Link';
import { Outlet, Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {

  const [open, setOpen] = useState(false);

  // const routes = [
  //   {
  //     id: 1,
  //     name: "Home",
  //     path: "/"
  //   },
  //   {
  //     id: 2,
  //     name: "Statistics",
  //     path: "/statistics"
  //   },
  //   {
  //     id: 3,
  //     name: "Applied Jobs",
  //     path: "/applied"
  //   },
  //   {
  //     id: 3,
  //     name: "Feature",
  //     path: "/feature"
  //   },
  //   {
  //     id: 4,
  //     name: "Blog",
  //     path: "/blog"
  //   },
  //   {
  //     id: 5,
  //     name: "Contact",
  //     path: "/Contact"
  //   }
  // ];
    return (
        <div>

{/* <Bars3Icon></Bars3Icon> */}
<nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <Link to="https://flowbite.com/" className="flex items-center">
      {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo"> */}
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CareerOps</span>
  </Link>
  <div className="flex md:order-2 justify-center items-center">
    <button className="common-btn btn capitalize text-white border-none  mr-6">Star Applying</button>
  <div className='md:hidden' onClick = { () => setOpen(!open)}>
   {/* <span>{open === true ? 'open' : 'close'}</span> */}
   
<span>{open === true ? <XMarkIcon className="h-6 w-6 text-blue-500" />
: <Bars3Icon className="h-6 w-6 text-blue-500" />}
</span>

</div>
  </div>
  <div className="items-center justify-between  w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
  <ul className={`md:flex md:static absolute sm:hidden duration-500 pl-8 pb-4 sm:z-0 bg-white w-full left-0 ${open ? 'top-20': '-top-96'}`}>

    {/* {
                    routes.map(route => 
                    <Link
                        key ={routes.id}
                        route = {route}>
                    </Link>
                    )
                } */}
                    <li className='mr-4'>
        <Link to="/" class="block py-2 pl-3 text-xl pr-4 text-gray-600 hover:text-violet-600	 rounded md:bg-transparent " aria-current="page">Home</Link>
        {/* <Link to ="/">Home</Link> */}
      </li>
      <li className='mr-4'>
        <Link to="/statistics" class="block py-2 pl-3 text-xl pr-4 text-gray-600 hover:text-violet-600	 rounded md:bg-transparent " aria-current="page">Statistics</Link>
      </li>
      <li className='mr-4'>
        <Link to="/job" class="block py-2 pl-3 text-xl pr-4 text-gray-600 hover:text-violet-600	 rounded md:bg-transparent " aria-current="page">Applied Jobs</Link>
      </li>
      <li className='mr-4'>
        <Link to="/blog" class="block py-2 pl-3 text-xl pr-4 text-gray-600 hover:text-violet-600	 rounded md:bg-transparent " aria-current="page">Blog</Link>
      </li>
     
    </ul>
  </div>
  </div>
</nav>
 
        </div>
    );
};

export default Navbar;