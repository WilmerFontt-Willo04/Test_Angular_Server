require("./database");

const app = require("./app");
app.listen(app.get("port"));

console.log("server en el port", app.get("port"));
