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

          <div className="flex justify-center mt-6">
            <a
              href="https://wa.me/5569992561830"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg shadow transition-colors text-lg"
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.19 1.6 6.01L0 24l6.18-1.62A12.07 12.07 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.23-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.26-1.44l-.38-.22-3.67.96.98-3.58-.25-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.28.7.9.86 1.08.16.18.32.2.6.07.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.98 2.43.02 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/>
              </svg>
              Fale no WhatsApp
            </a>
          </div>

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