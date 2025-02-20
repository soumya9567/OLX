import express from "express";
import dotenv from "dotenv"
import ConnectDB from "./mongodb.js";
import route from "./routes/authroute.js"
import cors from "cors"


const app = express();
dotenv.config()


const port = process.env.PORT||4000;
app.use(express.json())
ConnectDB()


app.use(cors({
    origin:"",
    method:["GET","POST"]
}))



app.use(express.urlencoded({ extended: true }));

app.set("view engine","ejs")

app.use("/auth",route)



    app.listen(port, () => {
      console.log("server host 3000");
   
  })
 
