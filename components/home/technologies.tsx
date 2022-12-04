export const Technologies = () => {
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
        <p className="my-10">Technologies I have worked with:</p>
        <ul className="grid grid-cols-2 gap-x-7">
          {techs.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </section>
    );
  };
  
  