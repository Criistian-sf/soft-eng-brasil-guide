
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const TechnologiesSection = () => {
  return (
    <section id="tecnologias" className="section-container bg-gray-50">
      <h2 className="section-title">Tecnologias, Linguagens e Ferramentas</h2>
      
      <Tabs defaultValue="languages" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full mb-8">
          <TabsTrigger value="languages">Linguagens</TabsTrigger>
          <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
          <TabsTrigger value="databases">Bancos de Dados</TabsTrigger>
          <TabsTrigger value="devops">DevOps/Cloud</TabsTrigger>
          <TabsTrigger value="version">Versionamento</TabsTrigger>
          <TabsTrigger value="tools">Ferramentas</TabsTrigger>
        </TabsList>
        
        <TabsContent value="languages">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <TechCard title="Java" description="Utilizado em aplicações corporativas, Android e sistemas bancários." color="bg-tech-orange" />
            <TechCard title="Python" description="Popular por sua simplicidade, usada em back-end, automação e ciência de dados." color="bg-tech-blue" />
            <TechCard title="C#" description="Utilizado principalmente em aplicações Windows e jogos (Unity)." color="bg-tech-purple" />
            <TechCard title="JavaScript / TypeScript" description="Usado para desenvolvimento web, tanto front-end quanto back-end (Node.js)." color="bg-tech-teal" />
            <TechCard title="C++" description="Usado em sistemas embarcados, jogos e aplicações de alto desempenho." color="bg-tech-coral" />
            <TechCard title="Go (Golang)" description="Excelente para aplicações de rede e sistemas distribuídos." color="bg-tech-green" />
          </div>
        </TabsContent>
        
        <TabsContent value="frameworks">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TechCard title="Spring Boot (Java)" description="Para desenvolvimento rápido de APIs REST e microsserviços." color="bg-tech-green" />
            <TechCard title=".NET / ASP.NET (C#)" description="Usado para aplicações corporativas e web." color="bg-tech-purple" />
            <TechCard title="Django / Flask (Python)" description="Frameworks web para construir APIs e sites rápidos." color="bg-tech-blue" />
            <TechCard title="Node.js + Express (JavaScript)" description="Back-end leve e escalável." color="bg-tech-teal" />
            <TechCard title="React / Angular / Vue (JavaScript)" description="Front-end moderno e dinâmico." color="bg-tech-coral" />
          </div>
        </TabsContent>
        
        <TabsContent value="databases">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <TechCard title="MySQL / PostgreSQL" description="Banco de dados relacionais, muito usados em aplicações corporativas." color="bg-tech-blue" />
            <TechCard title="MongoDB / Redis" description="Banco de dados NoSQL, ideal para performance e escalabilidade." color="bg-tech-green" />
            <TechCard title="SQLite" description="Banco leve para aplicações locais ou testes." color="bg-tech-purple" />
          </div>
        </TabsContent>
        
        <TabsContent value="devops">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TechCard title="Docker" description="Contêineres que empacotam aplicações para rodar em qualquer ambiente." color="bg-tech-blue" />
            <TechCard title="Kubernetes" description="Orquestração de contêineres em larga escala." color="bg-tech-blue" />
            <TechCard title="GitHub Actions / GitLab CI / Jenkins" description="Integração e entrega contínua (CI/CD)." color="bg-tech-purple" />
            <TechCard title="AWS / Azure / Google Cloud" description="Plataformas de computação em nuvem." color="bg-tech-orange" />
          </div>
        </TabsContent>
        
        <TabsContent value="version">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TechCard title="Git" description="Principal sistema de versionamento de código." color="bg-tech-orange" />
            <TechCard title="GitHub / GitLab / Bitbucket" description="Plataformas de hospedagem de repositórios e colaboração." color="bg-tech-purple" />
          </div>
        </TabsContent>
        
        <TabsContent value="tools">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TechCard title="VS Code / IntelliJ IDEA / Eclipse / Visual Studio" description="IDEs modernas para programação." color="bg-tech-blue" />
            <TechCard title="Postman / Insomnia" description="Teste de APIs REST." color="bg-tech-purple" />
            <TechCard title="Swagger / OpenAPI" description="Documentação automática de APIs." color="bg-tech-green" />
            <TechCard title="Jira / Trello" description="Gerenciamento de tarefas em metodologias ágeis." color="bg-tech-coral" />
            <TechCard title="JUnit / NUnit / PyTest" description="Frameworks de teste unitário." color="bg-tech-teal" />
            <TechCard title="Selenium / Cypress" description="Testes automatizados de interface (UI)." color="bg-tech-blue" />
            <TechCard title="SonarQube" description="Análise de qualidade e segurança do código." color="bg-tech-orange" />
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

const TechCard = ({ title, description, color }: { title: string; description: string; color: string }) => {
  return (
    <Card className="tech-card">
      <CardHeader className="pb-2">
        <div className={`w-12 h-1 ${color} mb-2 rounded-full`}></div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default TechnologiesSection;
