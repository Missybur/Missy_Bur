        return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, letter) {
            return letter ? match.toUpperCase() : match.toLowerCase();
        });
    }

console.log(swapCase("Life is 10% what happens to you, and 90% of how you REACT to it"));

