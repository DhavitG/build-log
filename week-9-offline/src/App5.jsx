export default function App5_keys() {
  const todos = [
    {
      title: "Go to gym",
      done: false,
    },
    {
      title: "Eat food",
      done: true,
    },
  ];

  const todosComponents = todos.map((todo) => (
    <Todo title={todo.title} done={todo.done} key={todo.title} />
  ));

  return <div>{todosComponents}</div>;
}

function Todo({ title, done }) {
  return (
    <div>
      {title} - {done ? "Done" : "Not done"}
    </div>
  );
}
