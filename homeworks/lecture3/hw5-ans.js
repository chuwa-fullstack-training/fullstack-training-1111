/** Implement a User class with a private variable #password (Use closure, not # syntax).
 * The class should have methods to setPassword and checkPassword.
 * 
 * Example:
 * const user = new User();
 * user.setPassword('123456');
 * user.checkPassword('123456'); // true
 * user.checkPassword('123'); // false
 * user.password; // undefined
 * user.setPassword('123'); // Error
 * user.checkPassword('123'); // false
 * user.password; // undefined
 */
function User() {
    let password = {};

    this.setPassword = function (newPassword) {
        if (typeof newPassword === 'string' && newPassword.length >= 6) {
            password = newPassword;
        } else {
            console.log('Error');
        }
    };

    this.checkPassword = function (inputPassword) {
        return inputPassword === password;
    };
}

const user = new User();
user.setPassword('123456'); // 123456
console.log(user.checkPassword('123456')); // true
console.log(user.checkPassword('123'));    // false
console.log(user.password);                // undefined
console.log(user.setPassword('123'));       //error
console.log(user.checkPassword('123'));    // false
console.log(user.checkPassword('123456'));    //true

