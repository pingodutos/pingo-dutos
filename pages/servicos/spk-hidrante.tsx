import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function SpkHidrante() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 to-gray-800 text-white">
      <Head>
        <title>SPK e Hidrante </title>
        <meta name="description" content="Especialistas em sistemas de combate a incêndio: SPK (sprinkler) e hidrante." />
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
          <source src="/videos/spk-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/70 to-gray-800/70"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            SPK e Hidrante
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">
            Soluções Completas em Proteção Contra Incêndio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <Link 
              href="/contato" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md flex items-center justify-center gap-2"
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

      {/* Introduction */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <p className="text-lg mb-6">
            Na Pingo Dutos, somos especialistas na instalação de sistemas de proteção contra incêndio, como sprinklers (SPK) e hidrantes, garantindo total segurança, conformidade com as normas e proteção para pessoas e patrimônios.
          </p>
          <p className="text-lg">
            👉 Atuamos em obras comerciais, industriais, corporativas e grandes empreendimentos, oferecendo projetos completos, execução qualificada e materiais certificados.
          </p>
        </div>
      </section>

      {/* Systems Description */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">🔥 O Que São Sistemas de SPK e Hidrantes?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">💧 Sistema de SPK (Sprinklers Automáticos)</h3>
              <p>
                É um sistema de combate a incêndio que atua automaticamente. Ao detectar aumento de temperatura no ambiente, os bicos (sprinklers) se abrem e liberam água diretamente sobre o foco do incêndio, evitando a propagação.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">🚒 Sistema de Hidrantes</h3>
              <p>
                Composto por tubulações pressurizadas, registros e mangueiras, permite que brigadas de incêndio ou bombeiros atuem de forma manual no combate ao fogo, com alto volume e pressão de água.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Components */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">🛠️ Componentes dos Sistemas:</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <p>🔹 Tubulações hidráulicas de incêndio (aço carbono ou galvanizado)</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <p>🔹 Bicos sprinklers automáticos</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <p>🔹 Abrigos de hidrantes, válvulas, registros e esguichos</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <p>🔹 Bombas de incêndio (jockey, principal e reserva)</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <p>🔹 Painéis elétricos de comando</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <p>🔹 Sistema de alarme e detecção (quando integrado)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">⚙️ Benefícios dos Sistemas de Combate a Incêndio:</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <p>✅ Resguardo de vidas e patrimônios</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <p>✅ Atuação rápida e eficiente contra incêndios</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <p>✅ Atende às exigências do Corpo de Bombeiros e normas técnicas</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <p>✅ Redução de danos e custos em emergências</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <p>✅ Sistemas robustos, de alta confiabilidade</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">🚀 Por Que Escolher a Pingo Dutos?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <p>✔️ Projetos personalizados, adequados à sua edificação</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <p>✔️ Materiais certificados e de alta qualidade</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <p>✔️ Equipe especializada e treinada</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <p>✔️ Atendimento rigoroso às normas ABNT NBR 10897 (Sprinklers), NBR 13714 (Hidrantes) e exigências dos bombeiros</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <p>✔️ Garantia total na instalação e funcionamento</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">🏗️ Como Funciona Nosso Processo</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">🔍 1. Visita Técnica e Levantamento</h3>
              <p>Análise técnica do espaço, riscos e necessidades</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">📐 2. Projeto e Dimensionamento</h3>
              <p>Desenvolvimento do projeto de combate a incêndio, com cálculos hidráulicos, seleção de materiais e aprovação junto ao Corpo de Bombeiros</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">🔧 3. Instalação Completa</h3>
              <p>Execução das tubulações, instalação dos sprinklers, hidrantes, bombas e quadros elétricos</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">✅ 4. Testes, Laudos e Entrega</h3>
              <p>Testes hidrostáticos, comissionamento, emissão de laudos e entrega do sistema funcionando, pronto para vistoria e liberação dos bombeiros</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">🏆 Compromisso com Segurança e Qualidade</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <p>✔️ Atendimento às normas ABNT, Instruções Técnicas do Corpo de Bombeiros e legislação vigente</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <p>✔️ Garantia na instalação e funcionamento</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <p>✔️ Laudos, ARTs, testes e certificações</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">🏢 Projetos Realizados</h2>
          <p className="text-xl mb-6">Sistemas instalados em:</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <p>🏬 Porto Velho Shopping</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <p>🍔 Outback</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <p>🍱 Yasai Bowl</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <p>🏭 Indústrias e galpões logísticos</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <p>🛍️ Lojas e empreendimentos comerciais</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <p>🚍 Rodoviária de Porto Velho</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <p>🔥 Edificações comerciais e grandes obras</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">📞 Fale com a Pingo Dutos!</h2>
          <p className="text-xl mb-8">
            Solicite uma avaliação técnica gratuita. Nossa equipe está pronta para desenvolver o melhor projeto de combate a incêndio para seu empreendimento.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/contato" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Solicitar Orçamento
            </Link>
            <a href="https://wa.me/5569992561830" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Fale pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">🔗 Outros Serviços:</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <p>➕ Instalação de dutos de ar e climatização</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <p>➕ Instalação de tubulações de água gelada</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <p>➕ Retrofit, manutenção e atualização de sistemas hidráulicos e de incêndio</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 