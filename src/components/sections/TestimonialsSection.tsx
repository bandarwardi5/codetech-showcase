import { Star, Quote, CheckCircle2 } from "lucide-react";

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  initials: string;
  avatarColor: string;
}

const testimonials: TestimonialItem[] = [
  {
    quote:
      "التزام واضح بالمواعيد وجودة هندسية فاخرة، والأهم أنهم فهموا متطلباتنا المعقدة من أول جلسة استكشاف. المنصة اليوم تدير معاملات يومية بملايين الجنيهات دون أي تعطل.",
    author: "سارة المنشاوي",
    role: "مديرة تطوير المنتجات",
    company: "شركة تقنية مالية (Fintech)",
    rating: 5,
    initials: "SM",
    avatarColor: "from-blue-500 to-indigo-600",
  },
  {
    quote:
      "حوّل فريق CodeTech عملية لوجستية ورقية معقدة إلى نظام رقمي سلس يخدم سائقينا ومديري الفروع يومياً. انخفضت الأخطاء التشغيلية بنسبة تتجاوز 70% في أول شهرين.",
    author: "م. طارق العوضي",
    role: "مدير العمليات وسلاسل الإمداد",
    company: "مجموعة لوجستية إقليمية",
    rating: 5,
    initials: "TA",
    avatarColor: "from-emerald-500 to-teal-600",
  },
  {
    quote:
      "التحسن في سرعة متجرنا الإلكتروني وتجربة الدفع كان ملموساً جداً منذ أول أسبوع. زادت نسبة إتمام الطلبات (Conversion Rate) بنسبة 35% وفريق الدعم الفني لديهم متواجد دائماً.",
    author: "كريم فهمي",
    role: "الشريك المؤسس والرئيس التنفيذي",
    company: "علامة تجارية للأزياء",
    rating: 5,
    initials: "KF",
    avatarColor: "from-purple-500 to-pink-600",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28 border-t border-border/80 bg-secondary/30 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-3">
              06 — الثقة والشهادات
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              الثقة تُقاس بتجربة العمل الحقيقية
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-muted-foreground">
            فخورون بشراكتنا مع مؤسسات ورواد أعمال يبنون حلولاً رائدة ومستدامة في المنطقة.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote
              key={item.author}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 relative"
            >
              <div>
                {/* Top Row: Stars & Quote Icon */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="size-6 text-primary/30 rotate-180" />
                </div>

                {/* Quote Text */}
                <p className="text-sm leading-relaxed text-foreground/80 mb-6">
                  «{item.quote}»
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-5 border-t border-border/60 flex items-center gap-3.5">
                <div
                  className={`flex size-11 items-center justify-center rounded-full bg-gradient-to-br ${item.avatarColor} text-white font-bold text-xs shadow-md`}
                >
                  {item.initials}
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1.5">
                    <p className="text-sm font-bold text-foreground">{item.author}</p>
                    <CheckCircle2 className="size-3.5 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                  <p className="text-[11px] font-medium text-primary/90 mt-0.5">{item.company}</p>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
