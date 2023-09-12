'use client'
import { FunctionComponent, useEffect } from 'react'
import { useTodoUpdateModalContext } from '../hooks/use-todo-update-modal-context'
import { Input } from '@nextui-org/react'
import { updateTodoContentAction } from '../actions/update-todo-content'
import { useTodoForm } from '../hooks/use-todo-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { FormSubmitButton } from './form-submit-button'
interface UpdateTodoFormProps {}

const UpdateTodoForm: FunctionComponent<UpdateTodoFormProps> = () => {
  const { todo, setOpen } = useTodoUpdateModalContext()
  const { form } = useTodoForm()

  useEffect(() => {
    if (!todo) return
    form.setValue('content', todo.content)
  }, [todo]) // eslint-disable-line react-hooks/exhaustive-deps

  const onSubmit = form.handleSubmit(async (data) => {
    if (!todo) return
    await updateTodoContentAction(todo?.id, data.content)
    setOpen(false)
    form.reset()
  })
  const isSubmitting = form.formState?.isSubmitting
  return (
    <>
      <Form {...form}>
        <form
          className='flex flex-col gap-4 w-full pt-2 pb-4'
          onSubmit={onSubmit}
        >
          <FormField
            control={form.control}
            name={'content'}
            render={(field) => {
              return (
                <FormItem className='w-full'>
                  <FormControl>
                    <Input
                      value={field.field.value}
                      onValueChange={(value) => {
                        field.field.onChange(value)
                      }}
                      type='text'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />

          <FormSubmitButton isSubmitting={isSubmitting} />
        </form>
      </Form>
    </>
  )
}

export { UpdateTodoForm }
