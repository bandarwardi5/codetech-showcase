import { ContactModal } from "../ContactModal";
import { MessageSquare, Mail, PhoneCall, Sparkles, Clock, CheckCircle } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 border-t border-border/80 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary via-primary/95 to-primary/80 p-8 sm:p-14 md:p-16 text-primary-foreground shadow-2xl shadow-primary/20">
          {/* Subtle lighting circles */}
          <div className="pointer-events-none absolute -top-24 -left-24 size-96 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 size-96 rounded-full bg-black/20 blur-3xl" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold backdrop-blur-md mb-4 text-white">
              <Sparkles className="size-3.5" />
              لنبنِ شيئاً استثنائياً يستحق
            </div>

            <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl leading-tight text-white">
              جاهز لتحويل رؤيتك الرقمية إلى منتج عالي الكفاءة؟
            </h2>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/85">
              سواء كنت تبدأ من الصفر، أو ترغب بإعادة بناء وتحديث منصتك الحالية لتواكب التوسع السريع، مهندسونا مستعدون لدراسة متطلباتك بدقة.
            </p>

            {/* Quick Guarantees */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-white/90">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="size-4 text-white" />
                <span>جلسة استكشاف معماري مجانية</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="size-4 text-white" />
                <span>رد وتحليل أولي خلال 24 ساعة</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-3.5">
              <ContactModal
                triggerLabel="احجز جلسة استشارة الآن"
                triggerClassName="bg-white text-primary hover:bg-white/90 hover:text-primary shadow-lg shadow-black/10 px-7 py-3.5 font-black text-sm sm:text-base"
              />

              <a
                href="https://wa.me/201000000000?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20CodeTech%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D8%A8%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D9%85%D8%B4%D8%B1%D9%88%D8%B9%20%D8%AC%D8%AF%D9%8A%D8%AF"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3.5 text-sm sm:text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-95"
              >
                <MessageSquare className="size-4.5" />
                <span>محادثة واتساب فورية</span>
              </a>

              <a
                href="mailto:hello@codetech.eg"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-black/15 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-black/30"
              >
                <Mail className="size-4" />
                <span>hello@codetech.eg</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
