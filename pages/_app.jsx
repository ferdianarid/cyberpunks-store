import { Provider } from 'react-redux'
import store from '../redux/store'
import 'react-loading-skeleton/dist/skeleton.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
