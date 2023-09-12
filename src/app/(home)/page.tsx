export const dynamic = 'force-dynamic'

import { FunctionComponent, Suspense } from 'react'
import { TodoList } from './components/todo-list'
import { isLeft } from 'fp-ts/lib/Either'
import { todoFacade } from '@/modules/facades/todo-facade'
import { UpdateTodoModal } from './components/update-todo-modal'
import { TodoUpdateModalProvider } from './hooks/use-todo-update-modal-context'

interface TodosPageProps {}

const TodosPage: FunctionComponent<TodosPageProps> = async ({}) => {
  const result = await todoFacade.getTodos({})
  if (isLeft(result)) {
    return <div>{result.left.message}</div>
  }

  const todos = await result.right
  return (
    <TodoUpdateModalProvider>
      <main className='p-2'>
        <UpdateTodoModal />
        <TodoList todos={todos} />
      </main>
    </TodoUpdateModalProvider>
  )
}

export default TodosPage
