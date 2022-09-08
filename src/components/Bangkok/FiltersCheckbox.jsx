import React from 'react';

export const FiltersCheckbox = props => {

  return (
    <div className="filters__checkbox">
      <input
        className="styled-checkbox"
        id="nuts-checkbox"
        type="checkbox"
        value="1"
      />
      <label htmlFor="nuts-checkbox">
        <span className="filters__label">No nuts</span></label
      >
    </div>
  );
};
