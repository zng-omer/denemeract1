
import React from 'react';
import { useState,useEffect } from "react";
import Layout from "./layout";
import {
  BrowserRouter as Router,
  Switch, 
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Appt from './Appt'

 
function Appo () {

    
  
  return(
    <>

            <BrowserRouter>
                  <Routes>
                        <Route path='/*' element={<Layout />} />  
                              
                              <Route path='Appt' element={<Appt />} />
                     
                  </Routes>
            </BrowserRouter>


    </>
  );

};
export default Appo;