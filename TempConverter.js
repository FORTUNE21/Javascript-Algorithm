function convertFahrToCelsius(F) {
    let inputtype = Object.prototype.toString.call(F);
    let C = (F - 32) * 5 / 9;
    let x = C.toFixed(4) ;
    if (inputtype ==="[object Number]" || (inputtype =="[object String]" && !isNaN(F))) {
        return x;
    }
    else {
        return `${JSON.stringify(F)} is not a valid number but a/an
         ${inputtype.substring(7, inputtype.length - 1)}`;
    }
}
console.log(convertFahrToCelsius({temp:0}));

