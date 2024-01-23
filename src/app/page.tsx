'use client'
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Armchair, Mail, Phone } from "lucide-react";
import { useEffect, useLayoutEffect, useState } from "react";
import Link from "next/link";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7
  },
  desktop: {
    breakpoint: { max: 3000, min: 1280 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1280, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


export default function Home() {
  const [innerWidth, setInnerWidth] = useState(3000);
  useLayoutEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };
    if (typeof window != undefined) {
      window.addEventListener("resize", handleResize);
      handleResize();
    }
  }, [innerWidth])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">

      <div className="text-white w-full h-[100vh] aspect-video flex items-center flex-row-reverse bg-[url('/background.png')] 
        bg-cover bg-blend-color bg-black/30 ">
        <section className="items-center justify-center w-full min-h-scren px-10 container mx-auto
      grid grid-cols-1 lg:grid-cols-2">
          <div></div>
          <div className="text-white flex flex-col gap-5">
            <h1 className={`text-[48px] lg:text-[64px] font-bold lg:text-right`}>
              Pa&ccedil;as &uacute;nicas e estilosas para sua casa
            </h1>
            <p className="text-md lg:text-right lg:text-lg">
              Explore a excelência dos nossos produtos e transforme seu estúdio com estilo incomparável. Venha descobrir as opções que tornarão seu espaço único e perfeito. Estilize seu ambiente de trabalho da melhor forma possível conosco.
            </p>
            <a className="self-start lg:self-end border-2 rounded px-2 py-1 hover:bg-white hover:text-gray-800 font-bold">
              Veja mais</a>
          </div>
        </section>
      </div>
      <section className="w-full py-12 my-16 flex flex-col overflow-y-hidden">
        <h2 className="self-start inline-block px-12 text-2xl font-medium">Principais Itens</h2>
        <p className="px-12 text-gray-700">
          Descubra a diversidade dos nossos principais produtos que elevam o charme e funcionalidade do seu estúdio. <br />
          Do mobiliário sofisticado às decorações exclusivas, oferecemos o aluguel ideal para criar ambientes que refletem sua personalidade única.
        </p>
        <Carousel responsive={responsive} className="my-6 px-6"
          swipeable={true}
          draggable={true}
          showDots={false}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          transitionDuration={500}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}>
          {[...Array(6)].map((item, idx) => (
            <Link key={`item-${idx}`} href={`/1`}>
              <div className="w-[300px] px-1 gap-4 flex flex-col">
                <Image width={300} height={300} src="/product1.png" alt="product1" className="rounded aspect-square " />
                <div className="">
                  <h3>Estante cl&aacute;ssica com adere&ccedil;os</h3>
                  <span className="text-sm"> Modelo #1</span>
                </div>
              </div>
            </Link>
          ))}
          {[...Array(6)].map((item, idx) => (
            <Link key={`item1-${idx}`} href={`/2`}>
              <div key={`item1-${idx}`} className="px-1 gap-4 flex flex-col">
                <Image width={300} height={300} src="/product2.png" alt="product1" className="rounded aspect-square" />
                <div className="">
                  <h3>Estante cl&aacute;ssica com adere&ccedil;os</h3>
                  <span className="text-sm"> Modelo #1</span>
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      </section>
      <section className="container my-16 flex flex-col items-center">
        <h2 className="inline-block px-12 text-2xl font-medium">
          Escolha sua categoria
        </h2>
        <span>Selecione um produto das op&ccedil;&otilde;es de categorias</span>
        <div className="grid grid-cols-2 md:grid-cols-4 my-10 gap-x-10">
          {[...Array(innerWidth > 640 ? 4 : 2)].map((item, idx) => (
            <div key={`item2-${idx}`} className="w-40 h-40 bg-gray-800/10 rounded-lg 
              flex flex-col items-center justify-center hover:scale-105
              shadow-lg">
              <Armchair className="w-20 h-20" />
              <h3>M&oacute;veis</h3>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[...Array(2)].map((item, idx) => (
            <Link key={`item3-${idx}`} href={`/1`}>
              <div className="w-[300px] px-1 gap-4 flex flex-col">
                <Image width={300} height={300} src="/product1.png" alt="product1" className="rounded aspect-square " />
                <div className="">
                  <h3>Estante cl&aacute;ssica com adere&ccedil;os</h3>
                  <span className="text-sm"> Modelo #1</span>
                </div>
              </div>
            </Link>
          ))}
          {[...Array(2)].map((item, idx) => (
            <Link key={`item4-${idx}`} href={`/2`}>
              <div className="px-1 gap-4 flex flex-col">
                <Image width={300} height={300} src="/product2.png" alt="product1" className="rounded aspect-square" />
                <div className="">
                  <h3>Estante cl&aacute;ssica com adere&ccedil;os</h3>
                  <span className="text-sm"> Modelo #1</span>
                </div>
              </div>
            </Link>
          ))}
          {[...Array(4)].map((item, idx) => (
            <Link key={`item5-${idx}`} href={`/3`}>
              <div className="px-1 gap-4 flex flex-col">
                <Image width={300} height={300} src="/product3.png" alt="product1" className="rounded aspect-square" />
                <div className="">
                  <h3>Estante cl&aacute;ssica com adere&ccedil;os</h3>
                  <span className="text-sm"> Modelo #1</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}
