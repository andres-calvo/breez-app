import Link from "next/link";
import { Fragment, useState } from "react";
import { Project } from "./home-types";
import { PROJECTSDATA } from "./projects-data";
import Image from "next/image";
import { useOnScreen } from "../hooks/use-on-screen";
import {
  animated,
  SpringValue,
  Transition,
  useChain,
  useSpring,
  useSpringRef,
  useTransition,
} from "@react-spring/web";

export const Projects = () => {
  const { measureRef, isIntersecting } = useOnScreen({ rootMargin: "-50px" });

  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const transitionRef = useSpringRef();
  const [transitions] = useTransition(PROJECTSDATA, () => ({
    ref: transitionRef,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 1, scale: 1 },
  }));
  useChain(isIntersecting ? [transitionRef] : []);
  return (
    <section className="" ref={measureRef}>
      <h2 className="font-black text-3xl text-center">Projects</h2>
      <ul className="grid grid-cols-2 gap-8">
        {transitions((style, project) => (
          <ProjectPreview
            data={project}
            key={project.name}
            openProject={setActiveProject}
            style={style}
          />
        ))}
      </ul>
      <Transition
        items={[{}]}
        from={{ scale: 0, opacity: 1 }}
        enter={{ opacity: 1, scale: 1 ,display:"block"}}
        leave={{ opacity: 0, scale: 0, display:"none" }}
      >
        {(style, item) => (
          <ProjectFullView
            style={style}
            data={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </Transition>
    </section>
  );
};

const ProjectPreview = ({
  data,
  openProject,
  style,
}: {
  style: Record<string, SpringValue>;
  data: Project;
  openProject: (data: Project) => void;
}) => {
  return (
    <animated.div
      className="overflow-hidden cursor-pointer"
      title={data.name}
      onClick={() => openProject(data)}
      style={style}
    >
      <span className="flex flex-wrap w-72 h-12">{data.name}</span>
      <Image src={data.images[0]} alt={data.name} width={300} height={300} />
    </animated.div>
  );
};

const ProjectFullView = ({
  data,
  onClose,
  style,
}: {
  style: Record<string, SpringValue>;
  data: Project | null;
  onClose: () => void;
}) => {
  if (!data) return null;
  return (
    <section
      className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center"
      
    >
      <div className="z-0 bg-black/30 w-full h-full"></div>
      <animated.div className="bg-white rounded-xl z-10 absolute p-8 max-w-xs md:max-w-lg "  style={style}     >
        <Image
          src="/close.png"
          alt="Close"
          width={24}
          height={24}
          className="absolute top-4 right-4 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="font-bold mb-10 w-72">Project: {data.name}</h2>
        {data.description}
        <p className="my-5 font-bold">Technologies used on this project:</p>
        <ul className="grid grid-cols-2">
          {data.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="flex justify-center items-center gap-20">
          {data.github ? (
            <Link href={data.github} target={"_blank"}>
              <Image
                src={"/github.png"}
                alt="Repository Link"
                width={150}
                height={100}
              ></Image>
            </Link>
          ) : null}
          {data.pageLink ? (
            <Link
              className="underline text-blue-400"
              href={data.pageLink}
              target={"_blank"}
            >
              Open Live Project
            </Link>
          ) : null}
        </div>
        {data.images.length > 1 ? (
          <video
            src={data.images[1]}
            controls
            autoPlay
            muted
            className="w-full h-15 border"
            loop
          ></video>
        ) : null}
      </animated.div>
    </section>
  );
};
