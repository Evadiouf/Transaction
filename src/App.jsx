import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AjoutDepense from './Pages/AjoutDepense';
import AjoutRevenu from './Pages/AjoutRevenu';
import Home from './Pages/Home';
import Tableau from './Components/Tableau';







function App() {
 

  return (
    <> 
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="ajoutdepense" element={<AjoutDepense />} />
          <Route path="ajoutrevenu" element={<AjoutRevenu />} />
          <Route path="tableau" element={<Tableau />} />
          
          
        </Route>
      </Routes>
    </BrowserRouter>
      

  
      
  
    </>
  )
}

export default App
