import { IonItem, IonLabel, IonList, IonToggle } from "@ionic/react";
import { useEffect, useState } from "react";
import { getTodos, updateTodo } from "./todosApi";

export function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then((json) => setTodos(json));
  }, []);

  const replace = (todo) => {
    const newTodos = todos.map((t) => {
      if (t.id === todo.id) return todo;
      else return t;
    });
    setTodos(newTodos);
  };

  const requestReplaceTodo = (todo) => {
    updateTodo(todo).then((json) => replace(json));
  };

  return (
    <>
      <IonList>
        {todos.map((t) => (
          <IonItem
            key={t.id}
            onClick={() =>
              requestReplaceTodo({ ...t, completed: !t.completed })
            }
          >
            <IonLabel>{t.title}</IonLabel>
            <IonToggle slot="start" checked={t.completed} />
          </IonItem>
        ))}
      </IonList>
    </>
  );
}
