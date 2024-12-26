import express from "express";
import authorController from "../controllers/author-controller";

const authorsRouter = express.Router();

authorsRouter.route("/").get(authorController.getAllAuthors);

authorsRouter.route("/:id").get(authorController.getAuthorById);

export default authorsRouter;
