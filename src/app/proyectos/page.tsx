import SiteHeader from "@/components/brutal/site-header";
import SiteFooter from "@/components/brutal/site-footer";
import SectionHeader from "@/components/brutal/section-header";
import IndexRow from "@/components/brutal/index-row";

const projects = [
  {
    index: "01",
    title: "Reserve",
    description: "Web protocol — Uglycash",
    tags: ["Astro", "React", "Wagmi", "Base", "Tailwind"],
    href: "https://wearenotabank.ugly.cash/",
  },
  {
    index: "02",
    title: "HDM Cosmeticos",
      description: "Tienda ecommerce para HDM-cosmeticos",
      tags: ["Next.js", "Shopify", "Tailwind"],
    href: "https://hdm-cosmeticos.com",
  },
  {
    index: "03",
    title: "Numun Ecosystem",
    description: "App para la gestión de un ecosistema de ntokens",
    tags: ["Next.js", "React", "Wagmi", "Base", "Tailwind"],
    href: "https://numun.fi",
  },
  {
    index: "04",
    title: "Pensok",
    description: "E-commerce con chatbot asesor para mantenimiento de piletas",
    tags: ["Next.js", "Node.js", "Gemini", "MongoDB"],
    href: "https://tienda-pensok.com",
  },
  {
    index: "05",
    title: "App IA — Contenido",
    description: "Generación de contenido vía WhatsApp a Excel",
    tags: ["Next.js", "GPT", "WhatsApp"],
    href: "https://github.com/santiagozin/ai-sheets",
    inProgress: true,
  },
  {
    index: "06",
    title: "Cotizadora Crypto",
    description: "Cotizaciones de criptomonedas en tiempo real",
    tags: ["Vite", "Tailwind", "React"],
    href: "https://warm-puffpuff-5dea6d.netlify.app/",
  },
  {
    index: "07",
    title: "Seguidora de Pacientes",
    description: "App para consultar historial de pacientes",
    tags: ["Vite", "API REST", "React"],
    href: "https://proyecto-citas-santiagozin.netlify.app/",
  },
  {
    index: "08",
    title: "Magna Group",
    description: "Landing page para Magna Group",
    tags: ["Landing", "Web"],
    href: "https://magnagroup.com.ar/",
  },
  {
    index: "09",
    title: "FlyonData",
    description: "Landing page para cliente FlyonData",
    tags: ["Landing", "Web"],
    href: "https://www.flyondata.com/",
  },
  {
    index: "10",
    title: "OCCO Helados",
    description: "Landing page para cliente OCCO helados",
    tags: ["Landing", "Web"],
    href: "https://www.occohelados.com.ar/",
  },
];

export default function Proyectos() {
  return (
    <>
      <SiteHeader />

      <section className="border-b-[3px] border-ink px-4 py-16 md:px-12 md:py-24">
        <SectionHeader
          number="01"
          title="Proyectos"
          subtitle={`(${String(projects.length).padStart(2, "0")}) seleccionados`}
        />

        <p className="-mt-8 mb-8 max-w-xl font-ui text-base text-ink-muted">
          Productos Web3, fintech y comercio digital.
        </p>

        <div className="border-t-[3px] border-ink">
          {projects.map((project) => (
            <IndexRow key={project.index} {...project} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
