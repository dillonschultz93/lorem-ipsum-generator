/**
 * @description Capitalizes a string passed as it's parameter.
 * @param string The string to be capitalized.
 * @returns A capitalized string.
 */
const capitalize = (str: string) => {
  const trimmedString = str.trim();

  return trimmedString.charAt(0).toUpperCase() + trimmedString.slice(1);
};

export default capitalize;
