import { Failure } from '@/modules/core/failure'

export class TodoNotFoundFailure extends Failure {
  constructor(message?: string) {
    super(message || 'Todo not found')
  }
}

export class TodoAlreadyExistsFailure extends Failure {
  constructor(message?: string) {
    super(message || 'Todo already exists')
  }
}

export class TodoNotCreatedFailure extends Failure {
  constructor(message?: string) {
    super(message || 'Todo not created')
  }
}

export class TodoNotUpdatedFailure extends Failure {
  constructor(message?: string) {
    super(message || 'Todo not updated')
  }
}

export class TodoNotDeletedFailure extends Failure {
  constructor(message?: string) {
    super(message || 'Todo not deleted')
  }
}

export class TodoNotCompletedFailure extends Failure {
  constructor(message?: string) {
    super(message || 'Todo not completed')
  }
}

export class TodoNotUncompletedFailure extends Failure {
  constructor(message?: string) {
    super(message || 'Todo not uncompleted')
  }
}
