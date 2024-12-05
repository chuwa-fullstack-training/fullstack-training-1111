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
const fs = require("fs");
const path = require("path");

const directoryPath = process.argv[2]; // Get the first command-line argument as the directory path
const fileExtension = "." + process.argv[3]; // Get the second command-line argument as the file extension

fs.readdir(directoryPath, (err, file) => {
    if (err) {
        console.log("Error");
    }

    //console.log(file);

    //let ext = file.forEach(f => console.log(path.extname(f)));
    //console.log(fileExtension);

    let fileOutput = file.filter(f => path.extname(f) === fileExtension);

    //console.log(fileOutput);

    fileOutput.forEach(f => console.log(f));
})

// Output Test:
// Command Line: node hw1.js C:\Users\13522\fullstack-training-11112024\sample_code\lecture7 txt
// Output: 
//  demo.txt
// Command Line: node hw1.js C:\Users\13522\fullstack-training-11112024\sample_code\lecture7 json
// Output: 
//  package.json