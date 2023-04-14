import React from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';



const ResultChart = () => {
 
  const marks = [
    { name: 'Assignment 1', value: 60 },
    { name: 'Assignment 2', value: 50 },
    { name: 'Assignment 3', value: 60 },
    { name: 'Assignment 4', value:23 },
    { name: 'Assignment 5', value: 0 },
    { name: 'Assignment 6', value: 0 },
    { name: 'Assignment 7', value: 0 },
    { name: 'Assignment 8', value: 54 },
  ];
  
    // const data = [
    //     {
    //         test: 'assignment 1',
    //      restul: 60,
    //     },
    //     {
    //         test: 'assignment 2',
    //      restul: 50,
    //     },
    //     {
    //         test: 'assignment 3',
    //      restul: 60,
    //     },
    //     {
    //         test: 'assignment 4',
    //      restul: 23,
    //     },
    //     {
    //         test: 'assignment 5',
    //      restul: 0,
    //     },
    //     {
    //         test: 'assignment 6',
    //      restul: 0,
    //     },
    //     {
    //         test: 'assignment 7',
    //      restul: 0,
    //     },
    //     {
    //         test: 'assignment 8',
    //      restul: 54,
    //     },
    //   ];
    return (
      // <ResponsiveContainer width="100%" height="100%">
      <div className=" flex justify-center items-center h-screen">

<div className="">
  <h2 className='mb-5 text-center text-3xl text-violet-900'>Assignment Marks</h2>
<PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={marks}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
        {/* <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" /> */}
        <Tooltip />
      </PieChart>
</div>

      </div>
    // </ResponsiveContainer>
    );
};

export default ResultChart;