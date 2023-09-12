'use client'

import { Todo } from '@/modules/domain/entities/todo'
import { FunctionComponent, useState } from 'react'

import { Button, Card, CardBody, Checkbox } from '@nextui-org/react'
import { PencilIcon, Trash2 } from 'lucide-react'
import { useUpdateTodo } from '../hooks/use-update-todo'
import { useRemoveTodo } from '../hooks/use-remove-todo'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import moment from 'moment'
import { useToast } from '@/components/ui/use-toast'
import { useTodoUpdateModalContext } from '../hooks/use-todo-update-modal-context'

interface TodoItemProps {
  todo: Todo
}

const TodoItem: FunctionComponent<TodoItemProps> = ({ todo }) => {
  const { update, updating } = useUpdateTodo(todo.id)
  const { remove, removing } = useRemoveTodo(todo.id)
  const { openModal } = useTodoUpdateModalContext()
  const { toast } = useToast()
  const router = useRouter()
  const [displayComplete, setDisplayComplete] = useState(todo.completed)

  const isDisabled = updating || removing

  const handleUpdateModalOpen = () => {
    openModal(todo)
  }

  const handleDelete = () => {
    remove({
      todo,
      onSuccess: () => {
        router.refresh()
      },
      onError() {
        toast({
          variant: 'destructive',
          title: '삭제 실패',
        })
      },
    })
  }
  const handleUpdate = (value: boolean) => {
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
        toast({
          variant: 'destructive',
          title: '업데이트 실패',
        })
      },
    })
    setDisplayComplete(value)
  }

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
            onValueChange={handleUpdate}
            isSelected={displayComplete}
            lineThrough
          >
            <p>{todo.content}</p>
          </Checkbox>
          <p className='text-xs text-gray-400'>
            {moment(todo.createdAt).format('YY.MM.DD, HH:mm:ss')}
          </p>
        </div>
        <section className='flex gap-1'>
          <Button
            isDisabled={isDisabled}
            onClick={handleUpdateModalOpen}
            color='danger'
            isIconOnly
          >
            <PencilIcon />
          </Button>
          <Button
            isDisabled={isDisabled}
            onClick={handleDelete}
            color='danger'
            isIconOnly
          >
            <Trash2 />
          </Button>
        </section>
      </CardBody>
    </Card>
  )
}

export { TodoItem }
