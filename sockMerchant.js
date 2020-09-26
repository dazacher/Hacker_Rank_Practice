function sockMerchant(n, ar) {
    ar.sort()
    let pairs = 0
    for (let i = 0; i < n - 1; i++) {
        if (ar[i] === ar[i + 1]) {
            pairs++
            i += 1
        }
    }
    return pairs
}