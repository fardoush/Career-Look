import React from 'react';
import {locationIcon} from '@heroicons/react/24/solid'
import {Link} from 'react-router-dom';

const FeatureCard = (props) => {
    const {id, img, jobTitle, companyName, jobType, jobType1, location, salary} = props.feature;
    // const {JobTitle} = props.JobTitle;
    return (
        <div>

            <div className="card w-full  border border-indigo-600 border-gray-300  bg-white	rounded-md border-x-2">
                <div className="card-body text-left">
                    <img src={img} alt="img" className="h-14 w-44"/>
                    <h2 className="card-title">{jobTitle}</h2>
                    <h6 className="">{companyName}</h6>
                    <div className="flex gap-3">
                        <button className="btn btn-outline btn-success">{jobType}</button>
                        <button className="btn btn-outline btn-success">{jobType1}</button>
                    </div>
                    <div className="flex gap-3">
                        <div className="">
                            <locationIcon></locationIcon>
                            <span className="">{location}</span>
                        </div>
                        <div className="">
                            <salary></salary>
                            <span className="">Salary: {salary}</span>
                        </div>
                    </div>


                    <div className="card-actions">
                        {/* <button className="common-btn btn capitalize text-white border-none  mr-6">View Details</button> */}
                        <Link to={`job/details/${id}`}>View Details</Link>
                        {/* <Link to={JobTitle}>View Details</Link> */}
                    </div>
                </div>
            </div>


        </div>
    );
};

export default FeatureCard;