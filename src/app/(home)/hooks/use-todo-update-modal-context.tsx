'use client'
import { Todo } from '@prisma/client'
import React, { ReactNode, createContext, useContext } from 'react'

type TodoUpdateModalContextType = {
  open: boolean
  setOpen: (open: boolean) => void
  todo: Todo | null
  openModal: (todo: Todo) => void
}

const TodoUpdateModalContext = createContext<TodoUpdateModalContextType | null>(
  null
)

export const useTodoUpdateModalContext = () => {
  const context = useContext(TodoUpdateModalContext)
  if (context === null) {
    throw new Error('UpdateModalContext is null')
  }
  return context
}

import { FunctionComponent, PropsWithChildren } from 'react'
interface TodoUpdateModalProviderProps extends PropsWithChildren {}

export const TodoUpdateModalProvider: FunctionComponent<
  TodoUpdateModalProviderProps
> = ({ children }) => {
  const [open, setOpen] = React.useState(false)
  const [todo, setTodo] = React.useState<Todo | null>(null)

  const openModal = (todo: Todo) => {
    setTodo({
      ...todo,
    })
    setOpen(true)
  }

  return (
    <TodoUpdateModalContext.Provider value={{ open, setOpen, todo, openModal }}>
      {children}
    </TodoUpdateModalContext.Provider>
  )
}
