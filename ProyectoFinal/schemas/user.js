var mongoose = require('mongoose');
const saltRounds = 10;
var Schema = mongoose.Schema

var userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true }
});
//se hace una variable que haga una coneccion con moongose y se exporta para conectar con moongose
UserSchema.pre('save', function(next){
    if(this.isNew || this.isModified('password')){
        const document = this;

        bcrypt.hash(document.password, saltRounds, (err, hashedPassword) => {
            if(err){
                next(err);
            }else{
                document.password = hashedPassword;
                next();
            }
        });
    }else{
        next();
    }
});

UserSchema.methods.isCorrectPassword = function(candidatePassword, callback){
    bcrypt.compare(candidatePassword, this.password, function(err, same){
        if(err){
            callback(err);
        }else{
            callback(err, same);
        }
    });
}
mongoose.model("users",userSchema)

exports.getUser = function(req,res,cb) {
    mongoose.model('users').find(function(err,data) {
        cb(err,data);
    });
};