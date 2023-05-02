const express = require("express");
const bookmarks = express.Router();
const {
  getAllBookmarks,
  getABookmark,
  createBookmark,
  deleteBookmark,
  updateBookmark,
} = require("../queries/bookmarksQueries");
const { checkRequest, checkId, validateURL }  = require("../validations/checkBookmarks");

//index route
bookmarks.get("/",async (req, res) => {
  const allBookmarks = await getAllBookmarks();
  if (allBookmarks) {
    res.status(202).json(allBookmarks);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

bookmarks.get("/:id", async (req, res) => {
  const { id } = req.params;
  const bookmark = await getABookmark(id);

  if (bookmark) {
    res.status(200).json(bookmark);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

//create route
bookmarks.post("/", checkRequest,  async (req, res) => {
  const newBookmark = req.body;
  try {
    const addedBookmark = await createBookmark(newBookmark);
    res.status(200).json(addedBookmark);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

//delete route
bookmarks.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBookmark = await deleteBookmark(id);
    res.status(200).json(deletedBookmark);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

//update route
bookmarks.put("/:id", checkRequest ,async (req, res) => {
  const { id } = req.params;
  const bookmark = req.body;
  try {
    const updatedBookmark = await updateBookmark(id, bookmark);
    res.status(200).json(updatedBookmark);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

module.exports = bookmarks;
