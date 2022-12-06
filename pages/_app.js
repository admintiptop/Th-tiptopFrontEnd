import "../styles/globals.css";
 
import SEO from "@bradgarropy/next-seo";
 
const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <SEO
        title="TheTipTop"
        description="high quality tea ranges with company"
        keywords={[
          "website",
          "detox teas",
          "white teas",
          "infuser",
          "vegetable teas",
        ]}
      />
      <Component {...pageProps} />
    </>
  );
};
 
export default MyApp;