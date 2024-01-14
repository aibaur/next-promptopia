import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
  username: {
    type: String,
    required: [true, 'Username is required!'],
    match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
  },
  image: {
    type: String,
  }
});
// models object contains all the models in the whole database, 
// now it checks if we have `User` already in the model, if yes, then return that, and if not , 
// then initialize a new model with the schema. 
// This saves us from creating a new model every time an api call is made and reconnection happens.
const User = models.User || model("User", UserSchema);

export default User;