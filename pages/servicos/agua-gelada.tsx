import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function AguaGelada() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-900 to-gray-800 text-white">
      <Head>
        <title>Instalações de Água Gelada </title>
        <meta name="description" content="Especialistas em sistemas de tubulação deágua gelada para climatização central." />
      </Head>

      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover brightness-50"
        >
          <source src="/videos/agua-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/70 to-gray-800/70"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            💧 Instalação de tubulações de água gelada
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">
            Soluções em sistemas de tubulação de água gelada para climatização
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <Link 
              href="/contato" 
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md flex items-center justify-center gap-2"
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
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-20">
          <p className="text-lg mb-6">
            Na Pingo Dutos, instalamos sistemas de tubulação de água gelada que são parte fundamental para o funcionamento eficiente de sistemas de climatização central, garantindo o conforto térmico ideal em ambientes comerciais, industriais e grandes empreendimentos.
          </p>
          <p className="text-lg">
            👉 Com foco em eficiência, durabilidade e conformidade técnica, entregamos soluções completas que otimizam o uso de energia e asseguram o desempenho dos equipamentos de climatização.
          </p>
        </div>

        {/* What is Water Chiller System */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-6">🔎 O Que é um Sistema de Tubulação de Água Gelada?</h2>
          <p className="text-lg">
            O sistema de tubulação de água gelada é responsável por transportar água resfriada pelo equipamento de climatização (chiller ou UTA) para os fan coils ou outros equipamentos que distribuem o ar frio nos ambientes.
          </p>
        </div>

        {/* Components */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-6">🛠️ Principais Componentes:</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">🔹</span>
              <span>Tubulações de água gelada: responsáveis pelo transporte do fluido refrigerado.</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">🔹</span>
              <span>Bombas hidráulicas: garantem a circulação adequada da água no sistema.</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">🔹</span>
              <span>Válvulas, conexões e registros: controlam o fluxo e facilitam a manutenção.</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">🔹</span>
              <span>Isolamento térmico: evita perdas de temperatura e condensação nas tubulações.</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">🔹</span>
              <span>Equipamentos de climatização: chillers, fan coils, unidades de tratamento de ar (UTA).</span>
            </li>
          </ul>
        </div>

        {/* Benefits */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-6">⚙️ Benefícios do Sistema de Água Gelada:</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✅</span>
              <span>Eficiência na climatização de grandes ambientes.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✅</span>
              <span>Redução de consumo energético quando bem projetado.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✅</span>
              <span>Distribuição uniforme do frio em múltiplos ambientes.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✅</span>
              <span>Flexibilidade para projetos complexos e expansíveis.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✅</span>
              <span>Maior durabilidade dos equipamentos, com manutenção facilitada.</span>
            </li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-6">🚀 Por Que Escolher a Pingo Dutos?</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">✔️</span>
              <span>Projetos personalizados e dimensionados com precisão.</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">✔️</span>
              <span>Uso de materiais certificados e isolamento adequado.</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">✔️</span>
              <span>Equipe técnica especializada e treinada.</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">✔️</span>
              <span>Atendimento conforme normas técnicas ABNT NBR 16401 e boas práticas do setor.</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">✔️</span>
              <span>Garantia total na instalação e operação.</span>
            </li>
          </ul>
        </div>

        {/* Process */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-6">🏗️ Como Funciona Nosso Processo</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">🔍 1. Visita Técnica e Levantamento</h3>
              <p>Avaliação do espaço e análise das necessidades do sistema.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">📐 2. Projeto e Dimensionamento</h3>
              <p>Desenvolvemos o projeto hidráulico e térmico, calculando vazões, pressões e especificando materiais.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">🔧 3. Instalação das Tubulações e Equipamentos</h3>
              <p>Execução com uso de materiais de qualidade, isolamento térmico e acompanhamento técnico.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">✅ 4. Testes e Entrega</h3>
              <p>Testes hidrostáticos, de estanqueidade e desempenho, com emissão de relatórios e garantia.</p>
            </div>
          </div>
        </div>

        {/* Quality Commitment */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-6">🏆 Compromisso com Qualidade e Segurança</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">✔️</span>
              <span>Atendimento às normas técnicas e legislações aplicáveis.</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">✔️</span>
              <span>Relatórios técnicos, ARTs e certificações.</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">✔️</span>
              <span>Garantia na instalação e perfeito funcionamento do sistema.</span>
            </li>
          </ul>
        </div>

        {/* Projects */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-6">🏢 Projetos Realizados</h2>
          <p className="text-lg mb-4">Atuamos em:</p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">🏬</span>
              <span>Shoppings e centros comerciais</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">🏭</span>
              <span>Indústrias e fábricas</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">🏢</span>
              <span>Prédios corporativos</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">🏨</span>
              <span>Hotéis e grandes empreendimentos</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">🏗️</span>
              <span>Obras comerciais e industriais de médio e grande porte</span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <h2 className="text-3xl font-bold mb-6">📞 Fale com a Pingo Dutos!</h2>
          <p className="text-lg mb-8">
            Solicite uma avaliação técnica gratuita. Nossa equipe está pronta para oferecer a melhor solução em sistemas de água gelada para seu projeto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contato" 
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md flex items-center justify-center gap-2"
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

        {/* Other Services */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">🔗 Outros Serviços:</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">➕</span>
              <span>Instalação de sistemas de dutos de ar</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">➕</span>
              <span>Sistemas de combate a incêndio (SPK e hidrantes)</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">➕</span>
              <span>Manutenção e retrofit em sistemas hidráulicos e de climatização</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
} 