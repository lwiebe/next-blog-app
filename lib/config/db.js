import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://lianwieb:Egitarre@cluster0.qoxygi2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/blog-app')
    console.log("DB Connected");
}