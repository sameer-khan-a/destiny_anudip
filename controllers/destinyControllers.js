import Destination from "../models/Destination.js";


// distinct method
// export const showAllDestinations = async (req, res) => {
//     const states = await Destination.distinct("state");
//     res.status(200).json(states);
// }

// CountDocuments
// export const showAllDestinations = async (req, res) => {
//     const states = await Destination.countDocuments({
//         state: "Karnataka"
//     });
//     res.status(200).json(states);
// }

// sort method
// export const showAllDestinations = async (req, res) => {
//     const states = await Destination.find().sort({distance: -1});
//     res.status(200).json(states);
// }

// limit method
export const showAllDestinations = async (req, res) => {
    const states = await Destination.find().sort({distance: -1}).limit(3);
    res.status(200).json(states);
}

export const showDestinationById = async (req, res) => {
    const destination = await Destination.findById(req.params.id);
    res.status(200).json(destination);
}

export const createDestination = async (req, res) => {
    const destination = await Destination.create(req.body);
    res.status(201).json(destination);
}

//findByIdAndUpdate
// export const updateDestination = async (req, res) => {
//     const destination = await Destination.findByIdAndUpdate(
//         req.params.id,
//         {
//             $set: req.body
//         },
//         {
//             new: true
//         }
//     )
//     res.status(200).json(destination);
// }

// findOneAndUpdate
export const updateDestination = async (req, res) => {
    const destination = await Destination.findOneAndUpdate(
        {
            name : req.params.id
        },
        {
            $set: req.body
        },
        {
            new: true
        }
    )
    res.status(200).json(destination);
}

// findByIdAndDelete
// export const deleteDestination = async (req, res) => {
//     const destination = await Destination.findByIdAndDelete(
//         req.params.id
//     )
//     res.status(200).json(destination);
// }

// findOneAndDelete
export const deleteDestination = async (req, res) => {
    const destination = await Destination.findOneAndDelete(
        {
            name: req.params.id
        }
    )
    res.status(200).json(destination);
}