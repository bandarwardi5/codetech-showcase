import {
  Globe,
  Layers,
  Smartphone,
  Cpu,
  ShoppingBag,
  BarChart3,
  ArrowUpLeft,
} from "lucide-react";
import { ContactModal } from "../ContactModal";

interface ServiceItem {
  number: string;
  icon: typeof Globe;
  title: string;
  description: string;
  tags: string[];
}

const services: ServiceItem[] = [
  {
    number: "01",
    icon: Globe,
    title: "المواقع الإلكترونية المؤسسية",
    description:
      "مواقع فائقة السرعة ومتوافقة مع محركات البحث تعكس مكانة علامتك التجارية وتحوّل الزيارات إلى فرص عمل حقيقية.",
    tags: ["Next.js", "SEO متقدم", "أداء 95+ في Lighthouse"],
  },
  {
    number: "02",
    icon: Layers,
    title: "تطبيقات الويب والمنصات (SaaS)",
    description:
      "منصات تفاعلية سحابية قابلة للتوسع وتتحمل ملايين العمليات، مع تصميم معماري يضمن الاستقرار وحماية البيانات.",
    tags: ["React & TypeScript", "Cloud Architecture", "أمان مالي"],
  },
  {
    number: "03",
    icon: Smartphone,
    title: "تطبيقات الهواتف الذكية (iOS & Android)",
    description:
      "تجارب استخدام متقنة تركز على سلوك المستخدم الفعلي، مع إشعارات فورية وربط كامل بالخدمات السحابية.",
    tags: ["Flutter", "React Native", "تجربة استخدام سلسة"],
  },
  {
    number: "04",
    icon: Cpu,
    title: "البرمجيات والأنظمة المخصصة",
    description:
      "أنظمة تشغيلية مفصلة تماماً حول تدفق العمل داخل مؤسستك، مع تكامل مباشر مع الأنظمة الحالية والـ APIs.",
    tags: ["ERP مخصص", "تكاملات API", "أتمتة العمليات"],
  },
  {
    number: "05",
    icon: ShoppingBag,
    title: "المتاجر الإلكترونية وحلول الدفع",
    description:
      "تجارب شراء متكاملة مع بوابات الدفع المحلية والإقليمية (Paymob, Fawry, Apple Pay) وإدارة سلاسل التوريد.",
    tags: ["بوابات الدفع", "إدارة المخزون", "تكامل الشحن التلقائي"],
  },
  {
    number: "06",
    icon: BarChart3,
    title: "لوحات التحكم وتحليلات البيانات",
    description:
      "مؤشرات حية وبيانات فورية مع مستويات صلاحيات دقيقة تساعد الإدارة وفرق العمل على اتخاذ قرارات دقيقة وسريعة.",
    tags: ["Real-time Metrics", "إدارة الصلاحيات", "تصدير التقارير"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="border-t border-border/80 py-20 md:py-28 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-3">
              01 — مجالات الاختصاص
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              خدمات هندسية ننفذها بإتقان
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-muted-foreground">
            نحول التحديات المعقدة إلى منتجات برمجية بديهية وسريعة، باستخدام أعلى معايير الجودة العالمية.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.number}
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-card hover:shadow-xl hover:shadow-primary/5"
              >
                <div>
                  {/* Top card bar */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex size-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-6" />
                    </div>
                    <span className="text-sm font-bold text-muted-foreground/60 group-hover:text-primary transition-colors">
                      {service.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mb-3 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>

                {/* Tags & Action */}
                <div className="mt-6 pt-5 border-t border-border/60">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-secondary/80 px-2.5 py-1 text-[11px] font-medium text-foreground/75"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <ContactModal
                    triggerLabel="استفسر عن هذه الخدمة"
                    triggerClassName="w-full justify-between bg-transparent border border-border/80 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary px-3 py-2 text-xs"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
