import Destination from "../models/Destination.js";

// Challenge 1 solution 
export const createDestination = async (req, res) => {
    const destination = await Destination.create({
       name: "Gokarna",
       country: "India",
       city: "Gokarna",
       category: "Beach",
       price: 15000,
       duration: 3,
       rating: 4.5 
    });
    res.status(201).json(destination);
}

// Challenge 2 solution
// export const showAllDestinations = async (req, res) => {
//     const destinations = await Destination.find();
//     res.status(200).json(destinations);
// }
// Challenge 5 Solution
// export const updateDestination = async (req, res) => {
//     const destination = await Destination.findOneAndUpdate(
//         {
//             name : req.params.id
//         },
//         {
//             price: 20000
//         },
//         {
//             new: true
//         }
//     )
//     res.status(200).json(destination);
// }
// Challenge 7 solution
export const updateDestination = async (req, res) => {
    const destination = await Destination.updateMany(
        {
            category : req.params.id
        },
        {
            $inc : {price: -1000}
        },
        {
            new: true
        }
    )
    res.status(200).json(destination);
}
// Challenge 9 solution
export const deleteDestination = async (req, res) => {
    const destination = await Destination.deleteMany(
        {
            rating: {
                $lte: 3.5
            }
        }
    )
    res.status(200).json(destination);
}
// Challenge 11 solution
export const showAllDestinations = async (req, res) => {
    const destinations = await Destination.find().sort({price: 1}).limit(5);
    res.status(200).json(destinations);
}
// Challenge 10 solution
export const deleteAgra = async (req, res) => {
    const destination = await Destination.findOneAndDelete(
        {
            name: req.params.id
        }
    )
    res.status(200).json(destination);
}