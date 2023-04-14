import React from "react";

const leftJobDetails = (props) => {
    const {jobDes, JobRes ,img} = props.category;
  return (
    <div>
      <div className="job-details-inner w-fit">
        <div className="flex">
          <h5 className="">Job Description:</h5>
          <p>
           {jobDes}
          </p>
        </div>
        <div className="flex">
          <h5 className="">Job Responsibility:</h5>
          <p>
            {JobRes}
          </p>
        </div>
        <div className="">
          <h5>Educational Requirements:</h5>
          <p className="">
          {eduReq}
          </p>
        </div>
        <div className="">
          <h5>Experiences:</h5>
          <p className="">{experience}</p>
        </div>
      </div>
    </div>
  );
};

export default leftJobDetails;
