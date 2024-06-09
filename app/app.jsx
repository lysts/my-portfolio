import React from 'react';
import Layout from '@/app/layout';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

function App({ Component, pageProps }) {
  // Conditional rendering based on the page being rendered
  if (Component.noLayout) {
    return <Component {...pageProps} />;
  }
  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics/>
      <SpeedInsights/>
    </Layout>
  );
}

export default App;