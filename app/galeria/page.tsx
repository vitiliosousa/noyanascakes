"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CAKES = [
  {
    id: 1,
    category: "Aniversário",
    title: "Celebrações de Vida",
    description: "Designs vibrantes e personalizados que capturam a personalidade e alegria de cada aniversariante.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFBwm_dvc04FzSNJPwKoUzEWyw1vwv-89XQtRPZyaOETH_W88rRwBtUnGpl1whuQpOECXIK4xU50bYTqvU6hGsqLLx8IxaRjILigFfHONSLQQ5zNVD2IeJT5onxmQ0Ax5zoSs1WQRduxdATBjdDm4OHbauB3wLOHPs1XmBFKDBxMtHFUDqMBzMPhgZ7iNvNltVtcwS0kTDv3q-PSpYlWen1htmwwJ3FX2lwvgBF6vIKZKKdbS2MqREbxNS8rdUi9qzMaGHI1i93vH5",
    span: "md:col-span-8",
    height: "h-[400px] md:h-[600px]",
    hideDetailsOverlay: false,
  },
  {
    id: 2,
    category: "Casamento",
    title: "O Sim Eterno",
    description: "Sofisticação em cada camada para o dia mais importante da sua vida.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPwnoRlSiA40k14MidW5dDZWoOKtD8TxFQ9KwmhRxG8IN7h21bbzTOMK3oZMQFlv3lgW50rWDoH3WMSrAF_cHtiTlaVn5YbVuQXFmlh9Hd2WSEeQS_UjwE67EHpJ4nApuIr6xkCwoIgdTsFhsAGhVaQtuTQe33D6FAhCwpTCIMZAosEAVPbVCykhBBnppqcc5nvseJBl9E7r1KQYrawBYtuQsbONmU8XDH5NqT_O4w3g0pNqbvKXtSOFeQiMYlHxepI1s0rcn6qzs7",
    span: "md:col-span-4",
    height: "h-[350px] md:h-[600px]",
    hideDetailsOverlay: false,
  },
  {
    id: 3,
    category: "Personalizados",
    title: "Esculturas Comestíveis",
    description: "Se pode imaginar, nós podemos criar em forma de bolo.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmp29Kh3mVrUQUCI6r31_2J4DN8Bx9hKT0eqrDEx1OKihn3_I0AHw7o2PDuHEmfdqzK5CyKLy50zQKSdQEXTYhJ5LYudB9DdrOQRVXzFn3vYk2_fwcaUNTTSg8TR0n9RuPJX7sAu9QgwWCsFqDBnNpOxKVsOG8x0M6sI8q0tsfVvU0So9eqcrL6OZdSwI9xnhyy79kaSpXkhCgh6KS908-d87E0O6hTjSeaPH9aDd4M6mMORVHtNhwrrbclJcTgTa5yf75r7rYuPlF",
    span: "md:col-span-4",
    height: "h-[350px] md:h-[450px]",
    hideDetailsOverlay: false,
  },
  {
    id: 4,
    category: "Personalizados",
    title: "Detalhe de Ganache",
    description: "Feito à perfeição e texturas únicas.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2s6rI-llZh6hCaTKmPeypcSKff9CLYjGacl2CnGRbDPuUTOXy4_4QapuatclcVKfFtJjy1iXcf5mYcLIc5gOekclFAJSEkYly3ceTbLEh1utc_Pp8N6xNYft4-EI8FKrW1zXr3xrxZ1GCPCaLJxc0g_GW5rLaJTV_K_4y0ZQhNtgxd_3qnK46hOwM8P6q_638UWtISTjUUPJiMoYQR8LFCJkIbkB7oqkzYsJ9PQZeJceIPaTbMWuM5hl9B6QLkOpY9FwwauAy_6qx",
    span: "md:col-span-4",
    height: "h-[350px] md:h-[450px]",
    hideDetailsOverlay: true, // Only show eye icon
  },
  {
    id: 5,
    category: "Aniversário",
    title: "Bolo Festivo",
    description: "Cores e sabores vibrantes.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdWR-5u12e-ti9gdPq-xU6LwwgeCihPEoVSzBBiw77R7wO36oZy3tp6fdravNQT3c26DTAHiis9--ejAqoRH8Fer_Y4RVd3VCZ89VhSIAVHB7aEbDFzlkRFCmGnuqcE3WgcsyRJxd0s0Uk-ECNJuu376A-J1Vod-wYADZw4IBUCj2BWUfBGy0X3bChlygY-TYg9UVlK0mGux2FkMJe_I-vMjU7zkD_70s4sk8owTREnR-wgFo3WaX3SInTs48MKtO43-fh_KyIKv3r",
    span: "md:col-span-4",
    height: "h-[350px] md:h-[450px]",
    hideDetailsOverlay: true, // Only show eye icon
  }
];

export default function Galeria() {
  const whatsappMessage = encodeURIComponent(
    "Ola! Gostaria de fazer uma encomenda de bolo personalizado."
  );
  const whatsappLink = `https://wa.me/258848074445?text=${whatsappMessage}`;
  const [filter, setFilter] = useState("Todos");

  const filteredCakes = CAKES.filter((cake) => {
    if (filter === "Todos") return true;
    return cake.category === filter;
  });

  return (
    <>
      <Navbar />

      <main className="pt-24 md:pt-32 pb-16 md:pb-24 min-h-screen">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 mb-16 md:mb-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="text-center md:text-left mt-8 md:mt-0">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-primary mb-6 md:mb-8 tracking-tighter">
              Nossa Galeria <br className="hidden md:block" /> <span className="italic font-normal text-tertiary">de Bolos</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-on-surface-variant max-w-lg mx-auto md:mx-0 mb-8 md:mb-10">
              Cada criação é uma obra de arte única, concebida para transformar os seus momentos especiais em memórias inesquecíveis. Explore a nossa curadoria de design e sabor.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
              <div className="bg-surface-container-low px-4 py-3 md:py-2 rounded-lg flex items-center justify-center gap-2 shadow-sm">
                <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                <span className="text-sm font-semibold text-on-secondary-container">Arte Artesanal</span>
              </div>
              <div className="bg-surface-container-low px-4 py-3 md:py-2 rounded-lg flex items-center justify-center gap-2 shadow-sm">
                <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                <span className="text-sm font-semibold text-on-secondary-container">Feito com Amor</span>
              </div>
            </div>
          </div>
          <div className="relative mt-8 md:mt-0">
            <div className="aspect-[4/5] bg-surface-container-highest rounded-xl overflow-hidden editorial-shadow transform md:rotate-2 shadow-[0_32px_48px_-12px_rgba(50,18,15,0.06)]">
              <img
                alt="Destaque Galeria"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJkncCZQnAqwTx-3eyuIltjulCKQx3mRkChgJt1tlSQnOAJBfly-YMcfQjv8BZW7rHFwauXeZCsIhZ7WbEfX9qxmOx7qWnyJIE3r63hlDnN8b8hGezjNw_gNgGKhFIm0fyIN4e3dFAfKNz4nOE1dqYLT5EnfxuYwNTHVNrzIB2oPqYXKnGgo_U34YdfiiAs8oxuJI3J-juvK-fKweyKC1YNcjsvFyGspi-ejOoO4c1eLu20j8hrd0kxOgZtut5GXYTVidArst_ZG73"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 aspect-square w-36 md:w-48 bg-tertiary-container rounded-lg editorial-shadow transform -rotate-6 flex items-center justify-center p-3 md:p-4 shadow-[0_32px_48px_-12px_rgba(50,18,15,0.06)]">
              <p className="text-on-tertiary-container font-serif text-center italic text-base md:text-lg leading-tight">
                Assinatura Noyana’s
              </p>
            </div>
          </div>
        </section>

        {/* Category Narrative & Filters */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 mb-12 md:mb-16 min-h-[600px]">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-8 mb-8 md:mb-12">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-on-background mb-3 md:mb-4 font-headline">Colecções Exclusivas</h2>
              <p className="text-sm md:text-base text-on-surface-variant font-body">
                Filtre por ocasião para encontrar a inspiração perfeita para o seu evento. De celebrações íntimas a grandes casamentos.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-3 w-full lg:w-auto">
              {['Todos', 'Aniversário', 'Casamento', 'Personalizados'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 md:px-8 py-2 md:py-3 rounded-full font-semibold text-xs md:text-sm tracking-wide transition-all flex-1 lg:flex-none text-center shadow-sm
                    ${
                      filter === cat
                        ? "bg-primary text-on-primary font-bold shadow-md"
                        : "bg-surface-container-high text-on-surface hover:bg-surface-container-highest"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            {filteredCakes.length > 0 ? (
              filteredCakes.map((cake, index) => (
                <div key={cake.id} className={`${filter === "Todos" ? cake.span : "md:col-span-6 lg:col-span-4"} group animate-in slide-in-from-bottom-4 fade-in duration-500`}>
                  <div className={`relative overflow-hidden rounded-xl bg-surface-container-low ${cake.height}`}>
                    <img
                      alt={cake.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      src={cake.src}
                    />
                    
                    {!cake.hideDetailsOverlay ? (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-transparent to-transparent opacity-60"></div>
                        <div className="absolute bottom-0 left-0 p-6 md:p-8">
                          <span className="inline-block bg-secondary-container text-on-secondary-container text-[10px] md:text-xs font-bold px-3 py-1 rounded-full mb-3 md:mb-4 uppercase tracking-widest font-label">
                            {cake.category}
                          </span>
                          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 font-headline">{cake.title}</h3>
                          <p className="text-white/80 max-w-sm font-body text-sm md:text-base leading-relaxed">
                            {cake.description}
                          </p>
                        </div>
                      </>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-on-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-surface/90 backdrop-blur-md p-4 rounded-full">
                          <span className="material-symbols-outlined text-primary">visibility</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-12 py-20 text-center">
                 <p className="text-lg text-on-surface-variant font-body mb-4">Nenhum bolo encontrado para a categoria selecionada.</p>
                 <button onClick={() => setFilter("Todos")} className="text-primary font-bold underline">Limpar Filtro</button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 my-20 md:my-32">
          <div className="bg-surface-container rounded-3xl p-8 sm:p-12 md:p-24 text-center relative overflow-hidden shadow-[0_32px_48px_-12px_rgba(50,18,15,0.04)]">
            <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-tertiary-container/20 rounded-full blur-3xl -mr-24 -mt-24 md:-mr-32 md:-mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-primary-container/10 rounded-full blur-3xl -ml-24 -mb-24 md:-ml-32 md:-mb-32"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 max-w-2xl mx-auto leading-tight font-headline text-on-surface relative z-10">
              Pronto para transformar a sua visão em realidade?
            </h2>
            <p className="text-on-surface-variant text-base md:text-lg mb-10 md:mb-12 max-w-xl mx-auto font-body relative z-10">
              Cada bolo na nossa galeria começou com uma conversa. Entre em contacto hoje para iniciarmos o design do seu bolo personalizado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center relative z-10">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-xs md:text-sm tracking-widest uppercase shadow-xl hover:shadow-primary/30 transition-all active:scale-95">
                  Iniciar Encomenda
                </button>
              </a>
              <Link href="/" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-surface-container-highest text-on-surface px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-xs md:text-sm tracking-widest uppercase transition-all hover:bg-surface-variant">
                  Voltar ao Início
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
