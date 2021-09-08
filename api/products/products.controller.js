const { createProduct, getProductById, getProducts, updateProduct } = require('./products.service');

module.exports = {
  createProduct: (req, res) => {
    const productModel = req.body;
    createProduct(productModel, (err, result) => {
      if(err){
        return res.status(400).json({
          message: err
        });
      }
      return res.status(200).json({
        sucess: true,
        message: 'Produto criado com sucesso!',
        data: {
          id: result.insertId,
          ...productModel
        }
      })
    });
  },
  updateProduct: (req, res) => {
    const productModel = req.body;
    updateProduct(productModel, (err, result) => {
      if(err) {
        return res.status(400).json({
          message: err
        });
      }
      return res.status(200).json({
        sucess: true,
        message: 'Produto atualizado com sucesso!',
        data: productModel
      });
    });
  },
  getProducts: (req, res) => {
    getProducts((err, result) => {
      if(err){
        return res.status(400).json({
          message: err
        });
      }
      if(!result){
        return res.status(204).json({
          message: "Nenhum produto encontrado"
        });
      }
      return res.status(200).json({
        data: result
      });
    });
  },
  getProductById: (req, res) => {
    const productId = req.params.id;
    getProductById(productId, (err, result) => {
      if(err){
        return res.status(400).json({
          message: err
        });
      }
      return res.status(200).json({
        sucess: true,
        data: result[0]
      });
    });
  }
}