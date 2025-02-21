
import User from "../model/authmodel"
import bcrypt,{compare} from "bcrypt"

export const  SignUp = async(req,res)=>{
    console.log(req.body)
    const {email,name,password} = req.body




 
    try {
        const ExistingUser = await User.findOne({email:email})
        if(!ExistingUser){
  
          const salt = await bcrypt.genSalt()
          console.log(salt,"salt created")


          const hashedpassword = await bcrypt.hash(password,salt)
          console.log(hashedpassword,"hassedpassword")


          const NewUser = await new User ({name,email,password:hashedpassword})
           await NewUser.save()


           return res.status(200).json({success:true,message:"user registered successfully"})



       }else{
        return res.status(500).json("user already exist")
       }

        
    } catch(error){

        return res.status(500).json({success:false,message:"failed for sign up"})

    }
}


 export const SignIn = async (req,res)=>{
    console.log(req.body)

    const {email,password} = req.body


    try{
        const ExistingUser = await User.findOne({email:email})

        if(ExistingUser){
            const matchedpassword = await bcrypt.compare(password,ExistingUser.password)


            if(!matchedpassword){
                return res.status(404).json({success:false,message:"login not successfully"})

            }

            const token = jwt.sign({id:ExistingUser._id},process.nextTick.SECRET_KEY)
            console.log(token,"my token")

            return res.status(200).json({success:true,message:"login successfully"})
        }
    }catch (error) {
        return res.status(500).json({success:false,message:"failed to signin"})
      
        
      }
 }