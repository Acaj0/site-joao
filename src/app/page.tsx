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
                className="hover:fill-white cursor-pointer h-9 outline px-4 text-center gap-2 flex items-center hover:bg-black hover:text-white dark:hover:bg-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 dark:hover:text-black rounded text-xl"
              >
                <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                </svg>
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
