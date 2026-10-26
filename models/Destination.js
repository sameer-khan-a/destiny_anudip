import mongoose from "mongoose"

const destinationSchema = new mongoose.Schema({
    name: String,
    state: String,
    distance: Number,
    rating: Number
})

const Destination = new mongoose.model("Destination", destinationSchema);

export default Destination;