import mongoose, { Document, Schema, Types } from "mongoose";

export interface IUser extends Document {
    name: string;
    username: string;
    email: string;
    password: string;
    bio: string;
    avatar: string;
    followers: Types.ObjectId[];
    following: Types.ObjectId[];
    isverified: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema = new Schema<IUser>({
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true,
        },
        username: {
            type: String,
            required: [true, "Username is requried"],
            unique: true,
            trim: true,
            lowercase: true,
            minlength: 3,
            maxlength: 20,
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            select: false,
            required: [true, "Password is required"],
            minlength: 6,
        },
        bio: {
            type: String,
            default: "",
            maxlength: 160,
        },
        avatar: {
            type: String,
            default: "https://i.pinimg.com/736x/f5/47/d8/f547d800625af9056d62efe8969aeea0.jpg",
        },
        followers: [{
            type: Schema.Types.ObjectId,
            ref: "User"
        }],
        following: [{
            type: Schema.Types.ObjectId,
            ref: "User",
        }],
        isverified: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
)
const User = mongoose.model<IUser>("User", UserSchema);

export default User;