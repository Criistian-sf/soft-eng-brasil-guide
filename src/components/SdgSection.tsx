
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const SdgSection = () => {
  const contributions = [
    {
      title: "Digitalização de Processos Industriais",
      description: "Como contribui: Engenheiros de software desenvolvem sistemas para automatizar e otimizar linhas de produção, reduzindo custos, erros e desperdícios.",
      example: "A Embraer utiliza sistemas embarcados e soluções de software para otimizar a fabricação de aeronaves com alta precisão tecnológica.",
      colorClass: "bg-green-50 border-green-200"
    },
    {
      title: "Desenvolvimento de Infraestruturas Digitais",
      description: "Como contribui: Software é a base de infraestruturas digitais, como serviços em nuvem, plataformas de dados e redes inteligentes.",
      example: "O Governo Digital do Brasil usa sistemas integrados desenvolvidos por engenheiros de software para oferecer serviços públicos online, como o app gov.br.",
      colorClass: "bg-blue-50 border-blue-200"
    },
    {
      title: "Fomento à Inovação Tecnológica",
      description: "Como contribui: A engenharia de software impulsiona novas tecnologias como inteligência artificial, blockchain e internet das coisas (IoT).",
      example: "Startups como o Agrosmart usam software e IoT para fornecer soluções de agricultura inteligente, promovendo inovação sustentável no campo.",
      colorClass: "bg-purple-50 border-purple-200"
    },
    {
      title: "Apoio à Indústria 4.0",
      description: "Como contribui: Engenheiros de software criam sistemas integrados com big data, sensores e automação que transformam indústrias tradicionais em fábricas inteligentes.",
      example: "A Siemens desenvolve soluções de automação industrial baseadas em software para fábricas no mundo todo.",
      colorClass: "bg-orange-50 border-orange-200"
    },
    {
      title: "Escalabilidade de Infraestruturas Inteligentes",
      description: "Como contribui: Com software bem projetado, é possível escalar serviços de maneira eficiente, segura e sustentável.",
      example: "A plataforma de mobilidade urbana 99 (empresa brasileira) usa software e análise de dados para otimizar deslocamentos urbanos, reduzindo o tempo de trajeto e o consumo de combustível.",
      colorClass: "bg-indigo-50 border-indigo-200"
    },
    {
      title: "Sustentabilidade e Eficiência",
      description: "Como contribui: Softwares de monitoramento e gestão de recursos ajudam empresas a reduzir o consumo de energia e melhorar o uso de recursos naturais.",
      example: "Sistemas de monitoramento energético como os da Way2 Technology (Brasil) ajudam concessionárias a gerenciar a eficiência da distribuição elétrica.",
      colorClass: "bg-teal-50 border-teal-200"
    }
  ];

  return (
    <section id="ods" className="section-container">
      <div className="mb-8 text-center">
        <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-3">ODS 9</span>
        <h2 className="section-title">Indústria, Inovação e Infraestrutura</h2>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600">
            Como a Engenharia de Software contribui para o Objetivo de Desenvolvimento Sustentável 9 da ONU
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {contributions.map((item, index) => (
          <Card key={index} className={`${item.colorClass} border hover:shadow-md transition-shadow`}>
            <CardHeader>
              <CardTitle className="text-lg">{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-gray-700">
                <span className="font-bold">Exemplo real:</span> {item.example}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-blue-100 to-green-100 p-6 rounded-xl border border-blue-200 max-w-3xl mx-auto">
        <h3 className="text-xl font-bold mb-3 text-center">Conclusão</h3>
        <p className="text-center text-gray-700">
          A Engenharia de Software não é apenas uma área técnica – ela é uma ferramenta estratégica para o desenvolvimento sustentável e inovador de países e empresas. Ao aplicar soluções inteligentes e escaláveis, os engenheiros de software estão diretamente construindo o futuro da indústria e infraestrutura global — alinhados ao ODS 9.
        </p>
      </div>
    </section>
  );
};

export default SdgSection;
