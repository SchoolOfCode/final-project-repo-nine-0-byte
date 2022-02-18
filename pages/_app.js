import "../styles/globals.css";
import LeafletUtils from "../utils/LeafletUtils";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <LeafletUtils />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
