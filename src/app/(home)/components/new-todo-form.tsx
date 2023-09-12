'use client'
import { FunctionComponent, PropsWithChildren } from 'react'
import { addTodoAction } from '../actions/add-todo'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { useTodoForm } from '../hooks/use-todo-form'
import { FormSubmitButton } from './form-submit-button'
import { Input } from '@nextui-org/react'

interface NewTodoFormProps extends PropsWithChildren {}

const NewTodoForm: FunctionComponent<NewTodoFormProps> = ({}) => {
  const { form } = useTodoForm()
  const onSubmit = form.handleSubmit(async (data) => {
    await addTodoAction(data.content)
    form.reset()
  })
  const isSubmitting = form.formState?.isSubmitting
  return (
    <Form {...form}>
      <form className='flex gap-4 w-full' onSubmit={onSubmit}>
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
  )
}

export { NewTodoForm }
