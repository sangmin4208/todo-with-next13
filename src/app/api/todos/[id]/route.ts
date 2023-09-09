import { DeleteTodo } from '@/modules/todos/domain/usecases/delete-todo'
import { UpdateTodo } from '@/modules/todos/domain/usecases/update-todo'
import { isLeft } from 'fp-ts/lib/Either'

export const GET = async (
  req: Request,
  {
    params: { id },
  }: {
    params: {
      id: string
    }
  }
) => {
  console.log('GET', id)

  return new Response(JSON.stringify({ id }))
}
export const DELETE = async (req: Request) => {
  const { id } = await req.json()
  console.log('DELETE', id)
  const result = await new DeleteTodo().execute(id)
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
  console.log('PATCH', id, completed)

  const result = await new UpdateTodo().execute({ id, completed })
  if (isLeft(result)) {
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
