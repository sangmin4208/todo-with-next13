import * as E from 'fp-ts/Either'
import { Failure } from './failure'

export type Result<F extends Failure, T> = Promise<E.Either<F, T>>
