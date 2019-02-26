/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    var result = [];
    hashtags.map(tag => tag.toLowerCase()).forEach(filterDuplicates);
    function filterDuplicates(item, index) {
        if (!result.includes(item)) {
            result.push(item);
        }
    }
    return result.join(', ')

};
