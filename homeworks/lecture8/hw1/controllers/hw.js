const fs = require("fs").promises;
const path = require("path");

const extensionNames = ["js", "json", "txt", "jpg", "pdf"];

module.exports = {
  getprintFilesByExtension: async (req, res) => {
    const urlPath = req.path;

    const baseDir = path.resolve(__dirname, "../");
    const dirName = path.join(baseDir, urlPath);

    console.log("Directory to read:", dirName);

    try {
      const files = await fs.readdir(dirName);
      const matchingFiles = [];

      files.forEach((file) => {
        const filePath = path.join(dirName, file);
        const ext = path.extname(file);

        if (extensionNames.includes(ext)) {
          matchingFiles.push(filePath);
        }
      });
      res.json({
        message: "Files found:",
        files: matchingFiles,
      });
    } catch (err) {
      console.error("Error reading directory:", err);
      res
        .status(500)
        .json({ error: "Error reading directory", details: err.message });
    }
  },
};
