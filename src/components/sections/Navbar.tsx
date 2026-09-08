import { useEffect, useState } from "react";
import { ThemeToggle } from "../ThemeToggle";
import { ContactModal } from "../ContactModal";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Menu,
  Sparkles,
  Layers,
  FolderGit2,
  ShieldCheck,
  Workflow,
  Cpu,
  HelpCircle,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";

interface NavItem {
  name: string;
  href: string;
  icon: typeof Layers;
}

const navItems: NavItem[] = [
  { name: "خدماتنا", href: "#services", icon: Layers },
  { name: "مشاريعنا", href: "#projects", icon: FolderGit2 },
  { name: "لماذا نحن", href: "#why", icon: ShieldCheck },
  { name: "العملية", href: "#process", icon: Workflow },
  { name: "التقنيات", href: "#tech", icon: Cpu },
  { name: "آراء العملاء", href: "#testimonials", icon: MessageSquare },
  { name: "الأسئلة", href: "#faq", icon: HelpCircle },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = navItems.map((item) => item.href.replace("#", ""));
      const current = sectionIds.find((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      } else if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setSheetOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md shadow-sm"
          : "border-b border-border/60 bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand / Logo */}
        <a
          href="#top"
          className="group flex items-center gap-2.5 outline-none"
          aria-label="CodeTech - العودة للبداية"
        >
          <div className="relative flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/40 text-primary font-black text-sm tracking-wider shadow-inner transition-transform duration-300 group-hover:scale-105 group-hover:border-primary">
            CT
            <span className="absolute -top-0.5 -right-0.5 size-2 rounded-full bg-primary animate-ping opacity-60" />
            <span className="absolute -top-0.5 -right-0.5 size-2 rounded-full bg-primary" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
              CodeTech
            </span>
            <span className="text-[10px] -mt-1 font-medium text-muted-foreground">
              الابتكار البرمجي
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav
          aria-label="التنقل الرئيسي"
          className="hidden items-center gap-1 text-sm font-medium lg:flex"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-3 py-1.5 rounded-lg text-sm transition-all duration-200 ${
                  isActive
                    ? "text-primary font-semibold bg-primary/10"
                    : "text-foreground/70 hover:text-foreground hover:bg-secondary/60"
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-primary" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Actions & Mobile Trigger */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />

          <div className="hidden sm:block">
            <ContactModal triggerLabel="ابدأ مشروعك" />
          </div>

          {/* Mobile Hamburger Sheet */}
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="flex size-9 items-center justify-center rounded-lg border border-border bg-card/60 text-foreground/80 lg:hidden hover:border-primary/50 hover:bg-card hover:text-primary"
                aria-label="فتح القائمة الرئيسية"
              >
                <Menu className="size-5" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[85vw] max-w-sm border-l border-border bg-background/95 p-6 backdrop-blur-xl flex flex-col justify-between"
            >
              <div className="space-y-6">
                <SheetHeader className="text-right sm:text-right border-b border-border pb-4">
                  <SheetTitle className="flex items-center gap-2.5">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-primary/15 border border-primary/30 text-primary font-bold text-sm">
                      CT
                    </div>
                    <span className="text-lg font-bold text-foreground">
                      CodeTech
                    </span>
                  </SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col gap-1.5">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive =
                      activeSection === item.href.replace("#", "");
                    return (
                      <button
                        key={item.href}
                        type="button"
                        onClick={() => handleLinkClick(item.href)}
                        className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-right text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-primary text-primary-foreground font-bold shadow-sm shadow-primary/30"
                            : "text-foreground/80 hover:bg-secondary hover:text-foreground"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="size-4.5 opacity-80" />
                          <span>{item.name}</span>
                        </div>
                        <ArrowUpRight className="size-4 opacity-50" />
                      </button>
                    );
                  })}
                </nav>
              </div>

              <div className="space-y-3 pt-6 border-t border-border">
                <ContactModal
                  triggerLabel="اطلب عرض سعر فوري"
                  triggerClassName="w-full justify-center py-3 text-sm"
                />
                <a
                  href="https://wa.me/201000000000"
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-card/50 py-2.5 text-xs font-semibold text-foreground/80 hover:bg-card hover:text-primary transition-colors"
                >
                  <MessageSquare className="size-3.5" />
                  محادثة سريعة عبر واتساب
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
