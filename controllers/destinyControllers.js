import Destination from "../models/Destination.js";



export const showAllDestinations = async (req, res) => {
    const destinations = await Destination.find();
    res.status(200).json(destinations);
}

export const showDestinationById = async (req, res) => {
    const destination = await Destination.findById(req.params.id);
    res.status(200).json(destination);
}

export const createDestination = async (req, res) => {
    const destination = await Destination.create(req.body);
    res.status(201).json(destination);
}

export const updateDestination = async (req, res) => {
    const destination = await Destination.findOneAndUpdate(
        {
            state: req.params.id
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
export const deleteDestination = async (req, res) => {
    const destination = await Destination.deleteMany(
        {
            state: req.params.id
        }
    );
    res.status(200).json(destination);
}