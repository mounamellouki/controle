
import React, { useState } from 'react';

const Autocomplete = ({ suggestions }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <ul>
        {suggestions
          .filter((suggestion) =>
            suggestion.toLowerCase().includes(inputValue.toLowerCase())
          )
          .map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
      </ul>
    </div>
  );
};

export default Autocomplete;
