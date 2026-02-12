import { useTranslation } from "@/i18n/LanguageContext";
import logo from "@/assets/logo-white.png";

const Footer = () => {
  const { lang, t } = useTranslation();

  return (
    <footer className="bg-topbar text-topbar-foreground py-16">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <img alt="ioMob" className="h-10 mb-6" src="/lovable-uploads/ba7131f7-51cd-48cf-8da0-94ae68fad889.png" />
            <p className="text-sm opacity-70 leading-relaxed">{t("footer.desc")}</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">{t("footer.contacts")}</h4>
            <div className="space-y-2 text-sm opacity-70">
              <p>Av. João Gualberto, 1741 - Sala 601</p>
              <p>Curitiba - PR - Brasil</p>
              <p>iomob@iomob.com</p>
              <p>+55 (41) 98790 3434</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">{t("footer.links")}</h4>
            <div className="space-y-2 text-sm opacity-70">
              <a href="#solucoes" className="block hover:text-primary transition-colors">{t("nav.solutions")}</a>
              <a href={`/${lang}/sobre`} className="block hover:text-primary transition-colors">{t("nav.about")}</a>
              <a href="#blog" className="block hover:text-primary transition-colors">{t("nav.blog")}</a>
              <a href="#contato" className="block hover:text-primary transition-colors">{t("contact.label")}</a>
            </div>
          </div>
        </div>
        <div className="border-t border-topbar-foreground/10 pt-8 text-center text-sm opacity-50">
          © {new Date().getFullYear()} ioMob. {t("footer.rights")}
        </div>
      </div>
    </footer>);

};

export default Footer;