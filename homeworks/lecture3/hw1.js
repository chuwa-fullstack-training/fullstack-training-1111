/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    let solutionsFound = 0;
    for (let num1c = 0; num1c <= 48; num1c++) {
        for (let num5c = 0; num5c <= 48; num5c++) {
            for (let num25c = 0; num25c <= 48; num25c++) {
                for (let num50c = 0; num50c <= 48; num50c++) {
                    if (num1c + num5c + num25c + num50c === 48) {
                        let totalValue = num1c * 1 + num5c * 5 + num25c * 25 + num50c * 50;
                        if (totalValue === 100) {
                            console.log(`Solution ${solutionsFound + 1}: 1c: ${num1c}, 5c: ${num5c}, 25c: ${num25c}, 50c: ${num50c}`);
                            solutionsFound++;
                            if (solutionsFound === 2) {
                                return; 
                            }
                        }
                    }
                }
            }
        }
    }
}