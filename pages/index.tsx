import Head from "next/head";
import { AboutMe } from "../components/home/about-me";
import { FinalMessage } from "../components/home/final-message";
import { Greetings } from "../components/home/greetings";
import { Projects } from "../components/home/projects";
import { Technologies } from "../components/home/technologies";

export default function Home() {
  return (
    <main className="bg-slate-300 min-h-full flex flex-col gap-48 items-center p-16 overflow-y-auto">
      <Head>
        <title>Andres - Breez</title>
      </Head>
      <Greetings />
      <AboutMe />
      <Technologies />
      <Projects />
      <FinalMessage/>
    </main>
  );
}
