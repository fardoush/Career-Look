import React from 'react';
import Banner2 from './Banner2';
import JobDetails from './JobDetails';
import { useParams } from 'react-router-dom';

const JobDetailsPage = () => {
    const {JobTitle} = useParams()
    return (
        <div>
            <Banner2></Banner2>
            {/* <JobDetails></JobDetails> */}
            <h1>{JobTitle}</h1>
        </div>
    );
};

export default JobDetailsPage;