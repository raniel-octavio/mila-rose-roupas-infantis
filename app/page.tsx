"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  CreditCard,
  Gift,
  Headphones,
  Heart,
  Lock,
  Package,
  Search,
  ShoppingBag,
  Star,
  Tag,
  Truck,
  User,
} from "lucide-react";

const HERO_SLIDES = [
  {
    image: "/images/vestidobranco.png",
    alt: "Conjunto em tule com flores",
    objectPosition: "20% 50%",
  },
  {
    image: "/images/vestido-rosa.png",
    alt: "Vestido rosa em tule",
    objectPosition: "center",
  },
  {
    image: "/images/vestidoacessorio.png",
    alt: "Vestido vermelho com rosas",
    objectPosition: "center",
  },
  {
    image: "/images/vestido-festa.jpg",
    alt: "Vestido de festa vermelho",
    objectPosition: "center",
  },
];

const COLLECTION_ITEMS = [
  {
    title: "Vestidos",
    image: "/images/vestido-rosa.png",
    objectPosition: "center",
  },
  {
    title: "Conjuntos",
    image: "/images/conjunto.jpg",
    objectPosition: "center",
  },
  {
    title: "Festas",
    image: "/images/vestido-festa.jpg",
    objectPosition: "center",
  },
  {
    title: "Acessórios",
    image: "/images/modeloflor.png",
    objectPosition: "85% 12%",
  },
];

const INSTAGRAM_IMAGES = [
  {
    src: "/images/modelo.png",
    alt: "Conjunto delicado em tule",
    objectPosition: "center",
  },
  {
    src: "/images/modelovestidorosa.png",
    alt: "Detalhe em tule rosa",
    objectPosition: "10% 5%",
  },
  {
    src: "/images/vestido-vermelho.png",
    alt: "Vestido vermelho",
    objectPosition: "center",
  },
  {
    src: "/images/modelobranco.png",
    alt: "Detalhe das flores em tule",
    objectPosition: "50% 20%",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-white min-h-screen">
      {/* Top Announcement Bar */}
      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('/images/vestido-rosa.png')" }}
      >
        <div className="absolute inset-0 bg-rose/70"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-5">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-center text-white">

            <span className="font-semibold">
              ✓ Envio para todo o Brasil
            </span>

            <span className="font-semibold">
              ✓ Parcele em até 6x sem juros
            </span>

            <span className="font-semibold">
              ✓ Feito sob medida para todas as ocasiões
            </span>

          </div>
        </div>
      </section>

      {/* Header */}
<header className="bg-white border-b border-rose-light">

  {/* Mobile */}
  <div className="md:hidden px-6 py-5">

    <div className="text-center">
      <h1 className="text-3xl font-serif text-rose leading-tight">
        Mila & Rose
      </h1>

      <p className="text-[10px] tracking-[3px] uppercase text-rose/80 flex items-center justify-center gap-1.5 mt-1">
        Roupas Infantis
        <Heart size={8} fill="currentColor" className="text-rose" />
      </p>
    </div>

    <nav className="flex justify-center gap-6 mt-5 text-sm text-gray-600">
      <Link href="/" className="text-rose font-medium">
        Início
      </Link>

      <Link href="/orcamento" className="hover:text-rose transition">
        Solicitar Orçamento
      </Link>

      {/*<Link href="/colecao" className="hover:text-rose transition">
        Coleção
      </Link>
      <Link href="/novidades" className="hover:text-rose transition">
        Novidades
      </Link>
      <Link href="/acessorios" className="hover:text-rose transition">
        Acessórios
      </Link>*/}
    </nav>

  </div>

  {/* Desktop */}
  <div className="hidden md:grid max-w-7xl mx-auto px-6 h-24 grid-cols-3 items-center">

    <nav className="flex gap-6 lg:gap-8 text-sm text-gray-600">
      <Link href="/" className="text-rose font-medium">
        Início
      </Link>

      <Link href="/orcamento" className="hover:text-rose transition">
        Solicitar Orçamento
      </Link>

      {/*<Link href="/colecao" className="hover:text-rose transition">
        Coleção
      </Link>
      <Link href="/novidades" className="hover:text-rose transition">
        Novidades
      </Link>
      <Link href="/acessorios" className="hover:text-rose transition">
        Acessórios
      </Link>*/}
    </nav>

    <div className="text-center">
      <h1 className="text-4xl lg:text-[2.75rem] font-serif text-rose leading-tight">
        Mila & Rose
      </h1>

      <p className="text-xs tracking-[3px] uppercase text-rose/80 flex items-center justify-center gap-1.5 mt-0.5">
        Roupas Infantis
        <Heart size={8} fill="currentColor" className="text-rose" />
      </p>
    </div>

    {/*<div className="flex gap-5 justify-end items-center">
      <button aria-label="Buscar" className="text-gray-600 hover:text-rose transition">
        <Search size={20} strokeWidth={1.5} />
      </button>

      <button aria-label="Conta" className="text-gray-600 hover:text-rose transition">
        <User size={20} strokeWidth={1.5} />
      </button>

      <button aria-label="Carrinho" className="relative text-gray-600 hover:text-rose transition">
        <ShoppingBag size={20} strokeWidth={1.5} />
        <span className="absolute -top-1.5 -right-2 bg-rose text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
          0
        </span>
      </button>
    </div>*/}

  </div>
</header>
      {/* Hero Carousel */}
      <section className="relative h-[480px] md:h-[540px] lg:h-[500px] overflow-hidden">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="object-cover"
              style={{ objectPosition: slide.objectPosition }}
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/45 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-xl">
            <p className="flex items-center gap-2 text-rose text-xs tracking-[3px] uppercase font-medium">
              <Heart size={10} fill="currentColor" />
              Delicadeza em cada detalhe
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.15] text-gray-800 font-serif">
              Feito para{" "}
              <span className="font-script text-rose text-5xl md:text-6xl lg:text-[4rem]">
                momentos
              </span>
              <br />
              inesquecíveis
            </h2>

            <Heart size={14} fill="currentColor" className="text-rose mt-3" />

            <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed max-w-md">
              Tecidos premium selecionados com carinho para garantir conforto,
              elegância e delicadeza em cada peça da nossa coleção.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {/*<Link
                href="/colecao"
                className="bg-rose hover:bg-rose-dark transition text-white text-xs tracking-wider uppercase px-7 py-3.5 rounded-full flex items-center gap-2 font-medium"
              >
                Conheça a coleção
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/novidades"
                className="border border-rose text-rose hover:bg-rose-light transition text-xs tracking-wider uppercase px-7 py-3.5 rounded-full font-medium"
              >
                Novidades
              </Link>*/}
            </div>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-rose scale-110"
                  : "bg-rose/30 hover:bg-rose/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-rose-light py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Star,
              title: "Qualidade Premium",
              desc: "Tecidos selecionados com os mais altos padrões de qualidade.",
            },
            {
              icon: Package,
              title: "Envio Rápido",
              desc: "Enviamos para todo o Brasil com agilidade e cuidado.",
            },
            {
              icon: Lock,
              title: "Compra Segura",
              desc: "Seus dados protegidos em ambiente 100% seguro.",
            },
            {
              icon: Heart,
              title: "Feito com Amor",
              desc: "Cada peça feita para tornar momentos inesquecíveis.",
            },
          ].map((item) => (
            <div key={item.title} className="flex gap-4 items-start">
              <item.icon
                size={22}
                strokeWidth={1.5}
                className="text-rose shrink-0 mt-0.5"
              />
              <div>
                <h3 className="font-semibold text-sm text-gray-800">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Collection Grid */}
      <section className="max-w-7xl mx-auto px-6 py-5 md:py-20">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
          <div>
            <span className="uppercase text-rose tracking-[3px] text-xs font-medium">
              Para cada ocasião
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-serif mt-2 text-gray-800">
              Nossa Coleção
            </h2>
          </div>
          {/*<Link
            href="/colecao"
            className="border border-rose text-rose hover:bg-rose-light transition text-xs tracking-wider uppercase px-6 py-3 rounded-full flex items-center gap-2 font-medium shrink-0"
          >
            Ver toda coleção
            <ArrowRight size={14} />
          </Link>*/}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {COLLECTION_ITEMS.map((item) => (
             <div
              key={item.title}
             //href="/colecao"
              className="group relative overflow-hidden rounded-xl aspect-[3/4]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
                style={{ objectPosition: item.objectPosition }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 pb-6 text-center text-white">
                <h3 className="text-xl md:text-2xl font-serif">{item.title}</h3>
                {/*<span className="text-[10px] md:text-xs tracking-wider uppercase mt-1 inline-block opacity-90">
                  Ver mais →
                </span>*/}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram Section */}
      <section className="bg-rose-pale py-5 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[35%_65%] gap-10 lg:gap-12 items-center">
            <div>
              {/*<span className="uppercase text-rose tracking-[3px] text-xs font-medium">
                Siga nosso Instagram
              </span>*/}
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-serif mt-3 text-gray-800 leading-tight">
                Inspirações que{" "}
                <span className="font-script text-rose text-4xl md:text-5xl">
                  encantam
                </span>
              </h2>
              <p className="mt-5 text-gray-500 text-sm leading-relaxed max-w-sm">
                Criando momentos especiais.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                Vestidos desenvolvidos com carinho, qualidade e atenção aos detalhes para tornar cada ocasião inesquecível.
              </p>
             {/* <a
                href="https://instagram.com/milaerose.oficial"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-7 bg-rose hover:bg-rose-dark transition text-white text-xs tracking-wider uppercase px-7 py-3.5 rounded-full font-medium"
              >
                @milaerose.oficial
              </a>*/}
            </div>

            <div className="grid grid-cols-4 gap-3 md:gap-4">
              {INSTAGRAM_IMAGES.map((item, index) => (
                <div
                  key={index}
                  className="relative aspect-[3/4] rounded-xl overflow-hidden"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover hover:scale-105 transition duration-500"
                    style={{ objectPosition: item.objectPosition }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Feature Bar */}
      <section className="bg-white py-12 md:py-14 border-t border-rose-light">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: Gift,
              title: "Embalagem para presente",
              desc: "Embalamos com carinho para você presentear quem ama.",
            },
            {
              icon: Tag,
              title: "Troca fácil",
              desc: "Política de trocas simples e descomplicada.",
            },
            {
              icon: Headphones,
              title: "Atendimento personalizado",
              desc: "Estamos prontos para ajudar em cada etapa.",
            },
          ].map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center gap-3">
              <item.icon
                size={28}
                strokeWidth={1.5}
                className="text-rose"
              />
              <div>
                <h3 className="font-semibold text-sm text-gray-800">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1.5 leading-relaxed max-w-[220px] mx-auto">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
  className="relative text-white overflow-hidden"
  style={{
    backgroundImage: "url('/images/vestido-rosa.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-rose/10"></div>

  {/* Efeito gradiente */}
  <div className="absolute inset-0 bg-gradient-to-b from-rose/70 via-rose/80 to-rose"></div>

  <div className="relative max-w-7xl mx-auto px-6 py-14">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

      <div>
        <h3 className="text-4xl font-serif drop-shadow-md">
          Mila & Rose
        </h3>

        <p className="text-[10px] tracking-[3px] uppercase mt-2 opacity-90 flex items-center gap-1.5">
          Roupas Infantis
          <Heart size={8} fill="currentColor" />
        </p>

        <p className="mt-5 text-sm text-white/90 leading-relaxed max-w-xs">
          Vestidos desenvolvidos com carinho, elegância e atenção aos detalhes
          para tornar cada momento inesquecível.
        </p>
      </div>

      <div>
        <h4 className="text-xs tracking-[2px] uppercase font-semibold mb-4">
          Institucional
        </h4>

        <ul className="space-y-3 text-sm">
          <li>
            <Link
              href="/sobre"
              className="hover:text-white transition"
            >
              Sobre Nós
            </Link>
          </li>
        </ul>
      </div>

      {/*
      <div>
        <h4 className="text-xs tracking-[2px] uppercase font-semibold mb-4">
          Institucional
        </h4>
        <ul className="space-y-2.5 text-sm opacity-90">
          <li>
            <Link href="#" className="hover:opacity-100 opacity-90 transition">
              Sobre Nós
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:opacity-100 opacity-90 transition">
              Contato
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:opacity-100 opacity-90 transition">
              Política de Trocas
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-xs tracking-[2px] uppercase font-semibold mb-4">
          Ajuda
        </h4>
        <ul className="space-y-2.5 text-sm opacity-90">
          <li>
            <Link href="#" className="hover:opacity-100 opacity-90 transition">
              Como Comprar
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:opacity-100 opacity-90 transition">
              Pagamentos
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:opacity-100 opacity-90 transition">
              Entrega
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-xs tracking-[2px] uppercase font-semibold mb-2">
          Newsletter
        </h4>

        <p className="text-sm text-white/90 mb-4">
          Receba novidades e promoções exclusivas.
        </p>

        <div className="relative">
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            className="w-full bg-white/95 backdrop-blur text-gray-800 text-sm rounded-full pl-5 pr-12 py-3 outline-none placeholder:text-gray-400"
          />

          <button
            aria-label="Cadastrar newsletter"
            className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-rose hover:bg-rose-dark transition text-white w-9 h-9 rounded-full flex items-center justify-center"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

    </div>

    <div className="border-t border-white/20 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
      <p className="text-xs text-white/80">
        © 2026 Mila & Rose. Todos os direitos reservados.
      </p>

      {/*<div className="flex gap-5">
        ...
      </div>*/}
    </div>
  </div>
</footer>
    </main>
  );
}
