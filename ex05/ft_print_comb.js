function troisChiffres() {
    for (let i = 0; i <= 9; i++) {
        for (let j = i; j <= 9; j++) {
            for (let k = j; k <= 9; k++) {
                if (i !== j && i !== k && j !== k) {
                    console.log(i + "" + j + "" + k);
                }
            }
        }
    }
}