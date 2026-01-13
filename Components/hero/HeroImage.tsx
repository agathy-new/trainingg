import Image from "next/image";

export default function HeroImage({ image }: { image: string }) {
  return (
    <div className="absolute inset-0">
      <Image
        src={image}
        alt="Hero Background"
        fill
        priority
        className="object-cover"
      />
    </div>
  );
}
