import {  useEffect, useState } from 'react';




function Appt (){

         const [name ,setName] = useState( ()=>{
            const saved = localStorage.getItem("name");
            const initialValue = JSON.parse(saved);
            return initialValue || 0;
         }) 
         
        
        useEffect ( () =>{
          localStorage.setItem("name",JSON.stringify);
        },[name]);

        const handclick1 =()=>{
          setName = setName +1;
        }
        const handclick2 =()=>{
          setName = setName -1;
        }

        return(


          
          <form class="row g-3">
        
          <div class="col-auto">
               <button type="submit" class="btn btn-primary mb-3" onClick={handclick1}>incrise</button>
               <button type="submit" class="btn btn-primary mb-3" onClick={handclick2}>descrisi</button>

          </div>
    </form>
        ); 

}

export default Appt;
