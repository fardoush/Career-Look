import React, { useEffect, useState } from 'react';
import Banner2 from './Banner2';
import leftJobDetails from './leftJobDetails';

const JobDetails = () => {
    const [jobDetails,setJobDetails] = useState([]);

    
useEffect(()=>{
    fetch("jobDetails.json")
    .then((res) => res.json())
    .then((data) => setJobDetails(data));
},[])
    
    return (
        <div>
            {/* <Banner2/> */}

            <div className=" w-screen job-details-wrapper flex justify-between items-start flex-wrap">

         {/* <div className=""> */}
      

        {
            jobDetails.map(jobDetails => 
                <leftJobDetails
                key={jobDetails.id}
                jobDetails = {jobDetails}
                ></leftJobDetails>
                )
        }
         {/* </div> */}

            </div>
           


        </div>
    );
};

export default JobDetails;