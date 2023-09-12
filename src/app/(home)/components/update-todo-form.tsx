'use client'
import { FunctionComponent } from 'react'
import { useTodoUpdateModalContext } from '../hooks/use-todo-update-modal-context'
import { Input } from '@nextui-org/react'
import { FormSubmitButton } from './form-submit-button'
import { updateTodoContentAction } from '../actions/update-todo-content'
interface UpdateTodoFormProps {}

const UpdateTodoForm: FunctionComponent<UpdateTodoFormProps> = () => {
  const { todo, setOpen } = useTodoUpdateModalContext()
  const handleSubmit = async (formData: FormData) => {
    await updateTodoContentAction(formData)
    setOpen(false)
  }
  return (
    <>
      <div className='flex flex-col gap-2'>
        <form action={handleSubmit} className='flex flex-col gap-4 py-4'>
          <input type='hidden' name='id' defaultValue={todo?.id} />
          <Input
            labelPlacement='outside'
            label='content'
            type='text'
            name='content'
            defaultValue={todo?.content}
          />
          <div className='w-full flex justify-end'>
            <FormSubmitButton label='Update' pendingLabel='Updating' />
          </div>
        </form>
      </div>
    </>
  )
}

export { UpdateTodoForm }
