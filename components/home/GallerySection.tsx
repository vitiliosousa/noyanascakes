import GalleryCard from "../ui/GalleryCard";
import { items } from "@/data/items";
import Link from "next/link";

export default function GallerySection() {
  return (
    <section className="py-20 md:py-32 bg-surface-container-low" id="gallery">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-12 md:mb-20 text-center md:text-left">
          <span className="text-tertiary font-bold uppercase tracking-[0.3em] text-xs md:text-sm">
            Nossos Produtos
          </span>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-on-surface mt-3 md:mt-4">
            Bolos, Doces e Salgados
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {items.map((item, index) => (
            <GalleryCard key={index} {...item} />
          ))}
        </div>
        <div className="flex items-center justify-center mt-10">
          <Link
            href={"/galeria"}
            className="bg-linear-to-br from-[#FF2479] to-[#ff6aa6] text-white text-center px-6 py-4 text-sm rounded-full font-bold uppercase tracking-widest gap-3 hover:shadow-2xl"
          >
            Ver Galeria
          </Link>
        </div>
      </div>
    </section>
  );
}
