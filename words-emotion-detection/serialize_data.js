
const encode = word => {
  const result = [];
  word.split('').map(character => {
    //console.log(character);
    result.push((character.charCodeAt(0) / 255));
  });
  return result;
}


const encodeData = data => {
  /*
    data would be of the format: 
      [
        {input: "I am good", output: {happy: 1}},
        {input: "I am bad", output: {sad: 1}}
      ]
  */
  return data.map(d => {
    return {
      input: encode(d.input),
      output: d.output
    }
  });
}


const makeLengthSame = (data, maxLength) => {
  /*
    make all the inputs of same length
  */  
  for (let i = 0; i < data.length; i++) {
    while(data[i].input.length < maxLength){
      data[i].input.push(0);
    }
  };  
  return data;
}

const getMaxLength = (data) => {
  let maxLength = -1;
  for (let i = 0; i < data.length; i++) {
    if(data[i].input.length > maxLength){
      maxLength = data[i].input.length;
    }
  };
  return maxLength;
}

const serialize = data => makeLengthSame(encodeData(data), getMaxLength(data))


module.exports = {
  serialize: serialize,
  makeLengthSame: makeLengthSame,
  getMaxLength: getMaxLength,
  encode: encode
}
