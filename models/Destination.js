import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema({
  name: String,
  country: String,
  city: String,
  category: String,
  price: Number,
  duration: Number,
  rating: Number
});

const Destination = mongoose.model("Destination", destinationSchema);

export default Destination;