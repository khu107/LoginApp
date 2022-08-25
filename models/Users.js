const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    // trim - bush joyni olib tashlaydi emaldan
    trim: true,
    // faqat bitta email
    unique: 1,
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  // role - foydalanuvchi va app egasi  agar 1 bulsa app egasi agar 2 bulsa foydalanuvchi
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  // token foydalanish vaqti
  tokenExp: {
    type: Number,
  },
});

// schema를 modelga urab olish
const User = mongoose.model('User', userSchema);

// export qilish
module.exports = { User };
