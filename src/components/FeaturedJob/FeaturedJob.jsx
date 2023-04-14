import React, {useEffect, useState} from 'react';
import FeatureCard from './FeatureCard';

const FeatureJob = () => {

    const [feature, setFeature] = useState([]);

    useEffect(() => {

        fetch('feature-job.json')
            .then(res => res.json())
            .then(data => setFeature(data))
    }, [])


    return (
        <div>
            <div className=" lg:mx-40 mx-6">
                <div className="feature-content mb-16">
                    <h2 className="text-center text-4xl mb-5">Featured Jobs</h2>
                    <p className="text-center ">
                        Explore thousands of job opportunities with all the information you need. Its your future
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

                    {
                        feature.map(feature => <FeatureCard
                            key={feature.id}
                            feature={feature}
                        ></FeatureCard>)
                    }


                </div>
                <div className="flex justify-center items-center mt-10">
                    <button className="common-btn btn  font-4xl capitalize text-white border-none  mr-6">Show More
                    </button>
                </div>

            </div>

        </div>
    );
};

export default FeatureJob;