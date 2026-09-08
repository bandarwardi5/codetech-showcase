import { useState } from "react";
import { Sparkles, Layers, Terminal, Smartphone, Database, Cloud } from "lucide-react";

interface TechItem {
  name: string;
  category: "frontend" | "backend" | "mobile" | "data";
  role: string;
  badge: string;
  color: string;
  svg: string;
}

const technologies: TechItem[] = [
  {
    name: "React 19",
    category: "frontend",
    role: "واجهات تفاعلية فائقة السرعة",
    badge: "Frontend",
    color: "#61DAFB",
    svg: `<svg viewBox="0 0 115.3 100" class="size-6" fill="currentColor"><path d="M57.7 0C25.8 0 0 22.4 0 50s25.8 50 57.7 50 57.7-22.4 57.7-50S89.5 0 57.7 0zm0 90c-26.4 0-47.7-17.9-47.7-40S31.3 10 57.7 10s47.7 17.9 47.7 40-21.3 40-47.7 40z"/><ellipse cx="57.7" cy="50" rx="11" ry="24" transform="matrix(.866 -.5 .5 .866 -17.3 36.3)"/><ellipse cx="57.7" cy="50" rx="11" ry="24" transform="matrix(.866 .5 -.5 .866 32.7 -21.3)"/><circle cx="57.7" cy="50" r="7.5"/></svg>`,
  },
  {
    name: "Next.js",
    category: "frontend",
    role: "تطبيقات ويب مع تهيئة محركات البحث (SEO)",
    badge: "Fullstack",
    color: "#ffffff",
    svg: `<svg viewBox="0 0 180 180" class="size-6" fill="currentColor"><mask height="180" id="mask0" maskUnits="userSpaceOnUse" width="180" x="0" y="0"><circle cx="90" cy="90" fill="#fff" r="90"/></mask><g mask="url(#mask0)"><circle cx="90" cy="90" fill="#000" r="90"/><path d="M149.5 160.7 70.3 58.7h-14v62.7h11.9V75l70.2 90.7c3.9-1.6 7.6-3.3 11.1-5z" fill="#fff"/><path d="M117 58.7h12v62.7h-12z" fill="#fff"/></g></svg>`,
  },
  {
    name: "TypeScript",
    category: "frontend",
    role: "أمان واستقرار عالي للشيفرة البرمجية",
    badge: "Standard",
    color: "#3178C6",
    svg: `<svg viewBox="0 0 128 128" class="size-6" fill="currentColor"><rect width="128" height="128" rx="15" fill="#3178C6"/><path d="M68.5 76.5c1.8 3.5 4.5 6.2 8.3 8.1 3.7 1.9 8.2 2.9 13.4 2.9 4.3 0 8.1-.7 11.2-2.1 3.2-1.4 5.6-3.3 7.3-5.8 1.7-2.4 2.6-5.2 2.6-8.3 0-3.1-.9-5.7-2.6-7.8-1.7-2.1-4.2-3.8-7.3-5-2.2-.9-6.3-2.1-12.4-3.6-5.8-1.4-10-2.8-12.8-4.2-3.7-1.9-6.5-4.3-8.5-7.3-2-3-3-6.6-3-10.8 0-4.6 1.3-8.7 3.8-12.3 2.5-3.6 6.1-6.4 10.7-8.3 4.6-1.9 9.8-2.8 15.6-2.8 5.7 0 10.8 1 15.2 3.1 4.5 2.1 7.9 5.1 10.3 8.9 2.4 3.9 3.6 8.3 3.6 13.2h-15.4c-.2-3.7-1.6-6.6-4.1-8.5-2.5-2-6-2.9-10.4-2.9-4.2 0-7.6.8-10.1 2.5-2.5 1.7-3.8 4.1-3.8 7.2 0 2.2.6 4.1 1.9 5.6 1.3 1.5 3.3 2.7 6.1 3.7 1.8.6 5.5 1.7 11.2 3.1 6.8 1.6 11.7 3.3 14.8 5 4.1 2.3 7.2 5.1 9.3 8.5 2.1 3.4 3.1 7.4 3.1 12 0 4.8-1.3 9.2-4 13-2.6 3.8-6.3 6.8-11.2 8.9-4.8 2.1-10.5 3.2-17.1 3.2-7.2 0-13.4-1.3-18.7-3.8-5.3-2.5-9.3-6.2-12-11-2.7-4.8-4-10.3-4-16.5h15.4c.1 4.5 1.2 8.2 3.3 11.1zm-43.5 29.5V26.2H41v-14H3.8v14h15.9v79.8h15.3z" fill="#fff"/></svg>`,
  },
  {
    name: "Node.js",
    category: "backend",
    role: "خوادم سريعة ومعالجة بيانات لحظية",
    badge: "Backend",
    color: "#5FA04E",
    svg: `<svg viewBox="0 0 128 128" class="size-6" fill="currentColor"><path d="M64 10.6L14.7 39.1v57.1L64 124.6l49.3-28.5V39.1L64 10.6zm0 18.5l33.8 19.5-33.8 19.5-33.8-19.5L64 29.1zM23.1 48.7l35.5 20.5v40.3L23.1 89V48.7zm46.3 60.8V69.2l35.5-20.5V89l-35.5 20.5z" fill="#5FA04E"/></svg>`,
  },
  {
    name: "Laravel",
    category: "backend",
    role: "أنظمة مؤسسية متينة وبوابات دفع",
    badge: "Backend",
    color: "#FF2D20",
    svg: `<svg viewBox="0 0 128 128" class="size-6" fill="currentColor"><path d="M117.8 34.6L77 11.2c-2.4-1.4-5.4-1.4-7.8 0L28.3 34.6c-2.4 1.4-3.9 4-3.9 6.8v46.8c0 2.8 1.5 5.4 3.9 6.8l40.8 23.4c1.2.7 2.6 1.1 3.9 1.1s2.7-.4 3.9-1.1l40.8-23.4c2.4-1.4 3.9-4 3.9-6.8V41.4c.1-2.8-1.4-5.4-3.7-6.8zm-44.7 74.3l-37-21.2V48.6l37 21.2v39.1zm3.8-45.7L40.2 42.1l36.7-21 36.7 21-36.7 21.1zm37 24.5l-33.2 19V67.6l33.2-19v39.1z" fill="#FF2D20"/></svg>`,
  },
  {
    name: "Flutter",
    category: "mobile",
    role: "تطبيقات جوال موحدة لـ iOS و Android",
    badge: "Mobile",
    color: "#02569B",
    svg: `<svg viewBox="0 0 128 128" class="size-6" fill="currentColor"><path d="M74.9 13.9L22.2 66.6l16.1 16.1L91 29.9H74.9z" fill="#42A5F5"/><path d="M74.9 69.8L51.8 92.9l16.1 16.1 23-23.1L74.9 69.8z" fill="#0D47A1"/><path d="M91 69.8H74.9l-16 16.1 8 8 24.1-24.1z" fill="#1E88E5"/><path d="M106.9 85.9l-16-16.1H74.9l24.1 24.1 7.9-8z" fill="#0D47A1"/></svg>`,
  },
  {
    name: "PostgreSQL",
    category: "data",
    role: "قواعد بيانات علائقية متينة وموثوقة",
    badge: "Database",
    color: "#4169E1",
    svg: `<svg viewBox="0 0 128 128" class="size-6" fill="currentColor"><path d="M64 14C36.4 14 14 36.4 14 64s22.4 50 50 50 50-22.4 50-50-22.4-50-50-50zm0 88c-21 0-38-17-38-38s17-38 38-38 38 17 38 38-17 38-38 38z" fill="#336791"/></svg>`,
  },
  {
    name: "Docker & Cloud",
    category: "data",
    role: "نشر سحابي معزول وسهل التوسع",
    badge: "DevOps",
    color: "#2496ED",
    svg: `<svg viewBox="0 0 128 128" class="size-6" fill="currentColor"><path d="M118.6 57.8c-2.4-1.6-7.8-2.6-12.4-.6-1.5-3.8-4.5-6.9-8.4-8.8l-3.3-1.6-2 3c-4.4 6.8-4.8 14.7-1.1 21.8-3.4 1.9-7.4 3-11.4 3.1H16.8c-2.2 0-4.3 1-5.7 2.6-3.8 4.3-4.7 10.3-2.5 15.5 5.5 13.2 18.2 21.8 32.5 21.8 33.1 0 59.8-19.7 66.8-48.4 4.5.3 9-.9 12.6-3.4 4.4-3.1 6.8-8.1 6.3-13.4-.3-5.2-3.8-9.4-8.2-12z" fill="#2496ED"/></svg>`,
  },
];

export function TechStackSection() {
  const [filter, setFilter] = useState<string>("all");

  const filteredTech = filter === "all"
    ? technologies
    : technologies.filter((t) => t.category === filter);

  const categories = [
    { id: "all", label: "جميع التقنيات", icon: Sparkles },
    { id: "frontend", label: "الواجهات الأمامية", icon: Layers },
    { id: "backend", label: "الخوادم والبنية", icon: Terminal },
    { id: "mobile", label: "تطبيقات الهواتف", icon: Smartphone },
    { id: "data", label: "البيانات والسحابة", icon: Database },
  ];

  return (
    <section id="tech" className="py-20 md:py-28 border-t border-border/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-3">
              05 — الأدوات والتقنيات
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              تقنيات عالمية لمنتجات تصمد للنمو
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-muted-foreground">
            نختار بحرص أدوات برمجية حديثة ومستقرة تمتلك مجتمعات دعم عالمية وتضمن استدامة استثمارك البرمجي.
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = filter === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilter(cat.id)}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground font-bold shadow-md shadow-primary/20"
                    : "border border-border bg-card/60 text-foreground/75 hover:bg-card hover:text-foreground"
                }`}
              >
                <Icon className="size-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tech Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filteredTech.map((tech) => (
            <div
              key={tech.name}
              className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-card hover:shadow-lg hover:shadow-primary/5"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div
                    className="flex size-11 items-center justify-center rounded-xl bg-secondary/80 border border-border p-2 transition-transform duration-300 group-hover:scale-110"
                    dangerouslySetInnerHTML={{ __html: tech.svg }}
                  />
                  <span className="rounded-md bg-primary/10 border border-primary/20 px-2 py-0.5 text-[11px] font-bold text-primary">
                    {tech.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                  {tech.name}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  {tech.role}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-border/40 text-[11px] text-primary/80 font-medium">
                معايير أداء عالية ومستقرة
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
