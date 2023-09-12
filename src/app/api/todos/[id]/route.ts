import { todoFacade } from '@/modules/facades/todo-facade'
import { isLeft } from 'fp-ts/lib/Either'

export const DELETE = async (req: Request) => {
  const { id } = await req.json()
  const result = await todoFacade.deleteTodo({ id })
  if (isLeft(result)) {
    return new Response(
      JSON.stringify({
        message: '삭제에 실패했습니다.',
      }),
      {
        status: 500,
      }
    )
  }

  return new Response(
    JSON.stringify({
      message: '삭제에 성공했습니다.',
    })
  )
}

export const PATCH = async (req: Request) => {
  const { id, completed } = await req.json()

  const result = await todoFacade.updateTodo({
    id,
    todo: { completed },
  })
  if (isLeft(result)) {
    console.log(result.left.message)
    return new Response(
      JSON.stringify({
        message: '업데이트에 실패했습니다.',
      }),
      {
        status: 500,
      }
    )
  }

  return new Response(
    JSON.stringify({
      message: '업데이트에 성공했습니다.',
    })
  )
}
