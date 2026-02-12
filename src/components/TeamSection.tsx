import andre from "@/assets/andre.jpg";
import pedro from "@/assets/pedro.jpg";
import arthur from "@/assets/arthur.jpg";

const team = [
  { name: "André Pepino", role: "CEO/Fundador", photo: andre },
  { name: "Pedro Andriow", role: "CTO/Fundador", photo: pedro },
  { name: "Arthur Biava", role: "Coordenador de Qualidade", photo: arthur },
];

const TeamSection = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container">
        <p className="text-sm font-semibold text-primary text-center tracking-widest uppercase mb-2">
          Pessoas que Transformam Realidades
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-6 text-foreground">
          Conheça os Nossos Líderes
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed">
          Codificando localmente e pensando de modo global. Estamos atentos às necessidades de nossos parceiros e tendências que revolucionam o modo como processos e relacionamentos são realizados através da tecnologia.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member) => (
            <div key={member.name} className="text-center group">
              <div className="relative overflow-hidden rounded-xl mb-6 aspect-square">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
              <p className="text-muted-foreground mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
