class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = (Math.random() * todoText.length).toString();
  }
}

export default Todo;
