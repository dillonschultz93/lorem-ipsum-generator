import { WORDS } from "../constants/words";
import { capitalize, randomInt } from "../util";

interface IRange {
  min: number;
  max: number;
};

interface IGeneratorOptions {
  numberOfSentences?: IRange;
  numberOfWords?: IRange;
  random?: number;
  words?: string[];
}

/**
 * @description Generator class that provides methods to generate words and sentences.
 */
class Generator {
  public numberOfSentences: IRange;
  public numberOfWords: IRange;
  public random: number;
  public words: string[];

  constructor({
    numberOfSentences = { max: 7, min: 3 },
    numberOfWords = { max: 15, min: 5 },
    random,
    words = WORDS
  }: IGeneratorOptions = {}) {
    // Check if minimum number of sentences exceeds maximum number.
    if (numberOfSentences.min > numberOfSentences.max) {
      throw new Error(
        `Minimum number of sentences per paragraph (${
          numberOfSentences.min
      }) cannot exceed the maximum (${numberOfSentences.max})`);
    }

    // Check if the minimum number of words exceeds maximum number.
    if (numberOfWords.min > numberOfWords.max) {
      throw new Error(
        `Minimum number of words per sentence (${
          numberOfWords.min
      }) cannot exceed the maximum (${numberOfWords.max})`);
    }

    this.numberOfSentences = numberOfSentences;
    this.numberOfWords = numberOfWords;
    this.random = random || Math.random();
    this.words = words;
  };

  /**
   * @description Picks a random word from the word array.
   */
  public randomWord(): string {
    const index = randomInt(0, this.words.length - 1);
    return this.words[index];
  }

  /**
   * @description Generates an array of random words based on the WORDS array.
   * @param num Number of words.
   */
  public createWords(num?: number): string {
    const { min, max } = this.numberOfWords;
    let lengthOfWords = num || randomInt(min, max);
    let words = [];

    for (let i = lengthOfWords; i > 0; i-- ) {
      words.push(this.randomWord());
    };

    return words.join(' ');
  }

  /**
   * @description Generates a random sentence sourced from random words.
   * @param num Number of sentences.
   */
  public createSentence(num?: number): string {
    return `${capitalize(this.createWords(num))}.`
  }
};

export default Generator;
