import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export default function Home() {
  return (
    <main className="bg-slate-300 min-h-full flex flex-col gap-48 items-center p-16 overflow-y-auto">
      <Greetings />
      <AboutMe />
      <Technologies />
      <Projects />
    </main>
  );
}

const Greetings = () => {
  return (
    <section className="flex gap-10 items-center">
      <h2 className="font-black text-3xl">Hello</h2>
      <Image
        src={"/breez-logo.png"}
        alt="BreezLogo"
        width={100}
        height={50}
      ></Image>
    </section>
  );
};

const AboutMe = () => {
  return (
    <section className="max-w-xs md:max-w-xl">
      <h2 className="font-black text-3xl text-center">About Me</h2>
      <p className="mt-3">
        Hi my name is Andres Calvo, Lead Frontend Developer at{" "}
        <Link
          passHref
          href={"https://www.auco.ai"}
          target={"_blank"}
          className="underline text-blue-500"
        >
          AUCO
        </Link>
        . Over two years of developer experience. One year leading a group of
        five frontend developers in a large enterprise project with four apps
        written in NextJS.
      </p>
      <p>
        Passionate about software architecture , 3D Rendering and Virtual
        Reality Development.
      </p>
    </section>
  );
};

const Technologies = () => {
  const techs = [
    "Javascript",
    "Typescript",
    "Python",
    "NodeJS with Electron",
    "HTML",
    "CSS",
    "SCSS",
    "Tailwind",
    "PostgreSQL",
    "MongoDB",
    "React",
    "Gatsby",
    "NextJS",
    "Astro",
    "AWS API Gateway",
    "AWS Lambda",
    "AWS S3",
    "AWS EC2",
    "AWS Cognito",
    "AWS CodeCommit",
    "AWS CodePipeline",
    "AWS Route53",
  ];
  return (
    <section className=" max-w-xs md:max-w-xl">
      <h2 className="font-black text-3xl text-center">Technologies</h2>
      <p className="mb-10">Technologies I have worked with:</p>
      <ul className="grid grid-cols-2 gap-x-7">
        {techs.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </section>
  );
};

interface Project {
  name: string;
  description: ReactNode;
  technologies: Array<string>;
  github?: string;
  pageLink?: string;
  images: Array<string>;
}
const PROJECTSDATA: Array<Project> = [
  {
    name: "File Explorer",
    description: (
      <p>
        <span>This a File Explorer I have been working in AUCO</span>
        <br />
        <span>
          Optimized with cached queries, fast user feedback via optimistic
          updates{" "}
        </span>
        <br />
        <span>Infinite scroll virtualized list</span> <br />
        <span>For legal reasons I can not share a repository link.</span>
      </p>
    ),
    technologies: [
      "NextJS",
      "Zustand",
      "Tanstack Query (React-Query)",
      "Tanstack Table (React-Table)",
      "Tanstack Virtual (React-Virtual)",
      "MongoDB",
      "Tailwind",
      "Typescript",
    ],
    github: "",
    pageLink: "",
    images: ["/archive-preview.png"],
  },
  {
    name: "3d Special Ludo Game",
    description: (
      <p>
        <span>
          3d Multiplayer Ludo , pick the amount of players and the amount of
          ludo chips and hit 'Enviar' button.
        </span>
        <br />
        <span>You can rotate the 3d view of the game</span>
        <br />
        <span>
          You need to roll double dice to take your ludo chips out of the spawn.{" "}
        </span>
      </p>
    ),
    technologies: [
      "NextJS",
      "React-Three-Fiber",
      "ThreeJS",
      "SCSS",
      "GLSL",
      "Typescript",
    ],
    github: "https://github.com/andres-calvo/3dparques",
    pageLink: "https://3dparques.vercel.app/",
    images: ["/3d-parques-preview.png"],
  },
  {
    name: "Realtime 100 Draggable Websocket Powered Animation",
    description: (
      <p>
        <span>
          Think about a collaborative environment, where there are lots of
          people dragging and interacting with multiple nodes
        </span>
        . <br />
        <span>
          Each rectangle it's by itself a draggable component.You can drag it
          freely
        </span>
        <br />
        <span className="font-bold">
          Please be aware if you have motion sickness{" "}
        </span>
      </p>
    ),
    technologies: [
      "Socket.IO",
      "NextJS",
      "NodeJS",
      "Typescript",
      "React-Spring",
    ],
    github: "https://github.com/andres-calvo/realtime-draggable",
    pageLink: "https://realtime-draggable.vercel.app/",
    images: ["/realtime-draggable-preview.png"],
  },
  {
    name: "Realtime Draggable Websocket API",
    description: (
      <p>
        This is the API implementation for the Realtime 100 Draggable Websocket
        Powered Animation
      </p>
    ),
    technologies: ["Socket.IO", "NodeJS", "Typescript"],
    github: "https://github.com/andres-calvo/realtime-draggable-api",
    pageLink: "",
    images: ["/realtime-draggable-api-preview.png"],
  },
];
const Projects = () => {
  return (
    <section className="">
      <h2 className="font-black text-3xl text-center">Projects</h2>
      <ul className="grid grid-cols-2 gap-8">
        {PROJECTSDATA.map((project) => (
          <ProjectPreview data={project} key={project.name} />
        ))}
      </ul>
    </section>
  );
};
const ProjectPreview = ({ data }: { data: Project }) => {
  return (
    <div className="overflow-hidden cursor-pointer" title={data.name}>
      <span className="flex flex-wrap w-72">{data.name}</span>
      <Image
        src={data.images[0]}
        alt={data.name}
        width={300}
        height={300}
        quality={100}
      ></Image>
    </div>
  );
};

