const multer =require('multer');




const storage= multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,'uploads/');
  },
  filename:(req,file  ,cb)=>{
    cb(null,Date.now()+'-'+ file.originalname)
  }
});



const  filterfile= (req,file,cb)=>{
  if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
return cb(new Error('file not supported'),false)
  }
  cb(null,true)
}
 const upload = multer({
  storage:storage,
  fileFilter:filterfile,
  limits:{fileSize:1024*1024*5}
 })





module.exports =upload

