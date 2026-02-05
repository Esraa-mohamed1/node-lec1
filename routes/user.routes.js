const express = require('express');
const router = express.Router();

const {  getallusers,  getuserid,  createuser} =require('../controllers/user.controller');

router.get('/users', getallusers);
router.get('/users/:id',getuserid);
router.post('/',createuser) 

module.exports = router;