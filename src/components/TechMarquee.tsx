import flutter from "@/assets/tech/flutter.png";
import react from "@/assets/tech/react.png";
import aws from "@/assets/tech/aws.png";
import scrum from "@/assets/tech/scrum.png";
import pmp from "@/assets/tech/pmp.png";
import cobit from "@/assets/tech/cobit.png";
import awsBd from "@/assets/tech/aws-bd.png";
import dt from "@/assets/tech/dt.png";
import xd from "@/assets/tech/xd.png";
import illustrator from "@/assets/tech/illustrator.png";

const logos = [flutter, react, cobit, awsBd, scrum, pmp, aws, dt, xd, illustrator];

const TechMarquee = () => {
  return (
    <section className="py-12 bg-background overflow-hidden border-y border-border">
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="Technology"
              className="h-14 mx-8 object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
