function numberText(str) {
    var words = str.split(" ");
    console.log(words);
    var numWords = words.length; //1. Number of words in the text
    console.log(numWords);
    var chars = str.length; //2. Number of characters in the text
    console.log(chars);
    var spaces = numWords - 1; //3. Number of spaces in a text
    console.log(spaces);

    sum = 0
    for ( var i = 0; i < words.length; i++) {
        sum += words[i].length;
    }
    var averageWord = sum/words.length;
    console.log(averageWord); //4. Average word length


    console.log(numWords + " words, " + chars + " characters, " + averageWord + " average word length & "  + spaces + " spaces");
}

numberText("Count me in" );