import React from 'react';
import axios from 'axios';
import { useState,useEffect } from "react";
import Layout from "./pages/layout";
import Appo from "./pages/Appo";
import Appt from "./pages/Appt";

import {
  BrowserRouter as Router,
  Switch, 
  Route,
  Link,
  BrowserRouter,
  Routes,
  useNavigate
} from "react-router-dom";

 
function App () {
    const[email, setmail] = useState();
    const[pass, setpass] =useState();
    


    const handlebtn = () => {
      
      if(email === "zngzengin7@gmail.com" && pass === "123"){
          alert("Succesfully log in");
          return true;
        }else{
        alert("Pass or email unmachting");
          return false;
      }
    }
    const handlebtn2 = () => {
      
      alert("email or password unmacthing");
    }


      return (
        <>
        
        <h4 className='text-white text-center text-uppercase font-weight-bolder text-monospace mt-5
        '>Log in </h4>
          <form className='text-center form-center d-grid gap-3 col-15'>
                <div class="col-md-4 mx-auto my-10 pt-10"> 
                  <label for="exampleInputEmail1" class="form-label text-white">Email address</label>
                  <input type="email" onChange={ (e)=>setmail(e.target.value)} class="form-control shadow-lg   bg-white rounded" id="exampleInputEmail1" placeholder='email' aria-describedby="emailHelp"></input>
                  <div id="emailHelp" class="form-text text-white">We'll never share your email with anyone else.</div>
                </div>
                <div class="col-md-4 mx-auto my-20">
                  <label for="exampleInputPassword1" class="form-label text-white">Password</label>
                  <input type="password" onChange={ (e)=>setpass(e.target.value)} class="form-control shadow-lg  bg-white rounded" placeholder='password' id="exampleInputPassword1"></input>
                </div>
                
                <div class="d-grid gap-2 col-3 mx-auto mt-5">
                    <button class="btn btn-primary" type="button" onClick={handlebtn   }>Button</button>
                  </div>
          </form>
        </>
      );


};
export default App; 