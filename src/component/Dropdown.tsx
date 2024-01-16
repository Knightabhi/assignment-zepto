// Dropdown.tsx

import { DropdownProps } from "interface/propInterface";
import React from "react";
import styles from "./css/Dropdown.module.css";
import { filterOptions } from "../utils/filterData";
import DropdownOption from "./DropdownOption";

/**
   * Renders a filtered select component
   * @param {object[]} options - The options object containing options data.
   * @param {function} onSelect - Callback function called on select change. 
   * @param {string} filterText - The filter text for option filtering.
   * @returns {JSX.Element} - The rendered select component.
   * @description
   - Filters the options array based on filterText matching option name text.
  - Renders a select element with the filtered options mapped as options.
  - Calls the onSelect callback on change with the selected option value.
  */
const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  alreadySelected,
  filterText,
  parentStyle,
}): JSX.Element => {
  const filteredOptions = filterOptions(options, filterText, alreadySelected);

  return (
    <div className={styles.dropdown} style={parentStyle}>
      {filteredOptions.map((option, index) => (
        <div
          key={option.email}
          style={{
            padding: "8px",
            cursor: "pointer",
          }}
          onClick={() => onSelect(option)}
        >
          <DropdownOption filterText={filterText} {...option} />
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
