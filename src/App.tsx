import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "@/i18n/LanguageContext";
import ErrorBoundary from "@/components/ErrorBoundary";

// Lazy-loaded pages — each page is only fetched when the route is accessed
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Cases = lazy(() => import("./pages/Cases"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-background">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
      <span className="text-sm text-muted-foreground">Carregando...</span>
    </div>
  </div>
);

const LangLayout = ({ children }: { children: React.ReactNode }) => (
  <LanguageProvider>{children}</LanguageProvider>
);

const RootRedirect = () => {
  const browserLang = navigator.language.toLowerCase();
  let targetLang = "br";
  if (browserLang.startsWith("en")) targetLang = "us";
  if (browserLang.startsWith("sv")) targetLang = "se";
  return <Navigate to={`/${targetLang}`} replace />;
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ErrorBoundary>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<RootRedirect />} />
                <Route path="/:lang" element={<LangLayout><Index /></LangLayout>} />
                <Route path="/:lang/sobre" element={<LangLayout><About /></LangLayout>} />
                <Route path="/:lang/cases" element={<LangLayout><Cases /></LangLayout>} />
                <Route path="/:lang/blog/:slug" element={<LangLayout><BlogPost /></LangLayout>} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
