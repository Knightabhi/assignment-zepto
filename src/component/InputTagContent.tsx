import { TagContentProps } from "interface/propInterface";
import React from "react";
import styles from "./css/TagContent.module.css";



/**
 * Renders a tag component
 * @param {object} tag - Tag object with name property.
 * @param {function} onRemove - Callback to remove tag. 
 * @param {object} style - Inline styles for component.
 * @returns {JSX.Element}
 * @description
 * - Renders the tag name inside a div.
 * - Renders a remove icon that calls the onRemove callback when clicked. 
 * - Applies inline styles passed via the style parameter.
*/
const TagContent: React.FC<TagContentProps> = ({
  tag,
  onRemove,
  style
}): JSX.Element => {
  return (
      <div className={styles.infoContainer} style={style}>
        <div className={styles.tagName}>{tag.name}</div>
        <div className={styles.removeIcon} onClick={() => onRemove(tag.name)}>
          X
        </div>
      </div>
  );
};

export default TagContent;
