import mongoose from 'mongoose'

// Schema for the database connection object
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  }
});

// Model for the users that will be displayed 
export const UserModel = mongoose.model('users', UserSchema);