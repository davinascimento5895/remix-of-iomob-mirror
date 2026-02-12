import { createContext, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { translations, Lang } from "./translations";

interface LanguageContextType {
  lang: Lang;
  t: (key: string) => string;
  switchLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "br",
  t: (key: string) => key,
  switchLang: () => {},
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const { lang: paramLang } = useParams<{ lang: string }>();
  const navigate = useNavigate();

  const lang: Lang = (paramLang === "us" || paramLang === "se" || paramLang === "br") ? paramLang : "br";

  const t = (key: string): string => {
    return translations[lang]?.[key] ?? translations.br[key] ?? key;
  };

  const switchLang = (newLang: Lang) => {
    const currentPath = window.location.pathname;
    // Replace the lang segment in the path
    const pathWithoutLang = currentPath.replace(/^\/(br|us|se)/, "");
    navigate(`/${newLang}${pathWithoutLang || ""}`);
  };

  return (
    <LanguageContext.Provider value={{ lang, t, switchLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => useContext(LanguageContext);
export type { Lang };
