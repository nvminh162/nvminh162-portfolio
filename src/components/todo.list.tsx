import TodoData from "./todo.data";

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

  return (
    <>
      <div>My todo: </div>
      <br />
      <TodoData todos={todos} owner={'nvminh162'} age={21} isDeveloper={true}/>
    </>
  );
};

export default TodoList;
