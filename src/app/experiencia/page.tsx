import SiteHeader from "@/components/brutal/site-header";
import SiteFooter from "@/components/brutal/site-footer";
import SectionHeader from "@/components/brutal/section-header";
import TimelineBlock from "@/components/brutal/timeline-block";

export default function Experiencia() {
  return (
    <>
      <SiteHeader />

      <section className="px-4 py-16 md:px-12 md:py-24">
        <SectionHeader
          number="01"
          title="Experiencia"
          subtitle="2013 — 2025"
        />

        <div className="space-y-6 md:space-y-8">
          <TimelineBlock
            year="2025"
            role="Fullstack developer"
            company="ITTI"
            period="Ene 2025 — Actualidad"
            featured
            tags={["Next.js", "React", "PostgreSQL", "AWS", "Docker"]}
          >
            <p>
             Ciclo completo de desarrollo de producto propio para la gestión integral de personal de todo el grupo.
             Desarrollo de APIs, infraestructura, UI, UX, testing, deployment.
             Despliegue en AWS.
             Integración de workflows para la automatización de procesos.
            </p>
          </TimelineBlock>

          <TimelineBlock
            year="2023"
            role="Sr Front-end developer"
            company="Num Finance"
            period="Jun 2023 — Ene 2025"
            tags={["Next.js", "Wagmi", "Base", "Vitest"]}
          >
            <ul className="space-y-1">
              <li>Desarrollo end to end de productos digitales Web3</li>
              <li>
                Interacción con contratos inteligentes (Base, OP Sepolia,
                Polygon, Ethereum)
              </li>
              <li>Integración de librerías Web3 (Wagmi, Ethers, RainbowKit)</li>
              <li>Deployment en AWS y Vercel</li>
            </ul>
          </TimelineBlock>

          <TimelineBlock
            year="2019"
            role="Front-end developer"
            company="IT Desarrollos (Nosis)"
            period="Nov 2019 — Jun 2023"
            tags={["React", "TypeScript", "Tailwind"]}
          >
            <p>
              Desarrollo front-end en proyectos bancarios y financieros
              utilizando React, TypeScript y Tailwind.
            </p>
          </TimelineBlock>

          <TimelineBlock
            year="2017"
            role="Desarrollador Web"
            company="Independiente"
            period="Ene 2017 — Actualidad"
            tags={["E-commerce", "Next.js"]}
          >
            <p>
              Desarrollo freelance para clientes internacionales, incluyendo
              e-commerce para una tienda española.
            </p>
          </TimelineBlock>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
