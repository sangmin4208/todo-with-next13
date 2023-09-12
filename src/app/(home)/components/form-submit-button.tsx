import { cn } from '@/lib/utils'
import { Button, Spinner } from '@nextui-org/react'
import { FunctionComponent, PropsWithChildren } from 'react'
interface FormSubmitButtonProps {
  isSubmitting: boolean
  label?: string
  submittingLabel?: string
}

const FormSubmitButton: FunctionComponent<FormSubmitButtonProps> = ({
  isSubmitting,
  label = 'Submit',
  submittingLabel = 'Submitting',
}) => {
  return (
    <Button
      color='primary'
      type='submit'
      disabled={isSubmitting}
      className={cn({
        'opacity-50': isSubmitting,
      })}
    >
      {isSubmitting ? submittingLabel : label}
      {isSubmitting && <Spinner size='sm' color='secondary' />}
    </Button>
  )
}

export { FormSubmitButton }
