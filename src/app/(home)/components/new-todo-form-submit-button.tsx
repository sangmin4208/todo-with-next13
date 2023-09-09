'use client'
import { FunctionComponent, PropsWithChildren } from 'react'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import { Button, Spinner } from '@nextui-org/react'

interface NewTodoFormSubmitButtonProps extends PropsWithChildren {}

const NewTodoFormSubmitButton: FunctionComponent<
  NewTodoFormSubmitButtonProps
> = ({}) => {
  const { pending } = useFormStatus()
  return (
    <Button color='primary' type='submit' disabled={pending}>
      {pending ? (
        <>
          Submitting...
          <Spinner />
        </>
      ) : (
        'Submit'
      )}
    </Button>
  )
}

export { NewTodoFormSubmitButton }
