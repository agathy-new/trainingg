import Container from "@/Components/ui/Container";
import { lightBlueSectionData } from "@/data/lightBlueSectionData";
import FeatureCard from "./FeaturedCard";

export default function LightBlueSection() {
  const { title, subtitle, features } = lightBlueSectionData;

  return (
    <section className="w-full bg-[#F3F8FC] py-32">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl font-semibold text-primary mb-6">
            {title}
          </h2>
          <p className="text-primary/70 text-lg leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-16">
          {features.map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>
      </Container>
    </section>
  );
}
