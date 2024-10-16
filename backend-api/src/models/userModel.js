const db = require('../config/db');


//Model for user 
const userModel = {

    getUserData: (username) => {
        return db('NGUOI_DUNG').select('*').where({ ND_HoTen: username }).first();
    },

    getUsername: (username) => {
        return db('NGUOI_DUNG').where({ ND_HoTen: username }).first();
    },

    getEmail: (email) => {
        return db('NGUOI_DUNG').where({ ND_Email: email }).first();
    },

    getPassword: (username) => {
        return db('NGUOI_DUNG')
            .select('ND_MatKhau')
            .where({ ND_HoTen: username })
            .first()
            .then(result => result.ND_MatKhau);
    },
    
    signup: (username, password, email, date) => {
        return db('NGUOI_DUNG').insert({
            ND_HoTen: username,
            ND_MatKhau: password,
            ND_Email: email,
            ND_NgayTao: date
        })
    },

    signin: (username, password) => {
        return db('NGUOI_DUNG')
       .where({ ND_HoTen: username })
    }
}

module.exports = userModel;
