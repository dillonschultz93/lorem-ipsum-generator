import { WORDS } from './constants/words';
import LoremIpsum from './base/lorem';

export interface ILoremIpsum {
  count?: number;
  sentenceMinimum?: number;
  sentenceMaximum?: number;
  random?: number;
  wordMinimum?: number;
  wordMaximum?: number;
  units?: 'words' | 'word' | 'sentences' | 'sentence' | 'paragraphs' | 'paragraph';
  words?: string[];
};

const loremIpsum = ({
  count = 1,
  sentenceMinimum = 3,
  sentenceMaximum = 7,
  random,
  wordMinimum = 5,
  wordMaximum = 15,
  units = 'sentences',
  words = WORDS
}: ILoremIpsum = {}): string => {
  const options = {
    random,
    sentencesPerParagraph: {
      max: sentenceMaximum,
      min: sentenceMinimum
    },
    words,
    wordsPerSentence: {
      max: wordMaximum,
      min: wordMinimum
    },
  };

  const constructedLorem: LoremIpsum = new LoremIpsum(options);
  
  switch (units) {
    // Create the number of paragraphs equal to the amount passed in the count argument.
    case 'paragraphs':
    case 'paragraph':
      return constructedLorem.generateParagraphs(count);

    // Create a paragraph with the amount of sentences equal to the amount passed in the count argument.
    case 'sentences':
      case 'sentence':
        return constructedLorem.generateSentences(count);

    // Create a sentence with the amount of words equal to the amount passed in the count argument.
    case 'words':
      case 'word':
        return constructedLorem.generateWords(count);

    default:
      return '';
  }
};

export { loremIpsum, LoremIpsum }
