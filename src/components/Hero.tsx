
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = () => {
    const section = document.getElementById('o-que-faz');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-gradient-to-br from-violet-500 via-indigo-500 to-purple-600 py-20 md:py-32">
      <div className="container flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
          Engenharia de Software
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mb-10 animate-fade-in leading-relaxed">
          O ramo da computação que desenvolve sistemas de forma sistemática e eficiente. 
          Aplicamos princípios da engenharia, matemática e ciência da computação para criar 
          soluções que vão muito além do código.
        </p>
        <Button 
          onClick={scrollToSection} 
          size="lg" 
          className="group animate-fade-in bg-white text-violet-700 hover:bg-white/90"
        >
          Explorar
          <ArrowDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
        </Button>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default Hero;
