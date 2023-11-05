import express from "express";
import {
  postBook,
  getBooks,
  getBook,
  updatedBook,
  deleteBook
} from "../controllers/book.js"

const router = express.Router();

router.post('/', postBook);
 
router.get('/', getBooks);

router.get('/:id', getBook);

router.put("/:id", updatedBook);

router.delete("/:id", deleteBook);

export default router;