import Header from "../Header";
import Footer from "../Footer";

function Layout({ children, ...pageProps }) {
  return (
    <>
      <Header drawerFilterLoad={pageProps.drawerFilterLoad} />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
