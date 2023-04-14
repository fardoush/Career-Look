import React from 'react';
import Banner from '../Banner/Banner';
import CategoryList from '../CategoryList/CategoryList';
import FeatureJob from '../FeaturedJob/FeaturedJob';
// import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import JobDetails from '../JobDetails/JobDetails';

const HomeDesign = () => {
    return (
        <div>
         
            <Banner/>
            <CategoryList/>
            <FeatureJob/>
            <JobDetails></JobDetails>
        </div>
    );
};

export default HomeDesign;