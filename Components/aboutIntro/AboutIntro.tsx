import Container from "@/Components/ui/Container";
import { aboutIntroData } from "@/data/aboutIntroData";

export default function AboutIntro() {
  return (
    <section className="relative w-full bg-white py-24">
      {/* الزخرفة الجانبية */}
      <div className="absolute top-0 right-0 z-0">
        <img
          alt="Strata Global Shape"
          src="/about/abouttree.png"
          className="w-[300px] h-[300px] opacity-2"
        />
      </div>

      <Container>
        {/* تقسيم المحتوى حسب القياس */}
        <div className="flex flex-col lg:flex-row  gap-4 lg:gap-10 items-start relative z-10">
{/* القسم الأيسر */}
<div
  data-sal="slide-right"
  data-sal-duration="1200"
  // من 0 → 1199px يكون عنده padding يمين ويسار أكبر
  // من 1200px وفوق يرجع طبيعي بدون padding
  className="w-full lg:w-5/12 text-left md:px-6 lg:px-0"
>
  <h2 className="text-accent uppercase text-[16px] mb-4">
    {aboutIntroData.label}
  </h2>
  <h3 className="text-[32px] lg:text-[34px] font-semibold leading-[1.3] font-light text-primary">
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
            className="w-full lg:w-7/12"
          >
            <p className="text-primary/90 text-[15px] leading-[1.6]  mx-0">
              {aboutIntroData.description}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
