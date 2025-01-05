const Sentiment = require('sentiment');
const sentiment = new Sentiment();

const text = "I absolutely love coding! It's so much fun and rewarding.";

const result = sentiment.analyze(text);

console.log('Text:', text);
console.log('Sentiment Score:', result.score);
console.log('Comparative Score:', result.comparative);
console.log('Details:', result.words); 
console.log('Positive Words:', result.positive); 
console.log('Negative Words:', result.negative); 
