import mongoose from "mongoose";

const UserSchema = mongoose.Schema({


    name: {type: String,required: [true, "enter your name"]},
    email: {type: String,required: true,unique:true},
    passwoed: {type :String,required:true}

},

    {

        timestamps: true,
    }
)


export const User = mongoose.model("User", UserSchema)
export default UserSchema;