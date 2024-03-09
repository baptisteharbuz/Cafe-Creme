const conn = require('./database')

const fetchSaveur = () => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM Saveur;"
        let query = conn.query(sql, (err, result, field) => {
            if (err) return reject(err);
            resolve(result);
        });
    })
}
module.exports = {
    fetchSaveur
}