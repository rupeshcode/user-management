import "@/styles/globals.css";
import { MantineProvider, createTheme } from "@mantine/core";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "@mantine/core/styles.css";
// import "@mantine/dates/styles.css";
import dynamic from "next/dynamic";

// import "../styles/nprogress.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
// import ToastifyAlert from "@/components/Toastify";
import { ModalsProvider } from "@mantine/modals";

const Layout = dynamic(() => import("./../layouts/Layout"), {
  ssr: false,
});

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <ModalsProvider>
        <Layout>
          {/* <ToastifyAlert /> */}
          <Component {...pageProps} />
        </Layout>
      </ModalsProvider>
    </MantineProvider>
  );
}
