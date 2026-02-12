import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-woman.png";

const phrases = [
  "Aplicativos Móveis",
  "Integrações de API",
  "Inteligência Artificial",
  "Gestão de Projetos",
];

const HeroSection = () => {
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[phraseIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentPhrase(phrase.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
          if (charIndex + 1 === phrase.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setCurrentPhrase(phrase.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
          if (charIndex - 1 === 0) {
            setIsDeleting(false);
            setPhraseIndex((prev) => (prev + 1) % phrases.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <section className="relative bg-hero overflow-hidden">
      {/* Orange decorative blob */}
      <div className="absolute right-0 top-0 w-[55%] h-full">
        <svg viewBox="0 0 600 600" className="absolute right-0 top-0 h-full w-auto" preserveAspectRatio="xMaxYMin slice">
          <path
            d="M350,0 C450,0 550,80 580,200 C610,320 560,480 500,560 C440,640 350,600 280,580 C210,560 160,500 140,400 C120,300 200,150 270,80 C310,40 330,0 350,0 Z"
            fill="hsl(14, 100%, 50%)"
            opacity="0.9"
          />
        </svg>
      </div>

      <div className="container relative z-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-foreground mb-2">
              Desenvolvimento de{" "}
              <span className="text-primary typewriter-cursor">{currentPhrase}</span>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-lg leading-relaxed">
              Com atuação global e especialistas locais, somos experts no Desenvolvimento de Aplicativos Móveis, Integrações, Gerenciamento de Projetos em TI e Inteligência Artificial.
            </p>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <img
              src={heroImg}
              alt="Desenvolvimento Mobile"
              className="relative z-10 max-h-[500px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
