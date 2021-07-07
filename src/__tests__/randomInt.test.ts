import randomInt from '../util/randomInt';

describe('Random integer method', () => {
  it('should generate a number equal to the min and max', () => {
    const assertion = randomInt(9, 9);

    expect(assertion).toEqual(9);
  });

  it('should return a random number between 1 and 3', () => {
    const assertion = randomInt(1, 3, Math.random());

    expect(assertion).toBeGreaterThanOrEqual(1);
    expect(assertion).toBeLessThanOrEqual(3);
  });
});
