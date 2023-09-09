import * as E from 'fp-ts/Either'
import { Failure } from './failure'

export type Result<F extends Failure, T> = E.Either<F, Promise<T>>
