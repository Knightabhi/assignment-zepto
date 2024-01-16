import { TagStyle } from "interface/tag";
import { TagColors } from "../staticData/tagColor";

export function getTagColor(index: number): TagStyle {
  const colorIndex = index % TagColors.length;

  return {
    backgroundColor: TagColors[colorIndex],
    color: "#737373",
  };
}
