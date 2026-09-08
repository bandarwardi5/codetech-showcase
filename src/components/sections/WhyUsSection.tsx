import { useEffect, useRef, useState } from "react";
import teamImage from "../../assets/codetech-team.jpg";
import { ShieldCheck, Zap, Users2, Trophy, Clock, Check } from "lucide-react";

function AnimatedStat({
  target,
  suffix = "",
  label,
}: {
  target: number;
  suffix?: string;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const duration = 1800; // ms
    const startTime = performance.now();

    const updateCounter = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(ease * target);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [hasStarted, target]);

  return (
    <div ref={elementRef} className="rounded-xl border border-border bg-card/60 p-4 text-right backdrop-blur-sm">
      <div className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
        {count}
        {suffix}
      </div>
      <p className="mt-1 text-xs sm:text-sm font-medium text-muted-foreground">{label}</p>
    </div>
  );
}

export function WhyUsSection() {
  const pillars = [
    {
      icon: Zap,
      title: "أداء فائق واستقرار عملي",
      description: "نصمم المعمارية لتستوعب الذروات وحركة المرور العالية دون بطء أو توقف.",
    },
    {
      icon: ShieldCheck,
      title: "أمان متقدم وحماية للبيانات",
      description: "تطبيق معايير التشفير والتحقق الصارم لحماية بياناتك وبيانات عملائك.",
    },
    {
      icon: Users2,
      title: "فهم لمتطلبات السوق الإقليمي",
      description: "تكامل سلس مع بوابات الدفع المحلية والأنظمة الضريبية وسلوك المستخدم العربي.",
    },
  ];

  return (
    <section id="why" className="relative py-20 md:py-28 bg-secondary/40 border-t border-border/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Column: Content & Stats */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              02 — لماذا CodeTech
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl leading-tight">
              شريك تقني يركّز على نتائج الأعمال الحقيقية
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed">
              لا نبيع ساعات عمل مجهولة، بل نبني حلولاً ملموسة الأثر. نجمع بين عمق الهندسة البرمجية وفهم احتياجات السوق المصري والعربي، لتصل إلى منتج يخدم أهدافك اليوم ويتوسع معك غداً دون إعادة بناء.
            </p>

            {/* Pillars */}
            <div className="space-y-4 pt-2">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="flex items-start gap-3.5">
                    <div className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary border border-primary/30">
                      <Icon className="size-4.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">{pillar.title}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-normal mt-0.5">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Animated Stats Grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4">
              <AnimatedStat target={120} suffix="+" label="مشروعاً رقمياً منجزاً" />
              <AnimatedStat target={98} suffix="%" label="نسبة رضا العملاء" />
              <AnimatedStat target={8} suffix="+" label="سنوات خبرة برمجية" />
            </div>
          </div>

          {/* Right Column: Team Image with Clean Frame */}
          <div className="reveal relative">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
              <img
                src={teamImage}
                width={1200}
                height={1200}
                alt="فريق CodeTech الهندسي أثناء جلسة تخطيط معماري للمنتجات الرقمية"
                className="image-zoom size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />

              {/* Floating highlight */}
              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/10 bg-black/60 p-4 backdrop-blur-md text-white text-right">
                <div className="flex items-center gap-2 mb-1 text-primary">
                  <Trophy className="size-4" />
                  <span className="text-xs font-bold">معايير جودة برمجية متقدمة</span>
                </div>
                <p className="text-xs text-white/80 leading-relaxed">
                  نتبع منهجيات Agile مع كود موثق، واختبارات تكامل دورية لضمان سلامة كل إصدار.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
