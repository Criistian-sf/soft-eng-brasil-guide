
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Youtube, ExternalLink, MessageSquare, BookOpen } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Fred Maia Arantes",
      role: "Desenvolvedor de Software",
      quote: "Outra coisa que posso acrescentar que me ajudou na minha carreira, foi ser mais ativo nas empresas, dar minha opinião nos momentos de tomada de decisão e não apenas esperar que decidam tudo por mim. E claro, melhoria contínua com cursos e estudos que sempre fiz por conta própria.",
      source: "Dev.to – Fred Maia Arantes",
      sourceLink: "https://dev.to/fredmaiaarantes/meus-salarios-no-brasil-e-como-foi-a-evolucao-da-minha-carreira-2i19",
      icon: <FileText className="h-5 w-5 text-violet-600" />
    },
    {
      name: "Bruno",
      role: "Desenvolvedor de Software Especializado em JavaScript",
      quote: "Bruno é desenvolvedor de software especializado em JavaScript e seu ecossistema. Atualmente vive em Orlando/FL, trabalha remoto na Mapped, uma empresa de tecnologia.",
      source: "YouTube – Entrevista com Engenheiro de Software",
      sourceLink: "https://www.youtube.com/watch?v=-SOGmtiR-pk",
      icon: <Youtube className="h-5 w-5 text-violet-600" />
    },
    {
      name: "Leonardo Gonçalves Pinheiro",
      role: "Engenheiro de Software",
      quote: "Leonardo Gonçalves Pinheiro é um brasileiro reconhecido pelo seu trabalho como Engenheiro de Software. Natural de Almenara/MG, iniciou sua trajetória educacional no Instituto Federal Norte de Minas Gerais (IFNMG), onde cursou o Ensino Médio e teve seu primeiro contato profundo com a tecnologia.",
      source: "Wikipedia – Leonardo Gonçalves Pinheiro",
      sourceLink: "https://pt.wikipedia.org/wiki/Leonardo_Gon%C3%A7alves_Pinheiro",
      icon: <BookOpen className="h-5 w-5 text-violet-600" />
    },
    {
      name: "Joaquim Sintra de Olívares",
      role: "Engenheiro de Software",
      quote: "Joaquim Sintra de Olívares é um engenheiro de software brasileiro. Conhecido por sua atuação no desenvolvimento de plataformas educacionais acessíveis, ele se destacou na criação de soluções voltadas para a inclusão digital e aprendizado online.",
      source: "Wikipedia – Joaquim Sintra de Olívares",
      sourceLink: "https://pt.wikipedia.org/wiki/Joaquim_Sintra_de_Ol%C3%ADvares",
      icon: <BookOpen className="h-5 w-5 text-violet-600" />
    }
  ];

  return (
    <section className="section-container bg-gradient-to-br from-violet-50 to-indigo-50">
      <h2 className="section-title">Depoimentos Profissionais</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="border-violet-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <span className="text-2xl">👨‍💻</span>
                {testimonial.name}
              </CardTitle>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
            </CardHeader>
            <CardContent>
              <blockquote className="text-gray-700 mb-4">
                "{testimonial.quote}"
              </blockquote>
              <a
                href={testimonial.sourceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-violet-600 hover:text-violet-700"
              >
                {testimonial.icon}
                {testimonial.source}
              </a>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="max-w-4xl mx-auto">
        <Card className="border-violet-200 mb-8">
          <CardHeader>
            <CardTitle>Projeto de Graduação</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Este site foi desenvolvido como parte de um projeto de graduação do curso de Ciência 
              da Computação da <strong>Faculdade UNIG</strong>, inserido no contexto do 
              <strong> Tema Integrador</strong>. O objetivo principal desse projeto foi aplicar os 
              conhecimentos adquiridos ao longo do curso em uma solução prática, que envolvesse 
              diferentes áreas da Engenharia de Software.
            </p>
          </CardContent>
        </Card>

        <Card className="border-violet-200">
          <CardHeader>
            <CardTitle>O que Aprendi na Criação deste Site</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              A construção deste site foi uma experiência de aprendizado significativa, onde pude 
              integrar conceitos teóricos e práticos de diversas disciplinas. Durante o desenvolvimento, 
              tive a oportunidade de aprofundar meus conhecimentos em <strong>arquitetura de software</strong>, 
              <strong> front-end</strong>, <strong>back-end</strong> e <strong>usabilidade</strong>.
            </p>
            <p className="text-gray-700 mb-4">
              Além disso, trabalhei com tecnologias modernas e ferramentas utilizadas no mercado, 
              como <strong>HTML</strong>, <strong>CSS</strong>, <strong>Lovable</strong> e frameworks 
              específicos, desenvolvendo habilidades essenciais para a criação de sistemas web.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://github.com/Criistian-sf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-violet-600 hover:text-violet-700"
              >
                <ExternalLink className="h-5 w-5" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/cristian-silva-04b64a1a1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-violet-600 hover:text-violet-700"
              >
                <ExternalLink className="h-5 w-5" />
                LinkedIn
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TestimonialsSection;
