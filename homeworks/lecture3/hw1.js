/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
  const solution1 = { 
    "1c": 30, 
    "5c": 10, 
    "25c": 3, 
    "50c": 1 
  };

  const solution2 = { 
    "1c": 40, 
    "5c": 5, 
    "25c": 2, 
    "50c": 1 
  };

  console.log("Solution 1:", solution1);
  console.log("Solution 2:", solution2);
}
