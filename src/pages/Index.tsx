import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  Sparkles,
  Smartphone,
  Palette,
  Video,
  Globe,
  GraduationCap,
  Repeat,
  Phone,
  Package,
  Megaphone,
  Target,
  Mail,
  MapPin,
  Menu,
  ArrowUpRight,
  CheckCircle2,
  Star,
  Zap,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
} from "lucide-react";
import {
  TikTokIcon,
  WhatsAppIcon,
  WordPressIcon,
  ShopifyIcon,
} from "@/components/BrandIcons";

const socials = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/share/18tqCDdU6S/?mibextid=wwXIfr",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/cfa_manager?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    name: "TikTok",
    icon: TikTokIcon,
    href: "https://www.tiktok.com/@cfa_manager?_r=1&_t=ZN-9650BiFSf8o",
  },
  { name: "WhatsApp", icon: WhatsAppIcon, href: "https://wa.me/237658379932" },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://cm.linkedin.com/in/manager-cfa-a91b99378",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "http://www.youtube.com/@managerfranc",
  },
];

const platforms = [
  { name: "Facebook", icon: Facebook },
  { name: "Instagram", icon: Instagram },
  { name: "TikTok", icon: TikTokIcon },
  { name: "WhatsApp", icon: WhatsAppIcon },
  { name: "LinkedIn", icon: Linkedin },
  { name: "YouTube", icon: Youtube },
  { name: "Shopify", icon: ShopifyIcon },
  { name: "WordPress", icon: WordPressIcon },
];
import cfalogo from "@/assets/cfa-logo.jpeg";
import cfaHero from "@/assets/cfa-hero.png";
import cfaAbout from "@/assets/cfa-about-new.jpg";

const services = [
  {
    icon: Smartphone,
    title: "Gestion des réseaux sociaux",
    desc: "Création et gestion de pages Facebook, Instagram, TikTok, WhatsApp, LinkedIn et YouTube. Planification, publication et animation de communauté.",
  },
  {
    icon: Palette,
    title: "Création de contenus visuels",
    desc: "Visuels professionnels sur Canva, branding et identité visuelle adaptés à chaque plateforme pour maximiser l'engagement.",
  },
  {
    icon: Video,
    title: "Production vidéo",
    desc: "Montage CapCut, contenus courts pour réseaux sociaux et optimisation des formats pour un impact maximal.",
  },
  {
    icon: Globe,
    title: "Sites web & tunnels de vente",
    desc: "Sites WordPress, boutiques Shopify et tunnels de vente Systeme.io pour transformer vos visiteurs en clients.",
  },
  {
    icon: Megaphone,
    title: "Publicité & visibilité",
    desc: "Campagnes Facebook Ads, stratégies de visibilité et analyse des performances pour atteindre plus de clients.",
  },
  {
    icon: Target,
    title: "Techniques commerciales",
    desc: "Stratégies de vente en ligne, ciblage client précis et techniques pour convertir vos prospects en acheteurs fidèles.",
  },
];

const formations = [
  {
    emoji: "🛒",
    title: "Achat en Chine & Dubaï",
    desc: "Importation sécurisée et rentable",
  },
  {
    emoji: "📈",
    title: "Marketing Digital",
    desc: "Stratégies complètes pour vendre en ligne",
  },
  {
    emoji: "🎨",
    title: "Infographie Photoshop",
    desc: "Maîtrisez le design professionnel",
  },
  {
    emoji: "📲",
    title: "Boost WhatsApp",
    desc: "Vente & automatisation avancée",
  },
  {
    emoji: "👻",
    title: "Filtres Snapchat",
    desc: "Créez vos propres filtres AR",
  },
  {
    emoji: "🤖",
    title: "Intelligence Artificielle",
    desc: "Création de contenu & automatisation",
  },
];

const otherServices = [
  {
    icon: Repeat,
    title: "Échange de monnaie",
    desc: "PayPal, Crypto, Mobile Money — transactions rapides et sécurisées.",
  },
  {
    icon: Phone,
    title: "Numéros virtuels",
    desc: "Numéros internationaux pour créer vos comptes réseaux sociaux.",
  },
  {
    icon: Package,
    title: "Vente de produits",
    desc: "Smartphones (iPhone, etc.) et produits fiables à bon prix.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-gradient-glow opacity-60" />
        <div className="absolute bottom-0 right-[-10%] w-[600px] h-[600px] bg-gradient-glow opacity-30" />
      </div>

      {/* NAV */}
      <header className="relative">
        <nav className="container mx-auto flex items-center justify-between py-6 px-4">
          <a
            href="#"
            className="flex items-center gap-2 text-xl font-bold tracking-tight"
          >
            <img
              src={cfalogo}
              alt="CFA Manager Logo"
              className="w-9 h-9 rounded-lg"
            />
            CFA<span className="text-gradient-primary"> MANAGER</span>
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <li>
              <a
                href="#about"
                className="hover:text-foreground transition-smooth"
              >
                À propos
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-foreground transition-smooth"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#formations"
                className="hover:text-foreground transition-smooth"
              >
                Formations
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-foreground transition-smooth"
              >
                Contact
              </a>
            </li>
          </ul>
          <Button
            variant="hero"
            size="sm"
            asChild
            className="hidden md:inline-flex"
          >
            <a href="#contact">
              Réserver un appel <ArrowRight />
            </a>
          </Button>
          <button className="md:hidden text-foreground" aria-label="Menu">
            <Menu />
          </button>
        </nav>

        {/* HERO */}
        <section className="container mx-auto grid lg:grid-cols-2 gap-12 items-center pt-10 pb-28 lg:pb-36 px-4">
          <div className="space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold text-foreground/90">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
              Disponible - Douala, Cameroun 🇨🇲
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
              Votre croissance <br className="hidden md:block" />
              digitale{" "}
              <span className="text-gradient-primary">commence ici</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              CFA MANAGER est une structure spécialisée dans le community
              management, la création de contenu et la stratégie digitale. Nous
              aidons les entreprises, marques et entrepreneurs à développer leur
              visibilité, attirer des clients et augmenter leurs ventes en
              ligne.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">
                  Démarrer un projet <ArrowRight />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#services">Voir nos services</a>
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              {[
                { k: "100+", v: "Clients accompagnés" },
                { k: "6+", v: "Plateformes maîtrisées" },
                { k: "24/7", v: "Support réactif" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="text-2xl font-bold text-gradient-primary">
                    {s.k}
                  </div>
                  <div className="text-xs text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-30 blur-3xl rounded-full" />
            <div className="relative aspect-square max-w-[520px] mx-auto">
              <div className="absolute inset-0 dashed-ring animate-pulse-glow" />
              <div className="absolute inset-6 rounded-full bg-gradient-courses overflow-hidden">
                <img
                  src={cfaHero}
                  alt="Franck Ounga, fondateur de CFA Manager"
                  className="w-full h-full object-cover object-top"
                  width={896}
                  height={1152}
                />
              </div>

              {/* Floating cards */}
              <div className="absolute top-6 -left-4 md:-left-10 glass rounded-2xl px-4 py-3 shadow-card animate-float z-20">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-gradient-accent grid place-items-center">
                    <Megaphone className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">
                      Visibilité
                    </div>
                    <div className="text-sm font-bold">x10 en 90 jours</div>
                  </div>
                </div>
              </div>

              <div
                className="absolute bottom-10 -right-2 md:-right-8 glass rounded-2xl px-4 py-3 shadow-card animate-float z-20"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-gradient-primary grid place-items-center">
                    <Target className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Ventes</div>
                    <div className="text-sm font-bold">Conversion +250%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>

      {/* PLATFORMS STRIP */}
      <section className="border-y border-border/50 bg-gradient-soft overflow-hidden">
        <div className="container mx-auto py-8 px-4">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
            Nous maîtrisons
          </p>
        </div>
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee gap-12 pb-8">
            {[...platforms, ...platforms].map(({ name, icon: Icon }, i) => (
              <span
                key={`${name}-${i}`}
                className="inline-flex items-center gap-3 text-lg md:text-xl font-bold tracking-tight text-foreground/85 shrink-0"
              >
                <Icon className="w-6 h-6 text-accent" /> {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="container mx-auto py-24 grid lg:grid-cols-2 gap-16 items-center px-4"
      >
        <div className="relative order-2 lg:order-1">
          <div className="absolute inset-0 bg-gradient-accent opacity-25 blur-3xl rounded-full" />
          <div className="relative rounded-3xl overflow-hidden border border-border/50 max-w-md mx-auto">
            <img
              src={cfaAbout}
              alt="Franck Ounga au travail"
              className="w-full h-full object-cover"
              loading="lazy"
              width={896}
              height={1120}
            />
          </div>
        </div>
        <div className="order-1 lg:order-2 space-y-6">
          <div className="text-sm font-semibold text-accent uppercase tracking-widest">
            À propos
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Stratège digital,{" "}
            <span className="text-gradient-primary">passionné</span> par votre
            réussite.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Basée à Douala – Cameroun, CFA MANAGER accompagne entrepreneurs et
            entreprises dans leur transformation digitale. Notre mission : vous
            aider à générer des revenus en ligne, lancer votre business et
            devenir autonome financièrement.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 pt-2">
            {[
              "Community management",
              "Stratégie digitale 360°",
              "Branding & identité visuelle",
              "Tunnels de vente",
              "Facebook Ads",
              "Formations certifiantes",
            ].map((i) => (
              <li key={i} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" /> {i}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="relative py-24 bg-gradient-courses border-y border-border/50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
              Nos services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ce que nous{" "}
              <span className="text-gradient-primary">faisons pour vous</span>
            </h2>
            <p className="text-muted-foreground">
              Des solutions complètes pour bâtir, animer et monétiser votre
              présence en ligne.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group relative rounded-2xl glass p-6 hover:border-accent/50 transition-smooth hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary grid place-items-center mb-4 shadow-glow">
                  <Icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {desc}
                </p>
                <ArrowUpRight className="absolute top-6 right-6 w-5 h-5 text-muted-foreground group-hover:text-accent transition-smooth" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMATIONS */}
      <section id="formations" className="container mx-auto py-24 px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-sm font-semibold text-accent uppercase tracking-widest mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> Nos formations
            </div>
            <h2 className="text-4xl md:text-5xl font-bold max-w-2xl">
              Apprenez les{" "}
              <span className="text-gradient-primary">
                compétences qui rapportent
              </span>
            </h2>
          </div>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">
              S'inscrire <ArrowRight />
            </a>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {formations.map((f) => (
            <article
              key={f.title}
              className="group relative rounded-3xl overflow-hidden border border-border bg-card hover:border-accent/50 transition-smooth p-6"
            >
              <div className="text-5xl mb-4">{f.emoji}</div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {f.desc}
              </p>
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-border">
                <span className="text-sm font-semibold text-gradient-primary">
                  Formation certifiante
                </span>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-smooth" />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="relative py-24 bg-gradient-soft border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
              Autres services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Plus que du{" "}
              <span className="text-gradient-primary">
                community management
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {otherServices.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl glass p-8 text-center hover:border-accent/50 transition-smooth"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-accent grid place-items-center mx-auto mb-5 shadow-glow">
                  <Icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION / TESTIMONIAL-STYLE */}
      <section className="container mx-auto py-24 px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
            Notre mission
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Vous aider à{" "}
            <span className="text-gradient-primary">
              générer des revenus en ligne
            </span>
            , lancer votre business et devenir autonome financièrement.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Développer votre présence",
              desc: "Construire une image professionnelle forte sur tous les canaux digitaux.",
            },
            {
              title: "Attirer plus de clients",
              desc: "Stratégies ciblées pour toucher exactement votre audience idéale.",
            },
            {
              title: "Augmenter vos ventes",
              desc: "Convertir vos prospects en clients fidèles grâce à des tunnels optimisés.",
            },
          ].map((m, i) => (
            <figure key={m.title} className="rounded-2xl glass p-6 space-y-4">
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <h3 className="text-xl font-bold">{m.title}</h3>
              <p className="text-foreground/80 leading-relaxed text-sm">
                {m.desc}
              </p>
              <div className="pt-2 border-t border-border text-xs font-semibold text-gradient-primary">
                Objectif #{i + 1}
              </div>
            </figure>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="container mx-auto py-24 px-4">
        <div className="relative rounded-3xl overflow-hidden border border-border bg-gradient-courses p-8 md:p-14">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-glow opacity-70" />
          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold">
                <Zap className="w-3.5 h-3.5 text-accent" /> Réponse sous 24h
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Prêt à{" "}
                <span className="text-gradient-primary">
                  passer au niveau supérieur ?
                </span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Contactez CFA MANAGER aujourd'hui et découvrons ensemble comment
                booster votre visibilité, vos ventes et votre business en ligne.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-accent shrink-0" />
                  <span>Douala – Cameroun</span>
                </div>
                <a
                  href="tel:+237658379932"
                  className="flex items-center gap-3 text-sm hover:text-accent transition-smooth"
                >
                  <Phone className="w-4 h-4 text-accent shrink-0" />
                  <span>+237 658 37 99 32</span>
                </a>
                <a
                  href="mailto:franckounga237@gmail.com"
                  className="flex items-center gap-3 text-sm hover:text-accent transition-smooth"
                >
                  <Mail className="w-4 h-4 text-accent shrink-0" />
                  <span>franckounga237@gmail.com</span>
                </a>
              </div>
            </div>

            <form
              className="glass rounded-2xl p-6 space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-2 gap-3">
                <Input
                  placeholder="Votre nom"
                  className="bg-background/40 border-border"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-background/40 border-border"
                />
              </div>
              <Input
                placeholder="Téléphone / WhatsApp"
                className="bg-background/40 border-border"
              />
              <Textarea
                placeholder="Parlez-nous de votre projet…"
                rows={4}
                className="bg-background/40 border-border resize-none"
              />
              <Button variant="hero" size="lg" className="w-full">
                Envoyer ma demande <ArrowRight />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/50">
        <div className="container mx-auto py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground px-4">
          <div className="flex items-center gap-2 text-center md:text-left">
            <span className="w-6 h-6 rounded-md bg-gradient-primary grid place-items-center">
              {/*<Sparkles className="w-3 h-3 text-primary-foreground" />*/}
              <img
                  src={cfalogo}
                  alt="CFA Manager Logo"
                  className="w-9 h-6 rounded-lg"
              />
            </span>
            © 2026 CFA MANAGER · Votre croissance digitale commence ici.
          </div>
          <div className="flex items-center gap-4">
            {socials.map(({ name, icon: Icon, href }) => (
              <a
                key={name}
                href={href}
                aria-label={name}
                className="w-9 h-9 rounded-lg glass grid place-items-center hover:text-accent hover:border-accent/50 transition-smooth"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
