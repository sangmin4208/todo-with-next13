'use client'
import { FunctionComponent } from 'react'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import { Button, Spinner } from '@nextui-org/react'

interface FormSubmitButtonProps {
  label?: string
  pendingLabel?: string
}

const FormSubmitButton: FunctionComponent<FormSubmitButtonProps> = ({
  label = 'Submit',
  pendingLabel = 'Submitting',
}) => {
  const { pending } = useFormStatus()
  return (
    <Button color='primary' type='submit' disabled={pending}>
      {pending ? (
        <>
          {pendingLabel}
          <Spinner color='secondary' />
        </>
      ) : (
        label
      )}
    </Button>
  )
}

export { FormSubmitButton }
