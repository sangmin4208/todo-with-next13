import { Todo } from '@/modules/domain/entities/todo'
import useSWRMutation from 'swr/mutation'
const fetcher = async (
  url: string,
  {
    arg,
  }: {
    arg: Todo
  }
) => {
  const res = await fetch(url, {
    method: 'PATCH',
    body: JSON.stringify(arg),
  })
  if (!res.ok) {
    throw new Error('Error')
  }

  return res.json()
}

export const useUpdateTodo = (id: string) => {
  const { trigger, isMutating } = useSWRMutation(`/api/todos/${id}`, fetcher, {
    revalidate: false,
  })

  return {
    update: ({
      todo,
      onSuccess,
      onError,
    }: {
      todo: Todo
      onSuccess?: () => void
      onError?: () => void
    }) =>
      trigger(todo, {
        onSuccess,
        onError,
      }),

    updating: isMutating,
  }
}
