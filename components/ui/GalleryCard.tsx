import Image from "next/image";

interface GalleryCardProps {
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
  colSpan?: string;
  heightClass?: string;
}

export default function GalleryCard({
  src,
  alt,
  category,
  title,
  description,
  colSpan = "md:col-span-4",
  heightClass = "h-87.5 md:h-112.5",
}: GalleryCardProps) {
  return (
    <div
      className={`${colSpan} group relative overflow-hidden rounded-xl bg-surface-container-low ${heightClass}`}
    >
      <Image
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        src={src}
        width={1000}
        height={1000}
      />
      <div className="absolute inset-0 bg-linear-to-t from-on-background/80 via-transparent to-transparent opacity-70"></div>
      <div className="absolute bottom-0 left-0 p-6 md:p-8">
        <span className="inline-block bg-secondary-container text-on-secondary-container text-[10px] md:text-xs font-bold px-3 py-1 rounded-full mb-3 md:mb-4 uppercase tracking-widest">
          {category}
        </span>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-headline">
          {title}
        </h3>
        <p className="text-white/80 font-body text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
