'use server'

import { isLeft } from 'fp-ts/lib/Either'

import { AddTodo } from '@/modules/todos/domain/usecases/add-todo'
import { revalidatePath } from 'next/cache'

export const addTodoAction = async (data: FormData) => {
  const content = data.get('content')
  if (!content || typeof content !== 'string') {
    return
  }
  const result = new AddTodo().execute(content)
  if (isLeft(result)) {
    throw new Error('Todo 추가에 실패했습니다.')
  }

  await result.right
  revalidatePath('/todos')
}
