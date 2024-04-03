import Head from "next/head";
import { Button } from "~/components/ui/button";
import { Tauri } from "next/font/google";
import { NavMenu } from "../components/Nav/Nav_Bar";
import { SiteHead } from "~/components/header";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "~/components/ui/card";
const tauri = Tauri({ weight: "400", subsets: ["latin"] });
export default function Home() {
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
            className={`${tauri.className} flex min-h-[30vh] items-center justify-center bg-gradient-to-b  from-sky-300 to-gray-100 px-5 py-5`}
          >
            <div className=" flex min-w-[20vw] max-w-[70vw] flex-col items-center  justify-center gap-5 text-gray-950">
              <div className="m-1  px-10 ">
                <p className="text-center text-4xl font-bold">
                  Your preferred service provider in the{" "}
                  <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                    Web
                  </span>{" "}
                  industry, and{" "}
                  <span className="bg-gradient-to-r from-blue-500 to-yellow-500 bg-clip-text text-transparent">
                    Inventory Management
                  </span>
                  .
                </p>
              </div>
              <div className="container flex flex-row items-center justify-center gap-3">
                <Button className="shadow-lg">Get Price Quotation</Button>
                <Button className="shadow-lg">Our Services</Button>
              </div>
            </div>
          </div>
          <div className="flex grid-rows-2 flex-row justify-center gap-5 p-5">
            <Card className="basis-1/3">
              <CardHeader>
                <CardTitle>Maximise inventory efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/computer1.jpg"
                  alt=""
                  width={500}
                  height={500}
                  className="h-full w-full rounded-lg object-cover"
                />
              </CardContent>
              <CardFooter>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  
                </p>
              </CardFooter>
            </Card>
            <Card className="basis-1/3">
              <CardHeader>
                <CardTitle>Turn leads into customers</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/computer2.jpg"
                  alt=""
                  width={500}
                  height={500}
                  className="h-full w-full rounded-lg object-cover"
                />
              </CardContent>
              <CardFooter>
                <p>
                  Consulting on web application that turns lead into satisfied
                  and happy customer.
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}
