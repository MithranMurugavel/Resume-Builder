import express from "express";
import cors from "cors";
import "dotenv/config";
import {connectDB} from "./config/database.js";
import userRouter from "./routes/userRouter.js";
const app = express();

app.use(express.json());
app.use(cors());
// for git users set port as 3000
const PORT = process.env.PORT;

await connectDB();
app.get('/',(req,res)=>{
    res.send("server is live")
})

app.use('/api/users',userRouter);

app.listen(PORT,()=>{
    console.log("Connnection Established");
})