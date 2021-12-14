//FIRST SOLUTION
// function commonChar(s1, s2) {
//   let count = 0;
//   for (let index = 0; index < s1.length; index++) {
//     let s2Index = s2.indexOf(s1[index]);
//     if (s2Index >= 0) {
//       count++;
//       s2 = s2.replace(s1[index], '');
//     }
//   }
//   return count;
// }
// console.log(commonChar("aabcc", "adcaa"))

//SECOND SOLUTION
let count = 0;
function match(s1, s2) {
  for (let index in s1) {
    s2.includes(s1[index]) ? count++ : false;
    s2 = s2.replace(s1[index], '');
  }
  return count
}
console.log(match("aabcc", "adcaa"))