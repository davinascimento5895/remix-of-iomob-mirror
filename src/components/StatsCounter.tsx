import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 300, prefix: "+", suffix: "k", label: "Usuários Ativos" },
  { value: 3, prefix: "+", suffix: "", label: "Países Atendidos" },
  { value: 7, prefix: "", suffix: "", label: "Anos de Experiência" },
];

const Counter = ({ target, prefix, suffix = "" }: { target: number; prefix: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-5xl lg:text-6xl font-bold text-primary-foreground">
      {prefix}{count}{suffix}
    </span>
  );
};

const StatsCounter = () => {
  return (
    <section className="py-20 bg-foreground">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-10 text-center"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-2">
              <Counter target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              <p className="text-primary-foreground/70 text-sm font-medium tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsCounter;
