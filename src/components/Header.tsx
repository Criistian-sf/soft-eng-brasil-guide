
import React from 'react';
import { Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Code className="h-6 w-6 text-accent" />
          <span className="font-bold text-xl">Engenharia de Software</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#o-que-faz" className="hover:text-accent transition-colors">O Profissional</a>
          <a href="#tecnologias" className="hover:text-accent transition-colors">Tecnologias</a>
          <a href="#certificacoes" className="hover:text-accent transition-colors">Certificações</a>
          <a href="#salarios" className="hover:text-accent transition-colors">Salários</a>
          <a href="#empresas" className="hover:text-accent transition-colors">Empresas</a>
          <a href="#desafios" className="hover:text-accent transition-colors">Desafios</a>
          <a href="#ods" className="hover:text-accent transition-colors">ODS 9</a>
        </nav>
        
        <Button className="md:hidden">Menu</Button>
      </div>
    </header>
  );
};

export default Header;
