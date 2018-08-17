function average(score){
    var total = 0;
    for(var i = 0; i < score.length; i++){
        total += score[i]
        
    }
    var average = Math.round(total/score.length);
    console.log(total);
    return average;
}

var score = [90, 98, 89, 100, 100, 86, 94];
console.log(average(score));