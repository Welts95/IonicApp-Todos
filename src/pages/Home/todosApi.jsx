const ENDPOINT = "https://tc-todo-2022.herokuapp.com/todos";

export function updateTodo(todo) {
  return fetch(`${ENDPOINT}/${todo.id}`, {
    method: "POST",
    body: JSON.stringify(todo),
  }).then((response) => response.json());
}
export function getTodos() {
  return fetch(ENDPOINT).then((response) => response.json());
}
