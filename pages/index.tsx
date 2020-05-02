import * as React from "react";

import Head from "next/head";
import Navigation from "../components/navigation";
import Display from "../components/display";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Yoello Brewdog Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navigation />
        <Display />
      </main>
    </div>
  );
}
