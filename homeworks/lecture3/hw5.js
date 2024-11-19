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
    // implement here
    let password;
    let passwordSet = false;

    this.setPassword = function (newpassword) {
        if (passwordSet) {
            return "Error"
        } else {
            password = newpassword
            passwordSet = true
        }
    }

    this.checkPassword = function (trypassword) {
        if (trypassword === password) {
            return true
        }else {
            return false
        }
    }

    return {
        setPassword: this.setPassword,
        checkPassword: this.checkPassword
    }
}