import { useState } from "react";
import TodoData from "./todo.data";
import TodoInput from "./todo.input";

interface ITodo {
  id: number;
  title: string;
  isComplete: boolean;
}

const TodoList = () => {
  const todos = [
    {
      id: 1,
      title: "Learn React TypeScript",
      isComplete: false,
    },
    {
      id: 2,
      title: "Subscribe Youtube HoiDanIT",
      isComplete: true,
    },
    {
      id: 3,
      title: "Learn English",
      isComplete: true,
    },
  ];

  const [listTodo, setListTodo] = useState<ITodo[]>(todos);

  const addNewTodo = (todo: ITodo) => {
    setListTodo([...listTodo, todo]);
  };

  const deleteTodo = (id: number) => {
    const newList = listTodo.filter((item) => item.id !== id);
    setListTodo(newList);
  };

  return (
    <div
      style={{
        padding: 10,
        width: 600,
        margin: "50px auto",
        border: "1px solid #ccc",
        borderRadius: 10,
      }}
    >
      <div>My todo: </div>
      <br />
      <br />
      <TodoInput addNewTodo={addNewTodo} />
      <TodoData todos={listTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoList;
