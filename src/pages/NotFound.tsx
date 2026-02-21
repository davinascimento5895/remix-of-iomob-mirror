import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "@/i18n/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { lang, t } = useTranslation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">{t("notfound.message") || "Oops! Page not found"}</p>
        <Link to={`/${lang}`} className="text-primary underline hover:text-primary/90">
          {t("notfound.back") || "Return to Home"}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
