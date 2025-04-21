
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Rocket } from 'lucide-react';

const CompaniesSection = () => {
  const brazilCompanies = [
    {
      name: "TOTVS",
      description: "Líder em software de gestão empresarial."
    },
    {
      name: "Banco Itaú / Bradesco / BTG Pactual",
      description: "Grandes áreas de tecnologia interna."
    },
    {
      name: "Nubank",
      description: "Banco digital com forte base tecnológica."
    },
    {
      name: "iFood",
      description: "Plataforma de delivery com grande equipe de engenharia."
    },
    {
      name: "Mercado Livre",
      description: "E-commerce com forte estrutura de desenvolvimento."
    },
    {
      name: "Globo / GloboPlay",
      description: "Streaming e tecnologia de mídia."
    },
    {
      name: "B2W / Americanas S.A.",
      description: "E-commerce com sistemas internos robustos."
    },
    {
      name: "Stone / C6 Bank / PicPay",
      description: "Fintechs com grande investimento em tecnologia."
    },
    {
      name: "Embraer / Petrobras / Vale",
      description: "Grandes indústrias com sistemas de TI próprios."
    },
    {
      name: "Startups em crescimento",
      description: "Como QuintoAndar, Gympass, Zup, Wildlife Studios, Loft."
    }
  ];

  const internationalCompanies = [
    "Google", "Amazon (AWS)", "Microsoft", "Apple", "Meta (Facebook, Instagram, WhatsApp)",
    "Netflix", "Spotify", "Tesla", "Adobe", "Salesforce", "Oracle", "IBM", "SAP"
  ];

  const remoteCompanies = [
    {
      name: "Toptal / Turing",
      description: "Conectam desenvolvedores com empresas do mundo todo."
    },
    {
      name: "Upwork / Freelancer",
      description: "Freelancing para clientes internacionais."
    },
    {
      name: "Remote OK / We Work Remotely",
      description: "Plataformas com vagas remotas."
    },
    {
      name: "GitLab / Automattic / Zapier",
      description: "Empresas que funcionam 100% remotamente."
    }
  ];

  return (
    <section id="empresas" className="section-container">
      <h2 className="section-title">Principais Empresas Contratantes</h2>
      
      <Tabs defaultValue="brazil" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="brazil">Brasil</TabsTrigger>
          <TabsTrigger value="international">Internacionais</TabsTrigger>
          <TabsTrigger value="remote">Remotas</TabsTrigger>
        </TabsList>
        
        <TabsContent value="brazil">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {brazilCompanies.map((company, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-tech-blue" />
                    {company.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{company.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="international">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-100">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Rocket className="h-5 w-5 text-tech-purple" />
              Gigantes Globais de Tecnologia
            </h3>
            <p className="mb-6 text-gray-600">
              Essas empresas têm grandes times de engenharia e contratam constantemente, inclusive talentos brasileiros.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {internationalCompanies.map((company, index) => (
                <div key={index} className="bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-200 text-center">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="remote">
          <div className="space-y-4">
            {remoteCompanies.map((company, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{company.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{company.description}</p>
                </CardContent>
              </Card>
            ))}
            
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mt-6">
              <h4 className="font-bold mb-2 text-amber-800">🚀 Dica Extra:</h4>
              <p className="text-amber-700">
                Empresas de setores não tecnológicos (educação, saúde, logística, varejo, governo) também contratam engenheiros de software para transformar seus processos digitalmente. Ex: Ambev Tech, Hospital Albert Einstein (TI), Governo Digital, Magazine Luiza (LuizaLabs), etc.
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default CompaniesSection;
