'use server'

import { isLeft } from 'fp-ts/lib/Either'

import { revalidatePath } from 'next/cache'
import { todoFacade } from '@/modules/facades/todo-facade'

export const updateTodoContentAction = async (data: FormData) => {
  const id = data.get('id')
  const content = data.get('content')
  if (!content || typeof content !== 'string') {
    return
  }
  const result = await todoFacade.updateTodo({
    id: id as string,
    todo: { content },
  })
  if (isLeft(result)) {
    throw new Error(result.left.message)
  }

  revalidatePath('/todos')
}
