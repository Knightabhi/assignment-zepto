// CustomTag.tsx

import React from "react";
import { CustomTagProps } from "interface/propInterface";
import styles from "./css/CustomTag.module.css";


/**
 * Renders a content container with image and optional highlight
 * @param {{content: any, image: any, highlight: boolean}} - Object containing content, image and highlight flag. 
 * @returns {JSX.Element} - JSX element to render
 * @description
 * - Conditionally applies highlight className based on highlight flag
 * - Renders image and content in container
 * - Returns JSX element to render container
 */
const CustomTag: React.FC<CustomTagProps> = ({ content, image, highlight }) => {
  return (
    <div className={highlight ? styles.containerHighlight : styles.container}>
      <div className={styles.image}>{image}</div>
      <div>{content}</div>
    </div>
  );
};

export default CustomTag;
