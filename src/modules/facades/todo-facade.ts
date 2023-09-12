import { TodoRepository } from '@/domain/repositories/todo-repository'
import { AddTodo, AddTodoParams } from '@/domain/usecases/todos/add-todo'
import {
  DeleteTodo,
  DeleteTodoParams,
} from '@/domain/usecases/todos/delete-todo'
import { GetTodos, GetTodosParams } from '@/domain/usecases/todos/get-todos'
import { UpdateTodo } from '@/domain/usecases/todos/update-todo'
import { TodoRepositoryImpl } from '@/data/todos/todo-repository-impl'

class TodoFacade {
  private repo: TodoRepository
  constructor(repo?: TodoRepository) {
    this.repo = repo ?? new TodoRepositoryImpl()
  }

  async addTodo(params: AddTodoParams) {
    return new AddTodo(this.repo).execute(params)
  }

  async getTodos(params: GetTodosParams) {
    return new GetTodos(this.repo).execute(params)
  }

  async deleteTodo(params: DeleteTodoParams) {
    return new DeleteTodo(this.repo).execute(params)
  }

  async updateTodoContent(id: string, content: string) {
    return new UpdateTodo(this.repo).execute({
      id,
      todo: { content },
    })
  }

  async completeTodo(id: string) {
    return new UpdateTodo(this.repo).execute({
      id,
      todo: {
        completed: true,
      },
    })
  }

  async uncompleteTodo(id: string) {
    return new UpdateTodo(this.repo).execute({
      id,
      todo: {
        completed: false,
      },
    })
  }
}

export const todoFacade = new TodoFacade()
