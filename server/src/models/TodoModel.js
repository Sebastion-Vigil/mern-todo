const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const TodoSchema = new mongoose.Schema({
  text: {
    type: String,
  },
  completed: {
    type: Boolean,
    default: false // wouldn't be a todo if already done, so duh
  }
});

const TodoModel = mongoose.model('Todo', TodoSchema);

module.exports = TodoModel;