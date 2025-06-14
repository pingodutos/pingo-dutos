import type { AppProps } from 'next/app';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Header from '../components/Header';
import '../styles/globals.css';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Pingo Dutos - Especialistas em Sistemas de Dutos e Climatização</title>
        <meta name="description" content="Pingo Dutos - Empresa especializada em instalação e manutenção de sistemas de dutos, climatização e exaustão. Projetos personalizados para sua necessidade." />
        <meta name="keywords" content="dutos, climatização, exaustão, ventilação, ar condicionado, instalação, manutenção, projetos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Pingo Dutos - Especialistas em Sistemas de Dutos e Climatização" />
        <meta property="og:description" content="Empresa especializada em instalação e manutenção de sistemas de dutos, climatização e exaustão. Projetos personalizados para sua necessidade." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pingodutos.com.br" />
        <meta property="og:image" content="/images/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://pingodutos.com.br" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
} 