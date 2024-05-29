import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div>
      <div className="lg:mx-36 mx-2 flex mt-10 flex-col">
        <div className=" flex lg:flex-row flex-col min-w-fill">
          <div className=" flex flex-col">
            <h1 className="text-5xl md:text-left text-center">
              João Gabriel Pereira Buso de Souza
            </h1>
            <span className=" mt-4 text-wrap text-center md:text-left text-2xl lg:min-w-fit">
              previa e pequena descrição
            </span>
            <div className="flex flex-row mt-10 gap-10 text-center items-center md:justify-start justify-center">
              <a
                href="mailto:joaobuso.adv@gmail.com"
                className="cursor-pointer h-9 outline px-4 text-center gap-2 flex items-center hover:bg-black hover:text-white dark:hover:bg-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 dark:hover:text-black rounded text-xl"
              >
                <Image
                  alt="email"
                  src={"/envelope-solid.svg"}
                  width={20}
                  height={20}
                ></Image>{" "}
                Email
              </a>
              <div className="w-10 flex items-center gap-0">
                <a
                  className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-100"
                  href="https://api.whatsapp.com/send?phone=556599992527"
                  target="_blank"
                >
                  <Image
                    className="dark:hidden"
                    alt="Whatsapp"
                    src={"/square-whatsapp.svg"}
                    width={100}
                    height={100}
                  ></Image>
                </a>
              </div>
              <div className="w-10 flex items-center gap-0">
                <a
                  className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-100"
                  href="https://www.instagram.com/joaobuso/"
                  target="_blank"
                >
                  <Image
                    className="dark:hidden"
                    alt="Instagram"
                    src={"/square-instagram.svg"}
                    width={100}
                    height={100}
                  ></Image>
                </a>
              </div>
              <div className=""></div>
            </div>
          </div>
        </div>
        <Separator className="mt-20" />
        <div className="flex flex-col items-center mt-6">
          <h2 className="text-2xl">● Áreas de Atuação</h2>
          <div className="grid grid-rows-2 grid-cols-2 gap-5 mt-6">
            <div className="hover:bg-black hover:text-white border-black rounded border-2 p-1 h-20 w-40 items-center flex justify-center gap-1 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-100">
              Direito Civil
            </div>
            <div className="hover:bg-black hover:text-white border-black rounded border-2 p-2 h-20 w-40 items-center flex justify-center text-center transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-100">
              Direito Empresarial
            </div>
            <div className="hover:bg-black hover:text-white border-black rounded border-2 p-2 h-20 w-40 items-center flex justify-center transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-100">
              Direito Agrário
            </div>
            <div className="hover:bg-black hover:text-white border-black rounded border-2 p-2 h-20 w-40 items-center flex justify-center transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-100">
              Criminal
            </div>
          </div>
        </div>
        <Separator className="mt-20" />
        <div className="flex flex-col items-center mt-6">
          <h2 className="text-2xl">● Sobre Mim</h2>
        </div>
      </div>
    </div>
  );
}
