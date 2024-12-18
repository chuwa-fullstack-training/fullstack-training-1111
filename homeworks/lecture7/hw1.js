/**
 * write a program that prints a list of files in the given directory, filtered by the extension of the files.
 * The first argument is the directory name and the second argument is the extension filter.
 * Print the list of files (one file per line) to the console.
 *
 * HINTS:
 * 1. Use fs.readdir() method to read the contents of a directory.
 * 2. Use path.extname() method to get the extension of a file. (optional)
 * 3. Use process.argv to get command-line arguments.
 *  - process.argv[0] is the path to the node program
 *  - process.argv[1] is the path to the script file
 *  - process.argv[2] is the first command-line argument
 *    e.g. node hw1.js currentDir txt - process.argv[2] is `currentDir`, process.argv[3] is `txt`
 */

// your code here
const fs = require('fs');
const path = require('path');

const dirName = process.argv[2];
const extFilter = process.argv[3];
console.log(process.argv) // for testing purpose, you can uncomment this line and see the command-line arguments in the console.
console.log(dirName, extFilter)

if (!dirName || !extFilter){
    console.error('Usage: node <script> <directory> <extension>');
    process.exit(1);
}
fs.readdir(dirName,(err, files) => {
    if (err) {
        console.error(`Error reading directory: ${dirName}`);
        process.exit(1);
    }
    files.filter(file => path.extname(file) === extFilter)
    .forEach(file => console.log(file));  // exit the program with success status code 0 when all files have been processed.
});
