import Image from "next/image";

type Props = {
  title: string;
  description: string;
  icon: string;
};

export default function FeatureCard({
  title,
  description,
  icon,
}: Props) {
  return (
    <div className="flex flex-col gap-6">
      <div className="w-14 h-14">
        <Image src={icon} alt={title} width={56} height={56} />
      </div>

      <h3 className="text-xl font-semibold text-primary">
        {title}
      </h3>

      <p className="text-primary/70 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
