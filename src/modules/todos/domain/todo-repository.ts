import { Result } from '@/core/result'
import { Failure } from '@/modules/core/failure'
import { Todo } from '@/todo-module/domain/todo-entity'
import { Either } from 'fp-ts/lib/Either'

export interface TodoRepository {
  getAll(): Result<Failure, Todo[]>
  create(content: string): Result<Failure, void>
  update(todo: Partial<Todo>): Result<Failure, void>
  delete(id: string): Promise<Either<Failure, void>>
}
