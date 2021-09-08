const { registerGuest, getGuestById, getGuests } = require('./guests.controller');
const router = require('express').Router();

router.get('', getGuests);
router.post('', registerGuest);
router.get('/:id', getGuestById);

module.exports = router;