import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import ResultChart from './components/ResultChart/ResultChart';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';
import Navbar from './components/Navbar/Navbar';
import JobDetailsPage from './components/JobDetails/JobDetailsPage';
// import Home from './components/Home/Home';
// import Navbar from './components/Navbar/Navbar';
// import Banner from './components/Banner/Banner';
// import CaregoryList from './components/CategoryList/CategoryList';
// import FeatureJob from './components/FeaturedJob/FeaturedJob';
// import ResultChart from './components/ResultChart/ResultChart';
// import Blog from './components/Blog/Blog';
// import JobDetails from './components/JobDetails/JobDetails';

const App = () => {
  return (
    <div>
      {/* <Navbar></Navbar>
      <Banner></Banner>
      <CaregoryList></CaregoryList>
      <FeatureJob></FeatureJob>
      <ResultChart></ResultChart>
      <Blog></Blog>
      <JobDetails></JobDetails> */}

      {/* <Home></Home> */}

      <BrowserRouter>
      <Navbar/>

      <Routes>

        <Route path="/" element={<Home/>}></Route>
        <Route path="//.jobTitle" element={<JobDetailsPage/>}></Route>
        <Route path="/statistics" element={<ResultChart></ResultChart>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="*" element={<Error/>}></Route>
      </Routes>
      
      </BrowserRouter>
     
    </div>
  );
};

export default App;