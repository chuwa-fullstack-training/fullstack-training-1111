const connect = require("connect");
const serverStatic = require("serve-static");
const { parse } = require("querystring");

const app = connect();
app.use(serverStatic("public"));

app.use("/submit", (req, res) => {
  const { user, email } = parse(req.body);
  res.statusCode = 302;
  res.setHeader("Location", `/home.html?user=${user}&email=${email}`);
  res.end();
});

app.listen(3000, () => console.log("server running on port 3000..."));
