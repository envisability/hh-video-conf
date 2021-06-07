import '../styles/globals.css'
import Layout from "../components/layout/layout";
import '../styles/db-theme/theme.scss';

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
