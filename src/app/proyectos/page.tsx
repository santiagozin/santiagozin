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
import Navbar from "../navbar";

const Proyectos = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="flex flex-col text-black w-full items-center justify-center relative pb-1">
        <Navbar />
        <h2 className="text-4xl font-normal mb-16 text-white text-center mt-16">
          Proyectos Realizados
        </h2>
        <Card className="w-full md:w-1/2 bg-white mb-4">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Reserve</CardTitle>
            <CardDescription className="text-lg font-medium text-black">
              Web protocol - Uglycash
            </CardDescription>
          </CardHeader>
          <CardContent className="grid">
            <Button className="w-10 h-10">
              <Link href="https://wearenotabank.ugly.cash/" target="_blank">
                <ExternalLink />
              </Link>
            </Button>

            <div className="flex mt-4 gap-2">
              <Badge className="w-fit mt-4">Astro</Badge>
              <Badge className="w-fit mt-4">React JS</Badge>
              <Badge className="w-fit mt-4">Wagmi</Badge>
              <Badge className="w-fit mt-4">Base Chain</Badge>
              <Badge className="w-fit mt-4">Tailwind</Badge>
            </div>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
        <Card className="w-full md:w-1/2 ">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Numun Ecosystem
            </CardTitle>
            <CardDescription className="text-lg">
              App para la gestion de un ecosistema de ntokens
            </CardDescription>
          </CardHeader>
          <CardContent className="grid">
            <Button className="w-10 h-10">
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
        <Card className="w-full md:w-1/2   mt-2">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Pensok
            </CardTitle>
            <CardDescription className="text-lg">
              Ecommerce con Chatbot asesor para mantenimiento de piletas
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div className="flex items-center">
              <div className="flex items-center justify-between mr-4">
        
                <Button className="w-10 h-10">
                  <Link
                    href="https://www.pensokpiletas.com.ar/"
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
        <Card className="w-full md:w-1/2 mt-2">
          <Badge className="w-fit mt-4 ml-4 bg-cyan-200 hover:bg-cyan-300 text-black">
            In progress
          </Badge>
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
                <Button className="w-10 h-10">
                  <Link
                    href="https://github.com/santiagozin/ai-sheets"
                    target="_blank"
                  >
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
        <Card className="w-full md:w-1/2 mt-2">
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
                <Button className="w-10 h-10">
                  <Link
                    href="https://warm-puffpuff-5dea6d.netlify.app/"
                    target="_blank"
                  >
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
        <Card className="w-full md:w-1/2 mt-2">
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
                <Button className="w-10 h-10">
                  <Link
                    href="https://proyecto-citas-santiagozin.netlify.app/"
                    target="_blank"
                  >
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
            <Card className="w-full md:w-1/2 mt-2">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Landing page</CardTitle>
            <CardDescription className="text-lg">
              Landing page para Magna Group
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div className="flex items-center">
              <div className="flex items-center justify-between mr-4">
                <Button className="w-10 h-10">
                  <Link href="https://magnagroup.com.ar/" target="_blank">
                    <ExternalLink />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
        <Card className="w-full md:w-1/2 mt-2">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Landing page</CardTitle>
            <CardDescription className="text-lg">
              Landing page para cliente FlyonData
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div className="flex items-center">
              <div className="flex items-center justify-between mr-4">
                <Button className="w-10 h-10">
                  <Link href="https://www.flyondata.com/" target="_blank">
                    <ExternalLink />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
        <Card className="w-full md:w-1/2 mt-2">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Landing page</CardTitle>
            <CardDescription className="text-lg">
              Landing page para cliente OCCO helados
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div className="flex items-center">
              <div className="flex items-center justify-between mr-4">
                <Button className="w-10 h-10">
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
