interface TestimonialCardProps {
  content: string;
  author: string;
  location: string;
  rating?: number;
}

export default function TestimonialCard({
  content,
  author,
  location,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="bg-surface-container-lowest p-8 md:p-10 rounded-3xl shadow-[0_32px_48px_-12px_rgba(50,18,15,0.04)] hover:-translate-y-2 transition-transform duration-300">
      <div className="flex gap-1 text-tertiary mb-6">
        {[...Array(rating)].map((_, i) => (
          <span
            key={i}
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
        ))}
      </div>
      <p className="font-body text-sm md:text-base text-on-surface-variant italic leading-relaxed mb-8">
        "{content}"
      </p>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary-container"></div>
        <div>
          <span className="block font-bold text-sm md:text-base text-on-surface">
            {author}
          </span>
          <span className="text-[10px] md:text-xs text-on-surface-variant uppercase tracking-widest">
            {location}
          </span>
        </div>
      </div>
    </div>
  );
}
