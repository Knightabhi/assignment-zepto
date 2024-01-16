// UserImage.tsx

import React from "react";
import styles from "./css/UserImage.module.css"; // Adjust the import path based on your project structure
import { UserImageProps } from "interface/propInterface";

/**
 * Renders an image with optional size class.
 * @param {object} {imageUrl, size} - Image URL and optional size. 
 * @returns {JSX.Element} - Image element.
 * @description
 *   - Renders an <img> element with the src from imageUrl.
 *   - Conditionally adds a className based on the size parameter. 
 *   - size can be "small" or anything else for the large size class.
 */
const UserImage: React.FC<UserImageProps> = ({ imageUrl, size }) => {
  return (
    <div>
      <img
        src={imageUrl}
        alt="User"
        className={
          size === "small" ? styles.userImageSmall : styles.userImageLarge
        }
        loading="lazy"
      />
    </div>
  );
};

export default UserImage;
