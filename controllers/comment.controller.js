const { createNewComment } = require("../database/queries/comment.queries");
const { findTweetById } = require("../database/queries/tweet.queries");

exports.newComment = async (req, res, next) => {
    try {
        const body = req.body;
        const tweetId = req.params.tweetId;
        console.log(tweetId)
        const newComment = await createNewComment({...body, author: req.user})
        const tweet = await findTweetById(tweetId)
        tweet.comments.push(newComment._id);
        tweet.save();
        res.redirect(`/tweet/${tweetId}`);
    } catch (error) {
        next(error);
    }
}