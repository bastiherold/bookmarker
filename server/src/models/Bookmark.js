/**

# Bookmark

* Title - Text
* URL - Text
* Comment (description) - Text
* Created_at - DateTime
* Updated_at - DateTime
* Deleted_at - DateTime

*/

const mongoose = require('mongoose');

const { Schema } = mongoose;

const requiredFields = {
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
};

const bookmarkSchema = new Schema({
  title: { ...requiredFields.title },
  comment: String,
  url: { ...requiredFields.url },
  deleted_at: Date,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

const Bookmark = mongoose.model('Bookmark', bookmarkSchema);

module.exports = Bookmark;
