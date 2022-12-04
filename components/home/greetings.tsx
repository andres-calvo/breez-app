import Image from "next/image";

export const Greetings = () => {
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
  
  