const express = require('express');
const router = express.Router();
const { signup, login, getUsers, updateUser, deleteUser } = require('../controllers/userController');

router.post('/signup', signup);
router.post('/login', login);
router.get('/fetch', getUsers);
router.put('/update', updateUser);
router.delete('/delete', deleteUser);

module.exports = router;
