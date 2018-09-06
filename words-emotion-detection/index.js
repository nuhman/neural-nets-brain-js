const brain = require("brain.js");

// import our datasets
const happy = require('./data_happy_words');
const sad = require("./data_sad_words");

const moods = [
  ...happy,
  ...sad
];

const serializer = require('./serialize_data');

const net = new brain.NeuralNetwork()
// start training
//console.log(serializer.serialize(moods))

net.train(serializer.serialize(moods), {log: true})

// start predictions

let test_strings = [
  "I'll be good",
  "I feel not bad",
  "This is great",
  "This is good",
  "This is bad"
]

let maxLength = serializer.getMaxLength(moods);

test_strings.map(str => {  
  let sample = serializer.encode(str);
  let data = serializer.makeLengthSame([{input: sample}], maxLength);
  let pred_output = net.run(data[0].input);
  console.log(str + ": " , pred_output);  
});
