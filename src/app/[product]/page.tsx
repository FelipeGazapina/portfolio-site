import Image from "next/image";

export default function ProductSingle({ params }: { params: any }) {

    return (
        <main className="flex h-auto flex-col items-center justify-between ">

            <div className="text-white w-full h-[100vh] md:h-[70vh] aspect-video flex items-center flex-row-reverse bg-[url('/background.png')] 
        bg-center bg-cover bg-blend-color bg-black/30 ">
                <section className="grid grid-cols-1 md:grid-cols-2 justify-around gap-4 bg-black/10  md:w-3/4 xl:w-1/2 mx-auto p-4 rounded shadow-lg
                w-[360px]">
                    <Image className="rounded mx-auto w-[300px] md:w-[400px]" src={`/product${params.product}.png`}
                        width={400} height={400} alt="produto" />
                    <div className="w-[100%] flex flex-col gap-1 md:gap-5  md:scale-100">
                        <h1 className="text-xl md:text-4xl font-bold">
                            Harmony Luxe estante de madeira com acess&oacute;rios
                        </h1>
                        <span className="text-sm"> #Categoria</span>
                        <p>
                            Apresentamos nosso elegante conjunto de poltronas &quot;Harmony Luxe&quot;,
                            uma fusão perfeita entre design contemporâneo e conforto supremo.
                            Revestidas em tecidos luxuosos e estruturadas com materiais de alta qualidade,
                            essas poltronas adicionam uma estética refinada ao seu estúdio,
                            enquanto proporcionam uma experiência de assento indulgente.
                            Transforme seu ambiente de trabalho em um espaço de inspiração, onde o estilo
                            encontra o aconchego, com as poltronas &quot;Harmony Luxe&quot;.
                        </p>
                    </div>
                </section>
            </div>

        </main >
    )
}