const express = require("express");

const app = express();
const port = 5000;

// static files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/image", express.static(__dirname + "public/image"));
app.use("/js", express.static(__dirname + "public/js"));

// templating Engine
app.set("views", "./src/views");
app.set("view engine", "ejs");

// Routes
const plantRouter = require("./src/routes/plant");

app.use("/", plantRouter);
//List to port
app.listen(port, () => console.log(`Listening on port ${port}`));
