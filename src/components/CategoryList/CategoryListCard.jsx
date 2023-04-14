import React from 'react';
// import imgName from '../../assets/Icons/Frame-4.png';

const CategoryListCard = (props) => {
  const {jobTitle, availableJob ,img} = props.category;
  console.log(props.category,img);
    // const {jobTitle,availableJob} = props.category;

    return (
      <div className="card w-full  bg-base-100 shadow-sm bg-violet-100	rounded-md ">
      <div className="card-body text-left">
        <div className="bg-white p-4 rounded w-fit">
        <img src={img} alt="img" className="w-8 h-8 " />
        </div>
        <h2 className="card-title">{jobTitle}</h2>
        <p>{availableJob}</p>
        <div className="card-actions justify-end">
          {/* <button className="btn btn-primary">Buy Now</button> */}
        </div>
      </div>
    </div>
    );
};

export default CategoryListCard;