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
});
