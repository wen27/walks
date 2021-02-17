const mysql = require("mysql");
// Create a Connection To The Database
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sportsdb"
});

// Open the MySQL Connection
connection.connect(error => {
    if (error) throw error;
    console.log("成功連線資料庫");
});

module.exports = connection;