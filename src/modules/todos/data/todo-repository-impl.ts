import { Failure } from '@/modules/core/failure'
import { Result } from '@/modules/core/result'
import { Todo } from '../domain/todo-entity'
import { TodoRepository } from '../domain/todo-repository'
import { TodoDatasource } from './todo-datasource'
import { left, right } from 'fp-ts/lib/Either'

export class TodoRepositoryImpl implements TodoRepository {
  private datasource: TodoDatasource
  constructor(datasource?: TodoDatasource) {
    this.datasource = datasource ?? new TodoDatasource()
  }
  async getAll() {
    try {
      const todos = await this.datasource.getTodos()
      const result = todos.map(
        (todo) =>
          new Todo(todo.id, todo.content, todo.completed, todo.createdAt)
      )
      return right(result)
    } catch (error) {
      return left(new Failure((error as Error).message))
    }
  }

  async create(content: string): Result<Failure, void> {
    try {
      await this.datasource.createTodo(content)
      return right(undefined)
    } catch (error) {
      return left(new Failure((error as Error).message))
    }
  }

  async update(todo: Partial<Todo>) {
    try {
      await this.datasource.updateTodo({
        id: todo.id,
        content: todo.content,
        completed: todo.completed,
      })
      return right(undefined)
    } catch (error) {
      return left(new Failure((error as Error).message))
    }
  }

  async delete(id: string) {
    try {
      await this.datasource.deleteTodo(id)
      return right(undefined)
    } catch (error) {
      return left(new Failure('Not implemented'))
    }
  }
}
