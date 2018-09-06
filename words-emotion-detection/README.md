## Emotional Detection in a String
  
*Note: Currently only supports two emotions: `happy` and `sad`*  
  
Training data is located in `data-*-words.js` file(s). Add more sentences to the files for better and accurate predictions.  
  
The `serialize_data.js` consist mainly of encoding functions which convert the strings of letters into an array of numbers.  
This is done so that we can use it for training the neural net.  
  
In `index.js` there are some strings in `test_strings` array which is used for, well, testing.  
  
Check out the awesome documentation of [`brain.js`](https://github.com/BrainJS/brain.js) for more info.
