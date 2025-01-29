// import mongoose from "mongoose";

// // Buffering disable kar diya
// mongoose.set("bufferCommands", false);

// export const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       serverSelectionTimeoutMS: 5000, // 5 sec tak wait karega
//     });

//     console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error("❌ MongoDB Connection Error:", error.message);
//     process.exit(1); // Server exit kar dega agar connection fail ho
//   }
// };









import mongoose from "mongoose";


export const connectDB = async () => {
 try{

  

    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Mongo DB connected :${conn.connection.host}`);
    
 }
 catch (error) {
    console.log("Mongodb connection error:" , error);
    
 }

}