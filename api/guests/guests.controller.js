const { registerGuest, getGuestById, getGuests } = require('./guests.service');

module.exports = {
  registerGuest: (req, res) => {
    const userModel = req.body;
    registerGuest(userModel, (err, results) => {
      if(err){
        res.status(400).json({
          message: err
        });
      }
      return res.status(200).json({
        data: {
          id: results.insertId,
          ...userModel
        }
      });
    });
  },
  getGuestById: (req, res) => {
    const guestId = req.params.id;
    getGuestById(id, (err, results) => {
      if(err){
        res.status(400).json({
          message: err
        });
      }
      if(!results){
        res.status(204).json({
          message: 'Nenhum convidado encontrado!'
        });
      }
      return res.status(200).json({
        success: true,
        data: results[0]
      });
    })
  },
  getGuests: (req, res) => {
    getGuests((err, results) => {
      if(err) {
        res.status(400).json({
          message: err
        });
      }
      if(!results) {
        res.status(204).json({
          message: 'Nenhum convidado encontrado'
        });
      }
      return res.status(200).json({
        success: true,
        data: results
      });
    });
  }
}