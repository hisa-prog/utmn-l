import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/layout";
import React from "react";
import ProjectsContextProvider from "../components/context/projects";
import ProgramsContextProvider from "../components/context/programs";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
        <title>Центр дополнительного образования ТюмГУ</title>
        <meta
          property="title"
          content="Центр дополнительного образования ТюмГУ"
          key="title"
        />
        <meta
          name="description"
          content="Курсы и тренинги для вашего развития"
        />
        {/* <meta
          name="keywords"
          content=""
        /> */}
        <meta property="og:image" content="/metaImage.png" />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="500" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>
      <ProgramsContextProvider>
        <ProjectsContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ProjectsContextProvider>
      </ProgramsContextProvider>
    </>
  );
}
export default MyApp;
