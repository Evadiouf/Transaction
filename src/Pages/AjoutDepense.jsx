import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AjouterDepense = () => {
  const [titre, setTitre] = useState('');
  const [montant, setMontant] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (titre && montant) {
      try {
        await axios.post('http://localhost:9000/depenses', {
          titre,
          montant: parseFloat(montant),
        });
        setTitre('');
        setMontant('');
        setSuccessMessage('La dépense a été ajoutée avec succès !');
        setTimeout(() => {
          setSuccessMessage(''); 
          navigate('/tableau');
        }, 2000);
      } catch (error) {
        console.error('Erreur lors de l\'ajout de la dépense', error);
      }
    } else {
      alert('Veuillez remplir tous les champs');
    }
  };

  return (
    <div>
      <h1 className='text-center font-bold text-yellow-300 text-7xl mx-6 py-7'>BUDGET</h1>
      <p>AJOUTER DEPENSE</p>

      {successMessage && (
        <div className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4'>
          {successMessage}
        </div>
      )}

      <form className='border-collapse border border-slate-400 p-6 rounded-md' onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block font-bold mb-2' htmlFor="titre">Titre</label>
          <input
            className='w-full p-2 border border-gray-300 rounded'
            type="text"
            name="titre"
            id="titre"
            placeholder='Titre de la dépense'
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
            required
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
            value={montant}
            onChange={(e) => setMontant(e.target.value)}
            required
          />
        </div>

        <button 
          className='bg-emerald-950 w-full text-white p-3 rounded-md' 
          type="submit">
          Valider
        </button>
      </form>
    </div>
  );
};

export default AjouterDepense;
