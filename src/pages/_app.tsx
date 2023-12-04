import '../styles/globals.css'

function MyApp({ Component, pageProps }: any) {
  if(typeof window !== 'undefined') 
      console.log('standalone')
  else
      console.log('shell')

  return <Component {...pageProps} />
}

export default MyApp