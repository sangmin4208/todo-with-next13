'use client'

import { Card, CardBody, Skeleton } from '@nextui-org/react'
import { FunctionComponent, PropsWithChildren } from 'react'
interface TodoListSkeletonProps extends PropsWithChildren {}

const TodoListSkeleton: FunctionComponent<TodoListSkeletonProps> = ({}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
      <TodoItemSkeleton />
      <TodoItemSkeleton />
      <TodoItemSkeleton />
      <TodoItemSkeleton />
    </div>
  )
}

export { TodoListSkeleton }

const TodoItemSkeleton = ({}) => {
  return (
    <Card>
      <Skeleton className='flex w-full h-[80px]' />
    </Card>
  )
}
