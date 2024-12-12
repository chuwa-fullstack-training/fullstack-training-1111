const express = require("express");
const app = express();
const PORT = 3000;

app.set('view engine', 'pug');
app.set('views', "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.render("index", { title: "Home Page", message: "This is home page"});
});

app.get('/about', (req, res) => {
    res.render("index", { title: "About Page", message: "This is about page"});
});

app.get("/home.html", (req, res) => {
    const { name, age } = req.query;
    res.render("index", {
        title: "Home Page",
        name: name || '',
        age: age || '',
    })
})

app.post("/create-post", (req, res) => {
    const { name, age } = req.body;
    res.redirect(`/home.html?name=${name}&age=${age}`);
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})