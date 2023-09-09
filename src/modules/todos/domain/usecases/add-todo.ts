import { Failure } from '@/modules/core/failure'
import { TodoRepositoryImpl } from '../../data/todo-repository-impl'
import { TodoRepository } from '../todo-repository'
import { UseCase } from '@/modules/core/usecase'
import { Result } from '@/modules/core/result'

export class AddTodo extends UseCase<Result<Failure, void>, string> {
  private todoRepository: TodoRepository
  constructor(todoRepository?: TodoRepository) {
    super()
    this.todoRepository = todoRepository ?? new TodoRepositoryImpl()
  }

  execute(content: string) {
    return this.todoRepository.create(content)
  }
}
