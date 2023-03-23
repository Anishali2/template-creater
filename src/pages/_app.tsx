import 'tailwindcss/tailwind.css'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import GlobalStyles from '@/pages/GlobalStyles'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Provider store={store}> */}
      <GlobalStyles />
      <Component {...pageProps} />
      {/* </Provider> */}
    </>
  )
}
