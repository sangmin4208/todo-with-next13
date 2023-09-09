import { Failure } from '@/modules/core/failure'
import { TodoRepositoryImpl } from '../../data/todo-repository-impl'
import { TodoRepository } from '../todo-repository'
import { Todo } from '../todo-entity'
import { UseCase } from '@/modules/core/usecase'
import { Result } from '@/modules/core/result'

export class UpdateTodo extends UseCase<Result<Failure, void>, Partial<Todo>> {
  private todoRepository: TodoRepository
  constructor(todoRepository?: TodoRepository) {
    super()
    this.todoRepository = todoRepository ?? new TodoRepositoryImpl()
  }

  execute(todo: Partial<Todo>) {
    return this.todoRepository.update(todo)
  }
}
