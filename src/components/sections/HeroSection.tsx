import heroImage from "../../assets/codetech-hero.jpg";
import { ContactModal } from "../ContactModal";
import { ArrowLeft, Sparkles, Code2, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-primary/10 blur-[130px] -z-10" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top availability pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary backdrop-blur-md mb-6 animate-pulse-subtle">
          <span className="size-2 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20" />
          <span>متاحون لاستقبال مشاريع برمجية جديدة في 2026</span>
        </div>

        {/* Main Heading */}
        <h1 className="max-w-4xl text-3xl font-extrabold leading-[1.25] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          نبني منتجات رقمية{" "}
          <span className="bg-gradient-to-l from-primary via-primary/80 to-foreground bg-clip-text text-transparent">
            تصمد أمام العمل
          </span>{" "}
          الحقيقي
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
          من المواقع والمنصات السحابية إلى تطبيقات الهواتف الذكية عالية الأداء، نرافق الشركات المصرية والمنطقة العربية في هندسة بنية برمجية موثوقة ومصممة للنمو المستدام.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 mb-12 flex flex-wrap items-center gap-3.5 sm:mt-10">
          <ContactModal
            triggerLabel="اطلب عرض سعر مجاني"
            triggerClassName="px-7 py-3.5 text-sm sm:text-base"
          />

          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/70 px-6 py-3.5 text-sm sm:text-base font-semibold text-foreground/80 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card hover:text-foreground active:scale-95"
          >
            <span>استكشف دراسات أعمالنا</span>
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          </a>
        </div>

        {/* Feature Highlights Pills */}
        <div className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-foreground/70">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-primary" />
            <span>تسليم ملتزم بالمواعيد</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-primary" />
            <span>أكواد برمجية نظيفة وقابلة للتوسع</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-primary" />
            <span>دعم فني وضمان بعد الإطلاق</span>
          </div>
        </div>

        {/* Hero Image Block with Gradient Overlay */}
        <div className="reveal relative overflow-hidden rounded-2xl border border-border/80 bg-card shadow-2xl shadow-primary/5">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <img
              src={heroImage}
              width={1920}
              height={1024}
              fetchPriority="high"
              alt="فريق هندسي من CodeTech يناقش حلول رقمية في القاهرة"
              className="image-zoom size-full object-cover object-center"
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent opacity-85" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />

            {/* Floating Image Badge */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center gap-3 rounded-xl border border-white/10 bg-black/60 px-4 py-2.5 backdrop-blur-md text-white shadow-lg">
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary/20 text-primary border border-primary/40">
                <Code2 className="size-4.5" />
              </div>
              <div className="text-right">
                <p className="text-xs font-bold">مركز التطوير والهندسة البرمجية</p>
                <p className="text-[11px] text-white/60">القاهرة · القاهرة الجديدة</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
