import capitalize from '../util/capitalize';

describe('Capitalize utility method', () => {
  it('should capitalize the first letter of the string', () => {
    const testString = 'this is a string.';

    expect(capitalize(testString)).toEqual('This is a string.');
  });

  it('should return the same string if the first letter is already capitalized', () => {
    const testString = 'I am already capitalized';

    expect(capitalize(testString)).toEqual(testString);
  });

  it('should return an empty string if passed an empty string', () => {
    const testString = '';

    expect(capitalize(testString)).toEqual('');
  });
});
