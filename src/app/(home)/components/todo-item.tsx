'use client'

import { Todo } from '@/modules/todos/domain/todo-entity'
import { FunctionComponent, useState } from 'react'

import { Button, Card, CardBody, Checkbox } from '@nextui-org/react'
import { Trash2 } from 'lucide-react'
import { useUpdateTodo } from '../hooks/use-update-todo'
import { useRemoveTodo } from '../hooks/use-remove-todo'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import moment from 'moment'

interface TodoItemProps {
  todo: Todo
}

const TodoItem: FunctionComponent<TodoItemProps> = ({ todo }) => {
  const { update, updating } = useUpdateTodo(todo.id)
  const { remove, removing } = useRemoveTodo(todo.id)
  const router = useRouter()
  const [displayComplete, setDisplayComplete] = useState(todo.completed)

  const isDisabled = updating || removing

  return (
    <Card
      className={cn({
        'opacity-50': isDisabled,
      })}
    >
      <CardBody className='flex flex-row items-center justify-between'>
        <div>
          <Checkbox
            isDisabled={isDisabled}
            onValueChange={(value) => {
              update({
                todo: {
                  ...todo,
                  completed: value,
                },
                onSuccess: () => {
                  router.refresh()
                },
                onError: () => {
                  setDisplayComplete(!value)
                },
              })
              setDisplayComplete(value)
            }}
            isSelected={displayComplete}
            lineThrough
          >
            <p>{todo.content}</p>
          </Checkbox>
          <p className='text-xs text-gray-400'>
            {moment(todo.createdAt).format('YY.MM.DD, HH:mm:ss')}
          </p>
        </div>
        <Button
          isDisabled={isDisabled}
          onClick={() =>
            remove({
              todo,
              onSuccess: () => {
                router.refresh()
              },
            })
          }
          color='danger'
          isIconOnly
        >
          <Trash2 />
        </Button>
      </CardBody>
    </Card>
  )
}

export { TodoItem }
