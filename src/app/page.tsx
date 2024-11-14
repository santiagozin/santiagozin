'use client'
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="items-center min-h-screen p-8">
      <main className="">
        <section className="w-full mt-14 flex justify-center flex-col items-center">
          <div className="flex flex-col text-black w-full md:w-1/2 px-12 pb-24 relative">
            <Image
              src="/mi.jpeg"
              alt="Santiago Zin"
              width={150}
              height={150}
              className="rounded-full shadow-lg"
              priority
            />
            <h1 className="text-3xl font-bold my-6">Santiago Zin</h1>

            <p className="text-lg font-medium">
              Soy un desarrollador de software con pasión por la creación de
              productos digitales que sean intuitivos, eficientes y visualmente
              atractivos. Mi objetivo es combinar mi experiencia en desarrollo
              web con mi habilidad para el diseño para crear soluciones
              tecnológicas que resuelvan problemas y mejoren la experiencia del
              usuario.
            </p>
            <p className="mt-4 text-lg font-medium">
            Estudié diseño multimedial en la Escuela DaVinci y realicé cursos de desarrollo Fullstack en MindHub, UTN Argentina y Coderhouse.
            </p>
            <p className="mt-4 text-lg font-medium">
              En mi carrera me ha tocado trabajar mayormente en proyectos del
              ámbito financiero y/o bancario, actualmente me encuentro
              desarrollando productos Web3 en distintas blockchains como Base,
              OP Sepolia.
            </p>
            <p className="mt-4 text-lg font-medium">
              En lo personal, me gusta jugar al tenis, al fútbol y viajar. Vivo
              en Buenos Aires, en barrio de Coghlan.
            </p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" onClick={() => window.open("https://www.linkedin.com/in/santiago-zin-7a1bb977", "_blank")}>
              <Linkedin />
            </Button>
            <Button variant="outline" onClick={() => window.open("https://github.com/santiagozin", "_blank")}>
              <Github />
            </Button>
            <Button variant="outline" onClick={() => window.open("mailto:santiagozin90@gmail.com", "_blank")}>
              <Mail />
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
