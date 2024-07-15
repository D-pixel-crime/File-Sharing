import mongoose from "mongoose";

const FileSchema = new mongoose.Schema({
  path: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  downloadCount: {
    type: Number,
    default: 0,
  },
});

export const file = mongoose.model("File", FileSchema);
