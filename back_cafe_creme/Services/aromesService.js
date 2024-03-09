const conn = require('./database')

const fetchArome = () => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM Arome;"
        let query = conn.query(sql, (err, result, field) => {
            if (err) return reject(err);
            resolve(result);
        });
    })
}

module.exports = {
    fetchArome
}