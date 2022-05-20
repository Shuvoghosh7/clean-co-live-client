import { Route, Routes } from 'react-router-dom';
import './App.css';
import {publicRoute} from '../src/Routes/publicRoutes'
import Navbar from './Components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import PrivateRoute from './Authentication/PrivateRoute';

import AdminRoute from './Authentication/AdminRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
import { privateRoutes } from './Routes/privateRoutes';
import Addservices from './Pages/Dashboard/Addservices';
import Addadmin from './Pages/Dashboard/Addadmin';

function App() {

  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <div >
      <Navbar>
        <Routes>
        {publicRoute.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
        <Route element={<PrivateRoute/>}>
        {privateRoutes.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
        </Route>
        <Route element={<AdminRoute/>}>
          <Route path='/dashboard' element={<Dashboard/>}>
            <Route path='add-services' element={<Addservices/>}/>
            <Route path='add-admin' element={<Addadmin/>}/>
          </Route>

        </Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
