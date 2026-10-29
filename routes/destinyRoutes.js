import {
    showAllDestinations,
    createDestination,
    updateDestination,
    deleteDestination,
    deleteAgra
} from "../controllers/destinyControllers.js";
import express from "express";

const router = express.Router();

router.get("/destinations", showAllDestinations);
router.post("/destinations", createDestination);
router.put("/destinations/:id", updateDestination);
router.delete("/destinations/", deleteDestination);
router.delete("/destinationsAgra/:id", deleteAgra);

export default router;


