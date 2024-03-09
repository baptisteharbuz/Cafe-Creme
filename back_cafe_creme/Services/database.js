const mysql = require("mysql");
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'baptiste',
    password: 'Foreach59',
    port: 8889,
    database: 'Cafe_Creme'
})

connection.connect((err) => {
    if (err) {
        console.log(err.stack)
        return
    }
    // console.log(connection.state)
    console.log(connection.threadId)
})

module.exports = connection