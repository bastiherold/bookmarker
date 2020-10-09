const { Router } = require('express');

const BookmarkEntry = require('../models/Bookmark');

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const bookmarks = await BookmarkEntry.find();
    res.json(bookmarks);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const bookmarkEntry = new BookmarkEntry(req.body);
    const createdEntry = await bookmarkEntry.save();

    res.json(createdEntry);
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(422);
    }

    next(error);
  }
});

module.exports = router;
