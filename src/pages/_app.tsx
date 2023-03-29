import type { AppProps } from "next/app";
import "~/styles/globals.css";
// import "~/styles/scroll-bar.css";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
  type DehydratedState
} from "@tanstack/react-query";
import { useState } from "react";
import Layout from "~/components/layout";
import { useRouter } from "next/router";

const MyApp = ({ Component, pageProps }: AppProps<{dehydratedState: DehydratedState}>) => {
  const [queryClient] = useState(() => new QueryClient());
  const {pathname} = useRouter();
  
  if (pathname.includes("admin")) {
    return <Component {...pageProps} />;
  }
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
