import React from 'react';

import s from './Filter.module.css';

const Filter = ({value, onChange}) => {
  return (
    <div className={s.box}>
      <label>Find contacts by name
        <input value = {value} onChange = {onChange}/></label>
    </div>

  )
}

export default Filter;