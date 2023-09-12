import { Failure } from '@/modules/core/failure'
import { UseCase } from '@/modules/core/usecase'
import { Either } from 'fp-ts/lib/Either'
import { TodoRepository } from '@/domain/repositories/todo-repository'

export interface DeleteTodoParams {
  id: string
}

export class DeleteTodo extends UseCase<
  Promise<Either<Failure, void>>,
  DeleteTodoParams
> {
  private todoRepository: TodoRepository
  constructor(todoRepository: TodoRepository) {
    super()
    this.todoRepository = todoRepository
  }

  execute(params: DeleteTodoParams) {
    return this.todoRepository.delete(params)
  }
}
