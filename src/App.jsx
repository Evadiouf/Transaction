
import AjoutRevenu from './AjoutRevenu'
import './App.css'
import Etapeun from './Composents/Etapeun'
import Revenu from './Composents/Revenu'
import Tableau from './Composents/tableau'


function App() {
 

  return (
    <> 
     <div>
     <h1 className='text-center font-bold text-yellow-300 text-7xl mx-6' > BUDGET</h1>
       <div >
       <Etapeun/>
       <Tableau/>
       <Revenu/>
       <AjoutRevenu/>

       </div>

     </div>
      
  
    </>
  )
}

export default App
