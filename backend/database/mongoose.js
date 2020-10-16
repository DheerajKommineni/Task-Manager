const mongoose= require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/users_test',{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false})
    .then(()=>console.log("Database is Connected"))
    .catch((error)=> console.log(error));

module.exports = mongoose;