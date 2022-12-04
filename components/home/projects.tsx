import Link from "next/link";
import {  useState } from "react";
import { Project } from "./home-types";
import { PROJECTSDATA } from "./projects-data";
import Image from "next/image";
import { useOnScreen } from "../hooks/use-on-screen";
import {
  animated,
  SpringValue,
  useChain,
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
    <section className="max-w-xs md:max-w-xl" ref={measureRef}>
      <h2 className="font-black text-3xl text-center">Projects</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {transitions((style, project) => (
          <ProjectPreview
            data={project}
            key={project.name}
            openProject={setActiveProject}
            style={style}
          />
        ))}
      </ul>

      <ProjectFullView
        data={activeProject}
        onClose={() => setActiveProject(null)}
      />
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
      <span className="flex flex-wrap  h-12">{data.name}</span>
      <Image src={data.images[0]} alt={data.name} width={300} height={300} />
    </animated.div>
  );
};

const ProjectFullView = ({
  data,
  onClose,
}: {
  data: Project | null;
  onClose: () => void;
}) => {
  

  if (!data) return null;
  return (
    <section className="fixed top-0 left-0 w-full h-full  flex items-center justify-center">
      <div className="z-0 bg-black/30 w-full h-full"></div>
      <div className="bg-white rounded-xl z-10 absolute p-8 w-10/12 max-w-lg h-5/6  overflow-y-auto ">
        <Image
          src="/close.png"
          alt="Close"
          width={24}
          height={24}
          className="absolute top-4 right-4 cursor-pointer "
          onClick={onClose}
        />
        <h2 className="text-sm md:text-base font-bold mb-6 md:mb-10 ">
          Project: {data.name}
        </h2>
        <div className="text-sm md:text-base">{data.description}</div>
        <p className=" text-sm my-5 font-bold">
          Technologies used on this project:
        </p>
        <ul className="grid grid-cols-1 text-center md:text-left md:grid-cols-2 text-sm mb-5">
          {data.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-20">
          {data.github ? (
            <Link href={data.github} target={"_blank"}>
              <Image
                src={"/github.png"}
                alt="Repository Link"
                width={150}
                height={100}
                layout="responsive"
                sizes="(min-width:768px) 150px, 80px"
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
      </div>
    </section>
  );
};
