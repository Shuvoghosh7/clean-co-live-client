import React from 'react';
import BucketGirl from "../Assets/images/bucketgirl.png";
const About = () => {
    return (
        <div>
            <h1 className='text-5xl text-red-500'>This is About page</h1>
            <img src={BucketGirl} alt="" />
        </div>
    );
};

export default About;