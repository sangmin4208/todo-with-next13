import { FunctionComponent } from 'react'
import { TodoListSkeleton } from './components/todo-list-skeleton'
interface LoadingProps {}

const Loading: FunctionComponent<LoadingProps> = ({}) => {
  return <TodoListSkeleton />
}

export default Loading
