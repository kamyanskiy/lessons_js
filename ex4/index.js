/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var result = [];
    var resultWithoutHash = [];
    if (tweet.length > 0) {
        var tweetSplitted = tweet.split(' ');
        result = tweetSplitted.filter(isStratsWithHashTag);
        function isStratsWithHashTag(word) {
            return word.startsWith("#");
        }
    }
    if (result.length > 0) {
        var resultWithoutHash = [];
        resultWithoutHash = result.map(removeHash);
        function removeHash(item) {
            return item.slice(1);
        }
    }
    return resultWithoutHash;
};
