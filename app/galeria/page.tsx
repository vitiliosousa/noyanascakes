import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryHero from "@/components/gallery/GalleryHero";
import CollectionsSection from "@/components/gallery/CollectionsSection";
import GalleryCTA from "@/components/gallery/GalleryCTA";

export default function Galeria() {
  return (
    <>
      <main className="pt-24 md:pt-32 pb-16 md:pb-24 min-h-screen">
        <GalleryHero />
        <CollectionsSection />
        <GalleryCTA />
      </main>
    </>
  );
}
