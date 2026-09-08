import { useState } from "react";
import fintechImage from "../../assets/project-fintech.jpg";
import commerceImage from "../../assets/project-commerce.jpg";
import logisticsImage from "../../assets/project-logistics.jpg";
import { ContactModal } from "../ContactModal";
import {
  ArrowUpLeft,
  CheckCircle2,
  ExternalLink,
  TrendingUp,
  Sparkles,
} from "lucide-react";

interface ProjectItem {
  id: string;
  image: string;
  category: string;
  title: string;
  summary: string;
  metric: string;
  metricLabel: string;
  tags: string[];
  alt: string;
}

const projects: ProjectItem[] = [
  {
    id: "fintech",
    image: fintechImage,
    category: "تقنية مالية · تطبيق ويب",
    title: "منصة موحّدة لإدارة السيولة والمحافظ",
    summary:
      "تطوير منصة مالية تدعم التحويلات الفورية وإدارة المحافظ مع تكامل مصرفي محكم واشتراطات أمان بنكية.",
    metric: "+180%",
    metricLabel: "كفاءة معالجة العمليات",
    tags: ["React", "TypeScript", "Node.js", "Financial APIs"],
    alt: "واجهة منصة تقنية مالية لإدارة السيولة على شاشة مكتبية",
  },
  {
    id: "commerce",
    image: commerceImage,
    category: "تجارة إلكترونية · تطبيق هجين",
    title: "تجربة تسوّق للأزياء العربية الفاخرة",
    summary:
      "تطبيق جوال فائق السرعة لمتجر أزياء متنامٍ يخدم دول الخليج ومصر، مع سلة شراء سريعة وتكامل دفع متعدد العملات.",
    metric: "4.9/5",
    metricLabel: "متوسط تقييم التطبيق بالمتجر",
    tags: ["Flutter", "Paymob & Apple Pay", "تحليلات سلوك"],
    alt: "تطبيق متجر أزياء إلكتروني على شاشتي هاتفين ذكيين",
  },
  {
    id: "logistics",
    image: logisticsImage,
    category: "لوجستيات · نظام مخصص",
    title: "مركز عمليات وإدارة سلاسل التوريد",
    summary:
      "نظام سحابي متكامل لتتبع الأساطيل، جدولة التوزيع، وأتمتة المستودعات لشركة شحن إقليمية كبرى.",
    metric: "99.98%",
    metricLabel: "نسبة استقرار وجاهزية النظام",
    tags: ["PostgreSQL", "Next.js", "Docker", "GPS Tracking"],
    alt: "غرفة تحكم لوجستية لمراقبة سلاسل الإمداد وشاشات بيانات حية",
  },
];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-border/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-3">
              03 — مشاريع مختارة
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              دراسات حالة من واقع العمل
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-muted-foreground">
            نماذج لمنتجات رقمية بنيناها من الصفر لشركات ناشئة ومؤسسات كبرى، وحققت عوائد ملموسة.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5"
            >
              <div>
                {/* Image Container with Hover Zoom & Overlay */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    width={1200}
                    height={900}
                    alt={project.alt}
                    loading="lazy"
                    className="image-zoom size-full object-cover"
                  />
                  {/* Subtle Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                  {/* Impact Metric Floating Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-lg border border-primary/30 bg-background/80 px-2.5 py-1 text-xs font-bold text-primary backdrop-blur-md">
                    <TrendingUp className="size-3.5" />
                    <span>{project.metric} {project.metricLabel}</span>
                  </div>

                  {/* Interactive Action on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-background/40 backdrop-blur-xs">
                    <div className="flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-primary-foreground shadow-lg shadow-primary/30">
                      <span>عرض تفاصيل الدراسة</span>
                      <ArrowUpLeft className="size-4" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-2 text-xs font-semibold text-primary">
                    {project.category}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.summary}
                  </p>
                </div>
              </div>

              {/* Tags & Case Consultation */}
              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/60">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-secondary/80 px-2 py-0.5 text-[11px] font-medium text-foreground/75"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-foreground">
              هل لديك فكرة مشروع مشابه أو ترغب بمناقشة التحدي الخاص بك؟
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              يسعدنا تقديم جلسة استشارية أولية مجانية لبحث المتطلبات والحل الأنسب.
            </p>
          </div>
          <ContactModal triggerLabel="ناقش مشروعك مع خبرائنا" />
        </div>
      </div>
    </section>
  );
}
