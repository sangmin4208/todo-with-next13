'use client'
import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody } from '@nextui-org/react'

import { FunctionComponent } from 'react'
import { useTodoUpdateModalContext } from '../hooks/use-todo-update-modal-context'
import { UpdateTodoForm } from './update-todo-form'
interface UpdateTodoModalProps {}

const UpdateTodoModal: FunctionComponent<UpdateTodoModalProps> = () => {
  const { open, setOpen } = useTodoUpdateModalContext()

  return (
    <>
      <Modal isOpen={open} onOpenChange={setOpen} isDismissable={false}>
        <ModalContent>
          <ModalHeader className='flex flex-col gap-1'>Update Todo</ModalHeader>
          <ModalBody>
            <UpdateTodoForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export { UpdateTodoModal }
