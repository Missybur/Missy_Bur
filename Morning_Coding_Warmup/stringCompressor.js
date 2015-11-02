function compressor(str) {
 var emptyStr = "";
 var numRepeats = 1;
 for ( i=0; i< str.length; i++) {
   if (i===0) {
     emptyStr += str[i];
   } else {
     if (str[i]===str[i-1]) {
       numRepeats ++;
     } else if (str[i] !== str[i-1]) {
       if (numRepeats !== 1) {
           emptyStr += numRepeats;
       }
       emptyStr += str[i];
       numRepeats = 1;
     }
   }
   if (i+1===str.length)
   {
     if (numRepeats !== 1) {
         emptyStr += numRepeats;
     }
   }
 }
 return (emptyStr);
}

console.log(compressor("aaaaabbbbbbbbbccccpqrstuv"))

