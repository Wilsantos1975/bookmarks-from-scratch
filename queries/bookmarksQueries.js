const db = require("../db/dbConfig");

//index query
const getAllBookmarks = async () => {
  try {
    const allBookmarks = await db.any("SELECT * FROM bookmarks");
    return allBookmarks;
  } catch (error) {
    return error;
  }
};
//show query
const getABookmark = async (id) => {
  try {
    const bookmark = await db.one("SELECT * FROM bookmarks WHERE id=$1", id);
    return bookmark;
  } catch (error) {
    return error;
  }
};

//create query
const createBookmark = async (bookmark) => {
  //bookmark is the req.body

  const { name, url, is_favorite, category } = bookmark; //destructuring the req.body
  try {
    const newBookmark = await db.one(
      //db.one returns a single object from the query
      "INSERT INTO bookmarks (name, url, is_favorite, category) VALUES($1, $2, $3, $4) RETURNING *", //query to be executed
      [name, url, is_favorite, category] //array of values to be inserted into the query
    );
    return newBookmark; //returning the new bookmark
  } catch (error) {
    return error; //
  }
};

//delete query
const deleteBookmark = async (id) => {
  try {
    const deletedBookmark = await db.one(
      "DELETE FROM bookmarks WHERE id = $1 RETURNING *",
      id
    );
    return deletedBookmark;
  } catch (error) {
    return error;
  }
};

//update query
const updateBookmark = async (id, bookmark) => {
  try {   
    const { name, url, is_favorite, category } = bookmark;
    const updatedBookmark = await db.one(
      "UPDATE bookmarks SET name = $1, url = $2, is_favorite = $3, category = $4 WHERE id = $5 RETURNING *",
      [name, url, is_favorite, category, id]
    );
    return updatedBookmark;
  } catch (error) {
    return error;
  }
};




module.exports = { getAllBookmarks, getABookmark, createBookmark, deleteBookmark, updateBookmark };
