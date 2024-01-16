interface FilterFunction<T extends { name: string }> {
  filterText: string;
  options: T[];
  alreadySelected: T[];
}

/**
 * Filters options based on filter text and already selected options
 * @param {string} filterText - The filter text to match option names against. 
 * @param {T[]} options - The options to filter.
 * @param {T[]} alreadySelected - Options already selected.
 * @returns {T[]} The filtered options.
 * @description
 * - Filters options by name matching filterText if provided.
 * - Filters out options included in alreadySelected array.
 * - If no filterText, only filters out alreadySelected options.
 */
export const getFilteredData = <T extends { name: string }>({
  filterText,
  options,
  alreadySelected,
}: FilterFunction<T>) => {
  return filterText
    ? options.filter(
        (option) =>
          option.name.toLowerCase().includes(filterText.toLowerCase()) &&
          !alreadySelected.includes(option)
      )
    : options.filter((option) => !alreadySelected.includes(option));
};

// Helper function for simplified usage
export const filterOptions = <T extends { name: string }>(
  options: T[],
  filterText: string,
  alreadySelected: T[]
) => {
  const filterFunction: FilterFunction<T> = {
    filterText,
    options,
    alreadySelected,
  };
  return getFilteredData(filterFunction);
};
