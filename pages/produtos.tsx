import Image from 'next/image';
import { useState } from 'react';
import { FaTools, FaLayerGroup } from 'react-icons/fa';
import { TbWind, TbShieldCheck } from 'react-icons/tb';

interface Produto {
  nome: string;
  imagem: string;
  descricao: string;
}

const produtos: Record<string, Produto[]> = {
  acessorios: [
    {
      nome: 'Barra Roscada',
      imagem: '/images/produtos/acessorios/barra-roscada.jpeg',
      descricao: 'Barra roscada para fixação de dutos e suportes.',
    },
    {
      nome: 'Canaleta Perfurada',
      imagem: '/images/produtos/acessorios/canaleta-perfurada.jpeg',
      descricao: 'Canaleta metálica perfurada para passagem e fixação de cabos e suportes.',
    },
    {
      nome: 'Canto TDC 25mm',
      imagem: '/images/produtos/acessorios/canto-tdc-25mm.jpeg',
      descricao: 'Canto metálico TDC 25mm para montagem de dutos.',
    },
    {
      nome: 'Canto TDC 32mm',
      imagem: '/images/produtos/acessorios/canto-tdc-32mm.jpeg',
      descricao: 'Canto metálico TDC 32mm para montagem de dutos.',
    },
    {
      nome: 'Chumbador Parabolt',
      imagem: '/images/produtos/acessorios/chumbador-parabolt.jpeg',
      descricao: 'Chumbador Parabolt para fixação pesada em concreto.',
    },
    {
      nome: 'Grapa TDC 100mm',
      imagem: '/images/produtos/acessorios/grapa-tdc-100mm.jpeg',
      descricao: 'Grapa TDC 100mm para fixação de perfis e dutos.',
    },
  ],
  chapa: [
    {
      nome: 'Chapa Fina a Frio',
      imagem: '/images/produtos/chapa/chapa-fina-afrio.jpeg',
      descricao: 'Chapa de aço fina a frio para fabricação de dutos e peças.',
    },
    {
      nome: 'Chapa Galvanizada 24',
      imagem: '/images/produtos/chapa/chapa-galvanizada24.jpeg',
      descricao: 'Chapa de aço galvanizado nº 24 para dutos e acessórios.',
    },
    {
      nome: 'Chapa Galvanizada 26',
      imagem: '/images/produtos/chapa/chapa-galvanizada26.jpeg',
      descricao: 'Chapa de aço galvanizado nº 26 para dutos e acessórios.',
    },
  ],
  dutos: [
    {
      nome: "Duto Flexível Isolamento 10'",
      imagem: "/images/produtos/dutos/duto-flexivel-isolamento-10'.jpeg",
      descricao: "Duto flexível com isolamento, diâmetro 10 polegadas.",
    },
    {
      nome: "Duto Flexível Isolamento 12'",
      imagem: "/images/produtos/dutos/duto-flexivel-isolamento-12'.jpeg",
      descricao: "Duto flexível com isolamento, diâmetro 12 polegadas.",
    },
    {
      nome: "Duto Flexível Isolamento 20'",
      imagem: "/images/produtos/dutos/duto-flexivel-isolamento-20'.jpeg",
      descricao: "Duto flexível com isolamento, diâmetro 20 polegadas.",
    },
    {
      nome: 'Duto MPU',
      imagem: '/images/produtos/dutos/duto-mpu.jpeg',
      descricao: 'Duto MPU (painel de poliuretano) para sistemas de climatização.',
    },
  ],
  isolamentos: [
    {
      nome: 'Lã de Vidro 38mm',
      imagem: '/images/produtos/isolamentos/lã-vidro-38mm.jpeg',
      descricao: 'Manta de lã de vidro com 38mm de espessura para isolamento térmico de dutos.',
    },
  ],
  grelhas: [
    {
      nome: 'Grelha de Insuflamento c/ Registro',
      imagem: '/images/produtos/grelhas/grelha-insuflamento-cregistro.jpeg',
      descricao: 'Grelha para insuflamento de ar com registro de vazão.',
    },
  ],
  difusores: [
    {
      nome: 'Difusor 4 Vias c/ Registro',
      imagem: '/images/produtos/difusores/difusor-4vias-cregistro.jpeg',
      descricao: 'Difusor de ar 4 vias com registro de controle.',
    },
    {
      nome: 'Difusor de Alta Indução',
      imagem: '/images/produtos/difusores/difusor-altainduçãosr.jpeg',
      descricao: 'Difusor de alta indução para melhor distribuição do ar.',
    },
  ],
  damper: [
    {
      nome: 'Damper Corta-Fogo',
      imagem: '/images/produtos/damper/damper-corta-fogo.jpeg',
      descricao: 'Damper corta-fogo para sistemas de dutos, garantindo segurança e proteção contra incêndios.',
    },
  ],
};

const grupos = [
  { key: 'acessorios', label: 'Acessórios', icon: <FaTools size={36} />, color: 'bg-blue-100', desc: 'Peças e suportes para montagem de dutos.' },
  { key: 'chapa', label: 'Chapa', icon: <FaLayerGroup size={36} />, color: 'bg-yellow-100', desc: 'Chapas metálicas para fabricação de dutos.' },
  { key: 'dutos', label: 'Dutos', icon: <TbWind size={36} />, color: 'bg-green-100', desc: 'Dutos flexíveis e rígidos para climatização.' },
  { key: 'isolamentos', label: 'Isolamentos', icon: <TbShieldCheck size={36} />, color: 'bg-cyan-100', desc: 'Materiais para isolamento térmico.' },
  { key: 'grelhas', label: 'Grelhas', color: 'bg-gray-100', desc: 'Grelhas para insuflamento e retorno de ar.' },
  { key: 'difusores', label: 'Difusores', color: 'bg-gray-200', desc: 'Difusores para distribuição de ar.' },
  { key: 'damper', label: 'Damper', color: 'bg-red-100', desc: 'Dampers corta-fogo para proteção e segurança.' },
];

export default function Produtos() {
  const [grupoAtivo, setGrupoAtivo] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Produtos</h1>
        {!grupoAtivo ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {grupos.map((grupo) => (
              <div
                key={grupo.key}
                className="relative flex flex-col items-center justify-center rounded-3xl shadow-2xl p-8 overflow-hidden group cursor-pointer transition-transform hover:scale-105"
                onClick={() => setGrupoAtivo(grupo.key)}
                tabIndex={0}
                role="button"
                onKeyPress={e => { if (e.key === 'Enter') setGrupoAtivo(grupo.key); }}
              >
                <video
                  src={`/videos/${grupo.key}.mp4`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500"
                  poster={
                    grupo.key === 'acessorios'
                      ? "/images/produtos/acessorios/barra-roscada.jpeg"
                      : grupo.key === 'chapa'
                      ? "/images/produtos/chapa/chapa-fina-afrio.jpeg"
                      : grupo.key === 'dutos'
                      ? "/images/produtos/dutos/duto-mpu.jpeg"
                      : "/images/produtos/isolamentos/lã-vidro-38mm.jpeg"
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                <div className="relative z-10 flex flex-col items-center">
                  <span className="text-xl font-bold mb-2 text-white drop-shadow-lg">{grupo.label}</span>
                  <span className="text-gray-100 text-center text-base drop-shadow">{grupo.desc}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <button
              className="mb-8 flex items-center gap-2 text-blue-700 hover:underline font-semibold"
              onClick={() => setGrupoAtivo(null)}
            >
              ← Voltar para categorias
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {produtos[grupoAtivo].map((produto: Produto, idx: number) => (
                <div key={idx} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center border border-gray-100">
                  <div className="w-full h-48 relative mb-4">
                    <Image src={produto.imagem} alt={produto.nome} fill style={{objectFit:'cover'}} className="rounded" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{produto.nome}</h3>
                  <p className="text-gray-600 mb-2 text-center">{produto.descricao}</p>
                </div>
              ))}
            </div>
            {/* Aviso de produtos usados/seminovos para categorias específicas */}
            {['difusores', 'grelhas', 'damper'].includes(grupoAtivo) && (
              <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-xl shadow flex flex-col items-center">
                <p className="text-base text-yellow-900 font-semibold text-center">
                  <strong>Atenção!</strong><br />
                  Dependendo do seu projeto, também podemos oferecer opções de <b>{grupoAtivo === 'difusores' ? 'difusores' : grupoAtivo === 'grelhas' ? 'grelhas' : 'damper corta-fogo'}</b> seminovos ou usados, sempre revisados e em ótimo estado.<br />
                  Fale conosco para saber mais e encontrar a melhor solução para o seu orçamento!
                </p>
                <a
                  href="https://wa.me/5569992561830"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg text-lg transition"
                >
                  Fale pelo WhatsApp
                </a>
              </div>
            )}
            <div className="mt-8 flex flex-col items-center bg-green-50 rounded-xl p-6 shadow-md">
              <p className="text-lg font-semibold text-gray-800 mb-2 text-center">
                Podemos fazer a cotação dos materiais de acordo com o seu projeto.<br />
                Entre em contato, teremos o prazer em ajudar você a economizar!
              </p>
              <a
                href="https://wa.me/5569992561830"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg text-lg transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M20.52 3.48A12 12 0 003.48 20.52l-1.32 4.84a1 1 0 001.22 1.22l4.84-1.32A12 12 0 0020.52 3.48z" fill="#fff"/>
                  <path d="M16.24 7.76a6 6 0 11-8.48 8.48 6 6 0 018.48-8.48z" fill="#25D366"/>
                  <path d="M12 8a4 4 0 100 8 4 4 0 000-8z" fill="#fff"/>
                </svg>
                Fale conosco no WhatsApp
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
} 