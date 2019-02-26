// Телефонная книга


/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */

var phoneNumberBook = {};
module.exports = function (command) {
    var spilttedCommand = [];
    var command;
    var name;
    var phoneNumbers;

    spilttedCommand = command.split(' ');
    command = spilttedCommand[0];
    if (command === 'SHOW') {
        return showBook();
    } 
    
    if (command === 'ADD') {
        name = spilttedCommand[1];
        phoneNumbers = spilttedCommand[2].split(',');
        addPhoneNumbers(name, phoneNumbers);
    } else if (command === 'REMOVE_PHONE') {
        phoneNumbers = spilttedCommand[1].split(',');
        return removePhoneNumbers(phoneNumbers);
    }

    function addPhoneNumbers(name, phoneNumbers) {
        if (!phoneNumberBook.hasOwnProperty(name)) {
            phoneNumberBook[name] = phoneNumbers;
        } else {
            phoneNumberBook[name] = phoneNumberBook[name].concat(phoneNumbers);
        }
    }
    
    function removePhoneNumbers(phoneNumbers) {
        var keys = [];
        var isRemoved = false;
        keys = Object.keys(phoneNumberBook);
        phoneNumbers.forEach(number => {
            for (let index = 0; index < keys.length; index++) {
                var currentNumbers = phoneNumberBook[keys[index]];
                if (currentNumbers.includes(number)) {
                    isRemoved = true;
                }
                phoneNumberBook[keys[index]] = arrayRemove(currentNumbers, number);
            }    
        });
        return isRemoved;
    }
        
    function arrayRemove(arr, value) {
        return arr.filter(function(ele) {
            return ele != value;
        });
     
     }

    function showBook() {
        var result = [];
        var keys = [];
        keys = Object.keys(phoneNumberBook);
        for (let index = 0; index < keys.length; index++) {
            const key = keys[index];
            var phones;
            phones = phoneNumberBook[key];
            if (phones.length > 0) {
                result.push(key + ": " + phones.join(', '));
            }
        }
        return result.sort();
    }

};
