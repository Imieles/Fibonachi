function fibonacciGenerator (n) {
    var fibonachi = [0,1];
    if (n === 1){
        return([0]);
    }else if (n===2){
        return(fibonachi);
    }else{
        for(var i = 0; i= n; i++){
            var number = fibonachi.push(fibonachi[i]+fibonachi[i+1]);
        }
        return number;
    }
    
}
fibonacciGenerator(1);
fibonacciGenerator(2);
fibonacciGenerator(3);