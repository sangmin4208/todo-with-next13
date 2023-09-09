'use client'

import { NextUIProvider } from '@nextui-org/react'
import { FunctionComponent, PropsWithChildren } from 'react'
interface NextUiProviderProps extends PropsWithChildren {}

const AppNextUIProvider: FunctionComponent<NextUiProviderProps> = ({
  children,
}) => {
  return <NextUIProvider>{children}</NextUIProvider>
}

export { AppNextUIProvider }
