import {Router} from "express";


const router = Router()
router.get('/list-files', (req, res) => {
    const dirName = req.query.dir; // Directory name from query parameter
    const extensionFilter = `.${req.query.ext}`; // File extension filter (including the dot)

    if (!dirName || !req.query.ext) {
        return res.status(400).send('Error: Please provide both "dir" and "ext" query parameters.');
    }

    fs.readdir(dirName, (err, files) => {
        if (err) {
            return res.status(500).send(`Error reading directory: ${err.message}`);
        }

        const filteredFiles = files.filter(file => path.extname(file) === extensionFilter);
        res.json({ files: filteredFiles });
    });
});

export default router;