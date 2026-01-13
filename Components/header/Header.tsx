import Container from "@/Components/ui/Container";
import TopBar from "./TopBar";
import NavBar from "./NavBar";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full  " >
      <Container>
        <div className="flex items-stretch min-h-[140px]  pt-20"> 
          
          <div className="flex items-center pr-6 ">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={200}
              height={140}   
              className="object-contain h-full"
              priority
            />
          </div>

         
          <div className="flex flex-col flex-1 justify-between  ">
            <TopBar />
            <div className="mt-6"> 
              <NavBar />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
