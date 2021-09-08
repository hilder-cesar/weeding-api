const pool = require('../../config/mysql');

module.exports = {
  createProduct: (data, callBack) => {
    pool.query(
      `insert into wedding_products(name, price, image) values(?, ?, ?)`,
      [data.name, data.price, data.image],
      (err, results) => {
        if(err){ callBack(err) }
        return callBack(null, results);
      }
    )
  },
  updateProduct: (data, callBack) => {
    pool.query(
      `UPDATE wedding_products SET name=?, price=?, image=? WHERE id=?`,
      [data.name, data.price, data.image, data.id],
      (err, results) => {
        if(err){ callBack(err) }
        return callBack(null, results);
      }
    )
  },
  getProducts: (callBack) => {
    pool.query(
      `SELECT * FROM wedding_products`,
      (err, results) => {
        if(err) { callBack(err) }
        return callBack(null, results);
      }
    )
  },
  getProductById: (id, callBack) => {
    pool.query(
      `SELECT * FROM wedding_products WHERE id=?`,
      [id],
      (err, results) => {
        if(err){ callBack(err) }
        return callBack(null, results)
      }
    )
  }
}