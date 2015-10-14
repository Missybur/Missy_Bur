var swapCase = function swapCase(str) {
        return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, letter) {
            return letter ? match.toUpperCase() : match.toLowerCase();
        });
    }

