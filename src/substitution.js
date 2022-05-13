// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if(!alphabet || alphabet.length !== 26){
      return false
    }
    for(let i=0; i<alphabet.length; i++){
      const letter = alphabet[i]
      if(alphabet.indexOf(letter) !== alphabet.lastIndexOf(letter)){
        return false
      }
    }
    const fixCap = input.toLowerCase()
    const abc = "abcdefghijklmnopqrstuvwxyz"
    let ans = ""
    if (encode === true){
      for(let i=0; i<fixCap.length; i++){
        const oldLetter = fixCap[i]
        if(alphabet.includes(oldLetter)){
          const indexOld = abc.indexOf(oldLetter)
          const newLetter = alphabet[indexOld]
          ans += newLetter
        }else{
          ans += oldLetter
        }
      }
      }else{
      for(let i=0; i <fixCap.length; i++){
        const desiredLetter = fixCap[i]
        if(alphabet.includes(desiredLetter)){
          const indexDesired = alphabet.indexOf(desiredLetter)
          const hiddenLetter = abc[indexDesired]
          ans += hiddenLetter
        }else{
          ans += desiredLetter
        }
      }
    }
    
    return ans
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
