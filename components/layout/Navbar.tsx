"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Seções que serão observadas pelo IntersectionObserver
const HASH_SECTIONS = ["#home", "#about", "#contact"] as const;

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("");
  const pathname = usePathname();
  const observerRef = useRef<IntersectionObserver | null>(null);

  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de fazer uma encomenda de bolo."
  );
  const whatsappLink = `https://wa.me/258848074445?text=${whatsappMessage}`;

  // ─── Detecção de hash por scroll via IntersectionObserver ───────────────────
  useEffect(() => {
    // Só faz sentido observar seções na página inicial
    if (pathname !== "/") {
      setActiveHash("");
      return;
    }

    // Inicializa o hash com o valor atual da URL (ex: ao carregar /#about)
    setActiveHash(window.location.hash);

    const sectionElements: { id: string; el: Element }[] = [];

    HASH_SECTIONS.forEach((hash) => {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) sectionElements.push({ id: hash, el });
    });

    if (sectionElements.length === 0) return;

    // Cada seção é considerada "ativa" quando ocupa pelo menos 40% da viewport
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const hash = `#${entry.target.id}`;
            setActiveHash(hash);
            // Atualiza a URL sem causar navegação ou scroll
            // Se for a home, removemos o hash da URL para ficar limpo
            const newUrl = hash === "#home" ? pathname : hash;
            window.history.replaceState(null, "", newUrl);
          }
        });
      },
      { threshold: 0.4 }
    );

    sectionElements.forEach(({ el }) => observerRef.current?.observe(el));

    // Listener de hashchange para cobrir cliques diretos em âncoras
    const handleHashChange = () => setActiveHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      observerRef.current?.disconnect();
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [pathname]);

  // Fecha menu mobile ao navegar
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname, activeHash]);

  // ─── Helpers de estilo ativo ─────────────────────────────────────────────────
  const isActive = (href: string): boolean => {
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      return pathname === (path || "/") && activeHash === `#${hash}`;
    }
    if (href === "/") {
      // "Início" é ativo na home sem hash específico ou no hash #home
      return (
        pathname === "/" &&
        (activeHash === "" || activeHash === "#home" || !HASH_SECTIONS.includes(activeHash as any))
      );
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const linkClass = (href: string, extra = ""): string => {
    const active = isActive(href);
    return [
      "font-medium transition-all duration-300",
      active
        ? "text-[#FF2479] border-b-2 border-[#735c00] pb-1 font-bold"
        : "text-[#32120f]/70 dark:text-[#fff8f7]/70 hover:text-[#FF5FA2]",
      extra,
    ]
      .filter(Boolean)
      .join(" ");
  };

  const mobileLinkClass = (href: string): string => {
    const active = isActive(href);
    return [
      "font-medium text-lg w-full text-center py-2 transition-colors duration-200",
      active
        ? "text-[#FF2479] dark:text-[#ffd3e5] font-bold"
        : "text-[#32120f]/70 dark:text-[#fff8f7]/70",
    ].join(" ");
  };

  // ─── Links de navegação (fonte única de verdade) ─────────────────────────────
  const navLinks: { label: string; href: string }[] = [
    { label: "Início", href: "/" },
    { label: "Galeria", href: "/galeria" },
    { label: "Sobre Nós", href: "/#about" },
    { label: "Contacto", href: "/#contact" },
  ];

  return (
    // h-16/h-20 garante que o conteúdo abaixo use pt-16/pt-20 sem ser ocultado
    <nav className="fixed top-0 left-0 w-full z-100 bg-[#fff8f7]/90 dark:bg-[#32120f] backdrop-blur-xl transition-all duration-300 h-16 md:h-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full h-full px-4 md:px-8">
        {/* Logo */}
        <Link href="/" aria-label="Ir para página inicial">
          <Image
            alt="Noyana's Cakes Logo"
            // size-16 / size-20 são valores válidos no Tailwind
            className="size-16 md:size-26 object-contain"
            src="/noyanascakeslogo.png"
            width={112}
            height={112}
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <Link key={href} className={linkClass(href)} href={href}>
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Botão Encomendar — visível a partir de sm no header */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block bg-linear-to-br from-[#FF2479] to-[#ff6aa6] text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase transition-all duration-300 active:scale-95 shadow-lg shadow-[#FF2479]/20"
          >
            Encomendar
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="lg:hidden text-[#FF2479] dark:text-primary-fixed focus:outline-none p-1.5"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="material-symbols-outlined text-2xl sm:text-3xl">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Menu de navegação"
        className={`lg:hidden flex flex-col items-center gap-6 overflow-hidden transition-all duration-300 ease-in-out bg-[#fff8f7] dark:bg-[#32120f] border-t border-[#FF2479]/10 ${
          isMobileMenuOpen
            ? "max-h-400px py-6 opacity-100 pointer-events-auto shadow-lg"
            : "max-h-0 py-0 opacity-0 border-transparent shadow-none pointer-events-none"
        }`}
      >
        {navLinks.map(({ label, href }) => (
          <Link
            key={href}
            onClick={() => setIsMobileMenuOpen(false)}
            className={mobileLinkClass(href)}
            href={href}
          >
            {label}
          </Link>
        ))}

        {/* Botão Encomendar no menu mobile — apenas em telas < sm */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center sm:hidden px-6 bg-linear-to-br from-[#FF2479] to-[#ff6aa6] text-white py-3 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-lg"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Encomendar pelo WhatsApp
        </a>
      </div>
    </nav>
  );
}