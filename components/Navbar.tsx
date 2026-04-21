"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const pathname = usePathname();
  const whatsappMessage = encodeURIComponent(
    "Ola! Gostaria de fazer uma encomenda de bolo personalizado."
  );
  const whatsappLink = `https://wa.me/258848074445?text=${whatsappMessage}`;

  useEffect(() => {
    const updateHash = () => setActiveHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname, activeHash]);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-[#fff8f7]/90 backdrop-blur-xl dark:bg-[#32120f]/90 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full px-4 md:px-8">
        <div className="flex items-center gap-3 md:gap-4">
          <Link href="/">
            <Image
              alt="Noyana's Cakes Logo"
              className="size-18 md:size-20 lg:size-24 object-contain"
              src="/noyanascakeslogo.png"
              width={112}
              height={112}
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          <Link
            className={`font-medium transition-all duration-300 ${
              pathname === "/"
                ? "text-[#FF2479] dark:text-[#ffd3e5] border-b-2 border-[#735c00] pb-1 font-bold"
                : "text-[#32120f]/70 dark:text-[#fff8f7]/70 hover:text-[#FF5FA2] hover:bg-white/10"
            }`}
            href="/"
          >
            Início
          </Link>
          <Link
            className={`font-medium transition-all duration-300 ${
              pathname === "/galeria" || pathname.startsWith("/galeria")
                ? "text-[#FF2479] dark:text-[#ffd3e5] border-b-2 border-[#735c00] pb-1 font-bold"
                : "text-[#32120f]/70 dark:text-[#fff8f7]/70 hover:text-[#FF5FA2] hover:bg-white/10"
            }`}
            href="/galeria"
          >
            Galeria
          </Link>
          <Link
            className="text-[#32120f]/70 dark:text-[#fff8f7]/70 font-medium hover:text-[#FF5FA2] hover:bg-white/10 transition-all duration-300"
            href="/#about"
          >
            Sobre Nós
          </Link>
          <Link
            className="text-[#32120f]/70 dark:text-[#fff8f7]/70 font-medium hover:text-[#FF5FA2] hover:bg-white/10 transition-all duration-300"
            href="/#contact"
          >
            Contacto
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block bg-gradient-to-br from-primary to-primary-container text-on-primary px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase transition-all duration-300 active:scale-95 shadow-lg shadow-primary/20"
          >
            Encomendar
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="lg:hidden text-[#FF2479] dark:text-[#ffd3e5] focus:outline-none p-1.5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
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
        className={`lg:hidden flex flex-col items-center gap-6 overflow-hidden transition-all duration-300 ease-in-out bg-[#fff8f7] dark:bg-[#32120f] border-t border-[#FF2479]/10 ${
          isMobileMenuOpen
            ? "max-h-[400px] py-6 opacity-100 pointer-events-auto"
            : "max-h-0 py-0 opacity-0 border-transparent shadow-none pointer-events-none"
        }`}
      >
        <Link
          onClick={() => setIsMobileMenuOpen(false)}
          className={`font-medium text-lg w-full text-center py-2 ${
            pathname === "/" && activeHash !== "#about" && activeHash !== "#contact"
              ? "text-[#FF2479] dark:text-[#ffd3e5] font-bold"
              : "text-[#32120f]/70 dark:text-[#fff8f7]/70"
          }`}
          href="/"
        >
          Início
        </Link>
        <Link
          onClick={() => setIsMobileMenuOpen(false)}
          className={`font-medium text-lg w-full text-center py-2 ${
            pathname === "/galeria" || pathname.startsWith("/galeria")
              ? "text-[#FF2479] dark:text-[#ffd3e5] font-bold"
              : "text-[#32120f]/70 dark:text-[#fff8f7]/70"
          }`}
          href="/galeria"
        >
          Galeria
        </Link>
        <Link
          onClick={() => setIsMobileMenuOpen(false)}
          className={`font-medium text-lg w-full text-center py-2 ${
            pathname === "/" && activeHash === "#about"
              ? "text-[#FF2479] dark:text-[#ffd3e5] font-bold"
              : "text-[#32120f]/70 dark:text-[#fff8f7]/70"
          }`}
          href="/#about"
        >
          Sobre Nós
        </Link>
        <Link
          onClick={() => setIsMobileMenuOpen(false)}
          className={`font-medium text-lg w-full text-center py-2 ${
            pathname === "/" && activeHash === "#contact"
              ? "text-[#FF2479] dark:text-[#ffd3e5] font-bold"
              : "text-[#32120f]/70 dark:text-[#fff8f7]/70"
          }`}
          href="/#contact"
        >
          Contacto
        </Link>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center sm:hidden px-6 bg-gradient-to-br from-primary to-primary-container text-on-primary py-3 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-lg"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Encomendar pelo WhatsApp
        </a>
      </div>
    </nav>
  );
}
