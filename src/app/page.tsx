import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import NavBar from "@/components/ui/NavBar";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="flex flex-col">
        <div className=" flex lg:flex-row flex-col min-w-fill md:h-[700px] md:bg-[url(/foto-main.jpg)] bg-no-repeat bg-cover bg-top">
          <div className=" lg:mx-36 flex flex-col items-start justify-center md:w-[760px] p-10">
            <h1 className="text-5xl text-left text-[#202A33]">
              João Gabriel Buso de Souza
            </h1>
            <span className=" mt-4 text-wrap text-left text-2xl min-w-fit text-[#202A33]">
              Advogado em Cuiabá – MT especializado Direito Civel, Área
              Criminal, Agrario e Empresarial.
            </span>
            <div className="flex flex-row cursor-pointer fill-white justify-center items-center mt-5 rounded-lg bg-[#202A33] w-86 p-2 md:w-96 h-16 gap-4 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 ">
              <a className="text-white md:text-xl text-lg">
                Fale com um especialista!
              </a>
              <svg
                className="w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>{" "}
            </div>
            <div className="flex ml-2 flex-row mt-5 gap-10 text-center items-center md:justify-start justify-center">
              <a
                href="mailto:joaobuso.adv@gmail.com"
                className="hover:fill-white fill-[#202A33]  cursor-pointer h-9 outline outline-[#202A33] hover:outline-0 px-4 text-center gap-2 flex items-center hover:bg-[#202A33] hover:text-white dark:hover:bg-[#202A33] transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 text-[#202A33] rounded text-xl"
              >
                <svg
                  width={20}
                  height={20}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                </svg>
                Email
              </a>

              <div className="w-10 flex items-center gap-0">
                <a
                  className="fill-[#202A33] transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-100"
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
        <Separator className="bg-[#202A33]" />
        <div className="flex flex-col items-center mt-8">
          <h2 className="text-6xl text-center text-[#202A33]">Áreas de Atuação</h2>
          <div className="grid md:grid-rows-2 md:grid-cols-2 grid-rows-4 grid-cols-1 gap-20 mt-10 text-[#202A33]">
            <div className="flex flex-col items-center">
              <div className="border-2 px-2 rounded-md border-[#202A33] group flex-col items-center relative w-[400px] md:w-[450px] mt-3 flex transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                Direito Civil
                <AspectRatio ratio={8 / 4}>
                  <Image
                    src={"/1.webp"}
                    fill
                    alt="foto do Direito Civil"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
                <h2 className="mb-5">
                  é o ramo do direito privado, cujo objetivo é determinar as
                  regras e condutas que pessoas físicas e jurídicas devem ter em
                  sociedade.
                </h2>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="border-2 px-2 rounded-md border-[#202A33] group flex-col items-center relative w-[400px] md:w-[450px] mt-3 flex transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                Direito Empresarial
                <AspectRatio ratio={8 / 4}>
                  <Image
                    src={"/4.jpg"}
                    fill
                    alt="foto do Direito Empresarial"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
                <h2>
                  Essa área de estudo envolve a organização empresarial moderna
                  e regulamenta o status legal do empreendedor que realiza atos
                  de produção e comercialização de bens e serviços.
                </h2>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="border-2 px-2 rounded-md border-[#202A33] group flex-col items-center relative w-[400px] md:w-[450px] mt-3 flex transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                Direito Agrario
                <AspectRatio ratio={8 / 4}>
                  <Image
                    src={"/3.webp"}
                    fill
                    alt="foto do Direito Agrario"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
                <h2 className="">
                  Compreende a disciplina jurídica dos interesses e obrigações
                  concernentes à terra e aos bens imóveis rurais para fins de
                  execução da Reforma Agrária.
                </h2>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="border-2 px-2 rounded-md border-[#202A33] group flex-col items-center relative w-[400px] md:w-[450px] mt-3 flex transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                Direito Criminal
                <AspectRatio ratio={8 / 4}>
                  <Image
                    src={"/2-2.webp"}
                    fill
                    alt="foto do Direito Civil"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
                <h2 className="mb">
                  é dedicada principalmente à realização de defesas contra
                  acusações de prática de crime contra pessoas físicas e/ou
                  jurídicas, tanto em esfera estadual quanto federal.
                </h2>
              </div>
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
