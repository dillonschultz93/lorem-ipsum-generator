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
   * @description Generates sentences.
   * @param num Number of words in the sentence.
   */
  public generateSentence(num?: number): string {
    return this.generator.createSentence(num);
  }

  /**
   * @description Generates an array of paragraphs.
   * @param num Number of paragraphs to be generated.
   */
  public generateParagraphs(num?: number): string[] {
    let amountOfParagraphs = num || randomInt(this.generator.numberOfParagraphs.max, this.generator.numberOfParagraphs.min);
    let paragraphs = [];

    for(let i = amountOfParagraphs; i > 0; i--) {
      paragraphs.push(this.generator.createParagraphs());
    }

    return paragraphs;
  }
}

export default LoremIpsum;
