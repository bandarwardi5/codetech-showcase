import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import heroImage from "../assets/codetech-hero.jpg";
import teamImage from "../assets/codetech-team.jpg";
import fintechImage from "../assets/project-fintech.jpg";
import commerceImage from "../assets/project-commerce.jpg";
import logisticsImage from "../assets/project-logistics.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CodeTech | شركة برمجيات مصرية" },
      { name: "description", content: "نصمم ونطور المواقع وتطبيقات الويب والموبايل والبرمجيات المخصصة للشركات في مصر والمنطقة العربية." },
      { property: "og:title", content: "CodeTech | شركة برمجيات مصرية" },
      { property: "og:description", content: "نبني منتجات رقمية تصمد أمام العمل الحقيقي." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  ["01", "المواقع الإلكترونية", "مواقع سريعة وواضحة تعكس قيمة علامتك وتحوّل الزيارات إلى فرص حقيقية."],
  ["02", "تطبيقات الويب", "منصات تفاعلية قابلة للتوسع، مبنية لأداء مستقر وتجربة استخدام سلسة."],
  ["03", "تطبيقات الموبايل", "تجارب iOS وAndroid متقنة، مصممة حول سلوك المستخدم الفعلي."],
  ["04", "برمجيات مخصصة", "أنظمة تشغيلية وتكاملات داخلية مصممة حول سير عمل مؤسستك."],
  ["05", "المتاجر الإلكترونية", "تجارب شراء متكاملة مع الدفع والمخزون وتحليلات التحويل."],
  ["06", "لوحات التحكم", "بيانات واضحة ومؤشرات حية وصلاحيات دقيقة تساعد فرقك على اتخاذ القرار."],
];

const projects = [
  { image: fintechImage, meta: "تقنية مالية · تطبيق ويب", title: "منصة موحّدة لإدارة السيولة", alt: "واجهة منصة مالية على شاشة مكتبية" },
  { image: commerceImage, meta: "تجارة إلكترونية · موبايل", title: "تجربة تسوّق للأزياء العربية", alt: "تطبيق متجر أزياء على هاتفين" },
  { image: logisticsImage, meta: "لوجستيات · برمجيات مخصصة", title: "مركز عمليات لسلاسل التوريد", alt: "غرفة تحكم لوجستية بشاشات بيانات" },
];

const faqs = [
  ["كم يستغرق تنفيذ مشروع برمجي؟", "يعتمد على نطاق العمل، لكن معظم المنتجات تبدأ بمرحلة اكتشاف قصيرة ثم خطة تنفيذ بمراحل ومواعيد واضحة."],
  ["هل تقدمون دعماً بعد الإطلاق؟", "نعم، نوفر خطط متابعة وصيانة وتحسين أداء تناسب احتياجات المنتج بعد الإطلاق."],
  ["كيف يتم احتساب تكلفة المشروع؟", "نحدد التكلفة بعد فهم النطاق والأهداف والتكاملات المطلوبة، ثم نقدم عرضاً مفصلاً وواضحاً."],
  ["هل يمكن التعاون من خارج مصر؟", "نعم، نعمل مع فرق وشركات في المنطقة العربية عبر عملية تواصل وتسليم منظمة بالكامل."],
];

function Index() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible"));
    }, { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div dir="rtl" className="min-h-screen bg-background text-foreground antialiased">
      <header className="sticky top-0 z-50 border-b editorial-line bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-6">
          <a href="#top" className="flex items-center gap-2.5" aria-label="CodeTech - الرئيسية">
            <span className="grid size-8 place-items-center rounded-md border border-primary/40 bg-primary/15 text-sm font-bold text-primary">CT</span>
            <span className="text-lg font-bold">CodeTech</span>
          </a>
          <nav aria-label="التنقل الرئيسي" className="hidden items-center gap-7 text-sm text-foreground/70 lg:flex">
            <a className="transition-colors hover:text-foreground" href="#services">خدماتنا</a>
            <a className="transition-colors hover:text-foreground" href="#projects">مشاريعنا</a>
            <a className="transition-colors hover:text-foreground" href="#why">لماذا نحن</a>
            <a className="transition-colors hover:text-foreground" href="#process">العملية</a>
            <a className="transition-colors hover:text-foreground" href="#tech">التقنيات</a>
          </nav>
          <a href="#contact" className="rounded-md bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-foreground">ابدأ مشروعك</a>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto max-w-6xl px-5 pb-16 pt-16 md:px-6 md:pt-24">
          <p className="section-label mb-5">شركة برمجيات مصرية · حلول للشركات الطموحة</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-[1.25] text-balance md:text-7xl">نبني منتجات رقمية تصمد أمام العمل الحقيقي</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/65 md:text-xl">من المواقع إلى المنصات عالية الأداء، نرافق الشركات المصرية والعربية في بناء بنية رقمية موثوقة، مدروسة، وقابلة للنمو.</p>
          <div className="mb-12 mt-9 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-md bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-foreground">اطلب عرض سعر</a>
            <a href="#projects" className="rounded-md border editorial-line px-6 py-3 text-sm font-semibold text-foreground/80 transition-colors hover:border-primary hover:text-foreground">شاهد أعمالنا</a>
          </div>
          <div className="reveal overflow-hidden rounded-lg">
            <img src={heroImage} width={1920} height={1024} fetchPriority="high" alt="فريق CodeTech يعمل داخل مكتب تقني في القاهرة ليلاً" className="image-zoom aspect-[16/9] w-full object-cover" />
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl border-t editorial-line px-5 py-20 md:px-6">
          <SectionTitle number="01" label="الخدمات" title="خدمات ننفذها بإتقان" aside="من الفكرة إلى منتج يعمل" />
          <div className="reveal grid overflow-hidden rounded-lg border editorial-line sm:grid-cols-2 lg:grid-cols-3">
            {services.map(([number, title, text]) => <article key={number} className="border-b border-l editorial-line bg-background p-7 transition-colors hover:bg-secondary"><p className="mb-5 text-sm font-bold text-primary">{number}</p><h3 className="mb-3 text-xl font-bold">{title}</h3><p className="text-sm leading-7 text-foreground/60">{text}</p></article>)}
          </div>
        </section>

        <section id="why" className="bg-secondary">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:px-6 lg:grid-cols-2">
            <div className="reveal"><p className="section-label mb-3">02 — لماذا CodeTech</p><h2 className="text-3xl font-bold leading-tight md:text-5xl">شريك تقني يركّز على النتائج</h2><p className="mt-6 max-w-xl leading-8 text-foreground/70">لا نبيع ساعات عمل، بل نبني حلولاً واضحة الأثر. نجمع بين عمق الهندسة وفهم السوق المصري والعربي، لتصل إلى منتج يخدم أهدافك اليوم ويتوسع معك غداً.</p><div className="mt-10 grid grid-cols-3 gap-4"><Stat value="120+" label="مشروعاً رقمياً" /><Stat value="98%" label="رضا العملاء" /><Stat value="8+" label="سنوات خبرة" /></div></div>
            <div className="reveal overflow-hidden rounded-lg"><img src={teamImage} width={1200} height={1200} loading="lazy" alt="فريق برمجيات مصري يناقش لوحة بيانات" className="image-zoom aspect-square w-full object-cover" /></div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-5 py-20 md:px-6">
          <SectionTitle number="03" label="مشاريع مختارة" title="دراسات حالة من أعمالنا" />
          <div className="grid gap-7 lg:grid-cols-3">{projects.map((project, index) => <article key={project.title} className="reveal" style={{ transitionDelay: `${index * 100}ms` }}><div className="overflow-hidden rounded-lg"><img src={project.image} width={1200} height={912} loading="lazy" alt={project.alt} className="image-zoom aspect-[4/3] w-full object-cover" /></div><p className="mb-1 mt-5 text-sm text-foreground/40">{project.meta}</p><h3 className="text-xl font-bold">{project.title}</h3></article>)}</div>
        </section>

        <section id="process" className="mx-auto max-w-6xl border-t editorial-line px-5 py-20 md:px-6">
          <SectionTitle number="04" label="مراحل العمل" title="منهجية واضحة من الفكرة إلى الإطلاق" />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">{[["01","الاكتشاف والتحليل","نفهم أهدافك والسوق والقيود قبل كتابة سطر واحد."],["02","التصميم والنمذجة","نحوّل المتطلبات إلى تجربة واضحة ونموذج قابل للاختبار."],["03","التطوير والاختبار","نبني على مراحل مع مراجعات جودة وأداء مستمرة."],["04","الإطلاق والدعم","نطلق المنتج ونراقب أداءه وندعم نموه بثبات."]].map(([n,t,d]) => <article className="reveal" key={n}><p className="mb-5 text-5xl font-bold text-primary">{n}</p><h3 className="mb-2 text-lg font-bold">{t}</h3><p className="text-sm leading-7 text-foreground/60">{d}</p></article>)}</div>
        </section>

        <section id="tech" className="mx-auto max-w-6xl px-5 py-20 md:px-6"><SectionTitle number="05" label="التقنيات" title="أدوات موثوقة لمنتجات قابلة للنمو" /><div className="reveal grid overflow-hidden rounded-lg border editorial-line grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">{["React","Node.js","Laravel","TypeScript","Flutter","PostgreSQL"].map((tech) => <div key={tech} dir="ltr" className="border-b border-l editorial-line p-6 text-center font-semibold text-foreground/80 transition-colors hover:bg-secondary hover:text-primary">{tech}</div>)}</div></section>

        <section className="bg-secondary"><div className="mx-auto max-w-6xl px-5 py-20 md:px-6"><SectionTitle number="06" label="آراء العملاء" title="الثقة تُقاس بتجربة العمل" /><div className="grid gap-px overflow-hidden rounded-lg border editorial-line bg-border lg:grid-cols-3">{[["التزام واضح بالمواعيد وجودة التنفيذ، والأهم أنهم فهموا احتياجات فريقنا من أول مرحلة.","مديرة منتج","شركة تقنية مالية"],["حوّل الفريق عملية معقدة إلى منتج بسيط وسريع يستطيع موظفونا استخدامه يومياً.","مدير العمليات","مجموعة لوجستية"],["التحسن في سرعة المنصة وتجربة المستخدم كان ملموساً منذ أول أسبوع للإطلاق.","الرئيس التنفيذي","علامة تجارة إلكترونية"]].map(([quote,name,role]) => <blockquote key={role} className="reveal bg-background p-8"><p className="mb-8 text-lg leading-8 text-foreground/80">«{quote}»</p><p className="text-sm font-bold">{name}</p><p className="mt-1 text-xs text-foreground/45">{role}</p></blockquote>)}</div></div></section>

        <section className="mx-auto max-w-6xl px-5 py-20 md:px-6"><SectionTitle number="07" label="الأسئلة الشائعة" title="إجابات مباشرة قبل أن نبدأ" /><div className="max-w-3xl border-y editorial-line">{faqs.map(([q,a]) => <details key={q} className="group border-b editorial-line last:border-0"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-semibold"><span>{q}</span><span className="text-xl text-primary transition-transform group-open:rotate-45">+</span></summary><p className="pb-6 leading-8 text-foreground/60">{a}</p></details>)}</div></section>

        <section id="contact" className="mx-auto max-w-6xl px-5 pb-20 md:px-6"><div className="reveal rounded-lg bg-primary px-7 py-14 text-primary-foreground md:px-14 md:py-16"><p className="mb-3 text-sm font-bold">لنبنِ شيئاً يستحق</p><h2 className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl">جاهز لتحويل فكرتك إلى منتج رقمي ناجح؟</h2><p className="mt-5 max-w-xl leading-7 text-primary-foreground/70">شاركنا أهدافك، وسنرتّب جلسة استكشاف لتحديد أفضل نقطة بداية لمشروعك.</p><a href="mailto:hello@codetech.eg" className="mt-8 inline-flex rounded-md bg-background px-6 py-3 text-sm font-bold text-foreground transition-colors hover:bg-foreground hover:text-background">احجز مكالمة الآن</a></div></section>
      </main>

      <footer className="border-t editorial-line"><div className="mx-auto max-w-6xl px-5 py-14 md:px-6"><div className="grid gap-10 lg:grid-cols-4"><div className="lg:col-span-2"><div className="mb-4 flex items-center gap-2.5"><span className="grid size-8 place-items-center rounded-md border border-primary/40 bg-primary/15 text-sm font-bold text-primary">CT</span><span className="text-lg font-bold">CodeTech</span></div><p className="max-w-md text-sm leading-7 text-foreground/55">شركة برمجيات مصرية متخصصة في بناء المنتجات الرقمية الموثوقة للشركات الطموحة.</p></div><FooterList title="الخدمات" items={["المواقع الإلكترونية","تطبيقات الموبايل","البرمجيات المخصصة","لوحات التحكم"]} /><FooterList title="تواصل" items={["hello@codetech.eg","القاهرة، مصر","LinkedIn"]} /></div><div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t editorial-line pt-6 text-xs text-foreground/45"><span>© 2026 CodeTech. جميع الحقوق محفوظة.</span><span>حلول رقمية تُبنى بثقة.</span></div></div></footer>
    </div>
  );
}

function SectionTitle({ number, label, title, aside }: { number: string; label: string; title: string; aside?: string }) {
  return <div className="mb-11 flex items-end justify-between gap-6"><div><p className="section-label mb-3">{number} — {label}</p><h2 className="text-3xl font-bold leading-tight md:text-4xl">{title}</h2></div>{aside && <p className="hidden text-sm text-foreground/40 sm:block">{aside}</p>}</div>;
}

function Stat({ value, label }: { value: string; label: string }) { return <div><p className="text-3xl font-bold text-primary md:text-4xl">{value}</p><p className="mt-2 text-xs text-foreground/55 md:text-sm">{label}</p></div>; }

function FooterList({ title, items }: { title: string; items: string[] }) { return <div><h3 className="mb-4 text-sm font-bold text-foreground/40">{title}</h3><ul className="space-y-3 text-sm text-foreground/70">{items.map((item) => <li key={item}>{item}</li>)}</ul></div>; }
