const { genSaltSync, hashSync, compareSync } = require('bcrypt');
const { sign } = require('jsonwebtoken');

module.exports = {
  login: (req, res) => {
    const body = req.body;
    getUserToken(body, (err, results) => {
      if (err)
      {
        return;
      }
      if (!results)
      {
        return res.status(400).json({
          errorMessage: 'Usuário não encontrado!',
          data: []
        });
      }
      const result = compareSync(body.password, results.password);
      if (result)
      {
        results.password = undefined;
        const jsontoken = sign({ id: results.id, password: results.password }, process.env.TOKEN_KEY, {
          expiresIn: "24h"
        });
        inserToken({ id: results.id, access_token: jsontoken }, () => { });
        return res.status(200).json({
          message: "Sucesso!",
          access_token: jsontoken
        });
      } else
      {
        return res.status(400).json({
          errorMessage: "Senha incorreta",
          data: []
        });
      }
    });
  },
}