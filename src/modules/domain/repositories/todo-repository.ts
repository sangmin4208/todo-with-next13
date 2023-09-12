import { Result } from '@/modules/core/result'
import { Failure } from '@/modules/core/failure'
import { Todo } from '@/modules/domain/entities/todo'
import { Either } from 'fp-ts/lib/Either'
import { UpdateTodoParams } from '@/domain/usecases/todos/update-todo'
import { DeleteTodoParams } from '@/domain/usecases/todos/delete-todo'
import { GetTodosParams } from '@/domain/usecases/todos/get-todos'
import { AddTodoParams } from '@/domain/usecases/todos/add-todo'

export interface TodoRepository {
  getAll(params: GetTodosParams): Result<Failure, Todo[]>
  create(params: AddTodoParams): Result<Failure, void>
  update(params: UpdateTodoParams): Result<Failure, void>
  delete(params: DeleteTodoParams): Promise<Either<Failure, void>>
}
