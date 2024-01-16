import React from "react";
import styles from "./css/DropdownOption.module.css"; // Import the CSS file
import { DropdownOptionProps } from "interface/propInterface";
import UserImage from "./UserImage";


/**
 * Filters a user object and highlights the matching name text.
 * @param {{name, email, imageUrl, filterText}} - User object to filter - User object with name, email, imageUrl and filterText properties.
 * @returns {JSX.Element} - Filtered user component - Returns a JSX element displaying the filtered user.
 * @description
 - Lowercases the name and filter text for case-insensitive matching.
 - Splits the name into parts at the match index for highlighting. 
 - Renders the user image, name parts and email.
 - Applies highlighting className to the matching name part.
*/
const DropdownOption: React.FC<DropdownOptionProps> = ({
  name,
  email,
  imageUrl,
  filterText,
}) => {
  const lowerCaseName = name.toLowerCase();
  const lowerCaseFilterText = filterText.toLowerCase();
  const index = lowerCaseName.indexOf(lowerCaseFilterText);

  const nameParts =
    index !== -1
      ? [
          name.substring(0, index),
          name.substring(index, index + filterText.length),
          name.substring(index + filterText.length),
        ]
      : [name];

  return (
    <div className={styles.dropdownOption}>
      <UserImage imageUrl={imageUrl} size="large" />
      <div className={styles.name}>
        {nameParts.map((part, index) => (
          <span
            key={index}
            className={
              part.toLowerCase() === lowerCaseFilterText
                ? styles.nameLight
                : styles.name
            }
          >
            {part}
          </span>
        ))}
      </div>
      <div className={styles.email}>{email}</div>
    </div>
  );
};

export default DropdownOption;
