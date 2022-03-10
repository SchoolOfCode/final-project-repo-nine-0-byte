import "../styles/globals.css";
import LeafletUtils from "../utils/LeafletUtils";
import Layout from "../components/Layout";
import "antd/dist/antd.css";
import { UserProvider } from "@auth0/nextjs-auth0";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  // let loadFilter = 0;
  const [loadFilter, setLoadFilter] = useState(0);
  async function drawerFilterLoad(filter) {
    console.log("drawer filter load running");
    // loadFilter = filter;
    setLoadFilter(filter);
    console.log("App loadfilter is ", filter);
  }
  return (
    <UserProvider>
      <Layout drawerFilterLoad={drawerFilterLoad}>
        <LeafletUtils />
        <Component {...pageProps} loadFilter={loadFilter} />
      </Layout>
    </UserProvider>
  );
}

export default MyApp;
