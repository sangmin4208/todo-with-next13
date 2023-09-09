import { Failure } from '@/modules/core/failure'
import { Result } from '@/modules/core/result'
import { Todo } from '../domain/todo-entity'
import { TodoRepository } from '../domain/todo-repository'
import { TodoDatasource } from './todo-datasource'
import { tryCatch } from 'fp-ts/lib/Either'

export class TodoRepositoryImpl implements TodoRepository {
  private datasource: TodoDatasource
  constructor(datasource?: TodoDatasource) {
    this.datasource = datasource ?? new TodoDatasource()
  }
  getAll() {
    return tryCatch(
      async () => {
        const todos = await this.datasource.getTodos()
        return todos.map(
          (todo) => new Todo(todo.id, todo.content, todo.completed)
        )
      },
      (error) => new Failure((error as Error).message)
    )
  }

  create(content: string): Result<Failure, void> {
    return tryCatch(
      async () => {
        await this.datasource.createTodo(content)
      },
      (error) => new Failure((error as Error).message)
    )
  }

  update(todo: Partial<Todo>) {
    return tryCatch(
      async () => {
        await this.datasource.updateTodo({
          id: todo.id,
          content: todo.content,
          completed: todo.completed,
        })
      },
      (error) => new Failure((error as Error).message)
    )
  }

  delete(id: string) {
    return tryCatch(
      async () => {
        await this.datasource.deleteTodo(id)
      },
      (error) => new Failure((error as Error).message)
    )
  }
}
