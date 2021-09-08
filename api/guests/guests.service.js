const pool = require('../../config/mysql');

module.exports = {
  registerGuest: (data, callBack) => {
    pool.query(
      `insert into wedding_guests(name, email, phone) values(?, ?, ?)`,
      [data.name, data.email, data.phone],
      (err, results) => {
        if(err){ callBack(err) }
        return callBack(null, results);
      }
    )
  },
  getGuestById: (id, callBack) => {
    pool.query(
      `select * from wedding_guests where id=?`,
      [id],
      (err, results) => {
        if(err){ callBack(err) }
        return callBack(null, results);
      }
    )
  },
  getGuests: (callBack) => {
    pool.query(
      `select * from wedding_guests`,
      (err, results) => {
        if(err){ callBack(err) }
        return callBack(null, results);
      }
    )
  }
}