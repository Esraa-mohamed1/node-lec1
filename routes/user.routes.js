const express = require('express');
const router = express.Router();
const upload =require('../middleware/multer.middleware')
const {  getallusers,  getuserid,  createuser} =require('../controllers/user.controller');

// router.use((req,res,next)=> upload.any()(req,res,next))

router.post('/upload', upload.single('file'),(req,res)=>{
  res.json({
    message:'uploaded',
    file:req.file
  });
})
router.get('/users', getallusers);
router.get('/users/:id',getuserid);
router.post('/create',upload.single('avatar'),createuser); 

module.exports = router;