import { ReactNode } from "react";
import { OptionsData } from "./options";
import { TagStyle } from "./tag";

export interface CustomTagProps {
  content: ReactNode;
  image: ReactNode;
  highlight: boolean;
}

export interface DropdownProps {
  options: OptionsData[];
  onSelect: (value: OptionsData) => void;
  alreadySelected: OptionsData[];
  filterText: string;
  parentStyle?: React.CSSProperties;
}

export interface TagContentProps {
  tag: OptionsData;
  onRemove: (name: string) => void;
  style: TagStyle;
}

export interface TagInputProps {
  tagOptions: OptionsData[];
}

export interface DropdownOptionProps extends OptionsData {
  filterText: string;
}

export interface UserImageProps {
  imageUrl: string;
  size: "small" | "large";
}
