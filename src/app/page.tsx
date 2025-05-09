"use client";
import { BlurFade } from "@/components/magicui/blur-fade";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail } from "lucide-react";
import Image from "next/image";
import Navbar from "./navbar";

export default function Home() {
  return (
    <main className="flex h-screen flex-col px-4 py-8">
      <div className="flex items-center justify-between mb-auto px-40">
        <div className="flex gap-4">
          <Button
            variant="default"
            className="!p-0 [&>svg]:!w-7 [&>svg]:!h-7 mx-2"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/santiago-zin-7a1bb977",
                "_blank"
              )
            }
          >
            <Linkedin />
          </Button>
          <Button
            variant="default"
            className="!p-0 [&>svg]:!w-7 [&>svg]:!h-7 mx-2"
            onClick={() =>
              window.open("https://github.com/santiagozin", "_blank")
            }
          >
            <Github />
          </Button>
          <Button
            variant="default"
            className="!p-0 [&>svg]:!w-7 [&>svg]:!h-7 mx-2"
            onClick={() =>
              window.open("mailto:santiagozin90@gmail.com", "_blank")
            }
          >
            <Mail />
          </Button>
        </div>
        <Navbar />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full overflow-hidden px-40 mt-10">
        <div className="flex flex-col justify-center">
          <div className="uppercase text-white font-bold">
            <TextAnimate
              animation="slideLeft"
              by="character"
              className="md:text-[4rem] text-[2.5rem] mb-8"
            >
              Santiago Zin
            </TextAnimate>
            <TextAnimate
              animation="slideLeft"
              by="character"
              className="md:text-[5.2rem] text-[3.2rem] leading-0 mb-6"
            >
              Software
            </TextAnimate>
            <TextAnimate
              animation="slideLeft"
              by="character"
              className="md:text-[6rem] text-[3rem] leading-3"
            >
              Engineer
            </TextAnimate>
          </div>
        </div>
        <div>
          <div className="relative md:pl-10">
            <BlurFade delay={0.25} inView>
              <Image
                src="/yo.png"
                alt="Santiago Zin"
                width={500}
                height={500}
                className="rounded-3xl relative z-10 opacity-90"
              />
            </BlurFade>
          </div>
        </div>
      </div>
    </main>
  );
}
