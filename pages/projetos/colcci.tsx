import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function ColcciProject() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Head>
        <title>Colcci - Pingo Dutos</title>
        <meta name="description" content="Projeto de sistema de ventilação e climatização para a loja Colcci no Porto Velho Shopping." />
      </Head>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-transparent z-10"></div>
        <div className="relative h-[60vh] min-h-[500px] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/images/clientes/colcci.png"
              alt="Colcci"
              fill
              className="object-contain bg-white p-8"
              priority
            />
          </div>
          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
                Colcci
              </h1>
              <p className="text-xl text-gray-200 mb-8 drop-shadow-lg">
                Sistema de ventilação e climatização para a loja Colcci no Porto Velho Shopping
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo do Projeto */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-8">Sobre o Projeto</h2>
            <p className="text-lg mb-6">
              Projeto completo de sistema de ventilação e climatização para a loja Colcci, incluindo dutos de ar condicionado, ventilação e exaustão.
            </p>
            
            <h3 className="text-2xl font-bold mt-12 mb-6">Sistemas Executados</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Dutos de ventilação</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Dutos de Ar-Condicionado</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Sistema de Exaustão</span>
              </li>
            </ul>

            {/* Modelo 3D */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6">Visualização 3D do Projeto</h3>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  src="https://sketchfab.com/3d-models/colcci-62b693abb1c24d2f9a6e1d9efd66813d/embed"
                  title="Modelo 3D Colcci"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
              <p className="text-sm text-gray-400 mt-2">
                Visualize o projeto em 3D. Use o mouse para rotacionar, dar zoom e explorar os detalhes.
              </p>
            </div>

            {/* Galeria do Projeto */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6">Galeria do Projeto</h3>
              <div className="space-y-8">
                {/* Vídeo */}
                <div className="max-w-2xl mx-auto">
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl">
                    <video
                      src="/videos/colcci/1.mp4"
                      controls
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 