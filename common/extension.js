// num

Number.prototype.pad = function (n) {
    var num = this;
    return Array(n - ('' + num).length + 1).join(0) + num;
}


// date

Date.prototype.format = function () {
    var dt = this;
    return dt.getFullYear().pad(4) + '-' + (dt.getMonth() + 1).pad(2) + '-' + dt.getDay().pad(2)
        + ' ' + dt.getHours().pad(2) + ':' + dt.getMinutes().pad(2);
}
