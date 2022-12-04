import { Project } from "./home-types";

export const PROJECTSDATA: Array<Project> = [
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
      images: ["/archive-preview.png","/Archive.mp4"],
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
      images: ["/3d-parques-preview.png", "/3dParques.mp4"],
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
      images: ["/realtime-draggable-preview.png", "/Drags.mp4"],
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
      images: ["/realtime-draggable-api-preview.png","/ws-api.mp4"],
    },
  ];