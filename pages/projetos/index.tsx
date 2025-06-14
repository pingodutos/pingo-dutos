import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Projetos() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Head>
        <title>Projetos | Pingo Dutos</title>
        <meta name="description" content="Conheça nossos principais projetos em sistemas de climatização e combate a incêndio." />
      </Head>

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Nossos Projetos
        </h1>

        {/* Projeto em Destaque */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Projeto em Destaque</h2>
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <Link href="/projetos/colcci">
              <div className="relative h-96">
                <Image
                  src="/images/clientes/colcci.png"
                  alt="Colcci"
                  fill
                  className="object-contain bg-white"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-3xl font-bold mb-2">Colcci</h3>
                  <p className="text-lg mb-4">Sistema completo de ventilação e climatização</p>
                  <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg">
                    Ver Projeto
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Outros Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Projeto Yasai */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <Link href="/projetos/yasai">
              <div className="relative h-64">
                <Image
                  src="/images/clientes/yasai.png"
                  alt="Yasai Bowl"
                  fill
                  className="object-contain bg-white"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold mb-2">Yasai Bowl</h3>
                  <p className="text-sm mb-4">Sistema de climatização e combate a incêndio</p>
                  <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg">
                    Ver Projeto
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
} 