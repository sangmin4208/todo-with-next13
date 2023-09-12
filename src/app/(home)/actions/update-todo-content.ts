'use server'

import { isLeft } from 'fp-ts/lib/Either'

import { revalidatePath } from 'next/cache'
import { todoFacade } from '@/modules/facades/todo-facade'

export const updateTodoContentAction = async (id: string, content: string) => {
  const result = await todoFacade.updateTodoContent(id, content)
  if (isLeft(result)) {
    throw new Error(result.left.message)
  }

  revalidatePath('/todos')
}
