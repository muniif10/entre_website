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
      img: "https://media.licdn.com/dms/image/D5603AQHAQi7V-w-5hg/profile-displayphoto-shrink_800_800/0/1711806354521?e=1717632000&v=beta&t=QGOm0yMc-YNY11Ul9Rcgtq9iKXfWHEeF-yquODO20I8",
    },
    {
      name: "Muniif",
      title: "Lead Dev",
      img:"https://media.licdn.com/dms/image/D5603AQHlAEJysR4rXA/profile-displayphoto-shrink_800_800/0/1693906594073?e=1717632000&v=beta&t=SShvGcQ9xgBi_VkPNCbsM3_jGX0Jo2V7aj0jb8qdbMc"
    },
    {
      name: "Muadz Khalid",
      title: "Head of Marketing Division",
      img:"https://media.licdn.com/dms/image/D5603AQE3cGxxIciVpA/profile-displayphoto-shrink_800_800/0/1683530873380?e=1717632000&v=beta&t=cfFXNSJSk6JHx0tE70wKoxgX1UaObmKOtZ5lP6DTH-o"
    },
    {
      name: "Danish",
      title: "Human Resource",
      img:"https://media.licdn.com/dms/image/D5603AQFQJsmN2dkfuA/profile-displayphoto-shrink_800_800/0/1685456050785?e=1717632000&v=beta&t=lUUtjSA_XBKlozIFggqcwD4GhQ-ZkyVhaxnJuPl4n4Q"
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
