import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./testemonials";

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="font-headline text-4xl md:text-5xl text-center mb-16 md:mb-24">
          Palavras gentis dos nossos clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
