import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const servicos = [
  {
    titulo: 'Instalações de Dutos de Ar',
    descricao: 'Instalação profissional de dutos de ar condicionado para seu projeto.',
    icone: '💨'
  },
  {
    titulo: 'Tubulações de Água Gelada',
    descricao: 'Sistemas completos de tubulação para água gelada.',
    icone: '❄️'
  },
  {
    titulo: 'SPK e Hidrante',
    descricao: 'Instalação e manutenção de sistemas de combate a incêndio.',
    icone: '🚒'
  }
];

const clientes = [
  {
    nome: 'Porto Velho Shopping',
    logo: '/images/clientes/porto-velho-shopping.png',
    estabelecimentos: [
      { nome: 'Colcci', logo: '/images/clientes/colcci.png' },
      { nome: 'Bahrem', logo: '/images/clientes/bahrem.png' },
      { nome: 'YasaiBowl', logo: '/images/clientes/yasai.png' },
      { nome: 'Outback', logo: '/images/clientes/outback.png' },
      { nome: 'Derivados do Milho', logo: '/images/clientes/derivados-milho.png' },
      { nome: 'Patricinha', logo: '/images/clientes/patricinha.png' }
    ]
  },
  {
    nome: 'Rodoviária de Porto Velho',
    logo: '/images/clientes/rodoviaria.png',
    estabelecimentos: []
  },
  {
    nome: 'Hospital de Amor',
    logo: '/images/clientes/hospital-amor.png',
    estabelecimentos: []
  }
];

// Componente para o carrossel de depoimentos
const TestimonialCarousel = () => {
  const testimonials = [
    {
      text: "Excelente trabalho! A Pingo Dutos entregou um projeto de alta qualidade, com economia, nos auxiliou na compra dos equipamentos, a instalação foi muito rápida.",
      author: "Rodrigo Lopes",
      company: "Engenheiro Responsável - YasaiBowl",
      image: "/images/clientes/yasai.png"
    },
    // Adicione mais depoimentos aqui
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="flex space-x-4">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            className="min-w-full bg-gray-800 p-6 rounded-lg"
          >
            <div className="flex items-center mb-4">
              <div className="relative w-12 h-12 mr-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.company}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold">{testimonial.author}</h4>
                <p className="text-gray-400">{testimonial.company}</p>
              </div>
            </div>
            <p className="text-gray-300">{testimonial.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Componente para os diferenciais
const Diferenciais = () => {
  const items = [
    {
      icon: "🏆",
      title: "15 anos de experiência",
      description: "Mais de uma década entregando excelência"
    },
    {
      icon: "🌎",
      title: "Projetos em todo Brasil",
      description: "Atendimento em todo território nacional"
    },
    {
      icon: "👥",
      title: "Equipe qualificada",
      description: "Profissionais altamente capacitados"
    },
    {
      icon: "✅",
      title: "Garantia de qualidade",
      description: "Compromisso com a excelência"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-colors"
        >
          <div className="text-4xl mb-4">{item.icon}</div>
          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
          <p className="text-gray-400">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

// Componente para os serviços
const Servicos = () => {
  const servicos = [
    {
      title: 'Instalações de Dutos de Ar',
      description: 'Sistemas de climatização e ventilação industrial',
      icon: '🌬️',
      color: 'bg-blue-600',
      link: '/servicos/dutos-de-ar'
    },
    {
      title: 'Tubulações de Água Gelada',
      description: 'Sistemas de ar-condicionado central',
      icon: '❄️',
      color: 'bg-cyan-600',
      link: '/servicos/agua-gelada'
    },
    {
      title: 'SPK e Hidrante',
      description: 'Sistemas de combate a incêndio',
      icon: '🚒',
      color: 'bg-red-600',
      link: '/servicos/spk-hidrante'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {servicos.map((servico, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
        >
          <Link href={servico.link}>
            <div className={`${servico.color} p-8 text-center`}>
              <span className="text-4xl mb-4 block">{servico.icon}</span>
              <h3 className="text-xl font-bold mb-2">{servico.title}</h3>
              <p className="text-gray-200">{servico.description}</p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

const Projetos = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Projetos em Destaque</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/projetos/colcci" className="block group">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/clientes/colcci.png"
                alt="Colcci"
                fill
                className="object-contain bg-white p-4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Colcci</h3>
                <p className="text-gray-200">Sistema de ventilação e climatização</p>
              </div>
            </div>
          </Link>

          <Link href="/projetos/yasai" className="block group">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/clientes/yasai.png"
                alt="Yasai Bowl"
                fill
                className="object-contain bg-white p-4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Yasai Bowl</h3>
                <p className="text-gray-200">Sistema de climatização e prevenção de incêndio</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Head>
        <title>Pingo Dutos - Especialistas em Dutos Industriais</title>
        <meta name="description" content="Mais de 15 anos de experiência em instalação de dutos industriais" />
      </Head>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
            Pingo Dutos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-white"
          >
            Transformando ambientes desde 2008
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/contato">
              <span className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                Solicite um Orçamento
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Nossos Diferenciais
          </motion.h2>
          <Diferenciais />
        </div>
      </section>

      {/* Serviços */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Soluções completas em sistemas de climatização, ventilação e combate a incêndio
            </p>
          </div>
          
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

      {/* Projetos */}
      {/* <Projetos /> */}

      {/* Clientes */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Nossos Clientes
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="h-24 flex items-center justify-center mb-4">
                <Image src="/images/clientes/porto-velho-shopping.png" alt="Porto Velho Shopping" width={120} height={120} className="object-contain" />
              </div>
              <h3 className="text-lg font-semibold">Porto Velho Shopping</h3>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="h-24 flex items-center justify-center mb-4">
                <Image src="/images/clientes/hospital-amor.png" alt="Hospital do Amor" width={120} height={120} className="object-contain" />
              </div>
              <h3 className="text-lg font-semibold">Hospital do Amor</h3>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="h-24 flex items-center justify-center mb-4">
                <Image src="/images/clientes/rodoviaria.png" alt="Rodoviária de Porto Velho" width={120} height={120} className="object-contain" />
              </div>
              <h3 className="text-lg font-semibold">Rodoviária de Porto Velho</h3>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="h-24 flex items-center justify-center mb-4">
                <Image src="/images/clientes/yasai.png" alt="Yasai" width={120} height={120} className="object-contain" />
              </div>
              <h3 className="text-lg font-semibold">Yasai</h3>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="h-24 flex items-center justify-center mb-4">
                <Image src="/images/clientes/outback.png" alt="Outback" width={120} height={120} className="object-contain" />
              </div>
              <h3 className="text-lg font-semibold">Outback</h3>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="h-24 flex items-center justify-center mb-4">
                <Image src="/images/clientes/colcci.png" alt="Colcci" width={120} height={120} className="object-contain" />
              </div>
              <h3 className="text-lg font-semibold">Colcci</h3>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="h-24 flex items-center justify-center mb-4">
                <Image src="/images/clientes/derivados-milho.png" alt="Derivados do Milho" width={120} height={120} className="object-contain" />
              </div>
              <h3 className="text-lg font-semibold">Derivados do Milho</h3>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="h-24 flex items-center justify-center mb-4">
                <Image src="/images/clientes/patricinha.png" alt="Patricinha" width={120} height={120} className="object-contain" />
              </div>
              <h3 className="text-lg font-semibold">Patricinha</h3>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="h-24 flex items-center justify-center mb-4">
                <Image src="/images/clientes/bahrem.png" alt="Bahrem" width={120} height={120} className="object-contain" />
              </div>
              <h3 className="text-lg font-semibold">Bahrem</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl md:text-4xl font-bold mb-8"
          >
            Entre em Contato
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Informações de Contato</h3>
              <div className="space-y-4 text-left">
                <p className="flex items-center">
                  <span className="mr-2">📞</span>
                  <span>(69) 99256-1830</span>
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📧</span>
                  <span>dutospingo@gmail.com</span>
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📍</span>
                  <span>Porto Velho, RO</span>
                </p>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Horário de Atendimento</h3>
              <div className="space-y-4 text-left">
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 8h às 12h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8"
          >
            <Link href="/contato">
              <span className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                Fale Conosco
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