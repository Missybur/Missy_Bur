function mostFrequentCount(str) {
    var objContainer = {};
    for (var i = 0; i < str.length; i++) {
        objContainer[str[i]] = (objContainer[str[i]] || 0) + 1;
    }
    var max = 1;
    for (var val in objContainer) {
        max = Math.max(max, objContainer[val]);
    }
    return max;
}

function wordsWithMaxRepeatedLetters(str) {
    var maxRepeatedLetters = 0, wordsWithMaxRepeatedLetters = [];

    var words = str.split(/\W/);
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        var numRepeatedCharacters = mostFrequentCount(word);

        if (maxRepeatedLetters < numRepeatedCharacters) {
            maxRepeatedLetters = numRepeatedCharacters;
            wordsWithMaxRepeatedLetters = [word];
        } else if (maxRepeatedLetters == numRepeatedCharacters) {
            wordsWithMaxRepeatedLetters.push(word);
        }
    }
    return wordsWithMaxRepeatedLetters;
}

console.log(wordsWithMaxRepeatedLetters("I attribute my success to this: I never gave or took any excuse. –Florence Nightingale"));