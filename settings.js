const path = require("path");

process.env.TODO_DATABASE = 'todos';

module.exports = {
    uiPort: process.env.PORT,
    credentialSecret: process.env.NODE_RED_CREDENTIAL_SECRET,
    httpAdminRoot: false,
    httpNodeRoot: "/",
    httpStatic: path.join(__dirname,"public")
}
