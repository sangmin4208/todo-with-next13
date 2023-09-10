import { FunctionComponent, Suspense } from 'react'
import { TodoList } from './components/todo-list'
import { GetTodos } from '@/modules/todos/domain/usecases/get-todos'
import { isLeft } from 'fp-ts/lib/Either'

interface TodosPageProps {}

const TodosPage: FunctionComponent<TodosPageProps> = async ({}) => {
  const result = await new GetTodos().execute()
  if (isLeft(result)) {
    return <div>Error</div>
  }

  const todos = await result.right
  return (
    <main className='p-2'>
      <TodoList todos={todos} />
    </main>
  )
}

export default TodosPage
