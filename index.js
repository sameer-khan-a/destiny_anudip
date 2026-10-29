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
//   {
//     name: "Goa Beach Escape",
//     country: "India",
//     city: "Goa",
//     category: "Beach",
//     price: 18000,
//     duration: 4,
//     rating: 4.5
//   },
//   {
//     name: "Hampi",
//     country: "India",
//     city: "Vijayanagara",
//     category: "Heritage",
//     price: 12000,
//     duration: 3,
//     rating: 4.7
//   },
//   {
//     name: "Manali Adventure",
//     country: "India",
//     city: "Manali",
//     category: "Mountain",
//     price: 22000,
//     duration: 5,
//     rating: 4.8
//   },
//   {
//     name: "Ooty Hills",
//     country: "India",
//     city: "Ooty",
//     category: "Mountain",
//     price: 14000,
//     duration: 3,
//     rating: 4.3
//   },
//   {
//     name: "Coorg Coffee Trails",
//     country: "India",
//     city: "Coorg",
//     category: "Mountain",
//     price: 13000,
//     duration: 3,
//     rating: 4.4
//   },
//   {
//     name: "Agra Taj Mahal",
//     country: "India",
//     city: "Agra",
//     category: "Heritage",
//     price: 11000,
//     duration: 2,
//     rating: 4.5
//   },
//   {
//     name: "Mysore Palace Tour",
//     country: "India",
//     city: "Mysore",
//     category: "Heritage",
//     price: 9000,
//     duration: 2,
//     rating: 4.6
//   },
//   {
//     name: "Kodaikanal Escape",
//     country: "India",
//     city: "Kodaikanal",
//     category: "Mountain",
//     price: 16000,
//     duration: 3,
//     rating: 3.2
//   },
//   {
//     name: "Ranthambore Safari",
//     country: "India",
//     city: "Sawai Madhopur",
//     category: "Wildlife",
//     price: 25000,
//     duration: 3,
//     rating: 4.4
//   },
//   {
//     name: "Andaman Islands",
//     country: "India",
//     city: "Port Blair",
//     category: "Beach",
//     price: 42000,
//     duration: 6,
//     rating: 4.9
//   },
//   {
//     name: "Jaipur Royal Escape",
//     country: "India",
//     city: "Jaipur",
//     category: "Heritage",
//     price: 16000,
//     duration: 4,
//     rating: 4.7
//   },
//   {
//     name: "Kerala Backwaters",
//     country: "India",
//     city: "Alappuzha",
//     category: "Beach",
//     price: 20000,
//     duration: 4,
//     rating: 3.4
//   }
// ]);
const result = await Destination.exists({
    name: "Jaipur"
})
console.log(result);

app.listen(3000, () => {
    console.log("server is running on port 3000");
})