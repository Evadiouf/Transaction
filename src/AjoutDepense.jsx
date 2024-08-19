import React from 'react'

const AjoutDepense = () => {
    return (
        <div>
          <h1 className='text-center font-bold text-yellow-300 text-7xl mx-6 py-7'>BUDGET</h1>
          <p> Ajout Depense</p>
    
          <form className='border-collapse border border-slate-400 p-6 rounded-md' action="">
            <div className='mb-4'>
              <label className='block font-bold mb-2' htmlFor="titre">Titre</label>
              <input
                className='w-full p-2 border border-gray-300 rounded'
                type="text"
                name="titre"
                id="titre"
                placeholder='Titre du depense'
              />
            </div>
    
            <div className='mb-4'>
              <label className='block font-bold mb-2' htmlFor="montant">Montant</label>
              <input
                className='w-full p-2 border border-gray-300 rounded'
                type="number"
                name="montant"
                id="montant"
                placeholder='Montant'
              />
            </div>
    
            <button className='bg-emerald-950 w-full text-white p-3 rounded-md'>Valider</button>
          </form>
        </div>
      );
}
  

export default AjoutDepense
