import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function DerivadosMilhoProject() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Head>
        <title>Derivados do Milho</title>
        <meta name="description" content="Projeto de dutos de exaustão, coifa mult UV com saponificante e dutos de ar condicionado para Derivados do Milho." />
      </Head>

      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center bg-gradient-to-br from-yellow-900 via-gray-900 to-gray-800 border-b border-yellow-900 shadow-lg">
        <div className="w-full text-center px-4 z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-3 drop-shadow-lg">Derivados do Milho</h1>
          <p className="text-lg md:text-2xl text-yellow-100 font-medium max-w-2xl mx-auto drop-shadow-sm">Dutos de exaustão, coifa mult UV com saponificante e dutos de ar condicionado</p>
        </div>
      </section>

      {/* Conteúdo do Projeto */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl space-y-16">
          {/* Sobre o Projeto */}
          <div className="bg-gray-900/80 rounded-2xl shadow-lg p-8 border border-yellow-900">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-300">Sobre o Projeto</h2>
            <p className="text-lg text-gray-200 mb-2">
              Execução de dutos de exaustão, instalação de coifa mult UV com sistema saponificante e dutos de ar condicionado para climatização eficiente do ambiente.
            </p>
          </div>

          {/* Sistemas Executados */}
          <div className="bg-gray-900/80 rounded-2xl shadow-lg p-8 border border-yellow-900">
            <h3 className="text-2xl font-bold mb-6 text-yellow-300">Sistemas Executados</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <li className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-800/60 text-yellow-300 text-xl"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></span>
                <span>Dutos de exaustão</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-800/60 text-yellow-300 text-xl"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></span>
                <span>Coifa mult UV com saponificante</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-800/60 text-yellow-300 text-xl"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></span>
                <span>Dutos de ar condicionado</span>
              </li>
            </ul>
          </div>

          {/* Modelo 3D */}
          <div className="bg-gray-900/80 rounded-2xl shadow-lg p-8 border border-yellow-900">
            <h3 className="text-2xl font-bold mb-6 text-yellow-300">Visualização 3D do Projeto</h3>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src="https://sketchfab.com/3d-models/derivadodomilho-vista3d-3d-4e761f34e27e4b1cb76ec7db812a083a/embed"
                title="Modelo 3D Derivados do Milho"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
            <p className="text-sm text-gray-400 mt-2">
              Visualize o projeto em 3D. Use o mouse para rotacionar, dar zoom e explorar os detalhes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 