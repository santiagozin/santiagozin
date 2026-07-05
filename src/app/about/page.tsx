import Image from "next/image";
import SiteHeader from "@/components/brutal/site-header";
import SiteFooter from "@/components/brutal/site-footer";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/santiago-zin-7a1bb977",
  },
  { label: "GitHub", href: "https://github.com/santiagozin" },
  { label: "Email", href: "mailto:santiagozin90@gmail.com" },
];

export default function About() {
  return (
    <>
      <SiteHeader />

      <section className="grid border-b-[3px] border-ink md:grid-cols-12">
        {/* Photo */}
        <div className="border-b-[3px] border-ink bg-paper-alt p-8 md:col-span-5 md:border-b-0 md:border-r-[3px] md:p-12">
          <div className="brutal-border relative mx-auto aspect-[4/5] max-w-sm overflow-hidden">
            <Image
              src="/foto-personal.png"
              alt="Santiago Zin"
              fill
              className="object-cover object-top grayscale"
              priority
            />
          </div>
        </div>

        {/* Bio */}
        <div className="p-8 md:col-span-7 md:p-12">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
            Sobre mí
          </p>
          <h1 className="font-display mt-4 text-5xl leading-[0.95] md:text-6xl">
            Desarrollador Fullstack
          </h1>
          <div className="my-8 h-[3px] w-16 bg-ink" />

          <p className="font-display text-2xl leading-snug md:text-3xl">
            Creando productos
          </p>

          <div className="mt-10 space-y-5 font-ui text-lg leading-relaxed text-ink">
            <p>
              Soy Santiago Zin, desarrollador de software apasionado por crear
              experiencias digitales excepcionales.
            </p>
            <p>
              Mi enfoque combina desarrollo web y diseño para crear soluciones
              tecnológicas que no solo son visualmente atractivas, sino también
              intuitivas y eficientes.
            </p>
            <p>
              Mi formación incluye diseño multimedial en la Escuela DaVinci,
              complementada con cursos Fullstack en MindHub, UTN Argentina y
              Coderhouse.
            </p>
            <p>
              He trabajado principalmente en el sector financiero y bancario.
              Actualmente me encuentro utilizando herramientas de IA para crear productos digitales.
            </p>
            <p>
              Cuando no estoy programando, disfruto del tenis, el fútbol y
              viajar. Vivo en Coghlan, Buenos Aires.
            </p>
          </div>

          <div className="mt-12 border-l-[3px] border-signal pl-6">
            <p className="font-display text-xl italic md:text-2xl">
              Coghlan, Buenos Aires
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                className="font-mono text-sm uppercase tracking-[0.1em] underline decoration-[3px] underline-offset-4 transition-colors duration-100 hover:text-signal"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
