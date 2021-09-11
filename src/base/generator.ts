import { WORDS } from '../constants/words';
import { capitalize, randomInt } from '../util';

export interface IRange {
  min: number;
  max: number;
}

export interface IGeneratorOptions {
  numberOfSentences?: IRange;
  numberOfWords?: IRange;
  numberOfParagraphs?: IRange;
  random?: number;
  words?: string[];
}

/**
 * @description Generator class that provides methods to generate words and sentences.
 */
class Generator {
  public numberOfSentences: IRange;
  public numberOfWords: IRange;
  public numberOfParagraphs: IRange;
  public random: number;
  public words: string[];

  constructor({
    numberOfSentences = { max: 7, min: 3 },
    numberOfWords = { max: 15, min: 5 },
    numberOfParagraphs = { max: 10, min: 3},
    random,
    words = WORDS,
  }: IGeneratorOptions = {}) {
    // Check if minimum number of sentences exceeds maximum number.
    if (numberOfSentences.min > numberOfSentences.max) {
      throw new Error(
        `Minimum number of sentences per paragraph (${numberOfSentences.min}) cannot exceed the maximum (${numberOfSentences.max})`,
      );
    }

    // Check if the minimum number of words exceeds maximum number.
    if (numberOfWords.min > numberOfWords.max) {
      throw new Error(
        `Minimum number of words per sentence (${numberOfWords.min}) cannot exceed the maximum (${numberOfWords.max})`,
      );
    }

    // Check if the minimum number of words exceeds maximum number.
    if (numberOfParagraphs.min > numberOfParagraphs.max) {
      throw new Error(
        `Minimum number of paragraphs (${numberOfParagraphs.min}) cannot exceed the maximum (${numberOfParagraphs.max})`,
      );
    }

    this.numberOfSentences = numberOfSentences;
    this.numberOfWords = numberOfWords;
    this.numberOfParagraphs = numberOfParagraphs;
    this.random = random || Math.random();
    this.words = words;
  }

  /**
   * @description Picks a random word from the word array.
   */
  public randomWord(): string {
    const index = randomInt(0, this.words.length - 1);
    return this.words[index];
  }

  /**
   * @description Generates a string of random words based on the WORDS array.
   * @param num Number of words.
   */
  public createWords(num?: number): string {
    const { min, max } = this.numberOfWords;
    let lengthOfWords = num || randomInt(min, max);
    let words = [];

    for (let i = lengthOfWords; i > 0; i--) {
      words.push(this.randomWord());
    }

    return words.join(' ');
  }

  /**
   * @description Generates a random sentence sourced from random words.
   * @param num Number of words.
   */
  public createSentence(num?: number): string {
    return `${capitalize(this.createWords(num))}.`;
  }

  /**
   * @description Generates a random paragraph based on the amount of sentences desired.
   * @param num Number of sentences.
   */
  public createSentences(num?: number): string {
    const { min, max } = this.numberOfSentences;
    let amountOfSentences = num || randomInt(min, max);
    let sentences = [];

    for (let i = amountOfSentences; i > 0; i--) {
     sentences.push(`${this.createSentence()} `);
    }

    return sentences.join('').trim();
  }

  /**
   * @description Generates a paragraph with the desired number of sentences.
   * @param num Number of paragraphs to be generated.
   */
   public createParagraphs(num?: number): string {
    let amountOfParagraphs = num || randomInt(this.numberOfParagraphs.max, this.numberOfParagraphs.min);
    let amountOfSentences = randomInt(this.numberOfSentences.max, this.numberOfSentences.min);
    let paragraphs = [];

    for(let i = amountOfParagraphs; i > 0; i--) {
      paragraphs.push(this.createSentences(amountOfSentences));
      paragraphs.push('\n');
    }

    return paragraphs.join('').trim();
  }
}

export default Generator;
