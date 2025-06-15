import type { AppProps } from 'next/app';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import Header from '../components/Header';
import '../styles/globals.css';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Pingo Dutos | Instalação e Manutenção de Dutos em Porto Velho - RO</title>
        <meta name="description" content="Especialistas em instalação e manutenção de dutos em Porto Velho, Rondônia. Serviços de climatização, exaustão e ventilação industrial. Orçamento rápido e atendimento personalizado." />
        <meta name="keywords" content="dutos porto velho, dutos rondonia, instalação de dutos, manutenção de dutos, climatização industrial, exaustão industrial, ventilação industrial, ar condicionado industrial, projetos de dutos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Portuguese" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Pingo Dutos" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pingodutos.com.br" />
        <meta property="og:title" content="Pingo Dutos | Instalação e Manutenção de Dutos em Porto Velho - RO" />
        <meta property="og:description" content="Especialistas em instalação e manutenção de dutos em Porto Velho, Rondônia. Serviços de climatização, exaustão e ventilação industrial. Orçamento rápido e atendimento personalizado." />
        <meta property="og:image" content="https://pingodutos.com.br/images/logo.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://pingodutos.com.br" />
        <meta name="twitter:title" content="Pingo Dutos | Instalação e Manutenção de Dutos em Porto Velho - RO" />
        <meta name="twitter:description" content="Especialistas em instalação e manutenção de dutos em Porto Velho, Rondônia. Serviços de climatização, exaustão e ventilação industrial. Orçamento rápido e atendimento personalizado." />
        <meta name="twitter:image" content="https://pingodutos.com.br/images/logo.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://pingodutos.com.br" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Pingo Dutos" />
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
      <Analytics />
    </div>
  );
} 