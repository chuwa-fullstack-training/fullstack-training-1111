/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    let coinNum=48;
    let coin1=1, n1=0;
    let coin5=5, n5=0;
    let coin25=25, n25=0;
    let coin50=50, n50=0;
    let solutions = 0; 

    for (n50 = 0; n50 <= 2; n50++) { // 2
        for (n25 = 0; n25 <= 4; n25++) { // 4
            for (n5 = 0; n5 <= 20 ; n5++) { // 20
                n1 = coinNum - (n50 + n25 + n5); // rest for 1c
                let totalValue = n1 * coin1 + n5 * coin5 + n25 * coin25 + n50 * coin50;

                if (totalValue === 100 && n1 >= 0) {
                    console.log(`Solution ${solutions + 1}: 1c=${n1}, 5c=${n5}, 25c=${n25}, 50c=${n50}`);
                    solutions++;
                }

                if (solutions >= 2) return; 
            }
        }
    }
}

pickCoins();