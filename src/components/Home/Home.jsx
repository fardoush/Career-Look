import React from 'react';
import Navbar from '../Navbar/Navbar';
import {Outlet} from 'react-router-dom';
import HomeDesign from './HomeDesign';
// import Banner from '../Banner/Banner';
// import CategoryList from '../CategoryList/CategoryList';
// import FeatureJob from '../FeaturedJob/FeaturedJob';


const Home = () => {
    return (
        <div>
            <Navbar/>

            {/* <Banner/>
           <CategoryList/>
           <FeatureJob/> */}
            <HomeDesign></HomeDesign>


        </div>
    );
};

export default Home;