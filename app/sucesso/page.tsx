import Link from "next/link";

export default function Sucesso() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-rose-50">
      <div className="bg-white rounded-3xl shadow-xl p-10 text-center max-w-lg">
        <h1 className="text-4xl text-rose font-serif mb-4">
          Solicitação enviada!
        </h1>

        <p className="text-gray-600 mb-8">
          Recebemos seu pedido de orçamento.
          Em breve entraremos em contato.
        </p>

        <Link
          href="/"
          className="bg-rose text-white px-6 py-3 rounded-full"
        >
          Voltar para Home
        </Link>
      </div>
    </main>
  );
}