export abstract class UseCase<Type, Param> {
  abstract execute(param: Param): Type
}
