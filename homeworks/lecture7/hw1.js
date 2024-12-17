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
const fs = require("fs").promises;
const path = require("path");
const process = require("process");

async function printFilesByExtension(dirName, extensionNames = []) {
  try {
    const files = await fs.readdir(dirName);
    files.forEach((file) => {
      const filePath = path.join(dirName, file);
      const ext = path.extname(file);

      if (extensionNames.includes(ext)) {
        console.log(filePath);
      }
    });
  } catch (err) {
    console.error("Error reading directory:", err);
  }
}

// run the code
const parentDir = path.dirname(process.argv[1]);
const extensions = ["js", "json", "txt", "jpg", "pdf"];
const randomExts = extensions.slice(0, [
  Math.ceil(Math.random() * extensions.length),
]);

printFilesByExtension(parentDir, randomExts);
