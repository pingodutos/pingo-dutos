import React from 'react';
import Image from 'next/image';

const InstagramFeed = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Siga-nos no Instagram</h2>
          <p className="text-gray-600">Acompanhe nossos projetos e novidades</p>
          <a
            href="https://instagram.com/pingodutos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-600 hover:text-blue-800"
          >
            @pingodutos
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Placeholder para as últimas 3 fotos do Instagram */}
          <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/images/instagram/placeholder1.jpg"
              alt="Projeto Pingo Dutos"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/images/instagram/placeholder2.jpg"
              alt="Projeto Pingo Dutos"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/images/instagram/placeholder3.jpg"
              alt="Projeto Pingo Dutos"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed; 