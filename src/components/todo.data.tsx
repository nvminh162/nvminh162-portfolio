interface IProps {
  todos: {
    id: number;
    title: string;
    isComplete: boolean;
  }[];
  owner: string;
  age: number;
  isDeveloper: boolean;
}

// type TProps = {
//   todos: {
//     id: number;
//     title: string;
//     isComplete: boolean;
//   }[];
//   owner: string;
//   age: number;
//   isDeveloper: boolean;
// };

const TodoData = (props: IProps) => {
  const { todos } = props;
  return (
    <div>
      {todos.map((item) => (
        <div>{item.title}</div>
      ))}
    </div>
  );
};

export default TodoData;
