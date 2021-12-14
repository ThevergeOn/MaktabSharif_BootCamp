function sortByHeight(array) {
  let newArr = array.filter(num => num > 0).sort((a, b) => a - b);
  let negativeNum = [];
  for (let index in array) {
    array[index] === -1 ? negativeNum.push(index) : false;
  }
  for (let i in negativeNum) {
    newArr.splice(negativeNum[i], 0, -1)
  } return newArr
}
console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));