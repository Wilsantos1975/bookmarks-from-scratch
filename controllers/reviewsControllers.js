const express = require("express");
const reviews = express.Router();

const { getAllReviews, getAReview, createReview, deleteReview } = require('../queries/reviewsQueries.js');

//index route

reviews.get("/", async (req, res) => {

    const { bookmark_id } = req.query; //req.query is the query string in the url
    const allReviews = await getAllReviews(bookmark_id);
    if (allReviews[0]) {
        res.status(202).json(allReviews);
    } else {
        res.status(404).json({ error: "Server Error" });
    }
}   
);
//show route
 reviews.get("/:id", async (req, res) => {
    const { id } = req.params;
    const review = await getAReview(id);

    if (review) {
        res.status(200).json(review);
    } else {

        res.status(404).json({ error: "Server Error" });

    }
});
//create route
reviews.post("/", async (req, res) => {
    const newReview = await createReview(req.body);
    if (newReview) {
        res.status(200).json(newReview);
    } else {
        res.status(404).json({ error: "Server Error" });
    }
});

//delete route
reviews.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedReview = await deleteReview(id);
    if (deletedReview.id) {
        res.status(200).json(deletedReview);
    } else {
        res.status(404).json({ error: "Server Error" });
    }
});



module.exports = reviews;
