import {  useEffect, useState } from 'react';


      function Appt(){

          const [name,setName] = useState(()=>{
              const saved = localStorage.getItem("name");
              const initialValu = JSON.parse(saved);
              return initialValu || "";
            }
          );
          
          useEffect ( () =>{
              localStorage.setItem("name",JSON.stringify);
          },[name]);


          return(
            <form class="row g-3">
              <div class="col-auto">
                <label for="staticEmail2" class="visually-hidden">Name:</label>
                <input type="text"  class="form-control-plaintext" placeholder="fullname" onChange={(e)=>setName(e.target.value)} id="staticEmail2" value={name}></input>
              </div>


                  <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-3">Confirm identity</button>
                  </div>
                <hr></hr>
                <hr></hr>
                <hr></hr>
                <a href='./Appu.js'>Other page</a>
            </form>
          ); 



      }
export default Appt;