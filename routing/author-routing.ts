import express from "express";
import authorController from "../controllers/author-controller";
import authMiddleware from "../middleware/auth-middleware";

const authorsRouter = express.Router();

authorsRouter
  .route("/")
  .get(authorController.getAllAuthors)
  .post(authorController.createAuthor, authMiddleware);

authorsRouter
  .route("/:id")
  .get(authorController.getAuthorById)
  .put(authorController.updateAuthor, authMiddleware)
  .delete(authorController.deleteAuthor, authMiddleware);

authorsRouter.route("/:id/books").get(authorController.getBooksByAuthorId);

export default authorsRouter;
