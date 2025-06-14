import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function DutosDeAr() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Head>
        <title>🌬️ Instalações de Dutos de Ar </title>
        <meta name="description" content="Soluções Inteligentes em Climatização Comercial e Industrial" />
      </Head>

      {/* Hero */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover brightness-50"
        >
          <source src="/videos/dutos-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-800/70"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Instalações de Dutos de Ar
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">
            Soluções Inteligentes em Climatização Comercial e Industrial
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <Link 
              href="/contato" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md flex items-center justify-center gap-2"
            >
              <span className="text-2xl">📋</span>
              Solicitar Orçamento
            </Link>
            <a
              href="https://wa.me/5569992561830"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md flex items-center justify-center gap-2"
            >
              <span className="text-2xl">💬</span>
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introdução */}
          <section>
            <p className="text-lg text-gray-300 mb-6">
              Na Pingo Dutos, somos especialistas em projetar, fabricar e instalar sistemas de dutos de ar, 
              oferecendo soluções completas para climatização de ambientes comerciais, industriais e grandes empreendimentos.
            </p>
            <p className="text-lg text-gray-300">
              👉 Com foco em eficiência, conforto e economia de energia, entregamos projetos sob medida, 
              com materiais de alta qualidade, mão de obra qualificada e total conformidade com as normas técnicas.
            </p>
          </section>

          {/* O Que é */}
          <section>
            <h2 className="text-2xl font-bold mb-4">🔎 O Que é um Sistema de Dutos de Ar?</h2>
            <p className="text-gray-300 mb-6">
              Um sistema de dutos de ar é responsável pela distribuição do ar climatizado de forma uniforme em todo o ambiente. 
              Ele faz parte de um sistema de climatização central, que proporciona conforto térmico, controle de umidade e qualidade do ar.
            </p>
          </section>

          {/* Componentes */}
          <section>
            <h2 className="text-2xl font-bold mb-4">🛠️ Principais Componentes:</h2>
            <ul className="list-none space-y-2 text-gray-300">
              <li>🔹 Dutos de insuflamento: levam o ar climatizado até o ambiente.</li>
              <li>🔹 Dutos de retorno: fazem a recirculação do ar para tratamento.</li>
              <li>🔹 Grelhas, difusores e bocas de ar: fazem a distribuição correta do fluxo.</li>
              <li>🔹 Isolamento térmico: evita perda de temperatura e condensação.</li>
              <li>🔹 Equipamentos de climatização: como UTA, Fan Coils e chillers.</li>
            </ul>
          </section>

          {/* Benefícios */}
          <section>
            <h2 className="text-2xl font-bold mb-4">⚙️ Benefícios do Sistema de Dutos:</h2>
            <ul className="list-none space-y-2 text-gray-300">
              <li>✅ Conforto térmico constante e uniforme.</li>
              <li>✅ Operação silenciosa.</li>
              <li>✅ Estética limpa e elegante.</li>
              <li>✅ Maior eficiência energética.</li>
              <li>✅ Solução robusta, durável e de alta performance.</li>
            </ul>
          </section>

          {/* Diferenciais */}
          <section>
            <h2 className="text-2xl font-bold mb-4">🚀 Por Que Escolher a Pingo Dutos?</h2>
            <ul className="list-none space-y-2 text-gray-300">
              <li>✔️ Projetos personalizados de acordo com a sua necessidade.</li>
              <li>✔️ Materiais de alta qualidade, com durabilidade e segurança.</li>
              <li>✔️ Equipe especializada e certificada.</li>
              <li>✔️ Atendimento rigoroso às normas ABNT e padrões de engenharia.</li>
              <li>✔️ Garantia total na instalação e funcionamento.</li>
            </ul>
          </section>

          {/* Processo */}
          <section>
            <h2 className="text-2xl font-bold mb-4">🏗️ Como Funciona Nosso Processo</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">🔍 1. Visita Técnica e Levantamento</h3>
                <p className="text-gray-300">Analisamos seu espaço, suas necessidades e particularidades do projeto.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">📐 2. Projeto e Dimensionamento</h3>
                <p className="text-gray-300">Desenvolvemos um projeto técnico, com cálculos precisos para garantir eficiência e economia.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">🔧 3. Instalação dos Dutos</h3>
                <p className="text-gray-300">Execução com equipe qualificada, materiais certificados e acompanhamento técnico.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">✅ 4. Testes e Entrega</h3>
                <p className="text-gray-300">Realizamos testes de estanqueidade, vazão e funcionamento antes da entrega final.</p>
              </div>
            </div>
          </section>

          {/* Qualidade */}
          <section>
            <h2 className="text-2xl font-bold mb-4">🏆 Compromisso com Qualidade e Segurança</h2>
            <ul className="list-none space-y-2 text-gray-300">
              <li>✔️ Atendemos às normas técnicas ABNT NBR 16401 e outras aplicáveis.</li>
              <li>✔️ Garantia na instalação e funcionamento dos sistemas.</li>
              <li>✔️ Relatórios técnicos, checklists e certificações.</li>
            </ul>
          </section>

          {/* Clientes */}
          <section>
            <h2 className="text-2xl font-bold mb-4">🏢 Projetos Realizados</h2>
            <p className="text-gray-300 mb-4">Atendemos clientes como:</p>
            <ul className="list-none space-y-2 text-gray-300">
              <li>🏬 Porto Velho Shopping</li>
              <li>🛍️ Lojas Colcci</li>
              <li>🍱 Yasai Bowl</li>
              <li>🍔 Outback</li>
              <li>🚍 Rodoviária de Porto Velho</li>
              <li>🏭 Grandes obras industriais e comerciais</li>
            </ul>
          </section>

          {/* CTA */}
          <section className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">📞 Fale com a Pingo Dutos!</h2>
            <p className="text-gray-600 mb-6">
              Solicite uma avaliação técnica gratuita. Nossa equipe está pronta para entender seu projeto 
              e oferecer a melhor solução em climatização com dutos de ar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contato" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center">
                👉 Solicitar Orçamento
              </Link>
              <a href="https://wa.me/5569992561830" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors text-center">
                👉 Fale pelo WhatsApp
              </a>
            </div>
          </section>

          {/* Outros Serviços */}
          <section>
            <h2 className="text-2xl font-bold mb-4">🔗 Outros Serviços:</h2>
            <ul className="list-none space-y-2 text-gray-300">
              <li>➕ Projeto e fabricação de dutos sob medida</li>
              <li>➕ Manutenção de sistemas de climatização</li>
              <li>➕ Retrofit e modernização de sistemas existentes</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
} 