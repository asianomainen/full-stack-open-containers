const express = require('express');
const { Todo } = require('../mongo')
const router = express.Router();

/* GET todos listing. */
router.get('/', async (_, res) => {
  const todos = await Todo.find({})
  res.send(todos);
});

/* GET one todo. */
router.get('/:id', async (req, res) => {
  console.log(req.params.id)
  const foundTodo = await Todo.findById(req.params.id)

  if (foundTodo) {
    return res.send(foundTodo)
  } else {
    return res.status(204).end()
  }
});

/* PUT todo. */
router.put('/:id', async (req, res) => {
  const todo = req.body

  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, todo, {
    new: true,
  })

  res.send(updatedTodo)
});

/* POST todo to listing. */
router.post('/', async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false
  })
  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params
  req.todo = await Todo.findById(id)
  if (!req.todo) return res.sendStatus(404)

  next()
}

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.todo.delete()
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get('/', async (req, res) => {
  res.sendStatus(405); // Implement this
});

/* PUT todo. */
singleRouter.put('/', async (req, res) => {
  res.sendStatus(405); // Implement this
});

router.use('/:id', findByIdMiddleware, singleRouter)


module.exports = router;
