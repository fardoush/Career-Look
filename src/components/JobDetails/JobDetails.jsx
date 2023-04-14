import React, {useEffect, useState} from 'react';
import Banner2 from './Banner2';
import LeftJobDetails from './LeftJobDetails';

const JobDetails = ({jobId}) => {
    const [jobDetails, setJobDetails] = useState([]);


    useEffect(() => {
        fetch("/jobDetails.json")
            .then((res) => res.json())
            .then((data) => {
                setJobDetails(data)
            });
    }, [])


    const jobDetailMapper = () => {
        return jobDetails.map((data) => {
            if (parseInt(jobId) === data.id) {
                return <LeftJobDetails
                    jobDescription={data.jobTitle}
                    educationalRequirement={data.eduReq}
                    responsibility={data.JobRes}
                    experience={data.experience}
                ></LeftJobDetails>
            }
        });
    }


    return (
        <>
            <div className="w-screen job-details-wrapper flex justify-between items-start flex-wrap">
                {jobDetailMapper()}
            </div>
        </>
    );
};

export default JobDetails;