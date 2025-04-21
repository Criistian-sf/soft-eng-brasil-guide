
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Laptop, Database, FileText, Book } from 'lucide-react';

const WhatTheyDo = () => {
  const activities = [
    {
      title: "Levantamento e Análise de Requisitos",
      icon: <FileText className="h-8 w-8 text-tech-blue" />,
      description: "Entende as necessidades dos usuários e do negócio. Realiza entrevistas com stakeholders e documenta os requisitos funcionais e não funcionais."
    },
    {
      title: "Arquitetura e Projeto de Software",
      icon: <Book className="h-8 w-8 text-tech-purple" />,
      description: "Define a estrutura do sistema: camadas, módulos, fluxos de dados e integrações. Escolhe as tecnologias e padrões de arquitetura."
    },
    {
      title: "Codificação e Implementação",
      icon: <Laptop className="h-8 w-8 text-tech-teal" />,
      description: "Escreve código-fonte em linguagens como Java, Python, C#, JavaScript. Utiliza frameworks e bibliotecas para acelerar o desenvolvimento."
    },
    {
      title: "Testes e Validação",
      icon: <Database className="h-8 w-8 text-tech-orange" />,
      description: "Cria testes automatizados (unitários, de integração, de regressão). Executa testes manuais e corrige bugs antes do sistema entrar em produção."
    }
  ];

  return (
    <section id="o-que-faz" className="section-container">
      <h2 className="section-title">O que faz um Engenheiro de Software?</h2>
      
      <div className="mb-10">
        <p className="text-lg text-center max-w-4xl mx-auto">
          Um profissional da Engenharia de Software atua na criação, desenvolvimento, manutenção e evolução de sistemas e aplicações computacionais. Sua função é aplicar princípios da engenharia para garantir que o software seja confiável, eficiente, seguro, escalável e atenda às necessidades dos usuários.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {activities.map((activity, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
              {activity.icon}
              <CardTitle className="text-xl">{activity.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{activity.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-6 w-6 text-tech-coral" />
              Deploy e Integração Contínua
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Utiliza pipelines de CI/CD (Continuous Integration / Continuous Deployment) com ferramentas como Jenkins, GitHub Actions, GitLab CI. Faz deploy do software em ambientes de nuvem (AWS, Azure, GCP) e automatiza atualizações e rollback em caso de falhas.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WhatTheyDo;
