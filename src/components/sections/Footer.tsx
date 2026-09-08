import { ArrowUp, Mail, Phone, MapPin, Linkedin, Github, Globe } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-card/40 pt-16 pb-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Main Footer Grid */}
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Brand Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#top" className="inline-flex items-center gap-2.5">
              <div className="flex size-9 items-center justify-center rounded-xl bg-primary/15 border border-primary/40 text-primary font-black text-sm">
                CT
              </div>
              <span className="text-xl font-extrabold tracking-tight text-foreground">
                CodeTech
              </span>
            </a>

            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              شركة برمجيات مصرية متخصصة في هندسة المنتجات الرقمية والأنظمة السحابية وتطبيقات الموبايل الموثوقة للشركات الطموحة في مصر والعالم العربي.
            </p>

            <div className="pt-2 flex items-center gap-3 text-muted-foreground">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex size-9 items-center justify-center rounded-lg border border-border bg-card hover:border-primary hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-4.5" />
              </a>
              <a
                href="https://github.com/bandarwardi5/codetech-showcase"
                target="_blank"
                rel="noreferrer"
                className="flex size-9 items-center justify-center rounded-lg border border-border bg-card hover:border-primary hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="size-4.5" />
              </a>
              <a
                href="mailto:hello@codetech.eg"
                className="flex size-9 items-center justify-center rounded-lg border border-border bg-card hover:border-primary hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="size-4.5" />
              </a>
            </div>
          </div>

          {/* Column 1: Services Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-foreground">مجالات العمل</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  المواقع الإلكترونية
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  تطبيقات الويب (SaaS)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  تطبيقات الهواتف (iOS & Android)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  البرمجيات والأنظمة المخصصة
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  المتاجر وحلول الدفع
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  لوحات التحكم والبيانات
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-foreground">روابط سريعة</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a href="#projects" className="hover:text-primary transition-colors">
                  دراسات الأعمال والمشاريع
                </a>
              </li>
              <li>
                <a href="#why" className="hover:text-primary transition-colors">
                  لماذا تختار CodeTech
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-primary transition-colors">
                  منهجية العمل والتسليم
                </a>
              </li>
              <li>
                <a href="#tech" className="hover:text-primary transition-colors">
                  الأدوات والتقنيات
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-primary transition-colors">
                  شهادات وآراء العملاء
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary transition-colors">
                  الأسئلة الشائعة
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-foreground">تواصل مباشر</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:hello@codetech.eg"
                  className="flex items-center gap-2.5 hover:text-primary transition-colors"
                >
                  <Mail className="size-4 text-primary shrink-0" />
                  <span dir="ltr">hello@codetech.eg</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+201000000000"
                  className="flex items-center gap-2.5 hover:text-primary transition-colors"
                >
                  <Phone className="size-4 text-primary shrink-0" />
                  <span dir="ltr">+20 100 000 0000</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="size-4 text-primary shrink-0" />
                <span>التجمع الخامس، القاهرة الجديدة، مصر</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2026 CodeTech Software Labs. جميع الحقوق محفوظة.</p>

          <div className="flex items-center gap-6">
            <span>نبني حلولاً رقمية تصمد وتتوسع.</span>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-foreground/80 hover:border-primary hover:text-primary transition-colors"
            >
              <span>للأعلى</span>
              <ArrowUp className="size-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
