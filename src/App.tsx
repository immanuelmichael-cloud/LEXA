import { useState, type ReactNode } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  HeartHandshake,
  Inbox,
  Mail,
  Menu,
  MessageCircle,
  Presentation,
  Share2,
  UsersRound,
  Workflow,
  X,
} from "lucide-react";

import emmanuelPhoto from "./assets/emmanuelPhoto.jpg";
import graciousPhoto from "./assets/graciousPhoto.jpg";
import lexaLogo from "./assets/lexa-logo.png";
import teamsQr from "./assets/teams-contact-qr.jpg";
import whatsappQr from "./assets/whatsapp-contact-qr.jpg";
import { Button, ButtonLink } from "./components/Button";

const solutions = [
  {
    number: "01",
    title: "Email & Inbox Automation",
    description: "Smarter communication and inbox management.",
    icon: Inbox,
  },
  {
    number: "02",
    title: "Ideas & Presentation Automation",
    description: "Turning ideas into organized plans and professional presentations.",
    icon: Presentation,
  },
  {
    number: "03",
    title: "Social Media & Client Acquisition Automation",
    description: "Streamlining marketing, lead generation, and customer acquisition.",
    icon: Share2,
  },
  {
    number: "04",
    title: "Customer Retention Automation",
    description: "Simplifying follow-ups, customer engagement, and retention.",
    icon: HeartHandshake,
  },
];

const navigation = [
  { label: "About", href: "#about" },
  { label: "Solutions", href: "#solutions" },
  { label: "Founders", href: "#founders" },
  { label: "Contact", href: "#contact" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <header className="site-header sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="relative mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 sm:px-8 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:px-10">
          <a href="#top" className="logo-crop" aria-label="LEXA home">
            <img src={lexaLogo} alt="LEXA" />
          </a>

          <nav
            id="mobile-navigation"
            aria-label="Main navigation"
            className={
              menuOpen
                ? "col-span-2 row-start-2 grid gap-1 border-t border-border bg-background px-2 pb-1 pt-3 lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:flex lg:items-center lg:justify-center lg:gap-8 lg:border-0 lg:bg-transparent lg:p-0"
                : "hidden items-center justify-center gap-8 lg:col-start-2 lg:row-start-1 lg:flex"
            }
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-sm px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground md:px-0 md:py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <ButtonLink href="#contact" size="sm" className="hidden lg:col-start-3 lg:inline-flex">
            Work With Us <ArrowUpRight aria-hidden="true" />
          </ButtonLink>

          <Button
            type="button"
            variant="outline"
            size="icon"
            className="col-start-2 row-start-1 justify-self-end lg:hidden"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </header>

      <main>
        <section className="hero-section bg-primary text-primary-foreground">
          <div className="mx-auto flex max-w-6xl flex-col items-center px-5 py-20 text-center sm:px-8 sm:py-24 lg:px-10 lg:py-28">
            <p className="hero-eyebrow mb-7 flex items-center gap-3 text-xs font-semibold uppercase text-primary-foreground/70">
              <span className="hero-indicator" aria-hidden="true" />
              Business automation · AI-powered technology
            </p>
            <h1 className="max-w-4xl text-balance font-display text-5xl font-semibold leading-[1.08] sm:text-6xl lg:text-7xl">
              Smarter Systems.
              <br />
              <span className="text-accent">Less Work.</span> More Growth.
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-base leading-7 text-primary-foreground/75 sm:text-lg sm:leading-8">
              LEXA helps businesses simplify operations, reduce repetitive workloads, and drive
              growth through intelligent business automation and AI-powered solutions.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-5">
              <ButtonLink
                href="#contact"
                size="lg"
                className="h-12 bg-accent px-6 text-accent-foreground hover:bg-accent/90"
              >
                Work With Us <ArrowDownRight aria-hidden="true" />
              </ButtonLink>
              <a
                href="#about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                Explore what we do <ArrowDownRight size={16} aria-hidden="true" />
              </a>
            </div>
            <div className="hero-rule mt-16 flex w-full max-w-4xl items-center justify-between gap-4 border-t border-primary-foreground/20 pt-5 text-left text-xs font-medium uppercase text-primary-foreground/60">
              <span>Clarity for your operations</span>
              <Workflow size={18} aria-hidden="true" />
              <span>Capacity for what’s next</span>
            </div>
          </div>
        </section>

        <section id="about" className="section-space scroll-mt-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-7 border-b border-border pb-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-end md:gap-16 md:pb-12">
              <div>
                <p className="section-label">01 / What we do</p>
                <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight sm:text-4xl">
                  We Build Systems That Make Business Easier.
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground">
                From business process automation to sales, marketing, and customer management
                systems, we develop intelligent solutions that help businesses operate more
                efficiently and scale.
              </p>
            </div>

            <div id="solutions" className="scroll-mt-24 pt-9 sm:pt-11">
              <div className="mb-7 flex items-center justify-between gap-4">
                <h3 className="font-display text-xl font-semibold">Core solutions</h3>
                <span className="text-xs font-medium uppercase text-muted-foreground">
                  Designed around your work
                </span>
              </div>
              <div className="grid gap-x-8 gap-y-9 sm:grid-cols-2 xl:grid-cols-4">
                {solutions.map((solution) => {
                  const Icon = solution.icon;
                  return (
                    <article
                      key={solution.number}
                      className="solution-item border-t border-border pt-5"
                    >
                      <div className="mb-6 flex items-center justify-between">
                        <span className="text-xs font-semibold text-muted-foreground">
                          {solution.number}
                        </span>
                        <Icon
                          className="text-primary"
                          size={21}
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                      </div>
                      <h4 className="text-lg font-semibold leading-snug">{solution.title}</h4>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        {solution.description}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="founders" className="founders-section scroll-mt-24 bg-secondary/60">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
            <div className="mb-9 grid gap-4 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-end md:gap-12">
              <div>
                <p className="section-label">02 / Meet the founders</p>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                  The People Behind LEXA.
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground">
                Built by two founders combining expertise in business growth, sales, marketing, and
                software development.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <FounderCard
                name="Gracious Opara"
                role="Co-Founder"
                focus="Sales, Marketing & Business"
                image={graciousPhoto}
                imageAlt="Gracious Opara, co-founder of LEXA"
              />
              <FounderCard
                name="Immanuel Ndon"
                role="Co-Founder"
                focus="Technology & Development"
                image={emmanuelPhoto}
                imageAlt="Immanuel Ndon, co-founder of LEXA"
              />
            </div>

            <p className="founder-note mx-auto mt-9 max-w-4xl border-t border-border pt-7 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Together, we’ve developed software and technology-driven solutions across business
              operations, sales, marketing, and automation. LEXA brings that experience together to
              help businesses work smarter.
            </p>
          </div>
        </section>

        <section
          id="contact"
          className="contact-section scroll-mt-24 bg-primary text-primary-foreground"
        >
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
            <div className="mb-9 grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] md:items-end md:gap-12">
              <div>
                <p className="section-label section-label-inverse">03 / Contact</p>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                  Let’s Build Something Smarter.
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-primary-foreground/75">
                Looking to simplify your operations or automate your business? We’d love to hear
                from you.
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              <ContactCard
                title="Microsoft Teams"
                description="Start a conversation on Teams."
                image={teamsQr}
                imageAlt="Scan to contact LEXA on Microsoft Teams"
                icon={<UsersRound size={30} strokeWidth={1.6} aria-hidden="true" />}
                href="https://teams.live.com/l/invite/FEAtn8-biVSW5U43g?v=g1"
                action="Chat on Teams"
              />
              <ContactCard
                title="WhatsApp"
                description="Message us directly on WhatsApp."
                image={whatsappQr}
                imageAlt="Scan to contact LEXA on WhatsApp"
                icon={<MessageCircle size={30} strokeWidth={1.6} aria-hidden="true" />}
                href="https://wa.me/message/HPVPMZBC2SY3J1"
                action="Chat on WhatsApp"
              />
     <ContactCard
  title="Email"
  description="lexa.team.contact@gmail.com"
  icon={<Mail size={30} strokeWidth={1.6} aria-hidden="true" />}
  href="mailto:lexa.team.contact@gmail.com?subject=Website%20Enquiry"
  action="Send Us an Email"
/>

            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-7 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center sm:px-8 lg:px-10">
          <a href="#top" className="logo-crop logo-crop-footer" aria-label="LEXA home">
            <img src={lexaLogo} alt="LEXA" />
          </a>
          <p className="text-sm text-muted-foreground">Smarter Systems. Less Work. More Growth.</p>
          <p className="text-xs text-muted-foreground sm:text-right">
            © 2026 LEXA. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FounderCard({
  name,
  role,
  focus,
  image,
  imageAlt,
}: {
  name: string;
  role: string;
  focus: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <article className="founder-card grid grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] overflow-hidden rounded-md border border-border bg-background">
      <img
        className="founder-photo h-full min-h-52 w-full object-cover"
        src={image}
        //  src={require('../src/assets/emmanuel-ndon.jpg')}
        alt={imageAlt}
      />
      <div className="flex min-w-0 flex-col justify-center px-4 py-5 sm:px-6 sm:py-7">
        <p className="section-label">{role}</p>
        <h3 className="mt-3 text-xl font-semibold leading-tight sm:text-2xl">{name}</h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{focus}</p>
      </div>
    </article>
  );
}

function ContactCard({
  title,
  description,
  image,
  imageAlt,
  icon,
  href,
  action,
}: {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  icon: ReactNode;
  href?: string;
  action: string;
}) {
   const isExternal = href?.startsWith("http");
  return (
    <article className="contact-card grid grid-cols-[5.25rem_minmax(0,1fr)] items-center gap-4 rounded-md border border-border bg-background p-4 text-foreground sm:gap-5 sm:p-5">
      {image ? (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          aria-label={imageAlt}
          className="contact-qr rounded-sm bg-background p-1"
        >
          <img className="aspect-square w-full object-contain" src={image} alt={imageAlt} />
        </a>
      ) : (
        <div className="contact-icon grid aspect-square place-items-center rounded-sm bg-secondary text-primary">
          {icon}
        </div>
      )}
      <div className="min-w-0">
        <div className="flex min-w-0 items-center gap-2">
          <span className="shrink-0 text-primary">{icon}</span>
          <h3 className="truncate text-base font-semibold">{title}</h3>
        </div>
        <p className="mt-1 min-h-10 text-xs leading-5 text-muted-foreground">{description}</p>
        {href ? (
          <ButtonLink
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            size="sm"
            className="mt-2 w-full px-2 text-xs sm:px-3"
          >
            {action} {isExternal && <ArrowUpRight aria-hidden="true"  />}
          </ButtonLink>
        ) : (
          <Button type="button" size="sm" className="mt-2 w-full px-2 text-xs sm:px-3" disabled>
            {action}
          </Button>
        )}
      </div>
    </article>
  );
}
