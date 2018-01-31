function circleCal(r){
    return r*r*Math.PI;
}

function tetragonCal(l, h){
    return l*h;
}

function trapezoidCal(l, s, h){
    if(arguments.length < 3){
        var errorMessage = '3개의 인자가 필요합니다.';
        return errorMessage;
    }
    return l*s*h/2;
}

var circle = circleCal(10);
console.log(circle);

var tetragon = tetragonCal(10, 15);
console.log(tetragon);

var trapezoid = trapezoidCal(10, 5, 12);
console.log(trapezoid);

var errorMessage = trapezoidCal(10, 2);
console.log(errorMessage);