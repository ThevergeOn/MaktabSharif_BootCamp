let findMax = {
  bigInt: Number.MAX_SAFE_INTEGER,
  max: function () {
    let compare = [];
    try {
      if (arguments.length == 0 || arguments === undefined) {
        return null;
      }
      for (let index in arguments) {
        let currentArgument = arguments[index];
        if (typeof currentArgument === "string" && currentArgument.replace(" ", "") === "") {
          throw error
        }
        let toBigInt = BigInt(currentArgument);
        if (toBigInt <= this.bigInt) {
          compare.push(toBigInt);
        } else {
          throw error;
        }
      } compare.sort((a, b) => (a > b) ? -1 : ((a < b) ? 1 : 0))
      return compare[0];
    }
    catch (error) {
      console.error("Big Error");
    }
  }
}
console.log(findMax.max(1n, 10n, 5n)); // 10n
console.log(findMax.max("10", 5n, 1)); // 10n
console.log(findMax.max()); //➞ null
console.log(findMax.max(2 ** 53 - 1)); // 9007199254740991n
findMax.max(2 ** 53); //  "Big Error"
findMax.max("10" / 3);//"Big Error"
console.log(findMax.max("10" / 2)); // 5n
console.log(findMax.max(10 - 12, 10 - 10, 10 - 11)); // 0n
console.log(findMax.max(0n)); // 0n
findMax.max(" "); // "Big Error"
findMax.max("10" / 3); // "Big Error"