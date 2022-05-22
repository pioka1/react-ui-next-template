import Head from "next/head";
import React from "react";
import { Container } from "@ecorp/ui-lib";

import { Navigation } from "../Navigation/Navigation";
import { Footer } from "../Footer/Footer";

interface BoilerplateProps {
  title: string;
	pagenav: Wif.MgnlNode;
	currentLanguage: string;
}

const Boilerplate:React.FC<BoilerplateProps> = ({
  title,
  pagenav,
  currentLanguage,
  children
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta content={title} property="og:title" key="title" />
    </Head>
    <Navigation pagenav={pagenav} currentLanguage={currentLanguage} />
    <main>
      <Container>
        {children}
      </Container>
    </main>
    <Footer />
  </>
);

export { Boilerplate };
