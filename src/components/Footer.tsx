
import React from 'react';
import { Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Code className="h-6 w-6 text-blue-400" />
            <span className="font-bold text-xl">EngSoftware.Brasil</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#o-que-faz" className="hover:text-blue-400 transition-colors">O Profissional</a>
            <a href="#tecnologias" className="hover:text-blue-400 transition-colors">Tecnologias</a>
            <a href="#certificacoes" className="hover:text-blue-400 transition-colors">Certificações</a>
            <a href="#salarios" className="hover:text-blue-400 transition-colors">Salários</a>
            <a href="#empresas" className="hover:text-blue-400 transition-colors">Empresas</a>
            <a href="#desafios" className="hover:text-blue-400 transition-colors">Desafios</a>
            <a href="#ods" className="hover:text-blue-400 transition-colors">ODS 9</a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Guia de Engenharia de Software no Brasil</p>
          <p className="mt-2">
            Desenvolvido para ajudar profissionais e estudantes interessados na área.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
