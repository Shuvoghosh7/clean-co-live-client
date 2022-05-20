import React from 'react';
import { NavLink } from 'react-router-dom';

const DashboardSideber = ({children}) => {
    return (
        <div class="drawer drawer-mobile mt-16 bg-accent">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
               {/*  <!-- Page content here --> */}
               {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                  {/*   Sidebar content here */} 
                    <li><NavLink to="/dashboard/add-services">Add Services</NavLink></li>
                    <li><NavLink to="/dashboard/add-admin">Add Admin</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default DashboardSideber;