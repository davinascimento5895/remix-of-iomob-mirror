const imageBoxes = [
  { label: "Projetos", img: "https://engitech.s3.amazonaws.com/images/image-box1.jpg" },
  { label: "Especiais", img: "https://engitech.s3.amazonaws.com/images/image-box2.jpg" },
  { label: "em Todo", img: "https://engitech.s3.amazonaws.com/images/image-box3.jpg" },
  { label: "o Mundo!", img: "https://engitech.s3.amazonaws.com/images/image-box4.jpg" },
];

const AboutSection = () => {
  return (
    <section id="sobre-nos" className="py-24 bg-background">
      <div className="container">
        {/* Header */}
        <div className="bg-foreground text-primary-foreground py-16 px-8 rounded-xl mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold">Sobre Nós</h2>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div>
            <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">
              // Soluções Digital. Empoderando o Seu Negócio
            </p>
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 leading-tight">
              Desenvolvemos Soluções Focadas em Gerar Valor!
            </h3>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                A IoMob foi fundada em 2017 por 3 apaixonados por tecnologia e soluções em mobilidade que proporcionassem reais transformações nos negócios e na vida das pessoas.
              </p>
              <p>
                Nossa história começou no Brasil, mais precisamente em Curitiba, capital do Paraná, com o principal objetivo de, na construção de real valor para as empresas, oferecer soluções personalizadas para as mais diversas necessidades em aplicações e integrações móveis, com base nas tecnologias mais avançadas, práticas, usuais e o melhor custo-benefício.
              </p>
              <p>
                Expandindo para operações globais, atendemos nossos clientes de forma presencial, com total atenção e know-how em estratégia e negócios, por diversos países na América e Europa.
              </p>
              <p className="italic font-semibold text-foreground">
                Do Brasil para o mundo, nos queremos oferecer o melhor e nos tornarmos os melhores em nossas soluções, personalizando e construindo valor para o seu negócio.
              </p>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            {imageBoxes.map((box) => (
              <div
                key={box.label}
                className="relative overflow-hidden rounded-xl aspect-square group"
              >
                <img
                  src={box.img}
                  alt={box.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
                  <span className="text-primary-foreground text-xl font-bold">{box.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
