/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    let solution = '';
    for (let i = 0; i < 48; ++ i) solution += '1c ';
    console.log(solution);
    solution = '';
    for (let i = 0; i < 8; ++ i) solution += '5c ';
    for (let i = 0; i < 8; ++ i) solution += '1c ';
    console.log(solution);
}
