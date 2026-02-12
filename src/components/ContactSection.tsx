import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

const ContactSection = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contato" className="py-24 bg-secondary">
      <div className="container">
        <p className="text-sm font-semibold text-primary text-center tracking-widest uppercase mb-2">{t("contact.label")}</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-foreground">{t("contact.title")}</h2>
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <p className="text-muted-foreground leading-relaxed mb-10">{t("contact.intro")}</p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0"><MapPin className="w-5 h-5 text-primary" /></div>
                <div><h4 className="font-bold text-foreground mb-1">{t("contact.location.title")}</h4><p className="text-muted-foreground">{t("contact.location.value")}</p></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0"><Mail className="w-5 h-5 text-primary" /></div>
                <div><h4 className="font-bold text-foreground mb-1">{t("contact.email.title")}</h4><p className="text-muted-foreground">iomob@iomob.com</p></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0"><Phone className="w-5 h-5 text-primary" /></div>
                <div><h4 className="font-bold text-foreground mb-1">{t("contact.phone.title")}</h4><p className="text-muted-foreground">+55 (41) 98790 3434</p></div>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="bg-background rounded-xl p-8 shadow-sm space-y-5">
            <input type="text" placeholder={t("contact.name")} required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
            <input type="email" placeholder={t("contact.emailField")} required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
            <input type="tel" placeholder={t("contact.phoneField")} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
            <textarea placeholder={t("contact.message")} required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
            <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">{t("contact.submit")}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
