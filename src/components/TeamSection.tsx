import { useTranslation } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import andre from "@/assets/andre.jpg";
import pedro from "@/assets/pedro.jpg";
import davi from "@/assets/davi.png";

const TeamSection = () => {
  const { t } = useTranslation();

  const team = [
    {
      name: "André Pepino",
      role: t("team.ceo"),
      photo: andre,
      linkedin: "https://www.linkedin.com/in/andrepepino/",
    },
    {
      name: "Pedro Andriow",
      role: t("team.cto"),
      photo: pedro,
      linkedin: "https://www.linkedin.com/in/pedro-andriow/",
    },
    {
      name: "Davi Nascimento",
      role: t("team.qa"),
      photo: davi,
      linkedin: "https://www.linkedin.com/in/davi-b-nascimento/",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold text-primary text-center tracking-widest uppercase mb-2"
        >
          {t("team.label")}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl lg:text-4xl font-bold text-center mb-6 text-foreground"
        >
          {t("team.title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          {t("team.desc")}
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              className="group text-center"
            >
              {/* Photo container — 4:5 portrait ratio */}
              <div className="relative overflow-hidden rounded-2xl mb-5 aspect-[4/5] shadow-lg">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* LinkedIn icon — slide-up on hover */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn de ${member.name}`}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-10"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm text-[#0A66C2] shadow-md hover:bg-white hover:scale-110 transition-all duration-200">
                    <Linkedin className="w-5 h-5" />
                  </span>
                </a>
              </div>

              {/* Name & role — clean typography */}
              <h3 className="text-lg font-semibold text-foreground tracking-tight">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-1 font-medium">
                {member.role}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
