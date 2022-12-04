import Link from "next/link";

export const AboutMe = () => {
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
