import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import { ThemeProvider } from '@mui/material/styles'
import MainTheme from '../styles/themes/Theme'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ThemeProvider theme={MainTheme}>
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  )


}//Closes App Wrapper
