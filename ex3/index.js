/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    var i = 0;
    while (i < interval) {
        minutes++;
        if (minutes == 60) {
            hours++;
            minutes = 0;
        }
        if (hours == 24) {
            hours = 0;
        }
        i++;
    }
    return ('0' + hours).slice(-2) + ":" + ('0' + minutes).slice(-2)
};
