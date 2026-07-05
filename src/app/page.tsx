import Image from "next/image";
import SiteHeader from "@/components/brutal/site-header";
import SiteFooter from "@/components/brutal/site-footer";
import SectionHeader from "@/components/brutal/section-header";
import { BrutalButton } from "@/components/brutal/brutal-ui";

const modalities = [
  {
    num: "01",
    title: "Por semana",
    description:
      "Integración en tu equipo para llevar tu producto o idea a manos de tus usuarios lo antes posible.",
  },
  {
    num: "02",
    title: "Por proyecto",
    description:
      "Evaluación de necesidades y ejecución completa desde la idea hasta el deploy.",
  },
  {
    num: "03",
    title: "Por hora",
    description:
      "Consultoría puntual para resolver un bloqueo técnico o definir una estrategia.",
  },
];

const services = [
  {
    title: "Desarrollo Web",
    description:
      "Aplicaciones web modernas y escalables con foco en rendimiento, escalabilidad y experiencia de usuario.",
  },
  {
    title: "Consultoría",
    description:
      "Asesoramiento para optimizar proyectos, mejorar arquitecturas y definir estrategias tecnológicas.",
  },
  {
    title: "E-commerce",
    description:
      "Tiendas online personalizadas con integraciones Shopify, WooCommerce y soluciones a medida.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      {/* Hero */}
      <section className="grid-bg border-b-[3px] border-ink px-4 py-16 md:grid md:min-h-[85vh] md:grid-cols-12 md:items-center md:gap-8 md:px-12 md:py-24">
        <div className="reveal-up md:col-span-7">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
            Fullstack · 10+ años · Buenos Aires · Web3 / Fintech
          </p>
          <h1 className="font-display mt-4 text-[clamp(3.5rem,10vw,7.5rem)] leading-[0.85]">
            Hola, soy
            <br />
            Santi.
          </h1>
          <div className="my-6 h-[3px] w-16 bg-ink" />
          <p className="max-w-xl font-ui text-lg leading-relaxed text-ink md:text-xl">
            Construyo productos digitales a medida — web, fintech y Web3 — con
            más de 10 años de experiencia. Integro inteligencia artificial cuando
            acelera el resultado: chatbots, automatizaciones y APIs de lenguaje,
            sin sacrificar escalabilidad ni eficiencia.
          </p>
          <div className="mt-10">
            <BrutalButton href="#contacto" variant="filled">
              Trabajemos →
            </BrutalButton>
          </div>
        </div>

        <div className="reveal-up mt-10 flex justify-center md:col-span-5 md:mt-0 md:items-center">
          <div className="brutal-border relative aspect-[3/4] w-52 sm:w-56 md:w-64 lg:w-72 overflow-hidden">
            <Image
              src="/foto-personal.png"
              alt="Santiago Zin"
              fill
              className="object-cover object-top grayscale"
              priority
              sizes="(max-width: 640px) 208px, (max-width: 1024px) 256px, 288px"
            />
          </div>
        </div>
      </section>

      {/* Signal stripe */}
      <div className="h-3 bg-signal" aria-hidden />

      {/* Modalidades */}
      <section className="bg-paper-alt px-4 py-16 md:px-12 md:py-24">
        <SectionHeader
          number="01"
          title="Servicios"
          subtitle="Modalidades"
        />

        <div className="space-y-0">
          {modalities.map((item) => (
            <div
              key={item.num}
              className="group grid grid-cols-[auto_1fr] gap-6 border-[3px] border-ink border-b-0 bg-paper p-6 transition-[background-color,color] duration-100 last:border-b-[3px] hover:bg-ink hover:text-paper md:gap-10 md:p-8"
            >
              <span className="font-mono text-3xl md:text-5xl">{item.num}</span>
              <div>
                <h3 className="font-ui text-lg font-medium uppercase tracking-[0.04em] md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 font-ui text-base leading-relaxed text-ink-muted group-hover:text-paper/80">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise cards */}
      <section className="border-t-[3px] border-ink px-4 py-16 md:px-12 md:py-24">
        <SectionHeader
          number="02"
          title="Expertise"
          subtitle="Áreas"
        />

        <div className="grid gap-0 md:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="brutal-hover-invert border-[3px] border-ink border-r-0 bg-paper p-8 last:border-r-[3px] md:border-b-[3px] md:border-r-0 md:last:border-r-[3px]"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <h3 className="font-ui text-lg font-medium uppercase tracking-[0.04em]">
                {service.title}
              </h3>
              <p className="mt-4 font-ui text-base leading-relaxed text-ink-muted">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
