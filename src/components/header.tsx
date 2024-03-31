import React from "react";
import { Tauri } from "next/font/google";
import { NavMenu } from "~/components/Nav/Nav_Bar";
import Link from "next/link";
const tauri = Tauri({ weight: "400", subsets: ["latin"] });
export const SiteHead = () => {
  return (
    <>
      <div
        className={`${tauri.className} flex max-h-20 min-h-4 flex-row justify-between bg-gradient-to-br from-sky-500 to-sky-700 px-5 py-[2vh] pr-[20rem]`}
      >
        <Link
          href={"/"}
          className="self-center pr-5 text-2xl font-extrabold text-white  "
        >
          TechNex
        </Link>
        <NavMenu />
      </div>
    </>
  );
};
