import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "A ioMob foi fundamental para a implantação do EstaR eletrônico na cidade de Curitiba, fornecendo tecnologia e confiabilidade para os nossos usuários.",
    author: "Ogeny Pedro Maia",
    role: "Presidente URBS",
  },
  {
    text: "Foi através da ioMob que pudemos revolucionar a nossa operação para captação de recursos. São nossos parceiros de tecnologia.",
    author: "Jocemar",
    role: "Diretor de Marketing Pequeno Cotolengo",
  },
  {
    text: "Toda a equipe da ioMob foi muito importante para darmos um salto tecnológico no nosso Distrito. São parceiros do Rotary nessa caminhada que só está começando.",
    author: "Mariane Nascimento",
    role: "Gov. Rotary D4730",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
          Mais do que Clientes, Parceiros!<br />
          O que eles dizem sobre nós?
        </h2>

        <div className="max-w-3xl mx-auto relative">
          <Quote className="w-12 h-12 opacity-30 mb-6 mx-auto" />
          <p className="text-xl text-center leading-relaxed mb-8 min-h-[100px]">
            {testimonials[current].text}
          </p>
          <div className="text-center">
            <p className="font-bold text-lg">{testimonials[current].author}</p>
            <p className="opacity-80">- {testimonials[current].role} -</p>
          </div>

          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  i === current ? "bg-primary-foreground" : "bg-primary-foreground/30"
                }`}
              />
            ))}
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
