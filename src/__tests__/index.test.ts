import { loremIpsum } from '../index';

describe('loremIpsum', () => {
  it('should generate one sentence by default.', () => {
    const assertion = loremIpsum();

    expect(assertion.slice(-1)).toEqual('.');
  });

  it('should return the specified number of words', () => {
    const count = 12;
    const assertionOne = loremIpsum({ count, units: 'word' });
    const assertionTwo = loremIpsum({ count, units: 'words' });

    expect(assertionOne.split(' ')).toHaveLength(count);
    expect(assertionTwo.split(' ')).toHaveLength(count);
  });

  it('should return the specified number of paragraphs', () => {
    const count = 5;
    const assertionOne = loremIpsum({ count, units: 'paragraph' });
    const assertionTwo = loremIpsum({ count, units: 'paragraphs' });

    expect(assertionOne.split('\n')).toHaveLength(count);
    expect(assertionTwo.split('\n')).toHaveLength(count);
  });

  it('should return the specified number of sentences', () => {
    const count = 3;
    const assertionOne = loremIpsum({ count, units: 'sentence' });
    const assertionTwo = loremIpsum({ count, units: 'sentences' });

    expect(assertionOne.split('. ')).toHaveLength(count);
    expect(assertionTwo.split('. ')).toHaveLength(count);
  });

  it('should adjust the minimum and maximum word count per sentence', () => {
    const min = 2;
    const max = 6;
    const assertion = loremIpsum({ wordMinimum: min, wordMaximum: max}).split(' ');

    expect(assertion.length <= max).toBe(true);
    expect(assertion.length >= min).toBe(true);
  });

  it('should adjust the minimum and maximum sentence count per paragraph', () => {
    const min = 3;
    const max = 8;
    const assertion = loremIpsum({ sentenceMinimum: min, sentenceMaximum: max, units: 'paragraph'}).split('. ');

    expect(assertion.length <= max).toBe(true);
    expect(assertion.length >= min).toBe(true);
  });
});
