import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

const TestimonialsSection = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  const testimonials = [
    { text: t("test1.text"), author: "Ogeny Pedro Maia", role: t("test1.role") },
    { text: t("test2.text"), author: "Jocemar", role: t("test2.role") },
    { text: t("test3.text"), author: "Mariane Nascimento", role: t("test3.role") },
  ];

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 whitespace-pre-line">{t("testimonials.title")}</h2>
        <div className="max-w-3xl mx-auto relative">
          <Quote className="w-12 h-12 opacity-30 mb-6 mx-auto" />
          <p className="text-xl text-center leading-relaxed mb-8 min-h-[100px]">{testimonials[current].text}</p>
          <div className="text-center">
            <p className="font-bold text-lg">{testimonials[current].author}</p>
            <p className="opacity-80">- {testimonials[current].role} -</p>
          </div>
          <div className="flex justify-center gap-4 mt-10">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`w-3 h-3 rounded-full transition-colors ${i === current ? "bg-primary-foreground" : "bg-primary-foreground/30"}`} />
            ))}
            <button onClick={next} className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
