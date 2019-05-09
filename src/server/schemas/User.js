import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  age: Number
});

export default mongoose.model('User', userSchema);
