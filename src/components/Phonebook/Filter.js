import React from 'react';

const Filter = ({ value, onChange }) => (
  <label>
    <input type="text" value={value} onChange={onChange} />
    Find contact by name
  </label>
);
export default Filter;
