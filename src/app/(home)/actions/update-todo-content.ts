'use server'

import { isLeft } from 'fp-ts/lib/Either'

import { revalidatePath } from 'next/cache'
import { todoFacade } from '@/modules/facades/todo-facade'

export const updateTodoContentAction = async (data: FormData) => {
  const { id, content } = parseFormDate(data)
  const result = await todoFacade.updateTodoContent(id, content)
  if (isLeft(result)) {
    throw new Error(result.left.message)
  }

  revalidatePath('/todos')
}

const parseFormDate = (data: FormData) => {
  try {
    const id = data.get('id')
    assertIsString(id)
    const content = data.get('content')
    assertIsString(content)
    return { id, content }
  } catch (error) {
    throw new Error('invalid form data')
  }
}

function assertIsString(value: unknown): asserts value is string {
  if (typeof value !== 'string') {
    throw new Error('value is not string')
  }
}
