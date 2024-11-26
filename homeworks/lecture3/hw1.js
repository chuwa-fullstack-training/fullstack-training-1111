/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */

const coins = [1,5,25,50]
const ans = []

function pickCoins(i, sum, solution) {
    if (ans.length >= 2) return;
    if (solution.length === 48 && sum === 100){
        ans.push([...solution])
        // console.log(solution);
        return;
    }

    if (sum >= 1000 || solution.length > 48){
        return;
    }

    for (let j = i; j < coins.length; j++) {
        pickCoins(j, sum + coins[j], solution.concat(coins[j]));
    }
    
}


pickCoins(0, 0, []);
console.log('Solutions:', ans);
/**
 * Solutions: [
  [
    1, 1,  1,  1, 1, 1, 1, 1, 1, 1, 1,
    1, 1,  1,  1, 1, 1, 1, 1, 1, 1, 1,
    1, 1,  1,  1, 1, 1, 1, 1, 1, 1, 1,
    1, 1,  1,  1, 1, 1, 1, 1, 1, 1, 1,
    1, 5, 25, 25
  ],
  [
    1, 1, 1,  1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1,  1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1,  1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1,  1, 1, 1, 1, 5, 5, 5, 5,
    5, 5, 5, 25
  ]
]
*/