import { motion } from 'framer-motion';

export default function Pulsar3DWebsite() {
  const portfolio = [
    {
      title: 'Protótipos Industriais',
      image:
        'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Peças Personalizadas',
      image:
        'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Miniaturas & Design',
      image:
        'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  const services = [
    'Impressão 3D em alta resolução',
    'Modelagem 3D personalizada',
    'Protótipos para engenharia e arquitetura',
    'Produção sob demanda',
    'Consultoria para desenvolvimento de produtos',
    'Acabamento profissional e pintura',
  ];

  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.12),transparent_35%),radial-gradient(circle_at_bottom,rgba(0,100,255,0.15),transparent_35%)]" />
      <header className="relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop"
            alt="Impressão 3D"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#050816]/80 to-[#050816]" />
        </div>

        <nav className="relative z-10 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <img
              src="/logo-pulsar3d.png"
              alt="Pulsar3D Logo"
              className="h-14 w-auto object-contain"
            />
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-white/80">
            <a href="#servicos" className="hover:text-cyan-400 transition">
              Serviços
            </a>
            <a href="#portfolio" className="hover:text-cyan-400 transition">
              Portfólio
            </a>
            <a href="#sobre" className="hover:text-cyan-400 transition">
              Sobre
            </a>
            <a href="#contato" className="hover:text-cyan-400 transition">
              Contato
            </a>
          </div>
        </nav>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-7xl mx-auto px-8 py-28 lg:py-40 grid lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <div className="inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-cyan-300 mb-8">
              Tecnologia • Precisão • Inovação
            </div>

            <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              Transformando ideias em realidade com impressão 3D.
            </h2>

            <p className="text-lg text-white/70 leading-relaxed max-w-xl mb-10">
              A Pulsar3D cria peças personalizadas, protótipos e soluções inovadoras utilizando impressão 3D de alta precisão para empresas, designers e criadores.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contato"
                className="bg-cyan-400 hover:bg-cyan-300 text-black font-bold px-8 py-4 rounded-2xl transition shadow-2xl shadow-cyan-500/30"
              >
                Solicitar orçamento
              </a>

              <a
                href="#portfolio"
                className="border border-white/20 hover:border-cyan-400 hover:text-cyan-300 px-8 py-4 rounded-2xl transition"
              >
                Ver projetos
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400 blur-3xl opacity-20 rounded-full" />

            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1200&auto=format&fit=crop"
                alt="Tecnologia 3D"
                className="w-full h-[520px] object-cover"
              />
            </div>
          </div>
        </motion.section>
      </header>

      <section id="servicos" className="max-w-7xl mx-auto px-8 py-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
              O que fazemos
            </p>
            <h3 className="text-4xl md:text-5xl font-black">
              Soluções completas em impressão 3D
            </h3>
          </div>

          <p className="max-w-2xl text-white/60 leading-relaxed">
            Desde prototipagem rápida até produção personalizada, entregamos peças com acabamento profissional e atenção aos mínimos detalhes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400/40 hover:-translate-y-1 transition duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 flex items-center justify-center mb-6">
                <div className="w-6 h-6 rounded-full bg-cyan-400" />
              </div>

              <h4 className="text-xl font-bold leading-relaxed">{service}</h4>
            </div>
          ))}
        </div>
      </section>

      <section id="portfolio" className="bg-white/5 border-y border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16 text-center">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
              Portfólio
            </p>
            <h3 className="text-4xl md:text-5xl font-black mb-6">
              Projetos produzidos com tecnologia de ponta
            </h3>
            <p className="text-white/60 max-w-2xl mx-auto">
              Conheça alguns exemplos de peças e soluções desenvolvidas pela Pulsar3D.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {portfolio.map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-black/30"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>

                <div className="p-8">
                  <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                  <p className="text-white/60 leading-relaxed">
                    Produção com precisão, acabamento premium e materiais de alta qualidade.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="max-w-7xl mx-auto px-8 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1581092918484-8313f2b1e8b3?q=80&w=1200&auto=format&fit=crop"
            alt="Equipe Pulsar3D"
            className="rounded-[2rem] border border-white/10 shadow-2xl"
          />
        </div>

        <div>
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Sobre a Pulsar3D
          </p>

          <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
            Tecnologia criativa para transformar projetos em produtos reais.
          </h3>

          <p className="text-white/70 leading-relaxed mb-6">
            Trabalhamos com impressão 3D de última geração para entregar soluções rápidas, eficientes e personalizadas. Nossa missão é unir design, engenharia e inovação em cada projeto.
          </p>

          <p className="text-white/60 leading-relaxed mb-10">
            Atendemos clientes de diversos segmentos, oferecendo desde protótipos funcionais até peças exclusivas para decoração, arquitetura, engenharia e colecionáveis.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <div className="text-4xl font-black text-cyan-400 mb-2">+500</div>
              <div className="text-white/60">Projetos realizados</div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <div className="text-4xl font-black text-cyan-400 mb-2">24h</div>
              <div className="text-white/60">Resposta rápida</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-8 text-center">
          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-12 backdrop-blur-xl">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
              Solicite um orçamento
            </p>

            <h3 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Vamos construir seu próximo projeto em 3D.
            </h3>

            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Entre em contato para desenvolver peças exclusivas, protótipos funcionais e soluções sob medida para o seu negócio.
            </p>

            <div className="flex justify-center mb-10">
              <a
                href="https://wa.me/5511999999999?text=Olá%20Pulsar3D%2C%20gostaria%20de%20solicitar%20um%20orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-400 hover:bg-cyan-300 text-black font-bold px-10 py-5 rounded-2xl transition shadow-2xl shadow-cyan-500/30 text-lg"
              >
                Solicitar orçamento via WhatsApp
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              

              <a
                href="https://wa.me/5511999999999"
                className="border border-white/20 px-8 py-4 rounded-2xl hover:border-cyan-400 hover:text-cyan-300 transition"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/5511999999999"
        className="fixed bottom-6 right-6 z-50 bg-cyan-400 hover:bg-cyan-300 text-black font-bold px-6 py-4 rounded-full shadow-2xl shadow-cyan-500/40 transition"
      >
        WhatsApp
      </a>

      <footer className="border-t border-white/10 py-8 px-8 text-center text-white/40 text-sm">
        © 2026 Pulsar3D — Impressão 3D de alta precisão.
      </footer>
    </div>
  );
}
