/**
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
  // implement here
  const coins = [1, 5, 25, 50];

  let res = [];

  function getSum(array) {
    let sum = 0;
    for (let num of array) {
      sum += num;
    }

    return sum;
  }

  function backtrack(path, start) {
    const sum = getSum(path);
    if (path.length > 48 || sum > 100) {
      return;
    }

    if (sum === 100 && path.length === 48) {
      res.push([...path]);
      if (res.length === 2) return;
      return;
    }

    for (let i = start; i < coins.length; i++) {
      path.push(coins[i]);
      backtrack(path, i);
      path.pop();
    }
  }

  backtrack([], 0);

  return res;
}
