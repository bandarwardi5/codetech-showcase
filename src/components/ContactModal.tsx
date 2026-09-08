import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CheckCircle2, MessageSquare, Send, Sparkles } from "lucide-react";

interface ContactModalProps {
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  triggerLabel?: string;
  triggerClassName?: string;
}

export function ContactModal({
  children,
  open,
  onOpenChange,
  triggerLabel = "اطلب عرض سعر",
  triggerClassName = "",
}: ContactModalProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = open !== undefined;
  const showModal = isControlled ? open : internalOpen;
  const handleOpenChange = (val: boolean) => {
    if (isControlled) {
      onOpenChange?.(val);
    } else {
      setInternalOpen(val);
    }
  };

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    projectType: "web-app",
    budget: "standard",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate instantaneous submission
    setSubmitted(true);
    setTimeout(() => {
      // Keep message visible for a moment
    }, 500);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      contact: "",
      projectType: "web-app",
      budget: "standard",
      notes: "",
    });
    handleOpenChange(false);
  };

  return (
    <Dialog open={showModal} onOpenChange={handleOpenChange}>
      {children ? (
        <DialogTrigger asChild>{children}</DialogTrigger>
      ) : (
        <DialogTrigger asChild>
          <button
            type="button"
            className={`rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-primary/35 active:scale-95 ${triggerClassName}`}
          >
            {triggerLabel}
          </button>
        </DialogTrigger>
      )}

      <DialogContent className="sm:max-w-[560px] border-border bg-card text-foreground p-6 sm:p-8 rounded-2xl shadow-2xl">
        <DialogHeader className="text-right sm:text-right space-y-2">
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <Sparkles className="size-3.5" />
            استشارة تقنية مجانية
          </div>
          <DialogTitle className="text-2xl font-bold tracking-tight">
            لنبنِ منتجك الرقمي القادم
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground leading-relaxed">
            شاركنا ملامح فكرتك أو التحدي التقني الذي يواجهك، وسيتواصل معك مهندس نظم خلال 24 ساعة بدراسة أولية.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500 border border-emerald-500/30">
              <CheckCircle2 className="size-8" />
            </div>
            <h3 className="text-xl font-bold">تم استلام طلبك بنجاح!</h3>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
              شكراً لثقتك في CodeTech. يقوم فريقنا الهندسي الآن بمراجعة تفاصيل مشروعك وسنتواصل معك عبر وسيلة التواصل المحددة.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={handleReset}
                className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                إغلاق النافذة
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 space-y-4 text-right">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground/80">الاسم أو اسم المؤسسة *</label>
                <input
                  required
                  type="text"
                  placeholder="مثال: م. أحمد عبد العزيز"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background/50 px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground/80">البريد أو رقم الهاتف *</label>
                <input
                  required
                  type="text"
                  placeholder="name@company.com أو 010..."
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background/50 px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground/80">نوع المشروع</label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                >
                  <option value="web-app">تطبيق ويب / منصة تفاعلية</option>
                  <option value="mobile-app">تطبيق موبايل (iOS & Android)</option>
                  <option value="website">موقع إلكتروني تعريفي للشركة</option>
                  <option value="custom-system">برمجيات مخصصة وتكامل أنظمة</option>
                  <option value="ecommerce">متجر إلكتروني متكامل</option>
                  <option value="dashboard">لوحة تحكم وتحليلات بيانات</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground/80">الميزانية المتوقعة</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                >
                  <option value="starter">مشروع ناشئ (أقل من $3,000)</option>
                  <option value="standard">مشروع متوسط ($3,000 - $10,000)</option>
                  <option value="enterprise">مشروع متقدم / مؤسسي ($10,000+)</option>
                  <option value="flexible">لم نحدد الميزانية بعد</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground/80">نبذة موجزة عن المشروع والمتطلبات</label>
              <textarea
                rows={3}
                placeholder="صف أهدافك، الفئة المستهدفة، أو أي أنظمة حالية ترغب بالربط معها..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full rounded-lg border border-border bg-background/50 px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 shadow-md shadow-primary/20"
              >
                <Send className="size-4 rotate-180" />
                إرسال طلب الاستشارة
              </button>

              <a
                href="https://wa.me/201000000000?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20CodeTech%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D8%A8%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D9%85%D8%B4%D8%B1%D9%88%D8%B9"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm font-semibold text-emerald-500 hover:bg-emerald-500/20 transition-colors"
              >
                <MessageSquare className="size-4" />
                محادثة واتساب سريعة
              </a>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
