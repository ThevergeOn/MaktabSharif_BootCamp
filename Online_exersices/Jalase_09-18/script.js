///First exersice///
/*function personFactory(firstName, lastName, age, id) {
  return {
    firsName: firstName,
    lastName: lastName,
    age: age,
    id: id,

    getFullName() {
      return "Mr." + this.firsName + " " + this.lastName;
    },
  };
}

function employeeFactory(firstName, lastName, age, id, baseSalary) {
  let rate = 50;

  function calculateExtraIncome(overTime) {
    return rate * overTime + 10;
  }

  const personObject = personFactory(firstName, lastName, age, id);
  const employeeObject = {
    baseSalary: baseSalary,
    overTime: 0,

    getFinalSalary() {
      return this.baseSalary + calculateExtraIncome(this.overTime);
    },

    calcTax() {
      return this.baseSalary * 0.1;
    },
  };

  return Object.assign(personObject, employeeObject);
}

function bossFactory(firstName, lastName, age, id) {
  const personObject = personFactory(firstName, lastName, age, id);
  const bossObject = {
    role: "Manager",
    calcTax() {
      return 20000;
    },
  };

  return Object.assign(personObject, bossObject);
}

const alireza = employeeFactory("Alireza", "Molaee", 27, "86153485134", 10000);
const abbas = bossFactory("Abbas", "Boazar", 20, "612846124");

console.log(abbas);
console.log(alireza);

console.log(abbas.getFullName(), abbas.calcTax());
console.log(alireza.getFullName(), alireza.calcTax());
*/
//FIRST CHALLENGE///

function factoryCircles(x,y,r){
  return{
    x:x,
    y:y,
    r:r,
    draw() {
    drawCircle(this)
  }
}
}
let obj1=  factoryCircles(400,200,100)
let obj2 = factoryCircles(370, 150, 10)
let obj3 = factoryCircles(430, 150, 10)
obj1.draw()
obj2.draw()
obj3.draw()


function factoryLines(xStart, yStart, xEnd, yEnd) {
  return {
    xStart: xStart,
    yStart: yStart,
    xEnd: xEnd,
    yEnd: yEnd,
    draw() {
      drawLine(this.xStart, this.yStart, this.xEnd, this.yEnd)
    }
  }
}
let obj4 = factoryLines(400, 180, 400, 210)
let obj5 = factoryLines(350, 250, 450, 250)
obj4.draw()
obj5.draw()

//{
//FACE
// const centerPoint = {
//   x: 400,
//   y: 200,
//   r:100,
// };
// drawCircle(centerPoint);
//NOISE
// const nosePointStart={
// x:400,
// y:180
// }
// const nosePointEnd = {
//   x: 400,
//   y: 210
// }
// drawLine(nosePointStart,nosePointEnd)
// lips
// const lipsPointerStart={
//   x:350,
//   y:250,
// }
// const lipsPointEnd ={
//   x:450,
//   y:250,
// }
// drawLine(lipsPointerStart,lipsPointEnd)
// EYE
// const eyesRight={
//   x:370,
//   y:150,
//   r:10
// }
// const eyesLeft ={
//   x:430,
//   y:150,
//   r:10
// }
// drawCircle(eyesLeft)
// drawCircle(eyesRight)}