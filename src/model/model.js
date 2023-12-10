import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
});

let User = mongoose.model("User", userSchema);
module.exports = {
    User
}