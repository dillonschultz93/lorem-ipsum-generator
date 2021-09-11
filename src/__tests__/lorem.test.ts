import LoremIpsum from '../base/lorem';

describe('Lorem Ipsum class', () => {

  describe('generateWords() Method', () => {
    it('should generate a set amount of words', () => {
      const loremIpsum = new LoremIpsum();
  
      const assertion = loremIpsum.generateWords(3).split(" ");
  
      expect(assertion).toHaveLength(3);
    });

    it('should generate a random amount of words within the min and max range', () => {
      const min = 4;
      const max = 10;
      const loremIpsum = new LoremIpsum({
        numberOfWords: { min, max }
      });
  
      const assertion = loremIpsum.generateWords().split(" ");
  
      expect(assertion.length <= max).toBe(true);
      expect(assertion.length >= min).toBe(true);
    });
  });

  describe('generateSentences() Method', () => {
    it('should generate a random sentence with a random amount of words', () => {
      const loremIpsum = new LoremIpsum();
  
      const assertion = loremIpsum.generateSentences(3).split(". ");
  
      expect(assertion).toHaveLength(3);
    });

    it('should generate a random sentence of with a set threshold of words', () => {
      const min = 3;
      const max = 7;
      const loremIpsum = new LoremIpsum({
        numberOfWords: { min, max }
      });
  
      const assertion = loremIpsum.generateSentences().split(". ");
  
      expect(assertion.length <= max).toBe(true);
      expect(assertion.length >= min).toBe(true);
    });
  });

  describe('generateParagraphs() Method', () => {
    it('should generate a set amount of paragraphs', () => {
      const loremIpsum = new LoremIpsum();
  
      const assertion = loremIpsum.generateParagraphs(5);
  
      expect(assertion.split('\n')).toHaveLength(5);
    });

    it('should generate a random amount of paragraphs', () => {
      const min = 2;
      const max = 4;
      const loremIpsum = new LoremIpsum({
        numberOfParagraphs: { min, max }
      });

      const assertion = loremIpsum.generateParagraphs()

      expect(assertion.split('\n').length <= max).toBe(true);
      expect(assertion.split('\n').length >= min).toBe(true);
    });
  });
});
