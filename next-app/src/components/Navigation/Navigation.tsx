import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Navigation as NavigationUi } from "@ecorp/ui-lib";

import { locales } from "../../constants/app";

interface NavigationProps {
	pagenav: Wif.MgnlNode;
	currentLanguage: string;
}

const Navigation:React.FC<NavigationProps> = (props) => {
  const { pagenav } = props;
  const router = useRouter();

  const logo = (
    <Link href="/" passHref>
      <a>
        <Image
            src="/wif-logo.svg"
            alt="Work in Finland logo"
            width="108"
            height="45"
        />
      </a>
    </Link>
  );

  const pages = pagenav["@nodes"].map((node: string) => {
    const subnode = pagenav[node]; // Page directly under homepage
    const href = subnode["@path"].replace(String(process.env.NEXT_PUBLIC_MGNL_ROOT), "");

    return (
        <li key={subnode.title}>
          <Link href={href} passHref>
            <a>
              <span>{subnode.title}</span>
            </a>
          </Link>
        </li>
    );
  });

  const languages = locales.map((lang: string) => (
    <Link href={router.asPath} locale={lang} passHref>
      <a>
        <Image
          src={`/flags/${lang}.svg`}
          height={40}
          width={30}
        />
      </a>
    </Link>
  ));

  return (
    <NavigationUi
      logo={logo}
      pages={pages}
      languages={languages}
      currentLanguage={router.locale ?? "en"}
      isDesktop
      backgroundColor="gray"
    />
  );
};

export { Navigation };
