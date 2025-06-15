const posts = [
  {
    titulo: 'Diferença entre Duto Retangular e Circular',
    resumo: 'Entenda as principais diferenças, aplicações e vantagens de cada tipo de duto para climatização.',
    data: '2024-06-01',
  },
  {
    titulo: 'Como Dimensionar Dutos para Ar-Condicionado',
    resumo: 'Veja dicas e cálculos essenciais para dimensionar corretamente os dutos do seu projeto.',
    data: '2024-05-20',
  },
  {
    titulo: 'Vantagens do Isolamento Térmico em Dutos',
    resumo: 'Saiba como o isolamento térmico pode aumentar a eficiência e a durabilidade dos sistemas de dutos.',
    data: '2024-05-10',
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Blog</h1>
        <div className="space-y-8">
          {posts.map((post, idx) => (
            <div key={idx} className="bg-gray-100 rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h2 className="text-xl font-semibold text-gray-800">{post.titulo}</h2>
                <span className="text-gray-500 text-sm">{post.data}</span>
              </div>
              <p className="text-gray-600 mb-4">{post.resumo}</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-bold transition-colors cursor-not-allowed" disabled>Ler mais em breve</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 