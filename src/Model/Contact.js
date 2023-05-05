import mongoose from 'mongoose';

const contactSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  favoriteColor: {
    type: String,
    required: true,
  },
  Birthday: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Contact', contactSchema);
