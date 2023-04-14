import React, {useEffect} from 'react';
import Banner2 from './Banner2';
import JobDetails from './JobDetails';
import {useParams} from 'react-router-dom';

const JobDetailsPage = () => {

    const {id} = useParams();

    return (
        <div>
            <Banner2></Banner2>
            <JobDetails jobId={id}></JobDetails>
        </div>
    );
};

export default JobDetailsPage;