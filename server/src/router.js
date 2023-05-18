const express = require('express');
const isLoggedIn = require('./middleware/isLoggedIn');


const createTodoRoute = require('./routes/createTodoRoute');
const readTodosRoute = require('./routes/readTodosRoute');
const updateTodoRoute = require('./routes/updateTodoRoute');
const deleteTodoRoute = require('./routes/deleteTodoRoute');

const router = express.Router();

// login or register for a free account on dis awesome website!1
router.post('/login', require('./routes/loginRoute'));
router.post('/register', require('./routes/registerRoute'));

router.post('/todos', isLoggedIn, createTodoRoute);
router.get('/todos', isLoggedIn, readTodosRoute);
router.put('/todos/:id', isLoggedIn, updateTodoRoute);
router.delete('/todos/:id', isLoggedIn, deleteTodoRoute);

module.exports = router;