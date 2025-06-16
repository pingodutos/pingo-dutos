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
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-gray-900 to-gray-800 border-b border-blue-900 shadow-lg">
        <div className="w-full text-center px-4 z-10">
          <span className="inline-block bg-blue-700/80 text-white text-xs md:text-sm font-semibold rounded-full px-4 py-1 mb-4 tracking-widest uppercase shadow-md">Projeto em Destaque</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-3 drop-shadow-lg">Colcci</h1>
          <p className="text-lg md:text-2xl text-blue-100 font-medium max-w-2xl mx-auto drop-shadow-sm">Sistema de ventilação e climatização para a loja Colcci no Porto Velho Shopping</p>
        </div>
      </section>

      {/* Conteúdo do Projeto */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl space-y-16">
          {/* Sobre o Projeto */}
          <div className="bg-gray-900/80 rounded-2xl shadow-lg p-8 border border-blue-900">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-300">Sobre o Projeto</h2>
            <p className="text-lg text-gray-200 mb-2">
              Projeto completo de sistema de ventilação e climatização para a loja Colcci, incluindo dutos de ar condicionado, ventilação e exaustão.
            </p>
          </div>

          {/* Sistemas Executados */}
          <div className="bg-gray-900/80 rounded-2xl shadow-lg p-8 border border-blue-900">
            <h3 className="text-2xl font-bold mb-6 text-blue-300">Sistemas Executados</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <li className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-800/60 text-blue-300 text-xl"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></span>
                <span>Dutos de ventilação</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-800/60 text-blue-300 text-xl"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></span>
                <span>Dutos de Ar-Condicionado</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-800/60 text-blue-300 text-xl"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></span>
                <span>Sistema de Exaustão</span>
              </li>
            </ul>
          </div>

          {/* Modelo 3D */}
          <div className="bg-gray-900/80 rounded-2xl shadow-lg p-8 border border-blue-900">
            <h3 className="text-2xl font-bold mb-6 text-blue-300">Visualização 3D do Projeto</h3>
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
          <div className="bg-gray-900/80 rounded-2xl shadow-lg p-8 border border-blue-900">
            <h3 className="text-2xl font-bold mb-6 text-blue-300">Galeria do Projeto</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Vídeo */}
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg group">
                <video
                  src="/videos/colcci/1.mp4"
                  controls
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 