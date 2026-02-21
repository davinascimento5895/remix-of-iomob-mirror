import { useState } from "react";
import { MapPin, Mail, Copy, Check, ExternalLink, MessageCircle } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    toast({
      title: t("contact.copied.title") || "Copiado!",
      description: t("contact.copied.description") || "Copiado para a área de transferência.",
    });
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <section id="contato" className="py-24 bg-secondary">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-2">{t("contact.label")}</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t("contact.title")}</h2>
          <p className="text-muted-foreground leading-relaxed">{t("contact.intro")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Email Card */}
          <div className="bg-background rounded-2xl p-8 shadow-sm border border-border/50 flex flex-col items-center text-center group hover:shadow-md transition-all">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-bold text-foreground mb-2 text-lg">{t("contact.email.title")}</h4>
            <p className="text-muted-foreground mb-6">iomob@iomob.com</p>
            <div className="mt-auto w-full flex gap-2">
              <button 
                onClick={() => handleCopy("iomob@iomob.com", "email")}
                className="flex-1 flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-foreground py-2.5 px-4 rounded-lg font-medium transition-colors"
              >
                {copiedItem === "email" ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                {copiedItem === "email" ? t("contact.copied") : t("contact.copy")}
              </button>
              <a 
                href="mailto:iomob@iomob.com"
                className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground py-2.5 px-4 rounded-lg font-medium transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                {t("contact.send")}
              </a>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-background rounded-2xl p-8 shadow-sm border border-border/50 flex flex-col items-center text-center group hover:shadow-md transition-all">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-bold text-foreground mb-2 text-lg">WhatsApp</h4>
            <p className="text-muted-foreground mb-6">+55 (41) 98790 3434</p>
            <div className="mt-auto w-full flex gap-2">
              <button 
                onClick={() => handleCopy("+5541987903434", "phone")}
                className="flex-1 flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-foreground py-2.5 px-4 rounded-lg font-medium transition-colors"
              >
                {copiedItem === "phone" ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                {copiedItem === "phone" ? t("contact.copied") : t("contact.copy")}
              </button>
              <a 
                href="https://wa.me/5541987903434"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground py-2.5 px-4 rounded-lg font-medium transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                {t("contact.chat")}
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-background rounded-2xl p-8 shadow-sm border border-border/50 flex flex-col items-center text-center group hover:shadow-md transition-all">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-bold text-foreground mb-2 text-lg">{t("contact.location.title")}</h4>
            <p className="text-muted-foreground mb-6">{t("contact.location.value")}</p>
            <div className="mt-auto w-full">
              <a 
                href="https://maps.google.com/?q=Av.+João+Gualberto,+1741+-+Curitiba+-+PR"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-foreground py-2.5 px-4 rounded-lg font-medium transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                {t("contact.map")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
