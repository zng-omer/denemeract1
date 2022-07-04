import React from 'react';

import {  useEffect, useState } from 'react';

function Appu () {
  const [surname,setSurname] = useState(()=>{
    const saved = localStorage.getItem("surname");
    const initialValu = JSON.parse(saved);
    return initialValu || "";
  }
);

useEffect ( () =>{ 
    localStorage.setItem("surname",JSON.stringify);
},[surname]);


return(
  
  <form class="row g-3">    
  <div class="col-auto">
      <label for="staticEmail2" class="visually-hidden">Name:</label>
      <input type="text"  class="form-control-plaintext" placeholder="fullname" onChange={(e)=>setSurname(e.target.value)} id="staticEmail2" value={surname}></input>
    </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary mb-3">Confirm identity</button>
        </div>
      
  </form>
);
}
export default Appu;
