import "../styles/global.css";

import Layout from "../components/Layout";
import AnimatedBackground from "../components/AnimatedBackground";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
