import React from 'react';
import axios from 'axios';
import { useState,useEffect } from "react";


function App () {

    const[veri,setVeri] = useState("");
    const[tarih,setTarih] =useState("");
   

    useEffect( () => {

      axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
      .then(respond =>setVeri(respond.data[tarih]))
      .catch(error => console.log(error))



    },[veri,tarih]);




  return(
    <div className='App'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 mx-auto mt-4'>
            <h2 className='text-center text-white display-3'>Türkiye covid 19 arama motoru</h2>
            <input type="text" className='form-control' placeholder='GG/AA/YY' value={veri} onChange={(e)=>setTarih(e.target.value)}  />
            <table class="table" className='table table-striped text-white'>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Test sayisi</th>
                  <th scope="col">Hasta sayisi</th>
                  <th scope="col">Vefat sayisi</th>
                </tr>
              </thead>
              <tbody>
                <tr className='text-white' className={veri === undefined ? "bg-danger" :"bg-success  "}>
                  <th scope="row" >1</th>
                  <td>{veri === undefined    ? "Veri Bekleniyor" : veri.totalTests}</td>
                  <td>{veri === undefined    ? "Veri Bekleniyor" : veri.totalPatients}</td>
                  <td>{veri === undefined    ? "Veri Bekleniyor" : veri.deaths}</td>
                </tr>
              
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );


};
export default App; 