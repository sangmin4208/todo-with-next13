import { Failure } from '@/modules/core/failure'
import { UseCase } from '@/modules/core/usecase'
import { Result } from '@/modules/core/result'
import { TodoRepository } from '@/domain/repositories/todo-repository'

export interface AddTodoParams {
  content: string
}

export class AddTodo extends UseCase<Result<Failure, void>, AddTodoParams> {
  private todoRepository: TodoRepository
  constructor(todoRepository: TodoRepository) {
    super()
    this.todoRepository = todoRepository
  }

  execute(params: AddTodoParams) {
    return this.todoRepository.create(params)
  }
}
