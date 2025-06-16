import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function YasaiProject() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Head>
        <title>Yasai Bowl</title>
        <meta name="description" content="Projeto completo de sistemas de ventilação, climatização e exaustão para o Yasai Bowl." />
      </Head>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-900 to-gray-800 z-10"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="relative w-40 h-40 md:w-64 md:h-64 flex items-center justify-center">
            <Image
              src="/images/clientes/yasai.png"
              alt="Logo Yasai Bowl"
              fill
              className="object-contain opacity-10 blur-sm"
            />
            <div className="absolute inset-0 bg-black/30 rounded-full"></div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Yasai Bowl
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Sistema completo de ventilação e climatização
          </p>
        </div>
      </section>

      {/* Conteúdo do Projeto */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-8">Sobre o Projeto</h2>
            <p className="text-lg mb-6">
              Projeto de Exaustão de particulas gordurosas através de Coifa Mult-UV, com Sistema de Proteção e Combate a Incêndio, com instalação de Saponificante, Dutos de Ar-Condicionado para Split-Dutado e dutos de ventilação.
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
                <span>Dutos de Ar-Condicionado para Split Dutado</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Dutos de Exaustão</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Sistema Saponificante para combate a incêndio da Coifa</span>
              </li>
            </ul>

            {/* Modelo 3D */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6">Visualização 3D do Projeto</h3>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  src="https://sketchfab.com/3d-models/projeto-yasai-pingo-dutos-e27f795431a9426d8d26411aec958356/embed"
                  title="Modelo 3D Yasai Bowl"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
              <p className="text-sm text-gray-400 mt-2">
                Visualize o projeto em 3D. Use o mouse para rotacionar, zoom e explorar os detalhes.
              </p>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6">Galeria do Projeto</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/yasai/1.png"
                    alt="Yasai Bowl - Foto 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/yasai/2.png"
                    alt="Yasai Bowl - Foto 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/yasai/3.png"
                    alt="Yasai Bowl - Foto 3"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 