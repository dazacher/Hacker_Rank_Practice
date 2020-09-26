function jumpingOnClouds(c) {
    var numberOfJumps = 0;
    for (var i = 0; i < c.length - 1; i++) {
        if (c[i] !== c[i + 1]) {
            i++;
            numberOfJumps++;
        } else if (c[i] === c[i + 1] && c[i + 1] === c[i + 2]) {
            i++;
            numberOfJumps++;
        } else if (c[i] === c[i + 1] && c[i + 2] === 1) {
            numberOfJumps++;
        } else {
            numberOfJumps++;
        }
    }
    return numberOfJumps;
}