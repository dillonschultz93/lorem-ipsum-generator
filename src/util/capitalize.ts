/**
 * @description Capitalizes a string passed as it's parameter.
 * @param string The string to be capitalized.
 * @returns A capitalized string.
 */
const capitalize = (string: string) => {
  const cleanedString = string.trim();

  return cleanedString.charAt(0).toUpperCase() + cleanedString.slice(1);
};

export default capitalize;
