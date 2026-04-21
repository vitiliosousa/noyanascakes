export default function GallerySection() {
  return (
    <section className="py-20 md:py-32 bg-surface-container-low" id="gallery">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-12 md:mb-20 text-center md:text-left">
          <span className="text-tertiary font-bold uppercase tracking-[0.3em] text-xs md:text-sm">
            A Colecao
          </span>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-on-surface mt-3 md:mt-4">
            Obras Curadas
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low h-[400px] md:h-[600px]">
            <img
              alt="Bolo de Aniversario"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFBwm_dvc04FzSNJPwKoUzEWyw1vwv-89XQtRPZyaOETH_W88rRwBtUnGpl1whuQpOECXIK4xU50bYTqvU6hGsqLLx8IxaRjILigFfHONSLQQ5zNVD2IeJT5onxmQ0Ax5zoSs1WQRduxdATBjdDm4OHbauB3wLOHPs1XmBFKDBxMtHFUDqMBzMPhgZ7iNvNltVtcwS0kTDv3q-PSpYlWen1htmwwJ3FX2lwvgBF6vIKZKKdbS2MqREbxNS8rdUi9qzMaGHI1i93vH5"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-transparent to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-10">
              <span className="inline-block bg-secondary-container text-on-secondary-container text-[10px] md:text-xs font-bold px-3 py-1 rounded-full mb-3 md:mb-4 uppercase tracking-widest">
                Aniversario
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-headline">
                Celebracoes de Vida
              </h3>
              <p className="text-white/80 max-w-sm md:max-w-md font-body text-sm md:text-base leading-relaxed">
                Designs vibrantes e personalizados que capturam a personalidade
                e alegria de cada aniversariante.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-low h-[350px] md:h-[600px]">
            <img
              alt="Bolo de Casamento"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPwnoRlSiA40k14MidW5dDZWoOKtD8TxFQ9KwmhRxG8IN7h21bbzTOMK3oZMQFlv3lgW50rWDoH3WMSrAF_cHtiTlaVn5YbVuQXFmlh9Hd2WSEeQS_UjwE67EHpJ4nApuIr6xkCwoIgdTsFhsAGhVaQtuTQe33D6FAhCwpTCIMZAosEAVPbVCykhBBnppqcc5nvseJBl9E7r1KQYrawBYtuQsbONmU8XDH5NqT_O4w3g0pNqbvKXtSOFeQiMYlHxepI1s0rcn6qzs7"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-transparent to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <span className="inline-block bg-secondary-container text-on-secondary-container text-[10px] md:text-xs font-bold px-3 py-1 rounded-full mb-3 md:mb-4 uppercase tracking-widest">
                Casamento
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-headline">
                O Sim Eterno
              </h3>
              <p className="text-white/80 font-body text-sm md:text-base leading-relaxed">
                Sofisticacao em cada camada para o dia mais importante.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-low h-[350px] md:h-[450px]">
            <img
              alt="Bolo Personalizado"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmp29Kh3mVrUQUCI6r31_2J4DN8Bx9hKT0eqrDEx1OKihn3_I0AHw7o2PDuHEmfdqzK5CyKLy50zQKSdQEXTYhJ5LYudB9DdrOQRVXzFn3vYk2_fwcaUNTTSg8TR0n9RuPJX7sAu9QgwWCsFqDBnNpOxKVsOG8x0M6sI8q0tsfVvU0So9eqcrL6OZdSwI9xnhyy79kaSpXkhCgh6KS908-d87E0O6hTjSeaPH9aDd4M6mMORVHtNhwrrbclJcTgTa5yf75r7rYuPlF"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-transparent to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <span className="inline-block bg-secondary-container text-on-secondary-container text-[10px] md:text-xs font-bold px-3 py-1 rounded-full mb-3 md:mb-4 uppercase tracking-widest">
                Personalizados
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-headline">
                Esculturas Comestiveis
              </h3>
              <p className="text-white/80 font-body text-sm leading-relaxed">
                Se pode imaginar, nos podemos criar em forma de bolo.
              </p>
            </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            <div className="relative overflow-hidden rounded-xl bg-surface-container-low h-[350px] md:h-[450px] group">
              <img
                alt="Detalhe de Ganache"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2s6rI-llZh6hCaTKmPeypcSKff9CLYjGacl2CnGRbDPuUTOXy4_4QapuatclcVKfFtJjy1iXcf5mYcLIc5gOekclFAJSEkYly3ceTbLEh1utc_Pp8N6xNYft4-EI8FKrW1zXr3xrxZ1GCPCaLJxc0g_GW5rLaJTV_K_4y0ZQhNtgxd_3qnK46hOwM8P6q_638UWtISTjUUPJiMoYQR8LFCJkIbkB7oqkzYsJ9PQZeJceIPaTbMWuM5hl9B6QLkOpY9FwwauAy_6qx"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-on-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-surface/90 backdrop-blur-md p-4 rounded-full">
                  <span className="material-symbols-outlined text-primary">
                    visibility
                  </span>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl bg-surface-container-low h-[350px] md:h-[450px] group">
              <img
                alt="Bolo Festivo"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdWR-5u12e-ti9gdPq-xU6LwwgeCihPEoVSzBBiw77R7wO36oZy3tp6fdravNQT3c26DTAHiis9--ejAqoRH8Fer_Y4RVd3VCZ89VhSIAVHB7aEbDFzlkRFCmGnuqcE3WgcsyRJxd0s0Uk-ECNJuu376A-J1Vod-wYADZw4IBUCj2BWUfBGy0X3bChlygY-TYg9UVlK0mGux2FkMJe_I-vMjU7zkD_70s4sk8owTREnR-wgFo3WaX3SInTs48MKtO43-fh_KyIKv3r"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-on-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-surface/90 backdrop-blur-md p-4 rounded-full">
                  <span className="material-symbols-outlined text-primary">
                    visibility
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
