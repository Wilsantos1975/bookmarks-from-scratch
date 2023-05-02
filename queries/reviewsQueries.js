const db = require("../db/dbConfig");

//index query
const getAllReviews = async (bookmark_id) => {
  try {
    const allReviews = await db.any("SELECT * FROM reviews WHERE bookmark_id=$1",bookmark_id);
    return allReviews;
  } catch (error) {
    return error;
  }
};

//show query
const getAReview = async (id) => {
  try {
    const review = await db.one("SELECT * FROM reviews WHERE id=$1", id);
    return review;
  } catch (error) {
    return error;
  }
};

//create query
const createReview = async (review) => {
  //review is the req.body

  const { title, content, rating, bookmark_id } = review; //destructuring the req.body
  try {
    const newReview = await db.one(
      //db.one returns a single object from the query
      "INSERT INTO reviews (title, content, rating, bookmark_id, reviewer) VALUES($1, $2, $3, $4, $5) RETURNING *", //query to be executed
      [title, content, rating, bookmark_id, reviewer] //array of values to be inserted into the query
    );
    return newReview; //returning the new review
  } catch (error) {
    return error; //
  }
};

//delete query
const deleteReview = async (id) => {
  try {
    const deletedReview = await db.one(
      "DELETE FROM reviews WHERE id = $1 RETURNING *",
      id
    );
    return deletedReview;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllReviews, getAReview, deleteReview, createReview };
