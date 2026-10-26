import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import destinyRoutes from "./routes/destinyRoutes.js";
import Destination from "./models/Destination.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/", destinyRoutes );

await mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to MongoDB");
})
// new and save destination
// const Ooty = new Destination({
//     name: "Ooty",
//     state: "Tamil Nadu",
//     distance: 800,
//     rating: 5   
// })

// await Ooty.save().then(()=> {
//     console.log("Ooty saved");
// });
// // insertMany
// const destinations = await Destination.insertMany([
//     {
//         name: "Bijapur",
//         state: "Karnataka",
//         distance: 1000,
//         rating: 4
//     },
//     {
//         name: "Davangere",
//         state: "Karnataka",
//         distance: 1000,
//         rating: 4
//     },
//     {
//         name: "Agra",
//         state: "Uttar Pradesh",
//         distance: 1000,
//         rating: 4
//     }
// ])
const result = await Destination.exists({
    name: "Jaipur"
})
console.log(result);

app.listen(3000, () => {
    console.log("server is running on port 3000");
})