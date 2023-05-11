import todo from "../model/Todo.js";

export const addTodo = async (request, response) => {
  try {
    const newTodo = await todo.create({
      data: request.body.data,
      createdAt: Date.now(),
    });

    await newTodo.save();

    response.status(200).json(newTodo);
  } catch (err) {
    return response.status(500).json(console.err.message);
  }
};
