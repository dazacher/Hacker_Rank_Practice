function countingValleys(steps, path) {
    // Write your code here
    var isInValley = false
    var valleys = 0
    var path = path.split('')
    var stepsTaken = 0
    path = path.map(path => (path === "U" ? 1 : -1))
    console.log(path)
    for (let i = 0; i < path.length; i++) {
        stepsTaken += path[i]
        if (stepsTaken < 0 && !isInValley) {
            isInValley = true
        }
        if (stepsTaken == 0 && isInValley) {
            isInValley = false
            valleys++
        }
    }
    return valleys
}