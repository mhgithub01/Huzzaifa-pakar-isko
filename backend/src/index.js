import dotenv from "dotenv";
dotenv.config();
import express from "express";
import authRoutes from "./routes/auth.route.js";
import {connectDB} from "./lib/db.js";

await connectDB()
.then(() => console.log("Database Connected"))
.catch((err) => console.log("Database Connection Failed", err));

console.log("MONGODB_URI:", process.env.MONGODB_URI);


const app = express();

const PORT = process.env.PORT || 5001;


app.use(express.json())

app.use("/api/auth" , authRoutes);



app.listen(PORT, () => {
    console.log("server is running on PORT:" + PORT);
    connectDB()
    
});