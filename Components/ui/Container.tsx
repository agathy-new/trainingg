export default function Container({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div   className=" w-full mx-auto px-4
      max-sm:max-w-[540px] sm:max-w-[700px] md:max-w-[970px] lg:max-w-[1150px] xl:max-w-[1330px] ">
      {children}
    </div>
  );
}
