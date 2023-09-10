export class Todo {
  id: string
  content: string
  completed: boolean
  createdAt: Date
  constructor(
    id: string,
    content: string,
    completed: boolean,
    createdAt: Date
  ) {
    this.id = id
    this.content = content
    this.completed = completed
    this.createdAt = createdAt
  }
}
