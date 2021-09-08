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
}: ILoremIpsum = {}): string | string[] => {
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
    case 'paragraphs':
    case 'paragraph':
      return constructedLorem.generateParagraph(count);

    case 'sentences':
      case 'sentence':
        return constructedLorem.generateSentence(count);

    case 'words':
      case 'word':
        return constructedLorem.generateWords(count);

    default:
      return '';
  }
};

console.log(loremIpsum({ count: 5, units: 'paragraphs' }));

export { loremIpsum, LoremIpsum }
