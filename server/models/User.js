import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});


//secure the password with the bcrypt
userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(this.password, salt);
        this.password = hash_password;
        next();
    } catch (error) {
        next(error);
    }
});

// Password comparison method
userSchema.methods.matchPassword = async function(enteredPassword) {
    try {
        return await bcrypt.compare(enteredPassword, this.password);
    } catch (error) {
        // console.error(error);
        throw new Error('Password comparison failed');
    }
};

const User = new mongoose.model("User", userSchema);

export default User;