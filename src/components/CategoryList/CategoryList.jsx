import React, { useEffect, useState } from "react";
import CategoryListCard from "./CategoryListCard";
// import { CalculatorIcon } from '@heroicons/react/24/solid';


const CaregoryList = () => {
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    fetch("category-list.json")
      .then((res) => res.json())
      .then((data) => setCategorys(data));
  }, []);
  return (
    <div className="lg:p-20  p-6 w-full mx-auto container">
      <div className="flex items-center justify-center flex-col mb-16 flex-wrap">
       
        <h2 className="text-center text-4xl mb-5">Job Category List</h2>
        <p className="text-center">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {
        categorys.map(category => <CategoryListCard
        key={category.id}
        category = {category}
        ></CategoryListCard>)
        
        }
      </div>
    </div>
  );
};

export default CaregoryList;
