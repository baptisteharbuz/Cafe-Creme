// const jwt = require('jsonwebtoken');
// const SECRET = 'MOTDEPASSE';

// const extractBearerToken = headerValue => {
//     if (typeof headerValue !== 'string') {
//         return false
//     }

//     const matches = headerValue.match(/(bearer)\s+(\S+)/i)
//     return matches && matches[2]
// }

// // Vérification du token
// const checkTokenMiddleware = (req, res, next) => {
//     // Récupération du token
//     const token = req.headers.authorization && extractBearerToken(req.headers.authorization)

//     // Présence d'un token
//     if (!token) {
//         return res.status(401).json({ message: 'Token inexistant' })
//     }

//     // Véracité du token
//     jwt.verify(token, SECRET, (err, decodedToken) => {
//         if (err) {
//             res.status(401).json({ message: 'Error. Mauvais token' })
//         } else {
//             return next()
//         }
//     })
// }


// module.exports = {
//     checkTokenMiddleware
// }


const jwt = require('jsonwebtoken');
const SECRET = 'MOTDEPASSE';

const extractBearerToken = headerValue => {
    if (typeof headerValue !== 'string') {
        return false;
    }
    const matches = headerValue.match(/(bearer)\s+(\S+)/i);
    return matches && matches[2];
};

// Fonction pour vérifier le token de manière asynchrone
const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, SECRET, (err, decodedToken) => {
            if (err) {
                reject(err);
            } else {
                resolve(decodedToken);
            }
        });
    });
};

// Middleware asynchrone pour vérifier le token
const checkTokenMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization && extractBearerToken(req.headers.authorization);
        if (!token) {
            return res.status(401).json({ message: 'Token inexistant' });
        }
        await verifyToken(token);
        next();
    } catch (err) {
        res.status(401).json({ message: 'Error. Mauvais token' });
    }
};

module.exports = {
    checkTokenMiddleware
};
