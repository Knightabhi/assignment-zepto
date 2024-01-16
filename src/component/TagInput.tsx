import React, { Suspense, lazy } from "react";
import CustomTag from "./CustomTag";
import TagContent from "./InputTagContent";
import { OptionsData } from "interface/options";
import Dropdown from "./Dropdown";
import { TagInputProps } from "interface/propInterface";
import { getTagColor } from "../utils/colorRandomizer";
import useTagInput from "../hooks/useTagInput";
import styles from "./css/TagInput.module.css";

const UserImage = lazy(() => import("./UserImage"));
const placeholderImageUrl = "https://placehold.co/600x400/png";

/**
 * Handles tag selection and input in a tag input component
 * @param {Object} tagOptions - Tag options object with name and imageUrl properties.
 * @returns {JSX.Element} - Returns the rendered tag input component.
 * @description
 * - Handles selecting tags from a dropdown on click.
 * - Handles removing already selected tags on click of remove icon.
 * - Handles scrolling the tag container on wheel event.
 * - Handles changing the input value on input change.
 * - Handles focusing the input on input focus.
 */
const TagInput: React.FC<TagInputProps> = ({ tagOptions }) => {
  const {
    selectedTags,
    inputValue,
    isDropdownOpen,
    backspacePressed,
    containerRef,
    handleTagSelect,
    handleRemoveTag,
    handleInputFocus,
    handleInputChange,
    handleKeyDown,
    handleScroll
  } = useTagInput();

  
  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.tagsContainer}
          onWheel={handleScroll} // Handle scrolling
          ref={containerRef}
        >
          {selectedTags.map((tag: OptionsData, index) => (
            <CustomTag
              content={
                <TagContent
                  tag={tag}
                  onRemove={() => handleRemoveTag(tag)}
                  style={getTagColor(index)}
                />
              }
              image={
                <Suspense
                  fallback={
                    <img
                      src={placeholderImageUrl}
                      alt="Loading..."
                      className={styles.imagePlaceholder}
                    />
                  }
                >
                  <UserImage imageUrl={tag.imageUrl} size="small" />
                </Suspense>
              }
              highlight={backspacePressed && index === selectedTags.length - 1}
              key={tag.name} // Ensure uniqueness
            />
          ))}
        </div>
        <div className={styles.inputContainer}>
          {selectedTags.length !== tagOptions.length ? (
            <input
              type="text"
              placeholder="Add new user.."
              value={inputValue}
              onChange={(e) => handleInputChange(e.target.value)}
              onFocus={handleInputFocus}
              className={styles.customInput}
              autoFocus
              onKeyDown={handleKeyDown}
            />
          ) : null}
          {(isDropdownOpen || inputValue) && (
            <Dropdown
              options={tagOptions}
              onSelect={(tag) => handleTagSelect(tag)}
              alreadySelected={selectedTags}
              filterText={inputValue}
              parentStyle={{
                position: "absolute",
                top: "132%",
                left: 0,
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default TagInput;
