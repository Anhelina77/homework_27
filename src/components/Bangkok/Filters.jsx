import React from 'react';
import {FiltersSlider} from "components/Bangkok/FiltersSlider";
import {FiltersCheckbox} from "components/Bangkok/FiltersCheckbox";

export const Filters = (props) => {
  return (
    <div className="filters">
      <div className="filters__group">
        <label className="filters__label">Max spiciness</label>
        <FiltersSlider/>
      </div>
      <div className="filters__group">
        <FiltersCheckbox/>
      </div>
    </div>
  );
};
