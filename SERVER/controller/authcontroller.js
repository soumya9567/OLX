import User from "../model/authmodel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    console.log(email, password, name);
    const existingUser = await User.findOne({ email });
    
    if (!existingUser) {
      console.log('inside if no exidying user')



      const salt = await bcrypt.genSalt()
      console.log(salt,"salt created")

      const hashedpassword= await bcrypt.hash(password,salt)
      console.log(hashedpassword,"hashed password")
    


      const newUser = await User.create({
        email,
        password,
        name,
      });
   
      await newUser.save();
      return res
        .status(200)
        .json({ sucess: true, message: "user created successfully", newUser });
    }
    return res
      .status(500)
      .json({ success: false, message: "user already exist" });
  } catch (error) {
    return res
      .status(404)
      .json({ success: false, message: "unexpected error ocuured" });
  }
};

export const signIn = async (req, res) => {
  console.log(req.body);

  const { email, password } = req.body;

  try {
    const ExistingUser = await User.findOne({ email: email });

    if (ExistingUser) {
      const matchedpassword = await bcrypt.compare(
        password,
        ExistingUser.password
      );

      if (!matchedpassword) {
        return res
          .status(404)
          .json({ success: false, message: "login not successfully" });
      }

      const token = jwt.sign(
        { id: ExistingUser._id },
        process.nextTick.SECRET_KEY
      );
      console.log(token, "my token");

      return res
        .status(200)
        .json({ success: true, message: "login successfully" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "failed to signin" });
  }
};
