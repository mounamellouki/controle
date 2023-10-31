
import React from 'react';
import Autocomplete from './Autocomplete';

const InscriptionForm = () => {
  const villes = ["Casa", "Rabat", "Kenitra", "Merrakech", "Meknes"];
  const options = ["Dev Digital", "Dev Mobile", "Infra Digitale"];

  return (
    <div>
      <form>
        <Autocomplete suggestions={villes} />
        <Autocomplete suggestions={options} />
        {}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InscriptionForm;
