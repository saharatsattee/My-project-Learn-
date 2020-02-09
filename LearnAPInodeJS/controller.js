function getServerTime1() {
    var time = new Date();
    return 'server time : ' + time;
}



function SumAB(a,b){
    var a, b,sum;
    console.log(`a : ${a}`);
    console.log(`b : ${b}`);
      a = parseFloat(a);
      b = parseFloat(b);
      sum = a + b;
      return sum ;
    // var sum = a+b ;
    // return 'sum of a and b :'+sum ;
}

function postchackAB(a,b){
    var a,b,sum;
    console.log(`a : ${a}`);
    console.log(`b : ${b}`);
    var sum = SumAB(a,b)
    var time = getServerTime1()
    if(sum%2 == 0) {
        var resual = 'even';
    }
    else{
        var resual = 'odd'
    }
    return {
        sum : sum ,
        time : time ,
        resual : resual
    }
    
}

module.exports = {
    ab: SumAB,
    ttt: getServerTime1,
    evenodd : postchackAB
}