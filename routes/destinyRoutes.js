import {
    showAllDestinations,
    showDestinationById,
    createDestination,
    updateDestination,
    deleteDestination
} from "../controllers/destinyControllers.js";
import express from "express";

const router = express.Router();

router.get("/destinations", showAllDestinations);
router.get("/destinations/:id", showDestinationById);
router.post("/destinations", createDestination);
router.put("/destinations/:id", updateDestination);
router.delete("/destinations/:id", deleteDestination);

export default router;


