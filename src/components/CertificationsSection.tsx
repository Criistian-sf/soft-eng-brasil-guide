
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = {
    programming: [
      {
        name: "Oracle Certified Professional: Java SE Programmer",
        description: "Para quem trabalha com Java em aplicações corporativas."
      },
      {
        name: "Microsoft Certified: Azure Developer Associate",
        description: "Foca em desenvolvimento de aplicações e serviços na nuvem Azure."
      },
      {
        name: "AWS Certified Developer – Associate",
        description: "Reconhece desenvolvedores que criam soluções escaláveis na AWS."
      },
      {
        name: "Google Professional Cloud Developer",
        description: "Para desenvolvedores que constroem e escalam sistemas na nuvem GCP."
      },
      {
        name: "Microsoft Certified: .NET Developer",
        description: "Para profissionais que atuam com C# e a plataforma .NET."
      }
    ],
    testing: [
      {
        name: "ISTQB – Certified Tester",
        description: "Certificação internacional para profissionais de teste de software."
      }
    ],
    devops: [
      {
        name: "AWS Certified DevOps Engineer",
        description: "Para profissionais que implementam práticas de CI/CD na AWS."
      },
      {
        name: "Azure DevOps Engineer Expert",
        description: "Para especialistas em DevOps na plataforma Azure."
      },
      {
        name: "Docker Certified Associate",
        description: "Valida conhecimentos em containerização com Docker."
      },
      {
        name: "Certified Kubernetes Application Developer (CKAD)",
        description: "Para desenvolvedores que trabalham com Kubernetes."
      }
    ],
    version: [
      {
        name: "GitLab Certified Associate",
        description: "Valida conhecimentos em GitLab CI/CD e repositórios."
      },
      {
        name: "Jenkins Certification",
        description: "Para profissionais que trabalham com Jenkins para CI/CD."
      }
    ]
  };

  const qualifications = [
    {
      title: "Formação Acadêmica",
      items: [
        "Curso superior em Engenharia de Software, Ciência da Computação, Sistemas de Informação ou áreas correlatas.",
        "Pós-graduações ou MBAs em áreas como Arquitetura de Software, Gestão de Projetos Ágeis, Cloud Computing ou Segurança da Informação."
      ]
    },
    {
      title: "Competências técnicas buscadas pelo mercado",
      items: [
        "Domínio de pelo menos uma linguagem de programação moderna (Java, Python, C#, etc.).",
        "Conhecimento em arquitetura de software e design patterns.",
        "Prática com Git, Docker, bancos de dados e REST APIs.",
        "Experiência com metodologias ágeis (Scrum, Kanban).",
        "Familiaridade com DevOps, CI/CD, cloud computing (AWS, Azure, GCP).",
        "Habilidades com testes automatizados e segurança de aplicações."
      ]
    }
  ];

  return (
    <section id="certificacoes" className="section-container">
      <h2 className="section-title">Certificações e Qualificações</h2>
      
      <h3 className="text-2xl font-bold mb-6 text-center">Certificações mais valorizadas pelo mercado</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <CertCard 
          title="Programação e Desenvolvimento" 
          items={certifications.programming} 
          className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200"
        />
        
        <CertCard 
          title="Qualidade de Software e Testes" 
          items={certifications.testing} 
          className="bg-gradient-to-br from-green-50 to-blue-50 border-green-200"
        />
        
        <CertCard 
          title="DevOps e Cloud" 
          items={certifications.devops} 
          className="bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200"
          featured={true}
        />
      </div>
      
      <h3 className="text-2xl font-bold mb-6 text-center">Qualificações mais valorizadas</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        {qualifications.map((qual, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <h4 className="text-xl font-bold mb-4 text-accent">{qual.title}</h4>
            <ul className="space-y-3">
              {qual.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

const CertCard = ({ 
  title, 
  items, 
  className,
  featured = false
}: { 
  title: string; 
  items: {name: string, description: string}[]; 
  className?: string;
  featured?: boolean;
}) => {
  return (
    <Card className={`relative ${className} ${featured ? 'border-2 border-accent' : ''}`}>
      {featured && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-white text-sm px-4 py-1 rounded-full">
          Muito valorizadas
        </div>
      )}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {featured ? 'Certificações altamente procuradas por empresas que adotam práticas modernas de desenvolvimento.' : ''}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {items.map((item, i) => (
            <li key={i} className="border-l-2 border-accent pl-4 py-1">
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gray-500">{item.description}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default CertificationsSection;
