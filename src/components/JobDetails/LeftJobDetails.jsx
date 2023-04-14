import React from "react";

const LeftJobDetails = ({jobDescription, responsibility, educationalRequirement, experience}) => {

    const emptyChecker = (data) => {
        if (undefined === data) {
            return ""
        }

        if (null === data) {
            return ""
        }
        return data
    }

    return (
        <div>
            <div className="job-details-inner w-fit">
                <div className="flex">
                    <h5 className="">Job Description:</h5>
                    <p>
                        {emptyChecker(jobDescription)}
                    </p>
                </div>
                <div className="flex">
                    <h5 className="">Job Responsibility:</h5>
                    <p>
                        {emptyChecker(responsibility)}
                    </p>
                </div>
                <div className="">
                    <h5>Educational Requirements:</h5>
                    <p className="">
                        {emptyChecker(educationalRequirement)}
                    </p>
                </div>
                <div className="">
                    <h5>Experiences:</h5>
                    <p className="">{emptyChecker(experience)}</p>
                </div>
            </div>
        </div>
    );
};

export default LeftJobDetails;
