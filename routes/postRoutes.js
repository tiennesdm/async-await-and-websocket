const express = require('express');
const { body } = require('express-validator/check');

const postController = require('../controller/postcontroller');
const isAuth = require('../middleware/auth');

const router = express.Router();

// GET /userpost/posts
router.get('/posts', isAuth, postController.getPosts);

// POST /userpost/post
router.post(
  '/post',
  isAuth,
  [
    body('title')
      .trim()
      .isLength({ min: 5 }),
    body('content')
      .trim()
      .isLength({ min: 5 })
  ],
  postController.createPost
);

router.get('/post/:postId', isAuth, postController.getPost);

router.put(
  '/post/:postId',
  isAuth,
  [
    body('title')
      .trim()
      .isLength({ min: 5 }),
    body('content')
      .trim()
      .isLength({ min: 5 })
  ],
  postController.updatePost
);

router.delete('/post/:postId', isAuth, postController.deletePost);

module.exports = router;
