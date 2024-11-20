/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */

const coins = [1, 5, 25, 50];
const target = 100;
const amount = 48;
const solutions = [];
const curCnt = new Array(4).fill(0);

function dfs(curAmount, curTarget, start) {
    if(curAmount > amount || curTarget > target) return;

    if(curAmount === amount && curTarget === target) {
        solutions.push([...curCnt]);
        return;
    }

    for(let i = start; i < 4; i++) {
        curCnt[i]++;
        dfs(curAmount + 1, curTarget + coins[i], i);
        curCnt[i]--;
    }
}

function pickCoins() {
    // implement here
    dfs(0, 0, 0);
    console.log("Solution: ");
    const s1 = [...solutions[0]];
    const s2 = [...solutions[1]];
    console.log("1c\t5c\t25c\t50c\t");
    console.log(`${s1[0]}\t${s1[1]}\t${s1[2]}\t${s1[3]}\t`);
    console.log(`${s2[0]}\t${s2[1]}\t${s2[2]}\t${s2[3]}\t`);
}

pickCoins();
