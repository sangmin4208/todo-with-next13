import { Failure } from '@/modules/core/failure'
import { TodoRepository } from '@/domain/repositories/todo-repository'
import { Todo } from '@/domain/entities/todo'
import { UseCase } from '@/modules/core/usecase'
import { Result } from '@/modules/core/result'

export interface UpdateTodoParams extends Partial<Todo> {}
export class UpdateTodo extends UseCase<
  Result<Failure, void>,
  UpdateTodoParams
> {
  private todoRepository: TodoRepository
  constructor(todoRepository: TodoRepository) {
    super()
    this.todoRepository = todoRepository
  }

  execute(params: UpdateTodoParams) {
    return this.todoRepository.update(params)
  }
}
