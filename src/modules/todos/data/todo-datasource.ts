import { PrismaClient } from '@prisma/client'
import db from '@/lib/db'
import { Todo } from '../domain/todo-entity'

export class TodoDatasource {
  private db: PrismaClient
  constructor(client?: PrismaClient) {
    this.db = client ?? db
  }

  async createTodo(content: string) {
    return this.db.todo.create({
      data: {
        content,
      },
    })
  }

  getTodos() {
    return this.db.todo.findMany({
      orderBy: [{ completed: 'asc' }, { createdAt: 'desc' }],
    })
  }

  updateTodo(todo: Partial<Todo>) {
    return this.db.todo.update({
      where: { id: todo.id },
      data: todo,
    })
  }
  deleteTodo(id: string) {
    return this.db.todo.delete({
      where: { id },
    })
  }
}
