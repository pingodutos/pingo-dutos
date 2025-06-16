import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function RedirectProjetos() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/portfolio');
  }, [router]);
  return null;
}

export function Projetos() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Head>
        <title>Portfólio | Pingo Dutos</title>
        <meta name="description" content="Conheça nossos principais projetos em sistemas de climatização e combate a incêndio." />
      </Head>

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Nossos Projetos
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Projeto Colcci */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 flex flex-col">
            <Link href="/projetos/colcci" className="flex-1 flex flex-col">
              <div className="relative h-48 flex items-center justify-center bg-white">
                <Image
                  src="/images/clientes/colcci.png"
                  alt="Colcci"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold mb-2">Colcci</h3>
                <p className="text-sm mb-4">Sistema completo de ventilação e climatização</p>
                <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg">
                  Ver Projeto
                </span>
              </div>
            </Link>
            {/* Visualização 3D do Colcci */}
            <div className="p-4">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://sketchfab.com/3d-models/colcci-62b693abb1c24d2f9a6e1d9efd66813d/embed"
                  title="Modelo 3D Colcci"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
              <p className="text-xs text-gray-400 mt-2 text-center">
                Visualize o projeto em 3D
              </p>
            </div>
          </div>

          {/* Projeto Yasai */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 flex flex-col">
            <Link href="/projetos/yasai" className="flex-1 flex flex-col">
              <div className="relative h-48 flex items-center justify-center bg-white">
                <Image
                  src="/images/clientes/yasai.png"
                  alt="Yasai Bowl"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold mb-2">Yasai Bowl</h3>
                <p className="text-sm mb-4">Sistema de climatização e combate a incêndio</p>
                <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg">
                  Ver Projeto
                </span>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
} 