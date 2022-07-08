import React from 'react';
import axios from 'axios';
import { useState,useEffect } from "react";
import appt from "./Appt";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";


function Appo () {

    const[email,setEmail] = useState(() => {
      const saved = localStorage.getItem("email");
      const initialValue = JSON.parse(saved);
      return initialValue || " ";
    }
    );
    
    const[pass,setPass] = useState(() => {
      const saved = localStorage.getItem("pass");
      const initialValue = JSON.parse(saved);
      return initialValue || " ";
    }
    );

    useEffect(() => {
      localStorage.setItem("email",JSON.stringify(email));
      localStorage.setItem("pass",JSON.stringify(pass));
    },[email,pass]);



    const handlebtn = () => {
      if(email === "zngzengin7@gmail.com" && pass === "123"){
        alert("Log in is successfuly.");
      }else{
        alert("email or password unmaching");
      }
    }

    const handlebtn2 = () => {
      
      alert("email or password unmaching");
    }

  
  return(
    <>
  


   
       
      
        <form className="row g-3">
            <div className="col-auto">
                  <label for="staticEmail2" className="visually">Email</label>
                  <input type="text"  className="form-control " id="staticEmail2" onChange={(e) => setEmail(e.target.value)} placeholder='email@example.com' />
            </div>
            <div className="col-auto">
                  <label for="inputPassword2" className="visually">Password</label>
                  <input type="password" className="form-control" id="inputPassword2" onChange={(e) => setPass(e.target.value)} placeholder="Password" />
            </div>
            <div className="col-auto">
                  <button type="submit" className="btn btn-primary mb-3" onClick={handlebtn ? <Link to="Appt" /> :handlebtn2  } >Confirm identity</button>
            </div>
        </form>

  

      
    </>
  );

};
export default Appo; 