import Head from "next/head";
import { Button } from "~/components/ui/button";
import { Tauri } from "next/font/google";
import { NavMenu } from "../Nav/Nav_Bar";
import { SiteHead } from "~/components/header";
const tauri = Tauri({ weight: "400", subsets: ["latin"] });
export default function About_Us() {
  const people: { name: string; title: string; img?: string }[] = [
    {
      name: "Arif Danial",
      title: "Chief Operating Officer",
    },
    {
      name: "Muniif",
      title: "Lead Dev",
    },
    {
      name: "Muadz Khalid",
      title: "Head of Marketing Division",
    },
    {
      name: "Danish",
      title: "Human Resource",
    },
  ];

  return (
    <>
      <Head>
        <title>TechNex: Driving potential forward</title>
        <meta name="description" content="TechNex, innovation flourish here." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="min-h-screen bg-gray-100">
          <SiteHead />

          <div
            className={`${tauri.className} flex min-h-[30vh] items-center justify-center  bg-gradient-to-b from-sky-300 to-gray-100 px-5 py-5`}
          >
            <div className=" flex flex-col items-center justify-center gap-5  text-gray-950 ">
              <div className="m-1  px-10">
                <p className="text-4xl font-bold">About Us</p>
                <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  {people.map((peep) => {
                    return (
                      <div key={peep.title} className="min-w-[10vw] min-h-[10vh] rounded-lg bg-sky-200 shadow-md text-center">
                        <p className="font-semibold">{peep.title}</p>
                        {peep.name}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
