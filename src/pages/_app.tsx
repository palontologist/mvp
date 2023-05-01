import { type AppType } from "next/app";
import { ClerkProvider } from '@clerk/nextjs';
import type { AppProps } from 'next/app'

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { NavBar } from "~/components/NavBar";
import { DiscoverPage } from "~/components/DiscoverPage";

const MyApp: AppType = ({ Component, pageProps }) => {
  
  return <ClerkProvider {...pageProps} >
    <NavBar />
    <DiscoverPage />
    
  <Component {...pageProps} />;
  </ClerkProvider>
};

export default api.withTRPC(MyApp);
