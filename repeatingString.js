function repeatedString(s, n) {
    console.log(s, n);

    let timesARepeatedOneCopy = 0;
    console.log(s)
    for (let i = 0; i < s.length; i++)
        if (s[i] == 'a') timesARepeatedOneCopy++;
    console.log(timesARepeatedOneCopy)
    let timesARepeatedAfterCopies = timesARepeatedOneCopy * Math.floor(n / s.length);
    console.log(timesARepeatedAfterCopies)
    console.log(n % s.length)
    for (let i = 0; i < (n % s.length); i++)
        if (s[i] == 'a') timesARepeatedAfterCopies++;
    return timesARepeatedAfterCopies;
}