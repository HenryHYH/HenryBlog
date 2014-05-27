Number.prototype.pad = function (n) {
    var num = this;
    return Array(n - ('' + num).length + 1).join(0) + num;
}