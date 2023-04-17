import React, {useState} from "react";

import { Route, Routes, Navigate } from "react-router-dom";

import HeaderFooter from "./components/header-footer/header-footer";
import SectionMain from "./components/section/section-main/sectioon-main";
import SectionServis from "./components/section/section-dop/servis";
import SectionGarant from "./components/section/section-dop/garant";
import SectionContactAbout from "./components/section/section-dop/contact-about";


import './styles/header/header.scss'
import './styles/footer/footer.css'
import './styles/section/section.scss'
import './styles/adaptiv/adaptiv.css'


import servis from "./db";

import { ShooseNoOne } from "./context/servisButtonShooseNoOne";

            



function App() {

  const [chooseNoOne, setChooseNoOne] = useState(false)

  return (
  <ShooseNoOne.Provider value={{ chooseNoOne, setChooseNoOne }}>
    <div className="App">
      <Routes>                                                                  
            <Route path='/' element={<HeaderFooter/>}>

                <Route index element={<SectionMain servis={servis}/>}/>
                <Route path='/home' element={ <Navigate to="/" replace />} />
                <Route path='/servis' element={<SectionServis servis={servis}/>}/>
                <Route path='/garant' element={<SectionGarant/>}/>
                <Route path='/contact' element={<SectionContactAbout/>}/>
                <Route path='/about' element={<SectionContactAbout/>}/>

            </Route>
        </Routes>
    </div>
  </ShooseNoOne.Provider>
  );
}

export default App;
