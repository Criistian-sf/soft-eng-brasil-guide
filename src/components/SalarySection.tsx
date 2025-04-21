
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUp, TrendingUp } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const SalarySection = () => {
  const brazilSalaries = [
    { level: 'Estagiário', salary: 'R$ 1.000 a R$ 2.000' },
    { level: 'Júnior', salary: 'R$ 3.000 a R$ 6.000' },
    { level: 'Pleno', salary: 'R$ 6.000 a R$ 10.000' },
    { level: 'Sênior', salary: 'R$ 10.000 a R$ 18.000' },
    { level: 'Especialista/Arquiteto', salary: 'R$ 15.000 a R$ 25.000' },
    { level: 'Tech Lead / Gerente', salary: 'R$ 18.000 a R$ 35.000' }
  ];

  const usSalaries = [
    { level: 'Júnior', salary: '$80.000 – $100.000' },
    { level: 'Pleno', salary: '$100.000 – $130.000' },
    { level: 'Sênior', salary: '$130.000 – $180.000' },
    { level: 'Eng. Staff / Arquiteto', salary: '$180.000 – $250.000' }
  ];

  const perspectives = [
    {
      title: "Alta demanda contínua",
      description: "A demanda por engenheiros de software deve crescer mais de 20% até 2030, segundo o U.S. Bureau of Labor Statistics. No Brasil, o setor de tecnologia cresce acima da média nacional, com déficit estimado de até 800 mil profissionais até 2025 (Fonte: Brasscom)."
    },
    {
      title: "Mercado globalizado",
      description: "Com o avanço do trabalho remoto, empresas estrangeiras estão contratando brasileiros com salários em dólar. Plataformas como Turing, Toptal, Remotely e Upwork aumentaram oportunidades internacionais."
    },
    {
      title: "Tecnologias emergentes",
      description: "Áreas como IA, cloud computing, blockchain, DevOps e segurança cibernética vão continuar crescendo e exigindo mais engenheiros de software especializados."
    },
    {
      title: "Valorização de profissionais com perfil híbrido",
      description: "Saber programar + conhecimento em negócios, gestão ágil ou ciência de dados é um diferencial competitivo enorme."
    }
  ];

  return (
    <section id="salarios" className="section-container bg-gray-50">
      <h2 className="section-title">Média Salarial e Perspectivas</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <img src="https://flagcdn.com/16x12/br.png" alt="Brasil" className="h-5" />
              Brasil (valores mensais brutos)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nível</TableHead>
                  <TableHead>Média Salarial</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {brazilSalaries.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.level}</TableCell>
                    <TableCell>{item.salary}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <p className="text-sm text-gray-500 mt-4">
              Fonte: Glassdoor, Vagas.com, Revelo, GeekHunter (2024)
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <img src="https://flagcdn.com/16x12/us.png" alt="EUA" className="h-5" />
              Estados Unidos (valores anuais em dólar)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-4">
              Obs: valores variam muito conforme o estado, empresa e experiência
            </p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nível</TableHead>
                  <TableHead>Média Salarial (USD/ano)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {usSalaries.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.level}</TableCell>
                    <TableCell>{item.salary}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      
      <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
        <TrendingUp className="h-8 w-8 text-tech-green" />
        Perspectivas para os próximos anos
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {perspectives.map((item, index) => (
          <Card key={index} className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SalarySection;
