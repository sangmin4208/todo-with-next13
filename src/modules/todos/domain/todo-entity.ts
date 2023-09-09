export class Todo {
  id: string
  content: string
  completed: boolean
  constructor(id: string, content: string, completed: boolean) {
    this.id = id
    this.content = content
    this.completed = completed
  }
}
