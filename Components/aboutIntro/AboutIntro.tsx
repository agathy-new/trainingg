import Container from "@/Components/ui/Container";
import { aboutIntroData } from "@/data/aboutIntroData";

export default function AboutIntro() {
  return (
    <section className="relative w-full bg-white py-24 ">
      
      <div className="absolute top-0 right-0 z-0">
        <img alt="Strata Global Shape"
  src="/about/abouttree.png"
  className="w-[300px] h-[300px] opacity-2"
/>

      </div>

      <Container>
        <div className="grid grid-cols-12 gap-8 items-start relative z-10">
          {/* القسم الأيسر */}
          <div
            data-sal="slide-right"
            data-sal-duration="1200"
            className="col-span-12 xl:col-span-5 lg:col-span-12 text-center xl:text-left"
          >
            <h2 className="text-accent uppercase tracking-[0.35em] text-[13px] mb-4">
              {aboutIntroData.label}
            </h2>
            <h3 className="text-[32px] xl:text-[30px] font-semibold leading-[1.3] font-light text-primary">
              {aboutIntroData.title.map((line, index) => (
                <span key={index} className="block">
                  {line}
                </span>
              ))}
            </h3>
          </div>

          {/* القسم الأيمن */}
          <div
            data-sal="slide-left"
            data-sal-duration="1200"
            className="col-span-12 xl:col-span-7 lg:col-span-12"
          >
            <p className="text-primary/90 text-[13px] leading-[1.9] max-w-[760px] mx-auto xl:mx-0">
              {aboutIntroData.description}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}