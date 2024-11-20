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
    let password = "";

    function setPassword(pwd) {
        if(password.length === 0){
            password = pwd;
            return password;
        } else {
            return 'Error: Password already set';
        }
    }

    function checkPassword(pwd) {
        return pwd === password;
    }

    return {setPassword, checkPassword};
}

const user = new User();
console.log(user.setPassword('123456'));
console.log(user.checkPassword('123456')); // true
console.log(user.checkPassword('123')); // false
console.log(user.password); // undefined
console.log(user.setPassword('123')); // Error
console.log(user.checkPassword('123')); // false
console.log(user.password); // undefined
