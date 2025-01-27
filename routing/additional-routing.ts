import express from "express";
import additionalController from "../controllers/additional-controller";

const additionalRouter = express.Router();

additionalRouter.route("/format").get(additionalController.getFormat);

additionalRouter.route("/jezici").get(additionalController.getLanguages);

additionalRouter.route("/pismo").get(additionalController.getPismo);

additionalRouter.route("/povez").get(additionalController.getPovez);

additionalRouter.route("/izdavaci").get(additionalController.getPublishers);

export default additionalRouter;
