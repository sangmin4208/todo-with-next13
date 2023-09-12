import { Failure } from '@/modules/core/failure'
import { Result } from '@/modules/core/result'
import { TodoRepository } from '@/domain/repositories/todo-repository'
import { TodoDatasource } from '@/data/todos/todo-datasource'
import { left, right } from 'fp-ts/lib/Either'
import { AddTodoParams } from '@/modules/domain/usecases/todos/add-todo'
import { UpdateTodoParams } from '@/modules/domain/usecases/todos/update-todo'
import { DeleteTodoParams } from '@/modules/domain/usecases/todos/delete-todo'

export class TodoRepositoryImpl implements TodoRepository {
  private datasource: TodoDatasource
  constructor(datasource?: TodoDatasource) {
    this.datasource = datasource ?? new TodoDatasource()
  }
  async getAll() {
    try {
      const todos = await this.datasource.getTodos()
      return right(todos)
    } catch (error) {
      return left(new Failure((error as Error).message))
    }
  }

  async create(params: AddTodoParams): Result<Failure, void> {
    try {
      await this.datasource.createTodo(params.content)
      return right(undefined)
    } catch (error) {
      return left(new Failure((error as Error).message))
    }
  }

  async update(params: UpdateTodoParams) {
    try {
      await this.datasource.updateTodo({
        ...params.todo,
        id: params.id,
      })
      return right(undefined)
    } catch (error) {
      return left(new Failure((error as Error).message))
    }
  }

  async delete({ id }: DeleteTodoParams) {
    try {
      await this.datasource.deleteTodo(id)
      return right(undefined)
    } catch (error) {
      return left(new Failure('Not implemented'))
    }
  }
}
