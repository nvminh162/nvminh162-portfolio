interface IProps {
  todos: {
    id: number;
    title: string;
    isComplete: boolean;
  }[];
  owner?: string;
  age?: number;
  isDeveloper?: boolean;
  deleteTodo: (id: number) => void
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
  const { todos, deleteTodo } = props;
  return (
    <div>
      {todos.map((item) => (
        <div key={item.id}>
          {item.title}
          {` `}
          <button onClick={() => deleteTodo(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoData;
