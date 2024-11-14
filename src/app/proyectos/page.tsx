import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const Proyectos = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center mt-32 pb-32">
      <div className="flex flex-col text-black w-full md:w-1/2 px-12 relative pb-1">
        <h2 className="text-2xl font-bold mb-4">💻 Proyectos</h2>
        <Card className="w-full md:w-3/4 ">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Numun Ecosystem
            </CardTitle>
            <CardDescription className="text-lg">
              App para la gestion de un ecosistema de ntokens
            </CardDescription>
          </CardHeader>
          <CardContent className="grid">
            <Button variant="outline" className="w-10 h-10">
              <Link href="https://numun.fi" target="_blank">
                <ExternalLink />
              </Link>
            </Button>

            <div className="flex mt-4 gap-2">
              <Badge className="w-fit mt-4">NextJS</Badge>
              <Badge className="w-fit mt-4">React JS</Badge>
              <Badge className="w-fit mt-4">Wagmi</Badge>
              <Badge className="w-fit mt-4">Base Chain</Badge>
              <Badge className="w-fit mt-4">Tailwind</Badge>
            </div>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
        <Card className="w-full md:w-3/4 mt-2">
        <Badge className="w-fit mt-4 ml-4 bg-cyan-200 hover:bg-cyan-300 text-black">In progress</Badge>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Ecommerce con Chatbot asesor para mantenimiento de piletas
            </CardTitle>
            <CardDescription className="text-lg">
              App para la gestion de un ecosistema de ntokens
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div className="flex items-center">
              <div className="flex items-center justify-between mr-4">
                <span className="mr-1">Front</span>
                <Button variant="outline" className="w-10 h-10">
                <Link href="https://github.com/santiagozin/chatbot-piscinas" target="_blank">
                <ExternalLink />
              </Link>
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <span className="mr-1">Backend</span>
              <Button variant="outline" className="w-10 h-10">
                <Link
                  href="https://github.com/santiagozin/back-chatbot-piscinas" 
                  target="_blank"
                >
                  <ExternalLink />
                </Link>
              </Button>
            </div>
            </div>
            <div className="flex mt-4 gap-2">
              <Badge className="w-fit mt-4">NextJS</Badge>
              <Badge className="w-fit mt-4">Node js</Badge>
              <Badge className="w-fit mt-4">Api Gemini</Badge>
              <Badge className="w-fit mt-4">MongoDB</Badge>
            </div>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
        <Card className="w-full md:w-3/4 mt-2">
        <Badge className="w-fit mt-4 ml-4 bg-cyan-200 hover:bg-cyan-300 text-black">In progress</Badge>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              App IA para la generacion de contenido
            </CardTitle>
            <CardDescription className="text-lg">
              App para guardar informacion en excel a traves de whatsapp  
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div className="flex items-center">
              <div className="flex items-center justify-between mr-4">
                <Button variant="outline" className="w-10 h-10">
                <Link href="https://github.com/santiagozin/ai-sheets" target="_blank">
                <ExternalLink />
              </Link>
              </Button>
            </div>
  
            </div>
            <div className="flex mt-4 gap-2">
              <Badge className="w-fit mt-4">NextJS</Badge>
              <Badge className="w-fit mt-4">API GPT</Badge>
              <Badge className="w-fit mt-4">Api Whatsapp</Badge>
            </div>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
        <Card className="w-full md:w-3/4 mt-2">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              App cotizadora de criptomonedas
            </CardTitle>
            <CardDescription className="text-lg">
              App para consultar cotizaciones de criptomonedas en tiempo real
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div className="flex items-center">
              <div className="flex items-center justify-between mr-4">
                <Button variant="outline" className="w-10 h-10">
                <Link href="https://warm-puffpuff-5dea6d.netlify.app/" target="_blank">
                <ExternalLink />
              </Link>
              </Button>
            </div>
  
            </div>
            <div className="flex mt-4 gap-2">
              <Badge className="w-fit mt-4">Vite</Badge>
              <Badge className="w-fit mt-4">Tailwind</Badge>
              <Badge className="w-fit mt-4">React JS</Badge>
            </div>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
        <Card className="w-full md:w-3/4 mt-2">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              App Seguidora de pacientes  
            </CardTitle>
            <CardDescription className="text-lg">
              App para consultar historial de pacientes
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div className="flex items-center">
              <div className="flex items-center justify-between mr-4">
                <Button variant="outline" className="w-10 h-10">
                <Link href="https://proyecto-citas-santiagozin.netlify.app/" target="_blank">
                <ExternalLink />
              </Link>
              </Button>
            </div>
  
            </div>
            <div className="flex mt-4 gap-2">
              <Badge className="w-fit mt-4">Vite</Badge>
              <Badge className="w-fit mt-4">Api Rest</Badge>
              <Badge className="w-fit mt-4">React JS</Badge>
            </div>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
        <Card className="w-full md:w-3/4 mt-2">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Landing page 
            </CardTitle>
            <CardDescription className="text-lg">
              Landing page para Magna Group
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div className="flex items-center">
              <div className="flex items-center justify-between mr-4">
                <Button variant="outline" className="w-10 h-10">
                <Link href="https://magnagroup.com.ar/" target="_blank">
                <ExternalLink />
              </Link>
              </Button>
            </div>
  
            </div>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
        <Card className="w-full md:w-3/4 mt-2">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Landing page 
            </CardTitle>
            <CardDescription className="text-lg">
              Landing page para cliente FlyonData
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div className="flex items-center">
              <div className="flex items-center justify-between mr-4">
                <Button variant="outline" className="w-10 h-10">
                <Link href="https://www.flyondata.com/" target="_blank">
                <ExternalLink />
              </Link>
              </Button>
            </div>
  
            </div>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
        <Card className="w-full md:w-3/4 mt-2">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Landing page 
            </CardTitle>
            <CardDescription className="text-lg">
              Landing page para cliente OCCO helados
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div className="flex items-center">
              <div className="flex items-center justify-between mr-4">
                <Button variant="outline" className="w-10 h-10">
                <Link href="https://www.occohelados.com.ar/" target="_blank">
                <ExternalLink />
              </Link>
              </Button>
            </div>
  
            </div>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default Proyectos;
