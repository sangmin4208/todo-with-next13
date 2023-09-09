import { Failure } from '@/modules/core/failure'
import { TodoRepositoryImpl } from '../../data/todo-repository-impl'
import { TodoRepository } from '../todo-repository'
import { Either } from 'fp-ts/lib/Either'
import { Todo } from '../todo-entity'
import { UseCase } from '@/modules/core/usecase'
import { Result } from '@/modules/core/result'

export class GetTodos extends UseCase<Result<Failure, Todo[]>, void> {
  private todoRepository: TodoRepository
  constructor(todoRepository?: TodoRepository) {
    super()
    this.todoRepository = todoRepository ?? new TodoRepositoryImpl()
  }

  execute() {
    return this.todoRepository.getAll()
  }
}
