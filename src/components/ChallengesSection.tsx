
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Server, ArrowUp, ArrowDown } from 'lucide-react';

const ChallengesSection = () => {
  const challenges = [
    {
      title: "Atualização constante",
      description: "Novas linguagens, frameworks e ferramentas surgem o tempo todo. O engenheiro precisa aprender continuamente para não ficar defasado.",
      icon: <Server className="h-8 w-8 text-red-500" />
    },
    {
      title: "Pressão por prazos e entregas",
      description: "Projetos com deadlines apertados são comuns. Requer boa gestão do tempo e priorização de tarefas.",
      icon: <ArrowDown className="h-8 w-8 text-amber-500" />
    },
    {
      title: "Complexidade crescente dos sistemas",
      description: "Soluções atuais envolvem integração com APIs, microsserviços, cloud, segurança, testes, performance... A complexidade exige habilidades técnicas e arquitetônicas sólidas.",
      icon: <Server className="h-8 w-8 text-red-500" />
    },
    {
      title: "Trabalho em equipe e comunicação",
      description: "A colaboração com times multidisciplinares (design, produto, negócios) é essencial. Comunicar ideias técnicas para pessoas não técnicas pode ser desafiador.",
      icon: <ArrowDown className="h-8 w-8 text-amber-500" />
    },
    {
      title: "Manutenção de código legado",
      description: "Muitas empresas ainda usam sistemas antigos com tecnologias desatualizadas. Trabalhar com código legado exige paciência, refatoração e cuidado.",
      icon: <Server className="h-8 w-8 text-red-500" />
    }
  ];

  const opportunities = [
    {
      title: "Alta demanda no mercado",
      description: "Faltam profissionais qualificados. Empresas disputam talentos, oferecendo bons salários e benefícios.",
      icon: <ArrowUp className="h-8 w-8 text-green-500" />
    },
    {
      title: "Trabalho remoto e internacional",
      description: "A área de software permite trabalho remoto full-time, inclusive para empresas do exterior. Salários em dólar ou euro são realidade para muitos devs brasileiros.",
      icon: <ArrowUp className="h-8 w-8 text-green-500" />
    },
    {
      title: "Crescimento acelerado na carreira",
      description: "Com 2–3 anos de experiência, já é possível assumir posições de liderança técnica. O profissional pode evoluir para Tech Lead, Arquiteto, CTO ou abrir sua startup.",
      icon: <ArrowUp className="h-8 w-8 text-green-500" />
    },
    {
      title: "Inovação e impacto real",
      description: "Engenharia de software está por trás de soluções que mudam o mundo: apps de saúde, bancos digitais, IA, educação acessível, automação industrial... Cada linha de código pode gerar valor real para milhares de pessoas.",
      icon: <ArrowUp className="h-8 w-8 text-green-500" />
    },
    {
      title: "Diversidade de áreas e especializações",
      description: "O profissional pode atuar em áreas como: Back-End / Front-End / Full Stack, Mobile, Cloud, DevOps, Segurança, Inteligência Artificial, Realidade aumentada / jogos / IoT.",
      icon: <ArrowUp className="h-8 w-8 text-green-500" />
    }
  ];

  const skills = [
    "Lógica de programação e raciocínio lógico.",
    "Comunicação eficaz, especialmente em times multidisciplinares.",
    "Trabalho em equipe e colaboração.",
    "Capacidade de aprender rapidamente novas tecnologias.",
    "Mentalidade de produto, ou seja, pensar nas necessidades do usuário final."
  ];

  return (
    <section id="desafios" className="section-container bg-gray-50">
      <h2 className="section-title">Desafios e Oportunidades</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center text-red-600 flex items-center justify-center gap-2">
            <ArrowDown className="h-6 w-6" />
            Desafios da Profissão
            <ArrowDown className="h-6 w-6" />
          </h3>
          
          <div className="space-y-4">
            {challenges.map((challenge, index) => (
              <Card key={index} className="hover:-translate-y-1 transition-transform">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    {challenge.icon}
                    {challenge.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{challenge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center text-green-600 flex items-center justify-center gap-2">
            <ArrowUp className="h-6 w-6" />
            Oportunidades da Profissão
            <ArrowUp className="h-6 w-6" />
          </h3>
          
          <div className="space-y-4">
            {opportunities.map((opportunity, index) => (
              <Card key={index} className="hover:-translate-y-1 transition-transform">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    {opportunity.icon}
                    {opportunity.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{opportunity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md max-w-3xl mx-auto">
        <h3 className="text-xl font-bold mb-4 text-center">Outras Habilidades Importantes</h3>
        <p className="mb-4 text-center text-gray-600">
          Além do domínio técnico, engenheiros de software precisam de:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {skills.map((skill, index) => (
            <li key={index} className="bg-blue-50 p-3 rounded-lg flex items-center gap-2 border border-blue-100">
              <div className="h-2 w-2 rounded-full bg-tech-blue"></div>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ChallengesSection;
