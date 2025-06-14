import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Servicos() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Head>
        <title>Serviços - Pingo Dutos</title>
        <meta name="description" content="Conheça nossos serviços em sistemas de dutos, climatização e combate a incêndio" />
      </Head>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute min-w-full min-h-full object-cover"
          >
            <source src="/videos/background.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
          >
            Nossos Serviços
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-white"
          >
            Soluções completas em sistemas de climatização e combate a incêndio
          </motion.p>
        </div>
      </section>

      {/* Serviços Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Dutos de Ar */}
            <Link href="/servicos/dutos-de-ar" className="group">
              <div className="relative h-[400px] rounded-2xl overflow-hidden bg-white shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100">
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-40 h-40 text-blue-500 transform transition-transform duration-500 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
                      <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="currentColor" className="animate-spin-slow"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Instalações de Dutos de Ar</h3>
                  <p className="text-gray-600 mb-6">Sistemas completos de ventilação e climatização para ambientes comerciais e industriais</p>
                  <span className="inline-flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Saiba mais
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            {/* Água Gelada */}
            <Link href="/servicos/agua-gelada" className="group">
              <div className="relative h-[400px] rounded-2xl overflow-hidden bg-white shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50">
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M30 0c16.569 0 30 13.431 30 30 0 16.569-13.431 30-30 30C13.431 60 0 46.569 0 30 0 13.431 13.431 0 30 0zm0 2C14.536 2 2 14.536 2 30s12.536 28 28 28 28-12.536 28-28S45.464 2 30 2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-40 h-40 text-cyan-500 transform transition-transform duration-500 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
                      <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="currentColor" className="animate-pulse"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Tubulações de Água Gelada</h3>
                  <p className="text-gray-600 mb-6">Sistemas de climatização central com tubulações de alta eficiência</p>
                  <span className="inline-flex items-center text-cyan-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Saiba mais
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            {/* SPK e Hidrante */}
            <Link href="/servicos/spk-hidrante" className="group">
              <div className="relative h-[400px] rounded-2xl overflow-hidden bg-white shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50">
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M30 0c16.569 0 30 13.431 30 30 0 16.569-13.431 30-30 30C13.431 60 0 46.569 0 30 0 13.431 13.431 0 30 0zm0 2C14.536 2 2 14.536 2 30s12.536 28 28 28 28-12.536 28-28S45.464 2 30 2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-40 h-40 text-red-500 transform transition-transform duration-500 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
                      <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="currentColor" className="animate-ping-slow"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">SPK e Hidrante</h3>
                  <p className="text-gray-600 mb-6">Sistemas completos de combate a incêndio para sua segurança</p>
                  <span className="inline-flex items-center text-red-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Saiba mais
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl md:text-4xl font-bold mb-8"
          >
            Precisa de um Orçamento?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Entre em contato conosco para um orçamento personalizado e descubra como podemos ajudar em seu projeto
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/contato">
              <span className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                Solicitar Orçamento
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Botão Voltar ao Topo */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </motion.button>
    </div>
  );
} 