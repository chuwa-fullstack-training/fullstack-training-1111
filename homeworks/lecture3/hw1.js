/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    const target=100;
    const coins=[1,5,25,50];
    let solutions=[];
    for (let i=0;i<=48;i++){
        for (let j=0;j<=48-i;j++){
            for (let k=0;k<=48-i-j;k++){
                const l=48-i-j-k;
                if (l>=0&&i+j*5+k*25+l*50===100){
                    solutions.push({"1c":i, "5c":j, "25c":k, "50c":l});
                }
            }
            if (solutions.length===2){
                break;
            } 
        }
        if (solutions.length===2){
            break;
        }    
    }
    if (solutions.length >= 2) {
        console.log("Solution 1:", solutions[0]);
        console.log("Solution 2:", solutions[1]);
    } else {
        console.log("Not enough solutions found.");
    }
}

