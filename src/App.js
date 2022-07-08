import React from 'react';
import axios from 'axios';
import { useState,useEffect } from "react";
import Layout from "./layout";
import Appo from "./pages/Appo";
import {
  BrowserRouter as Router,
  Switch, 
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";

 
function App () {

    
  
  return(
    <>

            <BrowserRouter>
                  <Routes>
                        <Route path='/*' element={<Layout />}>  
                              
                              <Route path='Appo' element={<Appo />} />
                        </Route>
                     
                  </Routes>
            </BrowserRouter>


    </>
  );

};
export default App; 