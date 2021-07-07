/**
 * @description Generates a random integer.
 * @param min The minimum threshold.
 * @param max The maximum threshold.
 * @param random Number to pass that seeds a random number.
 * @returns An integer.
 */
const randomInt = (min: number, max: number, random?: number): number => {
  const seed = random ? random : Math.random();
  return Math.floor(seed * (max - min + 1) + min);
}

export default randomInt;
