import { motion } from 'framer-motion';
import Head from 'next/head';
import { useState } from 'react';

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    console.log("Formulário enviado!");
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage("Mensagem enviada com sucesso! Em breve entraremos em contato.");
        setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
      } else {
        setStatus("error");
        setMessage(data.message || "Erro ao enviar mensagem. Tente novamente mais tarde.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Erro ao enviar mensagem. Tente novamente mais tarde.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Head>
        <title>Contato - Pingo Dutos</title>
        <meta name="description" content="Entre em contato com a Pingo Dutos para orçamentos e informações" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-center">Entre em Contato</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nome" className="block text-sm font-medium mb-2">
                Nome
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="telefone" className="block text-sm font-medium mb-2">
                Telefone
              </label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="mensagem" className="block text-sm font-medium mb-2">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Enviar Mensagem
            </motion.button>
          </form>

          {status === "loading" && (
            <p className="text-blue-400 mt-4">Enviando mensagem...</p>
          )}
          {status === "success" && (
            <p className="text-green-400 mt-4">{message}</p>
          )}
          {status === "error" && (
            <p className="text-red-400 mt-4">{message}</p>
          )}

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Informações de Contato</h2>
            <p className="text-gray-300">
              Email: dutospingo@gmail.com<br />
              Telefone: (69) 99256-1830<br />
              Endereço: Rua México, 1604 - Porto Velho - Rondônia
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
} 