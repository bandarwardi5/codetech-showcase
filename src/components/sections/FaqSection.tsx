import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ContactModal } from "../ContactModal";
import { HelpCircle, MessageCircle } from "lucide-react";

const faqs = [
  {
    q: "كم يستغرق تنفيذ وتطوير مشروع برمجي متكامل؟",
    a: "يعتمد الجدول الزمني على حجم ونطاق العمل، ولكن معظم المشاريع تبدأ بمرحلة اكتشاف وتصميم تستغرق من أسبوع إلى أسبوعين، تليها مرحلة تطوير تنفذ على مراحل (Sprints) تتراوح بين 4 إلى 12 أسبوعاً. نلتزم دائماً بجدول زمني محدد وتواريخ تسليم واضحة في العقد.",
  },
  {
    q: "هل تقدمون خدمات الصيانة والدعم الفني بعد إطلاق المنتج؟",
    a: "نعم بكل تأكيد. نقدم فترة ضمان مجانية بعد الإطلاق لمعالجة أي ملاحظات طارئة، إلى جانب خطط صيانة وتطوير شهرية أو سنوية تشمل المراقبة الأمنية المستمرة، وتحديث المكتبات، والنسخ الاحتياطي، وتحسين الأداء واستيعاب ميزات جديدة مع نمو أعمالك.",
  },
  {
    q: "كيف يتم احتساب وتقدير تكلفة المشروع؟",
    a: "نحدد التكلفة بناءً على المتطلبات الفنية، وعدد الشاشات، والتكاملات المطلوبة (مثل بوابات الدفع أو الـ APIs الخارجية)، ومستوى التعقيد المعماري. بعد جلسة استكشاف قصيرة، نقدم لك عرض سعر تفصيلي ومفند بالبنود دون أي تكاليف خفية.",
  },
  {
    q: "هل يمكن التعاون والتعاقد معكم من خارج مصر؟",
    a: "نعم، نعمل بشكل مستمر مع شركات ومؤسسات في السعودية، الإمارات، الكويت، وبقية دول المنطقة العربية. ندير عمليات التواصل والتسليم عبر اجتماعات فيديو دورية، ومنصات إدارة مشاريع مرئية (Jira / Linear / Slack) مع إمكانية تحويل المدفوعات دولياً بسهولة.",
  },
  {
    q: "هل نمتلك نحن حقوق الملكية الفكرية والكود المصدري للمشروع؟",
    a: "نعم بالكامل (100%). بمجرد اكتمال المشروع وتسليمه، تنتقل الملكية الكاملة للكود المصدري وجميع التصاميم وقواعد البيانات إليكم رسمياً، مع تسليم مستودع الكود (GitHub / GitLab) والتوثيق الهندسي الشامل.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-20 md:py-28 border-t border-border/80">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-3">
            07 — إجابات وتوضيحات
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            إجابات مباشرة قبل أن نبدأ
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            كل ما تحتاج لمعرفته عن أسلوب عملنا، التعاقدات، والضمانات البرمجية التي نقدمها لشركائنا.
          </p>
        </div>

        {/* Accordion List */}
        <div className="rounded-2xl border border-border bg-card/60 p-4 sm:p-6 shadow-sm backdrop-blur-sm">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.q}
                value={`item-${index}`}
                className="border-border/60 py-1"
              >
                <AccordionTrigger className="text-right text-base font-bold text-foreground hover:text-primary hover:no-underline py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground pb-4 text-right">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom Support Prompt */}
        <div className="mt-8 text-center flex flex-col sm:flex-row items-center justify-center gap-3">
          <p className="text-sm text-muted-foreground">
            هل لديك استفسار خاص بطبيعة مشروعك؟
          </p>
          <ContactModal
            triggerLabel="تحدث مباشرة مع مهندسينا"
            triggerClassName="bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground border border-border px-4 py-1.5 text-xs font-semibold"
          />
        </div>
      </div>
    </section>
  );
}
