function numberText(str) {
    var wordsSplit = str.split(" ");
    var words = wordsSplit.length;
    var chars = str.length;
    var spaces = words - 1;
    var justWords = chars - spaces;
    var avgLength = justWords / words;

    var result = {"words": words, "chars": chars, "avgLength": avgLength, "spaces": spaces};
    return result;
}

console.log(numberText("Count me in"));

