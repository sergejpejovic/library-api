import express from "express";
import authorController from "../controllers/author-controller";

const authorsRouter = express.Router();

authorsRouter
  .route("/")
  .get(authorController.getAllAuthors)
  .post(authorController.createAuthor);

authorsRouter
  .route("/:id")
  .get(authorController.getAuthorById)
  .put(authorController.updateAuthor)
  .delete(authorController.deleteAuthor);

authorsRouter.route("/:id/books").get(authorController.getBooksByAuthorId);

export default authorsRouter;
