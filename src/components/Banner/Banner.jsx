import React from 'react';

const Banner = () => {
    return (
        <div>
<div className="hero min-h-screen bg-indigo-100 bg-purple-50 flex justify-center items-center w-full ">
  <div className="hero-content  items-center justify-between items-center w-screen flex-wrap">
 
    <div className='w-1/2'>
      <h1 className="md:text-5xl lg:text-6xl font-bold  sm:w-full">One Step Closer <br/> To Your Dream Job</h1>
      <p className="py-6 w-96">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
    <div className="w-3/2 flex justify-center items-center">
    <img src="https://images.pexels.com/photos/1253364/pexels-photo-1253364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="max-w-sm rounded-lg shadow-2xl border-4 border-purple-800 mt-10 h-96" />
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;