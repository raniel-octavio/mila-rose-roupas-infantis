"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Calendar,
  Heart,
  Mail,
  MapPin,
  Phone,
  Upload,
  User,
  X,
} from "lucide-react";

export default function OrcamentoPage() {
  const [loading, setLoading] = useState(false);
  const [imagens, setImagens] = useState<File[]>([]);
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("/api/orcamento", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        window.location.href = "/sucesso";
      }
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-white">
      {/* Header */}
      <section 
        className="relative text-white py-10 bg-cover bg-center" 
        style={{ backgroundImage: "url('/images/vestido-rosa.png')" }}
      >
        {/* Overlay para suavizar e manter contraste */}
        <div className="absolute inset-0 bg-rose/70"></div>

        <div className="relative max-w-5xl mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-white text-rose font-medium px-6 py-2 rounded-full border border-rose/30 shadow-md hover:bg-rose hover:text-white hover:shadow-lg transition-all duration-300"
          >
            ← Voltar para Home
          </Link>

        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center mt-10">
          <h1 className="text-5xl font-serif mb-4">
            Solicitar Orçamento
          </h1>

          <p className="max-w-2xl mx-auto text-white/90">
            Preencha os detalhes abaixo para receber um orçamento
            personalizado do seu vestido.
          </p>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-6 py-6">
  <div className="bg-white border border-rose/10 shadow-md rounded-2xl p-5">
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">

      <div>
        <span className="font-semibold text-rose">
          ✓ Atendimento Humano
        </span>
      </div>

      <div>
        <span className="font-semibold text-rose">
          ✓ Orçamento Personalizado
        </span>
      </div>

      <div>
        <span className="font-semibold text-rose">
          ✓ Retorno Rápido
        </span>
      </div>

    </div>

    <p className="text-center text-gray-600 mt-4 text-sm md:text-base">
      Após o envio, nossa equipe analisará as informações e
      entrará em contato o mais breve possível através do
      WhatsApp ou e-mail informado.
    </p>
  </div>
</section>


      <section className="max-w-5xl mx-auto px-6 py-0">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-12"
        >
          {/* Dados */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-rose">
              Dados da Cliente
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="font-medium block mb-2">
                  Nome Completo *
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-4 text-gray-400"
                  />

                  <input
                    required
                    name="nome"
                    className="w-full border rounded-xl pl-11 pr-4 py-3"
                  />
                </div>
              </div>

              <div>
                <label className="font-medium block mb-2">
                  WhatsApp *
                </label>

                <div className="relative">
                  <Phone
                    size={18}
                    className="absolute left-4 top-4 text-gray-400"
                  />

                  <input
                    required
                    name="telefone"
                    className="w-full border rounded-xl pl-11 pr-4 py-3"
                  />
                </div>
              </div>

              <div>
                <label className="font-medium block mb-2">
                  Email *
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-4 text-gray-400"
                  />

                  <input
                    type="email"
                    required
                    name="email"
                    className="w-full border rounded-xl pl-11 pr-4 py-3"
                  />
                </div>
              </div>

              <div>
                <label className="font-medium block mb-2">
                  Cidade / Estado
                </label>

                <div className="relative">
                  <MapPin
                    size={18}
                    className="absolute left-4 top-4 text-gray-400"
                  />

                  <input
                    name="cidade"
                    className="w-full border rounded-xl pl-11 pr-4 py-3"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Evento */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-rose">
              Evento
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="font-medium block mb-2">
                  Tipo do Evento
                </label>

                <select
                  name="evento"
                  className="w-full border rounded-xl p-3"
                >
                  <option>Casamento</option>
                  <option>Formatura</option>
                  <option>15 Anos</option>
                  <option>Ensaio Fotográfico</option>
                  <option>Evento Corporativo</option>
                  <option>Outro</option>
                </select>
              </div>

              <div>
                <label className="font-medium block mb-2">
                  Data do Evento
                </label>

                <div className="relative">
                  <Calendar
                    size={18}
                    className="absolute left-4 top-4 text-gray-400"
                  />

                  <input
                    type="date"
                    name="dataEvento"
                    className="w-full border rounded-xl pl-11 pr-4 py-3"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Vestido */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-rose">
              Detalhes do Vestido
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="font-medium block mb-2">
                  Modelo
                </label>

                <select
                  name="modelo"
                  className="w-full border rounded-xl p-3"
                >
                  <option>Longo</option>
                  <option>Midi</option>
                  <option>Curto</option>
                  <option>Princesa</option>
                  <option>Sereia</option>
                  <option>Sob Medida</option>
                </select>
              </div>

              <div>
                <label className="font-medium block mb-2">
                  Cor Desejada
                </label>

                <input
                  name="cor"
                  className="w-full border rounded-xl p-3"
                />
              </div>

              <div>
                <label className="font-medium block mb-2">
                  Tecido
                </label>

                <input
                  name="tecido"
                  className="w-full border rounded-xl p-3"
                />
              </div>

              <div>
                <label className="font-medium block mb-2">
                  Estilo Desejado
                </label>

                <select
                  name="estilo"
                  className="w-full border rounded-xl p-3"
                >
                  <option>Romântico</option>
                  <option>Princesa</option>
                  <option>Clássico</option>
                  <option>Moderno</option>
                  <option>Luxo</option>
                  <option>Minimalista</option>
                  <option>Outro</option>
                </select>
              </div>
            </div>
          </div>

          {/* Medidas */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-rose">
              Medidas
            </h2>

            <div className="grid md:grid-cols-3 gap-5">
              <input
                name="altura"
                placeholder="Altura"
                className="border rounded-xl p-3"
              />

              <input
                name="busto"
                placeholder="Busto"
                className="border rounded-xl p-3"
              />

              <input
                name="cintura"
                placeholder="Cintura"
                className="border rounded-xl p-3"
              />

              <input
                name="quadril"
                placeholder="Quadril"
                className="border rounded-xl p-3"
              />

              <input
                name="ombro"
                placeholder="Ombro"
                className="border rounded-xl p-3"
              />

              <input
                name="comprimento"
                placeholder="Comprimento"
                className="border rounded-xl p-3"
              />
            </div>
          </div>

          {/* Upload */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-rose">
              Fotos de Referência
            </h2>

            <label className="border-2 border-dashed border-rose rounded-2xl p-10 flex flex-col items-center cursor-pointer hover:bg-rose-50 transition-all">
              <Upload size={36} className="text-rose mb-3" />

              <span className="font-medium">
                Clique para enviar imagens
              </span>

              <span className="text-sm text-gray-500 mt-1">
                PNG, JPG ou WEBP
              </span>

              <input
                type="file"
                multiple
                accept="image/*"
                name="imagens"
                className="hidden"
                onChange={(e) => {
                  if (!e.target.files) return;

                  const arquivos = Array.from(e.target.files);

                  setImagens((prev) => [...prev, ...arquivos]);
                }}
              />
            </label>

            {imagens.length > 0 && (
              <div className="mt-6">
                <p className="text-sm text-gray-500 mb-4">
                  {imagens.length} imagem(ns) selecionada(s)
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {imagens.map((imagem, index) => (
                    <div
                      key={`${imagem.name}-${index}`}
                      className="relative rounded-2xl overflow-hidden border bg-white shadow-sm"
                    >
                      <div className="relative aspect-square">
                        <Image
                          src={URL.createObjectURL(imagem)}
                          alt={imagem.name}
                          fill
                          sizes="(max-width:768px) 50vw, 25vw"
                          className="object-cover"
                        />
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          setImagens((prev) =>
                            prev.filter((_, i) => i !== index)
                          );
                        }}
                        className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg"
                      >
                        <X size={14} />
                      </button>

                      <div className="p-2">
                        <p className="text-xs truncate">
                          {imagem.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Observações */}
          

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-rose hover:bg-rose-700 transition text-white py-5 rounded-2xl text-lg font-semibold flex items-center justify-center gap-3"
          >
            <Heart size={20} />

            {loading
              ? "Enviando..."
              : "Solicitar Orçamento"}
          </button>
        </form>
      </section>
    </main>
  );
}