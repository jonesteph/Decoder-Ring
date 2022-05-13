// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    const lookup = {"11":"a", "12":"f", "13":"l", "14":"q", "15":"v",
                    "21":"b", "22":"g", "23":"m", "24":"r", "25":"w",
                    "31":"c", "32":"h", "33":"n", "34":"s", "35":"x",
                    "41":"d", "42":"i/j", "43":"o", "44":"t", "45":"y",
                    "51":"e", "52":"k", "53":"p", "54":"u", "55":"z"
                   }
    const abc = "abcdefghijklmnopqrstuvwxyz"
    const num = "123456789"
    let ans = ""
    if(encode === true){
      for(let i=0; i<input.length; i++){
        const value = input[i]
        if(abc.includes(value)){
          let returnKey = Object.keys(lookup).find((key) => {
            return lookup[key] === value
          })
          if(value === "i" || value === "j"){
            returnKey = "42"
          }
          ans += returnKey
        }else{
          ans += value
        }
      }
    }else{
      let count = 0 
      for(let i=0; i<input.length; i++){
        if(num.includes(input[i])){
          count++
        }
      }
      if(count % 2 !== 0){
        return false
      }
      for(let i=0; i<input.length; i++){
        if(input[i] !== " "){
          const coord = input[i]+input[i+1]
          ans += lookup[coord]
          i++
        }else{
          ans += " "
        }
      }
    }
    return ans
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
