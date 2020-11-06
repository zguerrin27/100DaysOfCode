// let firstString = "cde"
// let secondString = 'abc'
let firstString = 'fcrxzwscanmligyxyvym'
let secondString = 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'


// should be 30

//passes first two test cases 

function makeAnagram(a, b) {
  let c = a.concat(b).split('');
  let removedDupes = [...new Set(c)]
  console.log(removedDupes.length)
  let removedCount = (c.length - removedDupes.length) * 2;
  return final = c.length - removedCount
}

console.log(makeAnagram(firstString, secondString))

