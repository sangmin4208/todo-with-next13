export const dynamic = 'force-dynamic'

import { FunctionComponent, Suspense } from 'react'
import { TodoList } from './components/todo-list'
import { isLeft } from 'fp-ts/lib/Either'
import { todoFacade } from '@/modules/facades/todo-facade'

interface TodosPageProps {}

const TodosPage: FunctionComponent<TodosPageProps> = async ({}) => {
  const result = await todoFacade.getTodos({})
  if (isLeft(result)) {
    return <div>{result.left.message}</div>
  }

  const todos = await result.right
  return (
    <main className='p-2'>
      <TodoList todos={todos} />
    </main>
  )
}

export default TodosPage
