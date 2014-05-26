function pad(num, n) {
    return Array(n - ('' + num).length + 1).join(0) + num;
}