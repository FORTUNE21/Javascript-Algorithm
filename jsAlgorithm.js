function checkYuGiOh(N) {
    var arr = [];
     if (isNaN(N)){
         return `invalid parameter: "${N}"`;
     };

     for (let i = 1; i <= N; i++){
         let num = [];
         if(i % 2 === 0){
             num.push('yu');
         }
         if (i % 3 === 0){
             num.push('gi');
         }
         if (i % 5 === 0){
             num.push('oh');
         }
         if (num.length > 0){
         arr.push(num.join("-"));
         }
         else
         arr.push(i);
     }
    return arr;
}
console.log(checkYuGiOh(10));