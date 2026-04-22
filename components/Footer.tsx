import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const instagramLink = "https://www.instagram.com/noyanascakes/";
  const facebookLink = "https://www.facebook.com/noyanascakes";
  const tiktokLink = "https://www.tiktok.com/@noyanasscakes";

  return (
    <footer className="bg-stone-50 dark:bg-[#32120f] pt-16 md:pt-20 pb-8 md:pb-10 border-t border-[#FF2479]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-left">
        <div className="col-span-1 sm:col-span-2 md:col-span-1">
          <div className="flex items-center gap-3 md:gap-4">
            <Link href="/">
              <Image
                alt="Noyana's Cakes Logo"
                className="size-20 md:size-28 object-contain"
                src="/noyanascakeslogo.png"
                width={112}
                height={112}
              />
            </Link>
          </div>
          <p className="font-serif text-sm leading-relaxed text-[#32120f] dark:text-[#fff8f7]/70">
            Bolos, doces e salgados feitos por encomenda.
          </p>
        </div>
        <div>
          <h4 className="font-label font-bold text-primary uppercase tracking-widest text-xs mb-4 md:mb-6">
            Links
          </h4>
          <ul className="space-y-3 md:space-y-4">
            <li>
              <Link
                className="text-stone-600 dark:text-[#fff8f7]/60 hover:text-[#FF2479] transition-colors text-sm"
                href="/galeria"
              >
                Galeria
              </Link>
            </li>
            <li>
              <Link
                className="text-stone-600 dark:text-[#fff8f7]/60 hover:text-[#FF2479] transition-colors text-sm"
                href="/#about"
              >
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link
                className="text-stone-600 dark:text-[#fff8f7]/60 hover:text-[#FF2479] transition-colors text-sm"
                href="/#contact"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-label font-bold text-primary uppercase tracking-widest text-xs mb-4 md:mb-6">
            Contacto
          </h4>
          <ul className="space-y-3 md:space-y-4">
            <li className="text-stone-600 dark:text-[#fff8f7]/60 text-sm">
              Tel: +258 84 807 4445
            </li>
            <li className="text-stone-600 dark:text-[#fff8f7]/60 text-sm">
              Tel: +258 87 807 4445
            </li>
            <li className="text-stone-600 dark:text-[#fff8f7]/60 text-sm">
              Machava, Maputo, Moçambique
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-label font-bold text-primary uppercase tracking-widest text-xs mb-4 md:mb-6">
            Social
          </h4>
          <ul className="space-y-3 md:space-y-4">
            <li>
              <a
                className="text-stone-600 dark:text-[#fff8f7]/60 hover:text-[#FF2479] transition-colors text-sm"
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                className="text-stone-600 dark:text-[#fff8f7]/60 hover:text-[#FF2479] transition-colors text-sm"
                href={facebookLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                className="text-stone-600 dark:text-[#fff8f7]/60 hover:text-[#FF2479] transition-colors text-sm"
                href={tiktokLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                TikTok
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-10 md:pt-16 border-t border-stone-200 dark:border-[#FF2479]/20 mt-12 md:mt-16 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="font-serif text-xs text-stone-500 dark:text-[#fff8f7]/50">
          © {new Date().getFullYear()} Noyana's Cakes. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
