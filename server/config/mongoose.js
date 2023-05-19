import mongoose from 'mongoose';


const mongoURL = process.env.MONGODB_URL

mongoose.connect(mongoURL);

mongoose.connect.on("connected" , () => {
    console.log("DB Connection Successful")
})

mongoose.connect.on("reconnected", () => {
    console.log("DB reconnected")
})

mongoose.connect.on("error" , () => {
    console.log("Mongo Connection Error")
    mongoose.disconnect()
})

mongoose.connect.on("disconnected", () => {
    console.log("Mongo Connection is Disconnected")
})