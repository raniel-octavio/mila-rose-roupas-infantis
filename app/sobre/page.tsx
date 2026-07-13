"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, Scissors, Sparkles, ShieldCheck, MapPin } from "lucide-react";

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-white">
      {/* HERO */}
      <section className="relative h-[500px] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/images/conjunto.jpg"
          alt="Mila & Rose"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 max-w-4xl px-6 text-white">
          <h1 className="font-serif text-5xl md:text-7xl mb-6">
            Sobre a Mila & Rose
          </h1>

          <p className="text-lg md:text-xl text-white/90">
            Vestidos criados com amor, cuidado e atenção aos
            detalhes para tornar momentos especiais ainda mais
            inesquecíveis.
          </p>
        </div>
      </section>

      {/* BOTÃO VOLTAR */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-rose font-medium hover:opacity-80"
        >
          ← Voltar para Home
        </Link>
      </div>

      {/* HISTÓRIA */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="font-serif text-4xl text-rose mb-6">
              Nossa História
            </h2>

            <p className="text-gray-700 leading-8 mb-5">
              A Mila & Rose nasceu em São José dos Campos – SP
              com um propósito simples: criar vestidos que
              transmitam beleza, elegância e personalidade.
            </p>

            <p className="text-gray-700 leading-8 mb-5">
              Cada peça é produzida com cuidado artesanal,
              atenção aos acabamentos e seleção criteriosa dos
              tecidos, garantindo conforto e qualidade em cada
              detalhe.
            </p>

            <p className="text-gray-700 leading-8">
              Mais do que fabricar roupas, buscamos realizar
              sonhos, proporcionando uma experiência única para
              cada cliente que confia em nosso trabalho.
            </p>
          </div>

          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/modelobranco.png"
              alt="Vestido Mila & Rose"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="bg-rose-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-center text-rose mb-14">
            O que nos torna especiais
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
              <Heart className="mx-auto mb-4 text-rose" size={38} />
              <h3 className="font-semibold mb-3">
                Feito com Amor
              </h3>
              <p className="text-gray-600 text-sm leading-7">
                Cada vestido recebe atenção especial do início
                ao fim da produção.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
              <Scissors className="mx-auto mb-4 text-rose" size={38} />
              <h3 className="font-semibold mb-3">
                Acabamento Premium
              </h3>
              <p className="text-gray-600 text-sm leading-7">
                Cortes precisos e acabamento refinado para
                garantir elegância e conforto.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
              <Sparkles className="mx-auto mb-4 text-rose" size={38} />
              <h3 className="font-semibold mb-3">
                Tecidos Selecionados
              </h3>
              <p className="text-gray-600 text-sm leading-7">
                Trabalhamos apenas com materiais escolhidos pela
                beleza, durabilidade e conforto.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
              <ShieldCheck
                className="mx-auto mb-4 text-rose"
                size={38}
              />
              <h3 className="font-semibold mb-3">
                Honestidade e Transparência
              </h3>
              <p className="text-gray-600 text-sm leading-7">
                Prezamos pela confiança, comunicação clara e
                compromisso com cada cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSÃO */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <MapPin
          size={40}
          className="mx-auto text-rose mb-6"
        />

        <h2 className="font-serif text-4xl text-rose mb-6">
          Produzido em São José dos Campos – SP
        </h2>

        <p className="text-gray-700 leading-8 text-lg">
          Nossa fábrica está localizada em São José dos Campos,
          interior de São Paulo, onde cada vestido é produzido
          com dedicação, carinho e responsabilidade.
        </p>

        <p className="text-gray-700 leading-8 text-lg mt-6">
          Acreditamos que qualidade, respeito ao cliente e amor
          pelo que fazemos são os pilares que sustentam nossa
          marca.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-rose text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-4xl mb-6">
            Vamos criar seu vestido?
          </h2>

          <p className="text-white/90 mb-8">
            Solicite um orçamento personalizado e receba uma
            proposta feita especialmente para você.
          </p>

          <Link
            href="/orcamento"
            className="bg-white text-rose px-8 py-4 rounded-full font-semibold hover:shadow-xl transition"
          >
            Solicitar Orçamento
          </Link>
        </div>
      </section>
    </main>
  );
}