/**
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
  // implement here
  const totalCents = 100;
  const totalCoins = 48;

  for (let count1c = 0; count1c <= totalCoins; count1c++) {
    for (let count5c = 0; count5c <= totalCoins - count1c; count5c++) {
      for (
        let count25c = 0;
        count25c <= totalCoins - count1c - count5c;
        count25c++
      ) {
        let count50c = totalCoins - count1c - count5c - count25c;
        if (count50c < 0) continue;

        const value = count1c * 1 + count5c * 5 + count25c * 25 + count50c * 50;

        if (value === totalCents) {
          console.log(
            `Solution: ${count1c}x1c, ${count5c}x5c, ${count25c}x25c, ${count50c}x50c`
          );
        }
      }
    }
  }
}
