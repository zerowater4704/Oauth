import mongoose, { Schema, Document } from "mongoose";

const UserSchema = new Schema({
  googleId: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
});

export default mongoose.model("User", UserSchema);
