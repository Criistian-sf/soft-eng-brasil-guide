
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = () => {
    const section = document.getElementById('o-que-faz');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 md:py-32">
      <div className="container flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
          Guia Completo de<br/> 
          <span className="text-accent">Engenharia de Software</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mb-10 animate-fade-in">
          Tudo o que você precisa saber sobre a carreira, tecnologias, salários e oportunidades para se destacar no mercado brasileiro e global.
        </p>
        <Button onClick={scrollToSection} size="lg" className="group animate-fade-in">
          Explorar
          <ArrowDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
        </Button>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default Hero;
