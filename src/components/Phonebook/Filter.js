import React from 'react';
import s from './phonebook.module.css';

const Filter = ({ value, onChange }) => (
  <form className={s.form}>
    <label className={s.label}>
      Find contact by name
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={s.input}
      />
    </label>
  </form>
);
export default Filter;
