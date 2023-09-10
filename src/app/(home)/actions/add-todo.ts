'use server'

import { isLeft } from 'fp-ts/lib/Either'

import { AddTodo } from '@/modules/todos/domain/usecases/add-todo'
import { revalidatePath } from 'next/cache'

export const addTodoAction = async (data: FormData) => {
  const content = data.get('content')
  if (!content || typeof content !== 'string') {
    return
  }
  const result = await new AddTodo().execute(content)
  if (isLeft(result)) {
    throw new Error(result.left.message)
  }

  revalidatePath('/todos')
}
