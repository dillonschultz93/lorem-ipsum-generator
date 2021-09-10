import { randomInt } from '../util';
import Generator, { IGeneratorOptions } from './generator';

class LoremIpsum {
  public generator: Generator;

  constructor(options: IGeneratorOptions = {}) {
    // Initialize the generator with options passed to the constructor.
    this.generator = new Generator(options);
  }

  /**
   * @description Generates words
   * @param num Number of words.
   */
  public generateWords(num?: number): string {
    return this.generator.createWords(num);
  }

  /**
   * @description Generates a sentence with a desired number of words.
   * @param num Number of words in the sentence.
   */
  public generateSentences(num?: number): string {
    return this.generator.createSentences(num);
  }

  /**
   * @description Generates a paragraph with the desired number of sentences.
   * @param num Number of paragraphs to be generated.
   */
  public generateParagraphs(num?: number): string {
    return this.generator.createParagraphs(num);
  }
}

export default LoremIpsum;
