import React from 'react';
import Layout from '@/app/layout';

function App({ Component, pageProps }) {
  // Conditional rendering based on the page being rendered
  if (Component.noLayout) {
    return <Component {...pageProps} />;
  }
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;