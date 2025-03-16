import { Todo } from "../model/Todo.js";

export const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    const response = await Todo.create({ title, description });

    res.status(200).json({
      success: true,
      data: response,
      message: "Todo Created Successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const upadateTodo = await Todo.findByIdAndUpdate(
      { _id: id },
      {
        title,
        description,
        updatedAt: Date.now(),
      }
    );
    res.status(200).json({
      success: true,
      data: upadateTodo,
      message: "Todo updated Successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteTodo = await Todo.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      data: deleteTodo,
      message: "Todo deleted Successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
