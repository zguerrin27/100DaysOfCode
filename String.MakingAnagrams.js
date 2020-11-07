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


function makeAnagram(a, b) {
  const larger = a.length >= b.length ? a : b;
  const smaller = a.length < b.length ? a : b;

  //store character counts for larger string 
  const storage = {};
  for(const letter of larger){
    storage[letter] = (storage[letter] || 0) + 1;
  }

  //init counter for similar characters
  let counter = 0;
  //loop through second/smaller string to find count of similar characters 
  for(const letter of smaller){
    if(storage[letter] && storage[letter] > 0){
      storage[letter]--;
      counter++;
    }
  } 


  const diff_of_smaller = (smaller.length - counter)
  const diff_of_larger = (larger.length - smaller.length)

  return (2 * diff_of_smaller) + diff_of_larger


}
