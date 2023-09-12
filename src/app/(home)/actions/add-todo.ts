'use server'

import { isLeft } from 'fp-ts/lib/Either'

import { revalidatePath } from 'next/cache'
import { todoFacade } from '@/modules/facades/todo-facade'

export const addTodoAction = async (data: FormData) => {
  const content = data.get('content')
  if (!content || typeof content !== 'string') {
    return
  }
  const result = await todoFacade.addTodo({
    content,
  })
  if (isLeft(result)) {
    throw new Error(result.left.message)
  }

  revalidatePath('/todos')
}
