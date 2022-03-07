import "../styles/globals.css";
import LeafletUtils from "../utils/LeafletUtils";
import Layout from "../components/Layout";
import "antd/dist/antd.css";
import { UserProvider } from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Layout>
        <LeafletUtils />
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}

export default MyApp;
