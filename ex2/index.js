/**
 * @param {Number} hours
 * @param {Number} minutes
 * @returns {Boolean}
 */
module.exports = function isValidTime (hours, minutes) {
    if (((0 <= hours) && (hours <=23)) && ((0 <= minutes) && (minutes <= 59))) {
        return true;
    } else {
        return false;
    }
};
