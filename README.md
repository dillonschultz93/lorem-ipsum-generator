# lorem-ipsum-generator
### A JavaScript module that generates lorem ipsum filler text.

## Installation
```
npm i lorem-ipsum-generator
```

## Usage
There are two ways to use `lorem-ipsum-generator`:

### Class
The Class exposes three simple methods to generate filler text.

```
import { LoremIpsum } from 'lorem-ipsum-generator';

const lorem = new LoremIpsum({
  numberOfSentences: {
    max: 10,
    min: 5
  },
  numberOfWords: {
    max: 24,
    min: 8
  }
});

lorem.generateWords(12); // generates 12 words
lorem.generateSentences(8); // generates 8 sentences
lorem.generateParagraphs(4); // generates 4 paragraphs
```

### Function
The function takes an object with options passed as it's argument to generate filler text.
```
import { loremIpsum } from 'lorem-ipsum-generator';

const words = loremIpsum({ count: 12, units: 'words' }); // generates 12 words
const sentences = loremIpsum({ count: 8, units: 'sentences' }); // generates 8 sentences
const paragraphs = loremIpsum({ count: 4, units: 'paragraphs' }); // generates 4 paragraphs
```

These are the options that can be configured and passed to the Function:

```
loremIpsum({
  count: 1,                // Number of 'words' | 'sentences' | 'paragraphs'
  sentenceMinimum: 3,      // Minimum number of sentences in a paragraph
  sentenceMaximum: 7,      // Maximum number of sentences in a paragraph
  random: Math.random(),   // A PRNG function
  wordMinimum: 5,          // Minimum number of words in a sentence
  wordMaximum: 15,         // Maximum number of words in a sentence
  units: 'sentences',      // 'words' | 'sentences' | 'paragraphs'
  words: ['lorem', ...]    // An array of words to pull from
});
```

## License
MIT License

Copyright (c) 2021 Dillon Schultz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.