import React from 'react'


import Etapeun from '../Components/Etapeun'
import Revenu from '../Components/Revenu'
import Tableau from '../Components/Tableau'

const Home = () => {
  return (
    <div>
      <h1 className='text-center font-bold text-yellow-300 text-7xl mx-6'> BUDGET</h1>
      <div>
        <Etapeun/>
        <Tableau/>
        <Revenu/>
        
      </div>
    </div>
  )
}

export default Home
