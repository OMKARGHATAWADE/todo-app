import { Todo } from "../model/Todo.js";

export const getTodo = async (req, res) => {
  try {
    const allTodo = await Todo.find({});

    res.status(200).json({
      success: true,
      data: allTodo,
      message: "Avalable Todos",
    });
  } catch (error) {
    console.error(err);
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went Wrong",
    });
  }
};

export const getById = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not Found",
      });
    }
    res.status(200).json({
      success: true,
      data: todo,
      message: "Todo Found",
    });
  } catch (error) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
