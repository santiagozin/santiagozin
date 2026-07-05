export default function SiteFooter() {
  return (
    <footer id="contacto" className="border-t-[3px] border-ink bg-ink px-4 py-16 text-paper md:px-12 scroll-mt-16">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-4xl leading-none md:text-6xl">
            Trabajemos
          </p>
          <a
            href="mailto:santiagozin90@gmail.com"
            className="font-mono text-sm uppercase tracking-[0.12em] underline decoration-[3px] underline-offset-4 transition-colors duration-100 hover:text-signal"
          >
            santiagozin90@gmail.com
          </a>
        </div>
        <div className="font-mono text-xs uppercase tracking-[0.12em] text-paper/70">
          <p>Buenos Aires, Argentina</p>
          <p className="mt-1">© {new Date().getFullYear()} Santiago Zin</p>
        </div>
      </div>
    </footer>
  );
}
