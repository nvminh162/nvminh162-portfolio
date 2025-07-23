import { useState } from "react";

interface ITodo {
  id: number;
  title: string;
  isComplete: boolean;
}

interface IProps {
  name?: string;
  addNewTodo: (value: ITodo) => void;
}

const TodoInput = (props: IProps) => {
  const { addNewTodo } = props;

  const [todo, setTodo] = useState<string>("");
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setTodo(text);
  };
  const handleClick = () => {
    if (!todo) {
      alert("Empty todo input!");
      return;
    }
    addNewTodo({
      id: Math.floor(Math.random() * 1000000),
      title: todo,
      isComplete: false,
    });
  };

  return (
    <div style={{ marginBottom: 20, display: "flex", gap: 10 }}>
      <input value={todo} onChange={handleTextChange} type="text" />
      <button onClick={handleClick}>Add Todo</button>
    </div>
  );
};

export default TodoInput;
