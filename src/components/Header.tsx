"use client";

import Link from "next/link";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import MobileMenu from "./MobileMenu";
import { Fragment, useState } from "react";

export default function Header() {

  const [showMobile, setShowMobile] = useState(false);

  return (
    <Fragment>
      <div className="flex items-center justify-between w-full px-6 py-8 xl:w-[1200px]">
        <div className="flex items-center z-20">
          <Link href={"/"} className="flex items-center mr-2 sm:mr-4">
          </Link>

        </div>

        <div className="items-center hidden sm:flex">
        <ConnectButton />
        </div>

        <button onClick={() => setShowMobile((x) => !x)} className="sm:hidden">
        </button>
      </div>
      <MobileMenu show={showMobile} />
    </Fragment>
  );
}
