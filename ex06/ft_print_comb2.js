function doubleDigits (digit) {
  if (digit < 10) return '0' + digit
  return digit.toString()
}

function doubleComb() {
    for (let i = 0; i <= 99; i++) {
      for (let j = i + 1; j <= 99; j++) {
       if (doubleDigits(i) !== doubleDigits(j)) {
        const combinaison = [doubleDigits(i),doubleDigits(j)].sort().join(" ");
       console.log(combinaison);
      } else {

      }
    }
  }
}
  doubleComb();