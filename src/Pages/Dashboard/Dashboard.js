import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSideber from '../../Components/DashboardSideber';


const Dashboard = () => {
    return (
        <DashboardSideber>
           <Outlet/>
        </DashboardSideber>
    );
};

export default Dashboard;