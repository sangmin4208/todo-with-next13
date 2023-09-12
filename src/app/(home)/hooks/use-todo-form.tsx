import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { todoContentValidation } from '@/app/validations/todo-content'

const todoFormSchema = z.object({
  content: todoContentValidation,
})

export const useTodoForm = () => {
  const form = useForm<z.infer<typeof todoFormSchema>>({
    resolver: zodResolver(todoFormSchema),
    defaultValues: {
      content: '',
    },
  })

  return {
    form,
  }
}
