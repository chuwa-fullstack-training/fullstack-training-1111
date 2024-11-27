/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    var sum=48
    for(var i=0;i<48;i++){
        n1[i]=1;
    }
    var t=0;
    while(sum>5){
        n2[t]=5;
        sum=sum-5;
        t++;
    }
   for(var i=0;i<sum;i++){
    //console.log(sum);
        n2[t]=1;
        t++
    }
    console.log(n1);
    console.log(n2);

}
