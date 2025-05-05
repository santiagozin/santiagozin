"use client";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail } from "lucide-react";
import Image from "next/image";
import Navbar from "../navbar";

export default function About() {
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
        <div className="flex justify-center ">
          <div className="relative bg-gray-900 rounded-full flex w-96 h-96 justify-center overflow-hidden">
            <BlurFade delay={0.25} inView>
              <Image
                src="/yo2.png"
                alt="Santiago Zin"
                width={500}
                height={500}
                className="rounded-3xl relative z-10 opacity-90"
              />
            </BlurFade>
          </div>
        </div>
        <div className="flex flex-col pt-10 text-white space-y-4 text-xl">
          <p className=" font-medium">
            ¡Hola! Soy Santiago Zin, un desarrollador de software apasionado por crear experiencias digitales excepcionales.
          </p>
          
          <p>
            Mi enfoque combina desarrollo web y diseño para crear soluciones tecnológicas que no solo son visualmente atractivas, sino también intuitivas y eficientes. Me especializo en mejorar la experiencia del usuario y resolver problemas complejos a través de la tecnología.
          </p>

          <p>
            Mi formación incluye estudios en diseño multimedial en la Escuela DaVinci, complementados con cursos de desarrollo Fullstack en instituciones reconocidas como MindHub, UTN Argentina y Coderhouse.
          </p>

          <p>
            A lo largo de mi carrera, he trabajado principalmente en el sector financiero y bancario. Actualmente, me encuentro inmerso en el mundo Web3, desarrollando productos innovadores en blockchains como Base y OP Sepolia.
          </p>

          <p>
            Cuando no estoy programando, disfruto jugando al tenis y al fútbol, y me encanta viajar. Vivo en el barrio de Coghlan, en la ciudad de Buenos Aires.
          </p>
        </div>
      </div>
    </main>
  );
}
