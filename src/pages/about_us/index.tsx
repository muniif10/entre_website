import Head from "next/head";
import { Button } from "~/components/ui/button";
import { Tauri } from "next/font/google";
import { NavMenu } from "../../components/Nav/Nav_Bar";
import { SiteHead } from "~/components/header";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "~/components/ui/resizable";
import Image from "next/image";
const tauri = Tauri({ weight: "400", subsets: ["latin"] });
export default function About_Us() {
  const people: { name: string; title: string; img?: string }[] = [
    {
      name: "Arif Danial",
      title: "Chief Operating Officer",
      img: "/arif.jpg",
    },
    {
      name: "Muniif",
      title: "Lead Dev",
      img:"/muniif.jpg"
    },
    {
      name: "Muadz Khalid",
      title: "Head of Marketing Division",
      img:"/muadz.jpg"
    },
    {
      name: "Danish",
      title: "Human Resource",
      img:"/danish.jpg"
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
                <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-1">
                  {people.map((peep) => {
                    return (
                      <ResizablePanelGroup key={peep.title}
                        direction="horizontal"
                        className="max-w-md rounded-lg border"
                      >
                        <ResizablePanel defaultSize={30}>
                          <div className="flex h-[200px] items-center justify-center p-6 bg-sky-300">
                            <span className="font-semibold">{peep.title}</span>
                          </div>
                        </ResizablePanel>
                        <ResizableHandle />
                        <ResizablePanel defaultSize={70}>
                          <ResizablePanelGroup direction="vertical">
                            <ResizablePanel defaultSize={25}>
                              <div className="flex h-full items-center justify-center p-6 bg-sky-900 text-white">
                                <span className="font-semibold">
                                  {peep.name}
                                </span>
                              </div>
                            </ResizablePanel>
                            <ResizableHandle />
                            <ResizablePanel defaultSize={75}>
                              <div className="flex h-full items-center justify-center p-6">
                                {peep.img !== undefined ? (
                                  <Image
                                  className="rounded-lg"
                                    src={peep.img}
                                    alt=""
                                    width={100}
                                    height={200}
                                  />
                                ) : (
                                  "No Image"
                                )}
                              </div>
                            </ResizablePanel>
                          </ResizablePanelGroup>
                        </ResizablePanel>
                      </ResizablePanelGroup>
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
