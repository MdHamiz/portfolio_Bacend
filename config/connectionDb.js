const mongoose = require ("mongoose");


 const connectedDB = async()=>{
  await mongoose.connect(process.env.MONGO_DB)
  .then(()=>console.log("connected...."))
 }
 
 module.exports = connectedDB