import React, { useState } from 'react';

const Revenu = () => {
  const [revenus, setRevenus] = useState([
    { titre: 'Salaire', montant: 100000 },
    { titre: 'Business', montant: 200000 },
    { titre: 'Bonus', montant: 50000 },
  ]);

  const ajouterRevenu = () => {
    setRevenus([...revenus, { titre: '', montant: 0 }]);
  };

  const supprimerRevenu = (index) => {
    const nouveauxRevenus = revenus.filter((_, i) => i !== index);
    setRevenus(nouveauxRevenus);
  };

  const handleChange = (index, field, value) => {
    const nouveauxRevenus = revenus.map((revenu, i) =>
      i === index ? { ...revenu, [field]: value } : revenu
    );
    setRevenus(nouveauxRevenus);
  };

  return (
    <div>
      <h3 className='py-4'>Listes Revenus</h3>
      <table className="border-collapse border border-slate-400 w-full">
        <thead>
          <tr>
            <th className='border border-slate-300'>TITRE</th>
            <th className='border border-slate-300'>MONTANT</th>
            <th className='border border-slate-300'>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {revenus.map((revenu, index) => (
            <tr key={index}>
              <td className='border border-slate-300'>
                <input
                  type="text"
                  value={revenu.titre}
                  onChange={(e) => handleChange(index, 'titre', e.target.value)}
                  placeholder="Titre du revenu"
                />
              </td>
              <td className='border border-slate-300'>
                <input
                  type="number"
                  value={revenu.montant}
                  onChange={(e) => handleChange(index, 'montant', parseFloat(e.target.value) || 0)}
                  placeholder="Montant du revenu"
                />
              </td>
              <td className='border border-slate-300'>
                <button
                  className='bg-red-800 m-4 p-3 text-white'
                  onClick={() => supprimerRevenu(index)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <Link> */}
      <button className='bg-blue-600 m-4 p-3 text-white' onClick={ajouterRevenu}>
        Ajouter un revenu
      </button>
      {/* </Link */}
    </div>
  );
};

export default Revenu;
