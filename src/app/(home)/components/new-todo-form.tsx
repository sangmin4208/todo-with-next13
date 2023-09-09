'use client'
import { FunctionComponent, PropsWithChildren, useRef } from 'react'
import { addTodoAction } from '../actions/add-todo'
import { NewTodoFormSubmitButton } from './new-todo-form-submit-button'
import { Input } from '@nextui-org/react'

interface NewTodoFormProps extends PropsWithChildren {}

const NewTodoForm: FunctionComponent<NewTodoFormProps> = ({}) => {
  const ref = useRef<HTMLFormElement | null>(null)

  async function onCreateTodo(formData: FormData) {
    await addTodoAction(formData)
    ref.current?.reset()
  }

  return (
    <div>
      <form className='flex gap-4' ref={ref} action={onCreateTodo}>
        <Input
          label='Content'
          labelPlacement='outside'
          type='text'
          name='content'
          id='content'
        />
        <NewTodoFormSubmitButton />
      </form>
    </div>
  )
}

export { NewTodoForm }
