
import React, { useState, useEffect } from 'react';

const ListeInscriptions = () => {
  const [inscriptions, setInscriptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {

    setInscriptions([
      { id: 1, ville: 'Casa', option: 'Dev Digital' },
      { id: 2, ville: 'Rabat', option: 'Dev Mobile' },
      { id: 3, ville: 'Kenitra', option: 'Infra Digitale' },
    
    ]);
  }, []);

  const filteredInscriptions = inscriptions.filter((inscription) =>
    inscription.ville.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher par ville"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredInscriptions.map((inscription) => (
          <li key={inscription.id}>
            {inscription.ville} - {inscription.option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListeInscriptions;
