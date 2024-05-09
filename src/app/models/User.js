
import {Schema, model, models} from "mongoose";
const UserSchema = new Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true},
  password: {
    type: String, 
    required: true, 
    validate: pass => {
      if (pass === undefined || pass === null || pass.length === 0 || pass.length < 5) {
        new Error('password must be a t least 5 characters')
        return false;
      }
    }},
}, {timestamps: true});
UserSchema.pre('save', (next, ...rest) =>{
    next()
})

 const User = models?.User || model('User', UserSchema);
 export default User