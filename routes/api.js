const router = require('express').Router();
const { User, Post, Comment } = require('../models');

// User Routes
router.post('/users', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

// ... additional CRUD routes for User (e.g., GET, PUT, DELETE) ...

// Post Routes
router.post('/posts', async (req, res) => {
    try {
        const postData = await Post.create(req.body);
        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// ... additional CRUD routes for Post ...

// Comment Routes
router.post('/comments', async (req, res) => {
    try {
        const commentData = await Comment.create(req.body);
        res.status(200).json(commentData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// ... additional CRUD routes for Comment ...

module.exports = router;
