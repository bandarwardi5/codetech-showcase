import {
  Compass,
  LayoutTemplate,
  Code2,
  Rocket,
  CheckCircle2,
} from "lucide-react";

interface StepItem {
  number: string;
  icon: typeof Compass;
  title: string;
  description: string;
  details: string[];
}

const steps: StepItem[] = [
  {
    number: "01",
    icon: Compass,
    title: "الاكتشاف والتحليل الهندسي",
    description:
      "ندرس أهداف المشروع، والجمهور المستهدف، والقيود الفنية والتنظيمية بدقة، لنضع خطة عمل معمارية واضحة المعالم.",
    details: ["تحديد نطاق العمل (Scope)", "دراسة دراسات الجدوى الفنية", "اختيار التكنولوجيا المثالية"],
  },
  {
    number: "02",
    icon: LayoutTemplate,
    title: "التصميم والنمذجة التفاعلية",
    description:
      "نصيغ تجارب مستخدم بديهية وعصرية (UI/UX) مع نماذج أولية تفاعلية قابلة للاختبار والمراجعة قبل البدء بالتطوير.",
    details: ["واجهات استخدام عصرية", "نماذج تفاعلية قابلة للنقر", "نظام تصميم موحد (Design System)"],
  },
  {
    number: "03",
    icon: Code2,
    title: "التطوير البرمجي وضمان الجودة",
    description:
      "نبني النظام عبر مراحل عمل مرنة (Sprints) مع مراجعات أسبوعية، واختبارات تكامل وأداء لضمان خلوه من الثغرات.",
    details: ["تطوير بنية نظيفة (Clean Code)", "اختبارات أمان وضغط", "تقارير إنجاز أسبوعية حية"],
  },
  {
    number: "04",
    icon: Rocket,
    title: "الإطلاق السلس والرعاية المستمرة",
    description:
      "نطلق المنتج بأمان على السحابة، ونفعل أنظمة المراقبة اللحظية للأخطاء، مع توفير خطط دعم وصيانة وتطوير ممتدة.",
    details: ["نشر بدون توقف (Zero-downtime)", "مراقبة الأداء والاستقرار", "ضمان ودعم فني ممتد"],
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-20 md:py-28 border-t border-border/80 bg-secondary/30 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-3">
              04 — منهجية العمل
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              منهجية واضحة من الفكرة إلى الإطلاق
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-muted-foreground">
            نعتمد عملية هندسية شفافة تضمن لك متابعة كل خطوة، مع الالتزام الصارم بالجدول الزمني والميزانية المحددة.
          </p>
        </div>

        {/* Timeline Grid with Connecting Line */}
        <div className="relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-8 right-8 h-0.5 bg-gradient-to-l from-primary via-primary/50 to-primary/20 -z-0" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.number}
                  className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div>
                    {/* Top Row: Icon + Number Badge */}
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md shadow-primary/25">
                        <Icon className="size-6" />
                      </div>
                      <span className="text-2xl font-black text-primary/80">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="mb-3 text-lg font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                      {step.description}
                    </p>
                  </div>

                  {/* Bullet points */}
                  <div className="pt-4 border-t border-border/60 space-y-2 text-xs text-foreground/75">
                    {step.details.map((detail) => (
                      <div key={detail} className="flex items-center gap-2">
                        <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
