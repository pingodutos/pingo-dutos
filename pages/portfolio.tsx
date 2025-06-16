import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

// Componente para a galeria de fotos
const PhotoGallery = ({ images }: { images: string[] }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Filtra apenas as imagens que existem
  const existingImages = images;

  if (existingImages.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {existingImages.map((image, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
          onClick={() => setSelectedImage(image)}
        >
          <Image
            src={image}
            alt={`Foto do projeto ${index + 1}`}
            fill
            className="object-cover"
          />
        </motion.div>
      ))}

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full max-w-4xl max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Foto ampliada"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      )}
    </div>
  );
};

// Componente do Projeto Yasai
const ProjetoYasai = () => {
  const images = [
    '/images/yasai/1.jpg',
    '/images/yasai/2.jpg',
    '/images/yasai/3.jpg',
    '/images/yasai/4.jpg',
    '/images/yasai/5.jpg',
    '/images/yasai/6.jpg',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Head>
        <title>Projeto Yasai - Pingo Dutos</title>
        <meta name="description" content="Projeto de dutos industriais para o Yasai" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        {/* Botão Voltar */}
        <div className="mb-8">
          <Link href="/projetos">
            <span className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-600">
              ← Voltar para Projetos
            </span>
          </Link>
        </div>

        {/* Cabeçalho do Projeto */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Projeto Yasai</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sistema completo de dutos industriais para o Yasai, incluindo ventilação,
            exaustão e climatização.
          </p>
        </motion.div>

        {/* Sobre o Projeto */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Sobre o Projeto</h2>
            <p className="text-gray-300 mb-4">
              O projeto Yasai representa um marco importante para a Pingo Dutos, demonstrando nossa expertise
              em sistemas de dutos industriais. Desenvolvemos um sistema completo que inclui:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Sistema de ventilação industrial de alta performance</li>
              <li>Exaustão de ar quente com controle de temperatura</li>
              <li>Climatização de ambientes com distribuição otimizada</li>
              <li>Dutos em aço galvanizado de alta qualidade</li>
            </ul>
          </div>
        </motion.div>

        {/* Visualização 3D */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Visualização 3D</h2>
          <div className="max-w-4xl mx-auto">
            <div className="h-[500px] bg-gray-800 rounded-lg overflow-hidden border-2 border-gray-700 shadow-lg">
              <iframe
                title="Projeto Yasai - Pingo Dutos"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; fullscreen; xr-spatial-tracking"
                width="100%"
                height="100%"
                src="https://sketchfab.com/models/e27f795431a9426d8d26411aec958356/embed?autostart=1&ui_theme=dark"
              />
            </div>
          </div>
        </motion.div>

        {/* Galeria de Fotos */}
        {images.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Galeria de Fotos</h2>
            <PhotoGallery images={images} />
          </motion.div>
        )}

        {/* Detalhes Técnicos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Detalhes Técnicos</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Especificações</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Sistema de ventilação industrial</li>
                <li>• Exaustão de ar quente</li>
                <li>• Climatização de ambientes</li>
                <li>• Dutos em aço galvanizado</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Benefícios</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Melhor qualidade do ar</li>
                <li>• Redução de temperatura</li>
                <li>• Maior conforto térmico</li>
                <li>• Eficiência energética</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

// Lista de projetos
const projetos = [
  {
    id: 'yasai',
    titulo: 'Projeto Yasai',
    descricao: 'Sistema completo de dutos industriais para o Yasai, incluindo ventilação, exaustão e climatização.',
    imagem: '/images/clientes/yasai.png', // Logo do Yasai
    link: '/projetos/yasai'
  },
  // Exemplo de como adicionar outros projetos:
  // {
  //   id: 'outback',
  //   titulo: 'Projeto Outback',
  //   descricao: 'Sistema de dutos para o restaurante Outback.',
  //   imagem: '/images/clientes/outback.png', // Logo do Outback
  //   link: '/projetos/outback'
  // },
];

// Componente principal que decide qual página mostrar
export default function Projetos() {
  const router = useRouter();
  const { projeto } = router.query;

  // Se tiver um projeto específico na URL, mostra ele
  if (projeto === 'yasai') {
    return <ProjetoYasai />;
  }

  // Caso contrário, mostra a lista de projetos
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Head>
        <title>Projetos - Pingo Dutos</title>
        <meta name="description" content="Conheça nossos projetos de instalação de dutos" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossos Projetos</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conheça alguns dos nossos principais projetos de instalação de dutos e sistemas de climatização
          </p>
        </motion.div>

        {/* Lista de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetos.map((projeto, index) => (
            <motion.div
              key={projeto.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Link href={`/projetos/${projeto.id}`} className="block">
                <div className="relative h-48">
                  <Image
                    src={projeto.imagem}
                    alt={projeto.titulo}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{projeto.titulo}</h2>
                  <p className="text-gray-300">{projeto.descricao}</p>
                  <div className="mt-4">
                    <span className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                      Ver Detalhes
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mensagem quando não houver projetos */}
        {projetos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-300">
              Em breve, novos projetos serão adicionados aqui.
            </p>
          </div>
        )}
      </main>
    </div>
  );
} 