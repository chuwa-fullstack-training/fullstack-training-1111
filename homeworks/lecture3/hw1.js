/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    let target = 100;
    let result = []
    
    for(let numCoin1 = 0; numCoin1 <= 48; numCoin1++){
        for(let numCoin5 = 0; numCoin5 <= 48 - numCoin1; numCoin5++){
            for(let numCoin25=0; numCoin25 <= 48 - numCoin1 - numCoin5; numCoin25++){
                let numCoin50 = 48 - numCoin1 - numCoin5 - numCoin25
                if(numCoin50 >= 0 && (numCoin1 + 5 * numCoin5 + 25 * numCoin25 + 50 * numCoin50 == target)){
                    result.push({ '1c': numCoin1, '5c': numCoin5, '25c': numCoin25, '50c': numCoin50 })
                    if(result.length == 2){
                        console.log(result)
                        return
                    }
                }
            }
        }
    }

}

pickCoins()