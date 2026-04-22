"use client";

import Image from "next/image";
import Link from "next/link";
import { CAKES } from "@/data/cakes";

export default function CollectionsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 mb-16 md:mb-24">
      
      {/* Heading */}
      <div className="max-w-xl mb-10 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-on-background mb-4 font-headline">
          Seleção de Criações
        </h2>
        <p className="text-sm md:text-base text-on-surface-variant font-body">
          Uma amostra de composições concebidas com rigor estético e atenção ao detalhe, refletindo diferentes estilos e ocasiões.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {CAKES.map((cake) => (
          <div
            key={cake.id}
            className="group relative overflow-hidden rounded-xl"
          >
            <Image
              src={cake.src}
              alt="Bolo artesanal"
              width={1000}
              height={1000}
              className="w-full h-87.5 md:h-105 object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Hover overlay minimalista */}
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>

      {/* Social Media Footer */}
      <div className="mt-16 md:mt-24 pt-12 border-t border-on-surface/5 text-center">
        <p className="text-on-surface-variant text-base md:text-lg mb-8 max-w-2xl mx-auto font-body">
          Quer ver mais das nossas criações diárias? Siga-nos nas redes sociais e acompanhe todos os nossos novos designs, bastidores e novidades!
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <a
            href="https://www.instagram.com/noyanascakes/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-surface-container-high text-on-surface px-6 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-surface-container-highest transition-all active:scale-95 shadow-sm"
          >
            Instagram
          </a>
          
          <a
            href="https://www.facebook.com/noyanascakes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-surface-container-high text-on-surface px-6 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-surface-container-highest transition-all active:scale-95 shadow-sm"
          >
            Facebook
          </a>
          
          <a
            href="https://www.tiktok.com/@noyanasscakes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-surface-container-high text-on-surface px-6 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-surface-container-highest transition-all active:scale-95 shadow-sm"
          >
            TikTok
          </a>
        </div>
      </div>
    </section>
  );
} 