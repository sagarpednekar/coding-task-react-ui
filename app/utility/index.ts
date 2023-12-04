/**
 * Checks if a given value is numeric.
 *
 * This function determines whether the provided value is a valid numeric representation.
 * It can handle both string and number inputs, returning true if the value is numeric,
 * and false otherwise.
 *
 * @param {string | number} value - The value to be checked for numeric validity.
 *
 * @returns {boolean} - True if the value is numeric, false otherwise.
 */
export const isNumeric = (value: string | number): boolean => {
    return !isNaN(Number(value));
  };
  