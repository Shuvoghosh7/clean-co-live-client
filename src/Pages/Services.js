import axios from 'axios';
import React, { useEffect, useState } from 'react';
import fatcher from '../api';

const Services = () => {
    const [services,setServices]=useState([])
    console.log(services)
    useEffect(()=>{
        /* axios.get("http://localhost:5000/service").then(res =>setServices(res)) */
        (async()=>{
            const res=await fatcher.get("/service")
            setServices(res)
        })()
    },[])
    return (
        <div>
            
           
            <h1>This is Service page</h1>
            <h1>This is Service page</h1>
            <h1>This is Service page</h1>
            <h1>This is Service page</h1>
            <h1>This is Service page:{}</h1>
            <h1>This is Service pagessss</h1>
        </div>
    );
};

export default Services;