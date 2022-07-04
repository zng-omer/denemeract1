import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Appo from "./pages/Appo";
import Appu from "./pages/Appu";
import Appt from "./pages/Appt";
import Layout from "./layout";




function App () {
      return (
            <BrowserRouter>
                  <Routes>
                        <Route path='/*' element={<Layout />}>  
                              <Route path='' element={<Appt />} />
                              <Route path='Appu' element={<Appu />} />
                              <Route path='Appo' element={<Appo />} />
                        </Route>
                     
                  </Routes>
            </BrowserRouter>
      );
};
export default App; 