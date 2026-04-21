export default function ContactSection() {
  return (
    <section className="py-20 md:py-32 bg-surface" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
        <div>
          <h2 className="font-headline text-4xl md:text-5xl text-on-surface mb-8 md:mb-12">
            Entre em contacto
          </h2>
          <div className="space-y-8 md:space-y-12">
            <div className="flex items-start gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary">
                <span className="material-symbols-outlined pb-1">call</span>
              </div>
              <div>
                <span className="block text-[10px] md:text-sm font-label text-on-surface-variant uppercase tracking-widest mb-1">
                  Telefone
                </span>
                <span className="text-xl md:text-2xl font-headline text-on-surface">
                  +258 84 807 4445
                </span>
              </div>
            </div>
            <div className="flex items-start gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary">
                <span className="material-symbols-outlined pb-1">call</span>
              </div>
              <div>
                <span className="block text-[10px] md:text-sm font-label text-on-surface-variant uppercase tracking-widest mb-1">
                  Telefone
                </span>
                <span className="text-xl md:text-2xl font-headline text-on-surface">
                  +258 87 807 4445
                </span>
              </div>
            </div>
            <div className="flex items-start gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary">
                <span className="material-symbols-outlined pb-1">
                  location_on
                </span>
              </div>
              <div>
                <span className="block text-[10px] md:text-sm font-label text-on-surface-variant uppercase tracking-widest mb-1">
                  Localizacao
                </span>
                <span className="text-xl md:text-2xl font-headline text-on-surface">
                  Machava, Maputo, Mocambique
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[350px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-xl border-4 md:border-8 border-white">
          <img
            alt="Maputo"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD23qFseJ2tuaYeSV7NzvGnJ5YTL-Kk6wrjTAwTZ4EQSecUWgPWO8bikO8HtvIfvmH_qEK5Wuv49VzdeYyKEhpD14OkIW57-f9qOsYQYSQheBSTn-DYgaarMxheRqdQ5Hef4FD-yQSrqV8WgqIYQqYs4-AIhILNq2itNdPiJvtH4RytxBV8ohKK7JwUTsD6TQRuk1dITRL0ZN4L2zbAmmoPaSLXdy52o7JPpjZdbJeIQg2D5CZkXESEvJdmzdCZNQ0Nn6LKbrF4q12m"
          />
        </div>
      </div>
    </section>
  );
}
