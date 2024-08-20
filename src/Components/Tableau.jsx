import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Tableau = () => {
  const [depenses, setDepenses] = useState([
    { titre: 'Nourriture', montant: 100000 },
    { titre: 'Loyer', montant: 200000 },
    { titre: 'Transport', montant: 50000 },
  ]);

  const ajouterDepense = () => {
    setDepenses([...depenses, { titre: '', montant: 0}]);
  };

  const supprimerDepense = (index) => {
    const nouvellesDepenses = depenses.filter((_, i) => i !== index);
    setDepenses(nouvellesDepenses);
  };

  const handleChange = (index, field, value) => {
    const nouvellesDepenses = depenses.map((depense, i) =>
      i === index ? { ...depense, [field]: value } : depense
    );
    setDepenses(nouvellesDepenses);
  };

  return (
    <div>
      <h3 className='py-4'>Listes des dépenses</h3>
      <table className="border-collapse border border-slate-400 w-full">
        <thead>
          <tr>
            <th className='border border-slate-300'>TITRE</th>
            <th className='border border-slate-300'>MONTANT</th>
            <th className='border border-slate-300'>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {depenses.map((depense, index) => (
            <tr key={index}>
              <td className='border border-slate-300'>
                <input
                  type="text"
                  value={depense.titre}
                  onChange={(e) => handleChange(index, 'titre', e.target.value)}
                  placeholder="Titre de la dépense"
                />
              </td>
              <td className='border border-slate-300'>
                <input
                  type="number"
                  value={depense.montant}
                  onChange={(e) => handleChange(index, 'montant', parseFloat(e.target.value) || 0)}
                  placeholder="Montant de la dépense"
                />
              </td>
              <td className='border border-slate-300'>
                <button
                  className='bg-red-800 m-4 p-3 text-white'
                  onClick={() => supprimerDepense(index)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/ajoutdepense">
        <button className='bg-blue-600 m-4 p-3 text-white' onClick={ajouterDepense}>
          Ajouter une dépense
        </button>
      </Link>
    </div>
  );
};

export default Tableau;
