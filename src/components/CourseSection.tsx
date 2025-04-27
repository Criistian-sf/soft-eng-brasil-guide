
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Clock, GraduationCap } from 'lucide-react';

const CourseSection = () => {
  return (
    <section className="section-container bg-gradient-to-br from-violet-50 to-indigo-50">
      <h2 className="section-title">Como é o Curso de Engenharia de Software?</h2>
      
      <div className="max-w-4xl mx-auto space-y-8">
        <Card className="border-violet-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-violet-600" />
              Sobre o Curso
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              O curso de Engenharia de Software é uma graduação de nível superior que une fundamentos de matemática, 
              computação, gestão de projetos e engenharia. Ele é mais focado na criação e manutenção de softwares 
              do que outros cursos da área, como Ciência da Computação, que possui um foco mais teórico e acadêmico.
            </p>
          </CardContent>
        </Card>

        <Card className="border-violet-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-violet-600" />
              O que você vai aprender
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              O aluno aprende tanto as linguagens de programação quanto os princípios de projeto de software, 
              testes, documentação, controle de versão, qualidade de código e metodologias ágeis.
            </p>
          </CardContent>
        </Card>

        <Card className="border-violet-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-6 w-6 text-violet-600" />
              Duração do Curso
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              A duração média é de <strong>4 a 5 anos</strong>, dependendo da instituição.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CourseSection;
