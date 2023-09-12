import { FunctionComponent } from 'react'
import { TodoItem } from './todo-item'
import { Todo } from '@/modules/domain/entities/todo'
interface TodoListProps {
  todos: Todo[]
}

const TodoList: FunctionComponent<TodoListProps> = ({ todos }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
      {todos.map((todo) => (
        <TodoItem todo={{ ...todo }} key={todo.id} />
      ))}
    </div>
  )
}

export { TodoList }
