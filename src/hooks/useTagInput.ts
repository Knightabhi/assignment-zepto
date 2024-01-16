import { OptionsData } from "interface/options";
import { useRef, useState } from "react";

interface UseTagInputReturnValue {
  selectedTags: OptionsData[];
  inputValue: string;
  backspacePressed: boolean;
  isDropdownOpen: boolean;
  containerRef: React.RefObject<HTMLDivElement>;
  handleScroll: React.WheelEventHandler<HTMLDivElement>;
  handleTagSelect: (tag: OptionsData) => void;
  handleRemoveTag: (tag: OptionsData) => void;
  handleInputFocus: () => void;
  handleInputChange: (value: string) => void;
  handleKeyDown: (event: React.KeyboardEvent) => void;
}

/**
 * Manages state and handlers for a tag input component
 * @param {object} initialTags - Initial tags to preselect. 
 * @returns {object} - An object containing selected tags, input value, dropdown open state and handler functions.
 * @description
 - Sets initial selected tags and input value from props
- Handles selecting a tag from the dropdown by adding it and clearing input
- Handles removing a selected tag  
- Handles focusing the input to open the dropdown
- Handles changing the input value
*/
const useTagInput = (): UseTagInputReturnValue => {
  const [selectedTags, setSelectedTags] = useState<OptionsData[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [backspacePressed, setBackSpacePressed] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll: React.WheelEventHandler<HTMLDivElement> = (e) => {
    const container = containerRef.current;
    if (container) {
      container.scrollLeft += e.deltaY;
    }
  };

  const handleTagSelect = (tag: OptionsData) => {
    setSelectedTags((prevTags) => [...prevTags, tag]);
    setInputValue("");
    setBackSpacePressed(false);
  };

  const handleRemoveTag = (tag: OptionsData) => {
    setSelectedTags((prevTags) => prevTags.filter((t) => t !== tag));
  };

  const handleInputFocus = () => {
    setIsDropdownOpen(true);
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Backspace" && inputValue === "" && !backspacePressed) {
      setBackSpacePressed(true);
    } else if (backspacePressed && selectedTags.length > 0) {
      handleRemoveTag(selectedTags[selectedTags.length - 1]);
    } else if (selectedTags.length === 0 && inputValue !== "") {
      setBackSpacePressed(false);
    }
  };

  return {
    selectedTags,
    inputValue,
    backspacePressed,
    isDropdownOpen,
    containerRef,
    handleScroll,
    handleTagSelect,
    handleRemoveTag,
    handleInputFocus,
    handleInputChange,
    handleKeyDown,
  };
};

export default useTagInput;
