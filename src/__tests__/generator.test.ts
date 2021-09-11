import Generator from '../base/generator';
import { WORDS } from '../constants/words';

describe('Generator class', () => {
  let generator: Generator;

  beforeEach(() => {
    generator = new Generator();
  });

  it('should be instantiated with the default options', () => {
    const arrayEquals = (a: any[], b: any[]) => {
      return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val, index) => val === b[index]);
    };

    expect(generator.numberOfSentences).toEqual({ max: 7, min: 3 });
    expect(generator.numberOfWords).toEqual({ max: 15, min: 5 });
    expect(arrayEquals(WORDS, generator.words)).toEqual(true);
  });

  it('should throw an error if the minimum number of sentences exceeds the maximum', () => {
    try {
      generator = new Generator({ numberOfSentences: { max: 2, min: 8 } });
    } catch (error) {
      expect(error).toBeDefined;
      expect(error.message).toEqual('Minimum number of sentences per paragraph (8) cannot exceed the maximum (2)');
    }
  });

  it('should throw an error if the minimum number of words exceeds the maximum', () => {
    try {
      generator = new Generator({ numberOfWords: { max: 2, min: 8 } });
    } catch (error) {
      expect(error).toBeDefined;
      expect(error.message).toEqual('Minimum number of words per sentence (8) cannot exceed the maximum (2)');
    }
  });

  it('should set the random property when passed a number', () => {
    generator = new Generator({ random: 4 });

    expect(generator.random).toEqual(4);
  });

  describe('createWords() Method', () => {
    it('should create a specific number of random words', () => {
      const assertion = generator.createWords(7);

      expect(assertion.split(' ')).toHaveLength(7);
    });

    it('should create a random amount of words between the min and max range', () => {
      const min = 5;
      const max = 12;
      generator = new Generator({ numberOfWords: { min, max } });

      const assertion = generator.createWords();

      expect(assertion.length <= max);
      expect(assertion.length >= min);
    });
  });

  describe('createSentence() Method', () => {
    it('should create a sentence with a specific amount of words', () => {
      const assertion = generator.createSentence(12);

      expect(assertion.split(' ')).toHaveLength(12);
    });

    it('should create a sentence with an amount of words between the min and max range', () => {
      const min = 8;
      const max = 16;
      generator = new Generator({ numberOfWords: { min, max } });

      const assertion = generator.createSentence().split(' ');

      expect(assertion.length <= max);
      expect(assertion.length >= min);
    });
  });

  describe('createSentences() Method', () => {
    it('should create a paragraph with a specific amount of sentences', () => {
      const assertion = generator.createSentences(5);

      expect(assertion.split('. ')).toHaveLength(5);
    });

    it('should create a paragraph with an amount of sentences between the min and max range', () => {
      const min = 5;
      const max = 20;
      generator = new Generator({ numberOfSentences: { min, max } });

      const assertion = generator.createSentences().split('. ');

      expect(assertion.length <= max);
      expect(assertion.length >= min);
    });
  });

  describe('createParagraphs() Method', () => {
    it('should create a specific amount of paragraphs', () => {
      const assertion = generator.createParagraphs(3);

      expect(assertion.split('\n')).toHaveLength(3);
    });

    it('should create a grouping of paragraphs between the min and max range', () => {
      const paragraphMin = 3;
      const paragraphMax = 7;
      const sentenceMin = 5;
      const sentenceMax = 12;
      generator = new Generator({ 
        numberOfParagraphs: { 
          min: paragraphMin, max: paragraphMax 
        }, 
        numberOfSentences: { 
          min: sentenceMin, 
          max: sentenceMax 
        } 
      });

      const assertion = generator.createParagraphs().split('\n');

      expect(assertion.length <= paragraphMax);
      expect(assertion.length >= paragraphMin);
    });
  });
});
