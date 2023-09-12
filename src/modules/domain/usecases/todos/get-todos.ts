import { Failure } from '@/modules/core/failure'
import { UseCase } from '@/modules/core/usecase'
import { Result } from '@/modules/core/result'
import { Todo } from '@prisma/client'
import { TodoRepository } from '@/domain/repositories/todo-repository'

export interface GetTodosParams {}
export class GetTodos extends UseCase<Result<Failure, Todo[]>, GetTodosParams> {
  private todoRepository: TodoRepository
  constructor(todoRepository: TodoRepository) {
    super()
    this.todoRepository = todoRepository
  }

  execute(params: GetTodosParams) {
    return this.todoRepository.getAll(params)
  }
}
