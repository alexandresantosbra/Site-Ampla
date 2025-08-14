import React from 'react';
import { Award, Users, Clock, MapPin, Phone, Mail, Target, Eye, Heart } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '20+', label: 'Anos de Experiência', icon: <Clock size={24} /> },
    { number: '50k+', label: 'Clientes Satisfeitos', icon: <Users size={24} /> },
    { number: '1000+', label: 'Produtos Disponíveis', icon: <Award size={24} /> },
    { number: '24h', label: 'Atendimento Online', icon: <Phone size={24} /> }
  ];

  const values = [
    {
      icon: <Target size={32} />,
      title: 'Qualidade',
      description: 'Oferecemos apenas produtos de marcas reconhecidas e com certificação de qualidade.'
    },
    {
      icon: <Heart size={32} />,
      title: 'Compromisso',
      description: 'Nosso compromisso é com o sucesso da sua obra, oferecendo suporte completo.'
    },
    {
      icon: <Award size={32} />,
      title: 'Excelência',
      description: 'Buscamos sempre a excelência no atendimento e na entrega dos nossos produtos.'
    }
  ];

  const team = [
    {
      name: 'João Silva',
      role: 'Diretor Geral',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Mais de 25 anos de experiência no setor de construção civil.'
    },
    {
      name: 'Maria Santos',
      role: 'Gerente Comercial',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Especialista em relacionamento com clientes e desenvolvimento de negócios.'
    },
    {
      name: 'Carlos Oliveira',
      role: 'Supervisor Técnico',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Engenheiro civil com expertise em materiais de construção.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sobre a ConstruMax
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Há mais de 20 anos construindo sonhos e fornecendo materiais de qualidade para todo o Brasil
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Nossa História
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                Fale Conosco
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-blue-600">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Nossa História
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    A ConstruMax nasceu em 2003 com um sonho simples: fornecer materiais de construção 
                    de qualidade com preços justos e atendimento excepcional. Começamos como uma pequena 
                    loja familiar em São Paulo e hoje somos referência nacional no setor.
                  </p>
                  <p>
                    Ao longo dos anos, expandimos nossa linha de produtos, investimos em tecnologia e 
                    formamos parcerias estratégicas com as melhores marcas do mercado. Nossa missão 
                    sempre foi a mesma: ajudar nossos clientes a construir seus sonhos.
                  </p>
                  <p>
                    Hoje, atendemos milhares de clientes em todo o Brasil, desde pequenos reparos 
                    domésticos até grandes obras comerciais e industriais. Nossa experiência e 
                    conhecimento técnico nos permitem oferecer as melhores soluções para cada projeto.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Nossa história"
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold">2003</div>
                  <div className="text-sm">Fundação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Missão, Visão e Valores
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Nossos princípios fundamentais que guiam todas as nossas decisões e ações
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Missão</h3>
                <p className="text-gray-600">
                  Fornecer materiais de construção de qualidade superior com atendimento 
                  excepcional, contribuindo para o sucesso dos projetos dos nossos clientes.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Visão</h3>
                <p className="text-gray-600">
                  Ser a empresa líder em distribuição de materiais de construção no Brasil, 
                  reconhecida pela excelência e inovação.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Valores</h3>
                <p className="text-gray-600">
                  Integridade, qualidade, compromisso com o cliente, inovação e 
                  responsabilidade social e ambiental.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-blue-600 mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Nossa Equipe
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Profissionais experientes e dedicados, prontos para atender suas necessidades
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Entre em Contato
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Estamos prontos para ajudar você em seu próximo projeto
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mb-4">
                  <Phone size={24} />
                </div>
                <h3 className="font-semibold mb-2">Telefone</h3>
                <p className="text-blue-100">(91) 980259828</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mb-4">
                  <Mail size={24} />
                </div>
                <h3 className="font-semibold mb-2">E-mail</h3>
                <p className="text-blue-100">marajocimentos@gmail.com</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="font-semibold mb-2">Localização</h3>
                <p className="text-blue-100">São Paulo, SP</p>
              </div>
            </div>

            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Fale Conosco Agora
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;