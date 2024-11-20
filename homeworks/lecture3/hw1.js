/**
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
let res = [];
let tmp = [];
let denominations = [50, 25, 5, 1];
function dfs(numOfCoins, restAmount, i) {
  if (denominations[i] === 1) {
    if (restAmount === numOfCoins) {
      tmp.push(numOfCoins);
      res.push([...tmp]);
      tmp.pop();
    }
    return;
  }

  let threshold = Math.min(
    Math.floor((restAmount - numOfCoins) / (denominations[i] - 1)),
    numOfCoins
  );
  if (threshold < 0) return;

  for (let m = 0; m <= threshold; ++m) {
    tmp.push(m);
    dfs(numOfCoins - m, restAmount - m * denominations[i], i + 1);
    tmp.pop();
  }
}

function pickCoins() {
  dfs(48, 100, 0);
  for (let idx = 0; idx < 2; ++idx) {
    let plan = res[idx];
    console.log(
      `50c: ${plan[0]}\t25c: ${plan[1]}\t5c: ${plan[2]}\t1c: ${plan[3]}`
    );
  }
}

/*
 * pickCoins();
 * 50c: 0	25c: 0	5c: 13	1c: 35
 * 50c: 0	25c: 1	5c: 7	1c: 40
 */
